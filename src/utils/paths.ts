export function sitePath(href: string, base = import.meta.env.BASE_URL) {
  if (/^(https?:|mailto:|tel:|#)/.test(href)) {
    return href;
  }

  const basePath = base.endsWith('/') ? base : `${base}/`;
  const path = href.startsWith('/') ? href.slice(1) : href;

  return `${basePath}${path}`;
}
