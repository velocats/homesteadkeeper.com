#!/usr/bin/env bash

set -e

# ------------------------------------------------------------
# git-submit.sh
# Builds the site, commits changes, and pushes to GitHub.
#
# Usage:
#   ./git-submit.sh
#   ./git-submit.sh "Your commit message"
# ------------------------------------------------------------

DEFAULT_COMMIT_MESSAGE="Update Homestead Keeper website"
COMMIT_MESSAGE="${1:-$DEFAULT_COMMIT_MESSAGE}"

echo "📁 Repo:"
pwd
echo

# Make sure we are inside a git repo
if ! git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
  echo "❌ Error: This directory is not a Git repository."
  exit 1
fi

# Make sure npm is available
if ! command -v npm >/dev/null 2>&1; then
  echo "❌ Error: npm is not installed or not in your PATH."
  exit 1
fi

echo "🔎 Checking current branch..."
CURRENT_BRANCH="$(git branch --show-current)"

if [ -z "$CURRENT_BRANCH" ]; then
  echo "❌ Error: Could not determine current Git branch."
  exit 1
fi

echo "Current branch: $CURRENT_BRANCH"
echo

echo "🧪 Running production build..."
npm run build
echo "✅ Build succeeded."
echo

echo "📋 Git status:"
git status --short
echo

# Check if there is anything to commit
if git diff --quiet && git diff --cached --quiet && [ -z "$(git ls-files --others --exclude-standard)" ]; then
  echo "✅ No changes to commit."
  echo "🚀 Nothing to push."
  exit 0
fi

echo "➕ Adding changes..."
git add .

echo "📝 Committing changes..."
git commit -m "$COMMIT_MESSAGE"

echo "🚀 Pushing to GitHub..."
git push -u origin "$CURRENT_BRANCH"

echo
echo "✅ Done. Changes pushed to GitHub."
