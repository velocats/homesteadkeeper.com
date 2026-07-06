#!/usr/bin/env bash
set -euo pipefail

APP_NAME="Homestead Keeper"
BUNDLE_ID=""
YES=0
DRY_RUN=0
DELETE_DERIVED_DATA=0
DELETE_KEYCHAIN=0

usage() {
  cat <<'USAGE'
Reset a macOS Xcode-installed Homestead Keeper build so it behaves like a fresh install.

Usage:
  scripts/reset-homesteadkeeper-macos.sh [options]

Options:
  --bundle-id ID          Use a specific bundle id, for example com.example.HomesteadKeeper
  --yes                  Skip confirmation prompts
  --dry-run              Show what would be removed without deleting anything
  --derived-data         Also remove all Xcode DerivedData
  --keychain             Also search/delete matching Keychain generic-password items
  -h, --help             Show this help

Notes:
  This removes local app data only. If iCloud/CloudKit sync is enabled, data may come back
  from iCloud after the app launches again.
USAGE
}

while [[ $# -gt 0 ]]; do
  case "$1" in
    --bundle-id)
      BUNDLE_ID="${2:-}"
      shift 2
      ;;
    --yes)
      YES=1
      shift
      ;;
    --dry-run)
      DRY_RUN=1
      shift
      ;;
    --derived-data)
      DELETE_DERIVED_DATA=1
      shift
      ;;
    --keychain)
      DELETE_KEYCHAIN=1
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown option: $1" >&2
      usage
      exit 1
      ;;
  esac
done

detect_bundle_id() {
  local detected=""

  detected="$(osascript -e "id of app \"$APP_NAME\"" 2>/dev/null || true)"
  if [[ -n "$detected" ]]; then
    printf '%s\n' "$detected"
    return 0
  fi

  for app_path in \
    "/Applications/$APP_NAME.app" \
    "$HOME/Applications/$APP_NAME.app"
  do
    if [[ -d "$app_path" ]]; then
      detected="$(mdls -raw -name kMDItemCFBundleIdentifier "$app_path" 2>/dev/null || true)"
      if [[ -n "$detected" && "$detected" != "(null)" ]]; then
        printf '%s\n' "$detected"
        return 0
      fi
    fi
  done

  return 1
}

if [[ -z "$BUNDLE_ID" ]]; then
  BUNDLE_ID="$(detect_bundle_id || true)"
fi

if [[ -z "$BUNDLE_ID" ]]; then
  cat >&2 <<'ERROR'
Could not auto-detect the Homestead Keeper bundle id.

Run this to find it if the app is installed:
  osascript -e 'id of app "Homestead Keeper"'

Then rerun this script with:
  scripts/reset-homesteadkeeper-macos.sh --bundle-id YOUR.BUNDLE.ID
ERROR
  exit 1
fi

echo "Homestead Keeper reset"
echo "App name:  $APP_NAME"
echo "Bundle ID: $BUNDLE_ID"
echo

paths=(
  "$HOME/Library/Containers/$BUNDLE_ID"
  "$HOME/Library/Application Support/$APP_NAME"
  "$HOME/Library/Application Support/.HomesteadKeeperCloud_SUPPORT"
  "$HOME/Library/Application Support/HomesteadKeeperCloud.store"
  "$HOME/Library/Application Support/HomesteadKeeperCloud.store-shm"
  "$HOME/Library/Application Support/HomesteadKeeperCloud.store-wal"
  "$HOME/Library/Application Support/HomesteadKeeperCloud_ckAssets"
  "$HOME/Library/Preferences/$BUNDLE_ID.plist"
  "$HOME/Library/Saved Application State/$BUNDLE_ID.savedState"
  "$HOME/Library/Saved Application State/$BUNDLE_ID~iosmac.savedState"
  "$HOME/Library/Caches/$BUNDLE_ID"
  "$HOME/Library/Caches/CloudKit/$BUNDLE_ID"
  "$HOME/Library/HTTPStorages/$BUNDLE_ID"
  "$HOME/Library/WebKit/$BUNDLE_ID"
  "/Applications/$APP_NAME.app"
  "$HOME/Applications/$APP_NAME.app"
  "$HOME/Library/Developer/Xcode/Products/$BUNDLE_ID"
)

