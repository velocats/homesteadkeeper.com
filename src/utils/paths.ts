export function sitePath(href: string, base = import.meta.env.BASE_URL) {
  if (/^(https?:|mailto:|tel:|#)/.test(href)) return href;
  const basePath = base.endsWith('/') ? base : `${base}/`;
  const cleanHref = href.startsWith('/') ? href.slice(1) : href;
  const [path, hash = ''] = cleanHref.split('#');
  const hasFileExtension = /\/?[^/]+\.[^/]+$/.test(path);
  const isAssetPath = /^(assets|_astro)\//.test(path);
  const normalizedPath =
    path === '' || hasFileExtension || isAssetPath || path.endsWith('/')
      ? path
      : `${path}/`;
  return `${basePath}${normalizedPath}${hash ? `#${hash}` : ''}`;
}

export function assetPath(path: string) {
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${cleanPath}`;
}
