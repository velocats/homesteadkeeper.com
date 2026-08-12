import { site } from './site';

export const breadcrumbLabels: Record<string, string> = {
  about: 'About',
  faq: 'FAQ',
  features: 'Features',
  macos: 'Mac App',
  planner: 'Free Planner',
  playbook: 'Playbook',
  pricing: 'Pricing',
  privacy: 'Privacy',
  support: 'Support',
  thanks: 'Thanks',
  tutorials: 'Tutorials',
  workflows: 'Workflows',
  'use-cases': 'Use Cases',
  'chicken-keepers': 'Chicken Keepers',
  'chicken-egg-tracker': 'Egg Tracker',
  gardeners: 'Gardeners',
  'garden-harvest-tracker': 'Harvest Tracker',
  'hobby-farms': 'Hobby Farms',
  'homestead-maintenance-app': 'Maintenance',
  'homestead-management-app': 'Homestead Management',
  'homestead-task-tracker': 'Task Tracker',
  'rural-property-owners': 'Rural Property Owners',
  'pantry-inventory': 'Pantry Inventory',
  animals: 'Animals',
  garden: 'Garden',
  inventory: 'Inventory',
  reports: 'Reports',
  reminders: 'Reminders',
  'qr-codes': 'QR Codes',
  supplies: 'Supplies',
  'adding-items-to-hubs': 'Adding Items to Hubs',
  'garden-layout-plantings': 'Garden Layout and Plantings',
  'orchard-layout-plantings': 'Orchard Layout and Plantings',
  'animal-breeding': 'Animal Breeding',
  'checklists-for-items': 'Checklists for Items',
  'map-usage': 'Map Usage',
  'reports-demonstration': 'Reports Demonstration',
  'calendar-demonstration': 'Calendar Demonstration',
  'today-screen-review': 'Today Screen Review',
  'animal-production': 'Animal Production',
  'plant-harvests': 'Plant Harvests',
  'import-excel-csv': 'Import Excel or CSV',
};

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export function getBreadcrumbs(path: string): BreadcrumbItem[] {
  const normalizedPath = path === '/' || path.endsWith('/') ? path : `${path}/`;
  const segments = normalizedPath.split('/').filter(Boolean);

  if (segments.length === 0) return [];

  return [
    { label: 'Home', href: '/' },
    ...segments.map((segment, index) => ({
      label: breadcrumbLabels[segment] ?? segment.replaceAll('-', ' '),
      href: `/${segments.slice(0, index + 1).join('/')}/`,
    })),
  ];
}

export function getBreadcrumbJsonLd(path: string) {
  const items = getBreadcrumbs(path);
  if (items.length === 0) return undefined;

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: new URL(item.href, site.url).toString(),
    })),
  };
}
