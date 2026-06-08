export function sitePath(href: string, base = import.meta.env.BASE_URL) {
  if (/^(https?:|mailto:|tel:|#)/.test(href)) return href;
  const basePath = base.endsWith('/') ? base : `${base}/`;
  const path = href.startsWith('/') ? href.slice(1) : href;
  return `${basePath}${path}`;
}

export function assetPath(path: string) {
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