group_matches=()
while IFS= read -r group_path; do
  [[ -n "$group_path" ]] && group_matches+=("$group_path")
done < <(
  find "$HOME/Library/Group Containers" -maxdepth 1 -type d \
    \( -iname "*homestead*" -o -iname "*keeper*" -o -iname "*${BUNDLE_ID}*" \) \
    2>/dev/null || true
)

if [[ ${#group_matches[@]} -gt 0 ]]; then
  paths+=("${group_matches[@]}")
fi

catalyst_container_matches=()
while IFS= read -r marker_path; do
  [[ -n "$marker_path" ]] && catalyst_container_matches+=("${marker_path%/Data/Library/Application Scripts/$BUNDLE_ID}")
done < <(
  find "$HOME/Library/Containers" -maxdepth 5 -path "*/Data/Library/Application Scripts/$BUNDLE_ID" -print \
    2>/dev/null || true
)

if [[ ${#catalyst_container_matches[@]} -gt 0 ]]; then
  paths+=("${catalyst_container_matches[@]}")
fi

cloudkit_cache_matches=()
while IFS= read -r cache_path; do
  [[ -n "$cache_path" ]] && cloudkit_cache_matches+=("$cache_path")
done < <(
  find "$HOME/Library/Caches/CloudKit" -maxdepth 2 \
    \( -iname "*$BUNDLE_ID*" -o -iname "*homestead*" -o -iname "*quiettools*" \) -print \
    2>/dev/null || true
)

if [[ ${#cloudkit_cache_matches[@]} -gt 0 ]]; then
  paths+=("${cloudkit_cache_matches[@]}")
fi

if [[ "$DELETE_DERIVED_DATA" -eq 1 ]]; then
  paths+=("$HOME/Library/Developer/Xcode/DerivedData")
fi

echo "This will remove these local files/folders if they exist:"
for path in "${paths[@]}"; do
  echo "  $path"
done

if [[ "$DELETE_KEYCHAIN" -eq 1 ]]; then
  echo
  echo "This will also try to delete matching Keychain generic-password items for:"
  echo "  $APP_NAME"
  echo "  $BUNDLE_ID"
fi

echo
echo "Important: if iCloud sync is enabled, records may return from iCloud after relaunch."

if [[ "$YES" -ne 1 ]]; then
  echo
  read -r -p "Type RESET to continue: " answer
  if [[ "$answer" != "RESET" ]]; then
    echo "Cancelled."
    exit 0
  fi
fi

run_or_print() {
  if [[ "$DRY_RUN" -eq 1 ]]; then
    printf '[dry-run]'
    printf ' %q' "$@"
    echo
  else
    "$@"
  fi
}

echo
echo "Quitting $APP_NAME if it is running..."
run_or_print killall "$APP_NAME" 2>/dev/null || true

echo "Removing local app files..."
for path in "${paths[@]}"; do
  if [[ -e "$path" || -L "$path" ]]; then
    echo "  Removing: $path"
    run_or_print rm -rf "$path"
  else
    echo "  Not found: $path"
  fi
done

if [[ "$DELETE_KEYCHAIN" -eq 1 ]]; then
  echo "Removing matching Keychain generic-password items..."
  if [[ "$DRY_RUN" -eq 1 ]]; then
    echo "[dry-run] security delete-generic-password -s \"$APP_NAME\""
    echo "[dry-run] security delete-generic-password -s \"$BUNDLE_ID\""
  else
    security delete-generic-password -s "$APP_NAME" 2>/dev/null || true
    security delete-generic-password -s "$BUNDLE_ID" 2>/dev/null || true
  fi
fi

echo
if [[ "$DRY_RUN" -eq 1 ]]; then
  echo "Dry run complete. Nothing was deleted."
else
  echo "Reset complete. Rebuild/run Homestead Keeper from Xcode to test first-run onboarding."
fi
