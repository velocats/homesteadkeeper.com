import { site } from './site';

export const breadcrumbLabels: Record<string, string> = {
  about: 'About',
  faq: 'FAQ',
  features: 'Features',
  guides: 'Guides',
  equipment: 'Equipment',
  bees: 'Bees',
  'food-preservation': 'Food Preservation',
  'what-records-to-keep-for-chickens': 'Chicken Records',
  'equipment-maintenance-records': 'Equipment Maintenance Records',
  'homestead-maintenance-checklist': 'Homestead Maintenance Checklist',
  'livestock-health-and-treatment-records': 'Livestock Health Records',
  'what-records-to-keep-for-a-vegetable-garden': 'Vegetable Garden Records',
  'organizing-food-preservation-and-canning-records': 'Food Preservation Records',
  'what-belongs-in-a-homestead-handoff-binder': 'Handoff Binder',
  'tracking-homestead-expenses-without-accounting-software': 'Homestead Expenses',
  'property-and-infrastructure-maintenance-records': 'Property Maintenance Records',
  'moving-homestead-records-off-spreadsheets': 'Off Spreadsheets',
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
  gardeners: 'Gardeners',
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
