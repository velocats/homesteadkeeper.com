export const site = {
  name: 'Homestead Keeper',
  tagline: 'Whole-homestead records on your Apple devices.',
  url: 'https://homesteadkeeper.com',
  supportEmail: 'support@homesteadkeeper.com',
  appStoreLabel: 'Download on the App Store',
  appStoreUrl: '/#app-store-coming-soon',
  description:
    'A calm homestead management app for animals, gardens, garden bed layouts, orchards, bees, equipment, inventory, food and pantry records, reminders, reports, and rural property care on iPhone, iPad, and Mac.',
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/features/macos', label: 'Mac' },
  { href: '/workflows', label: 'Workflows' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/support', label: 'Support' },
];

export const trustPoints = [
  ['No login', 'Start using Homestead Keeper without creating a Homestead Keeper web account.'],
  ['Data on your devices', 'Your working records live on your Apple devices, not inside a web dashboard you have to manage.'],
  ['iCloud sync', 'Keep records in sync across iPhone, iPad, and Mac using your Apple ID and iCloud when enabled.'],
  ['Works offline', 'Record work in the garden, barn, shop, or field and let sync catch up later.'],
] as const;

export const managementAreas = [
  ['Garden Beds & Crops', 'Plan beds and plots, map crop placement, track planting dates, pest notes, watering, harvests, and seasonal garden records.'],
  ['Animals', 'Care reminders, health notes, egg counts, breeding, pedigree, production, weights, photos, and records for chickens, goats, rabbits, cattle, guardian animals, and more.'],
  ['Calendar', 'See overdue work, day/week/month views, harvest windows, animal care, planting dates, service reminders, and seasonal chores in one place.'],
  ['Equipment & Workshop', 'Log repairs, maintenance, fuel, parts, manuals, service history, warranty notes, and tool records.'],
  ['Property, Fences & Water', 'Keep records for gates, fences, wells, pumps, irrigation, buildings, roads, storm damage, and property repairs.'],
  ['Inventory', 'Track feed, medicine, seeds, fuel, filters, bedding, pantry goods, canning supplies, spare parts, and emergency supplies.'],
  ['Food & Pantry', 'Track canned goods, freezer food, dehydrated food, fermented batches, pantry items, root cellar storage, and stored harvests.'],
  ['Orchard', 'Track fruit trees, berries, vines, pruning, sprays, harvests, seasonal timing, and long-term perennial care.'],
  ['Bees & Hives', 'Record hive inspections, queen notes, feeding, treatments, splits, swarms, honey harvests, and equipment.'],
  ['Off-grid Systems', 'Track solar, batteries, generators, propane, water storage, backup power, filters, and seasonal checks.'],
  ['Forestry', 'Track tree work, fire mitigation, wood lots, brush clearing, storm cleanup, and property access tasks.'],
  ['Emergency Prep', 'Track stored water, food, first aid, generator readiness, batteries, documents, and expiration dates.'],
  ['Places', 'Organize work by coops, barns, gardens, sheds, pastures, apiaries, pump houses, pantries, and other real locations.'],
  ['Reports & Exports', 'Review homestead summaries, cost summaries, logbooks, animal care, production, inventory, maintenance, and handoff reports.'],
] as const;

export const coreFeatures = [
  ['Homestead dashboard', 'See what needs attention today: overdue work, upcoming reminders, field logs, and the records you use most.'],
  ['Places and items', 'Name your homestead, add real places, and attach records to the animals, beds, tools, systems, and spaces you manage.'],
  ['Field Log', 'Capture egg counts, feed, watering, treatments, inspections, harvests, repairs, inventory changes, and notes while the work is fresh.'],
  ['Reminders', 'Create one-time, recurring, and seasonal reminders for chores, animal care, maintenance, planting, and inspection work.'],
  ['Production tracking', 'Track eggs, harvests, honey, weights, yields, and other practical outputs over time.'],
  ['Garden bed layouts', 'Map garden beds and crop placement by season so you know what is planted where.'],
  ['Photos and documents', 'Attach useful reference materials such as photos, receipts, manuals, labels, and notes when supported by your app version.'],
  ['Reports and exports', 'Review summaries, logbooks, upcoming seasonal work, inventory reports, production history, and handoff information.'],
] as const;

export const pricingTiers = [
  {
    name: 'Free',
    price: '$0',
    note: 'For trying Homestead Keeper with real records.',
    features: ['Up to 20 total items', 'Calendar and reminders', 'Field Log entries', 'Cedar Ridge demo homestead', 'Data stored on your Apple devices'],
  },
  {
    name: 'Pro',
    price: '$2.99/mo · $19.99/yr · $39.99 lifetime',
    note: 'Unlock the full toolkit for a whole homestead, backyard farm, or rural property.',
    features: ['Unlimited items', 'PDF and CSV exports', 'Backup export and restore/import', 'QR label printing/export', 'Documents and advanced recurring schedules where supported'],
    highlighted: true,
  },
  {
    name: 'All paid plans',
    price: 'Same unlock',
    note: 'Monthly, yearly, and lifetime all unlock the same Pro features.',
    features: ['No feature differences by paid plan', 'Existing data stays safe if a subscription lapses', 'View your records even if you return to Free', 'Restore Purchases supported', 'Lifetime unlock does not expire'],
  },
] as const;

export const faqs = [
  ['Does Homestead Keeper require a login?', 'No. Homestead Keeper is designed without a Homestead Keeper web account or login for normal use.'],
  ['Where is my data stored?', 'Your working records are stored on your Apple devices. If you enable sync, Apple iCloud keeps your iPhone, iPad, and Mac up to date using your Apple ID.'],
  ['Does it sync between iPhone, iPad, and Mac?', 'Yes. Homestead Keeper is designed for iPhone, iPad, and Mac, with iCloud sync for your Apple devices when enabled.'],
  ['Does it work offline?', 'Yes. The app is designed for practical offline-friendly record keeping, so you can keep working in the barn, garden, shed, or field. Sync catches up when your device can connect.'],
  ['Is Homestead Keeper for farms or backyard homesteads?', 'It is built for serious backyard homesteaders, small property owners, hobby farms, rural homeowners, gardeners, chicken keepers, and mixed-use homesteads. It is not trying to be enterprise farm ERP.'],
  ['Can I plan garden beds?', 'Yes. Garden bed layouts help you map beds, plots, crop placement, seasonal layouts, planting records, and harvest history.'],
  ['Can I track chickens and egg counts?', 'Yes. Animal records can cover chickens and other animals, including care reminders, production records such as egg counts, health notes, photos, and history.'],
  ['Can I track equipment maintenance?', 'Yes. Homestead Keeper can keep repair logs, maintenance reminders, service history, parts, fuel, manuals, and warranty notes.'],
  ['Can I track inventory and pantry storage?', 'Yes. Inventory and Food & Pantry tools can cover feed, seeds, medicine, bedding, filters, fuel, canned goods, freezer food, pantry items, canning supplies, spare parts, and emergency supplies.'],
  ['What is included in the Free plan?', 'Free includes up to 20 total items plus core record keeping, reminders, calendar views, Field Log entries, and the Cedar Ridge demo homestead.'],
  ['What does Pro unlock?', 'Pro unlocks unlimited items, PDF and CSV exports, backup export and restore/import, QR label printing/export, documents, and advanced recurring schedules where supported. Monthly, yearly, and lifetime all unlock the same Pro features.'],
  ['What happens if my subscription lapses?', 'Your data is not deleted or hidden. Existing records remain accessible. New item creation beyond the Free limit and paid features such as exports/backups remain locked until Pro is restored.'],
  ['Can I export reports?', 'Yes. Pro includes PDF and CSV exports for reports and records where supported. Apple Calendar export may be available separately as a convenience feature.'],
  ['Can I try demo data?', 'Yes. The Cedar Ridge demo homestead helps people explore the app before building their own records. Demo records do not count against the Free item limit.'],
  ['Is this a business accounting app?', 'No. Homestead Keeper can track useful costs and records, but it is not a replacement for accounting, tax, payroll, or farm business compliance software.'],
] as const;

export const featureLinks = managementAreas.slice(0, 8).map(([title, summary]) => ({
  title,
  href: title === 'Inventory' ? '/features/inventory' : title === 'Animals' ? '/features/animals' : title.startsWith('Garden') ? '/features/garden' : '/features',
  summary,
}));

export const footerFeatureLinks = [
  { title: 'Animals', href: '/features/animals' },
  { title: 'Garden', href: '/features/garden' },
  { title: 'Inventory', href: '/features/inventory' },
  { title: 'Reports', href: '/features/reports' },
];

export const proFeatures = [
  'Unlimited homestead items',
  'PDF and CSV exports',
  'Backup export and restore/import',
  'QR label printing/export',
  'Documents and advanced recurring schedules where supported',
];

export const homepageScreenshots = [
  {
    src: 'assets/screenshots/homestead-hub.webp',
    title: 'Homestead Hub',
    body: 'Featured areas and everything else you manage in one calm overview.',
    alt: 'Homestead Keeper Homestead Hub showing Garden, Animals, Property, Inventory, and More to Manage cards.',
  },
  {
    src: 'assets/screenshots/garden-bed-layout.webp',
    title: 'Garden bed layouts',
    body: 'Map what is planted where by bed, crop, and season.',
    alt: 'Garden bed layout showing a raised bed with beets, bell peppers, paths, Swiss chard, and radicchio.',
  },
  {
    src: 'assets/screenshots/calendar-week.webp',
    title: 'Calendar week view',
    body: 'See upcoming animal care, breeding milestones, chores, and seasonal work.',
    alt: 'Homestead Keeper calendar week view showing breeding calendar events and milestones.',
  },
  {
    src: 'assets/screenshots/report-production.webp',
    title: 'Homestead production',
    body: 'Review eggs, milk, honey, garden harvests, and trends over time.',
    alt: 'Homestead production report showing totals and trend charts for eggs, milk, honey, and garden harvests.',
  },
] as const;

export const gardenScreenshots = [
  {
    src: 'assets/screenshots/garden-bed-layout.webp',
    title: 'Bed layout planning',
    body: 'Plan raised beds and crop placement before planting day.',
    alt: 'Garden bed layout with crops assigned to a grid and a prompt to log the layout as planting.',
  },
  {
    src: 'assets/screenshots/garden-timeline.webp',
    title: 'Garden timeline',
    body: 'Track seed starts, growing windows, harvest windows, frost dates, and seasonal timing.',
    alt: 'Garden timeline showing crops across months with seed start, growing, harvest window, frost date, and today markers.',
  },
] as const;

export const calendarScreenshots = [
  {
    src: 'assets/screenshots/calendar-week.webp',
    title: 'Week calendar',
    body: 'Day, week, and month views for chores, milestones, and care.',
    alt: 'Calendar week view showing breeding calendar events and a month grid.',
  },
  {
    src: 'assets/screenshots/breeding-timeline.webp',
    title: 'Timeline view',
    body: 'Timeline mode for planting windows, harvest dates, frost markers, seasonal chores, and care milestones.',
    alt: 'Calendar timeline showing active windows, completed items, planting, harvest, and today markers.',
  },
] as const;

export const animalScreenshots = [
  {
    src: 'assets/screenshots/animal-summary.webp',
    title: 'Animal records',
    body: 'Profiles, records, production, care, photos, pedigree, and breeding in one place.',
    alt: 'Animal detail screen for laying hens with summary, records, production, photos, care, pedigree, and breeding tabs.',
  },
  {
    src: 'assets/screenshots/animal-production.webp',
    title: 'Production history',
    body: 'Track eggs and other production with totals, trends, uses, sales, and history.',
    alt: 'Animal production tab showing egg totals, a 14 day bar chart, and production history rows.',
  },
] as const;

export const equipmentScreenshots = [
  {
    src: 'assets/screenshots/equipment-detail.webp',
    title: 'Equipment records',
    body: 'Keep service, repair, inspection, fuel, cost, and photo records with each item.',
    alt: 'Equipment detail screen for a riding mower with Field Log service entry fields.',
  },
] as const;

export const inventoryScreenshots = [
  {
    src: 'assets/screenshots/inventory-list.webp',
    title: 'Inventory table',
    body: 'Track feed, seeds, soil amendments, medicine, fuel, pantry supplies, status, and expirations.',
    alt: 'Inventory list table showing item, category, quantity, location, status, and expiration columns.',
  },
  {
    src: 'assets/screenshots/report-inventory.webp',
    title: 'Inventory report',
    body: 'Review low stock, expiring supplies, categories, places, and supply trends.',
    alt: 'Inventory report showing overview counts, supply levels over time, low stock, expiring soon, and categories.',
  },
] as const;

export const reportScreenshots = [
  {
    src: 'assets/screenshots/report-homestead-summary.webp',
    title: 'Homestead summary',
    body: 'A top-level view of records, logbook activity, reminders, costs, and homestead health.',
    alt: 'Homestead Summary report showing health score, overview metrics, and activity by type.',
  },
  {
    src: 'assets/screenshots/report-cost-summary.webp',
    title: 'Cost summary',
    body: 'Track income, expenses, repairs, replacement costs, spending trends, and cost breakdowns.',
    alt: 'Cost Summary report showing total income, expenses, net, repairs, tracked item value, replacement cost, and charts.',
  },
  {
    src: 'assets/screenshots/report-production.webp',
    title: 'Production report',
    body: 'Compare eggs, milk, honey, and harvests across days and seasons.',
    alt: 'Homestead Production report showing totals and charts for eggs, honey, milk, and garden harvests.',
  },
  {
    src: 'assets/screenshots/report-maintenance.webp',
    title: 'Maintenance overview',
    body: 'Review completed work, overdue reminders, service costs, vendors, trends, and watchlists.',
    alt: 'Maintenance Overview report showing health score, overview metrics, trend chart, upcoming care, and watchlist.',
  },
  {
    src: 'assets/screenshots/report-warranty.webp',
    title: 'Warranty countdown',
    body: 'See expired, upcoming, and later warranty deadlines for equipment and supplies.',
    alt: 'Warranty Countdown report showing expired warranties, 90 day warranties, and later warranty items.',
  },
] as const;

export const allProductScreenshots = [
  ...homepageScreenshots,
  ...animalScreenshots,
  ...equipmentScreenshots,
  ...inventoryScreenshots,
  ...reportScreenshots,
  ...calendarScreenshots,
  ...gardenScreenshots,
] as const;

export const productTourScreenshots = [
  {
    src: 'assets/screenshots/homestead-hub.webp',
    title: 'Homestead Hub',
    body: 'Featured areas and the rest of the homestead in one overview.',
    alt: 'Homestead Hub showing featured Garden, Animals, Property, Inventory, and More to Manage cards.',
  },
  {
    src: 'assets/screenshots/garden-bed-layout.webp',
    title: 'Garden bed layout',
    body: 'Visual crop placement by raised bed, path, crop, and season.',
    alt: 'Raised bed layout showing crop cells, paths, season controls, and a log planting prompt.',
  },
  {
    src: 'assets/screenshots/garden-timeline.webp',
    title: 'Garden timeline',
    body: 'Seed starts, growing windows, harvest windows, frost dates, and today markers.',
    alt: 'Garden timeline showing crop rows across May, June, July, and August with planting and harvest windows.',
  },
  {
    src: 'assets/screenshots/calendar-week.webp',
    title: 'Calendar week',
    body: 'Calendar views for upcoming chores, care reminders, and milestones.',
    alt: 'Calendar week view with a month grid, week event list, and breeding calendar milestones.',
  },
  {
    src: 'assets/screenshots/breeding-timeline.webp',
    title: 'Garden timeline',
    body: 'Planting windows, growing periods, harvest dates, frost markers, and seasonal care.',
    alt: 'Calendar timeline showing planting, growing, harvest windows, frost dates, and today marker.',
  },
  {
    src: 'assets/screenshots/animal-summary.webp',
    title: 'Animal summary',
    body: 'Profiles, records, production, photos, care, pedigree, and breeding tabs.',
    alt: 'Laying Hens animal summary showing profile, weight, recent records, and action buttons.',
  },
  {
    src: 'assets/screenshots/animal-production.webp',
    title: 'Animal production',
    body: 'Egg counts, trends, sales, use, storage, and production history.',
    alt: 'Animal production tab showing egg totals, a 14 day chart, and production history.',
  },
  {
    src: 'assets/screenshots/equipment-detail.webp',
    title: 'Equipment service',
    body: 'Log service, repairs, inspections, fuel, cost, vendors, and time spent.',
    alt: 'Riding mower equipment screen with a Field Log service form.',
  },
  {
    src: 'assets/screenshots/inventory-list.webp',
    title: 'Inventory list',
    body: 'Track item category, quantity, location, status, and expiration dates.',
    alt: 'Inventory table with rows for seeds, animal health, soil amendments, and dehydrated food.',
  },
  {
    src: 'assets/screenshots/report-homestead-summary.webp',
    title: 'Homestead summary report',
    body: 'Health score, activity by type, total records, reminders, costs, and logbook counts.',
    alt: 'Homestead Summary report with health score and overview metrics.',
  },
  {
    src: 'assets/screenshots/report-cost-summary.webp',
    title: 'Cost report',
    body: 'Income, expenses, repairs, replacement cost, and spending charts.',
    alt: 'Cost Summary report with metric cards and spending charts.',
  },
  {
    src: 'assets/screenshots/report-inventory.webp',
    title: 'Inventory report',
    body: 'Low stock, expiring supplies, categories, places, value, and supply trends.',
    alt: 'Inventory Report showing overview metrics, supply levels chart, low stock, and expiring soon.',
  },
  {
    src: 'assets/screenshots/report-production.webp',
    title: 'Production report',
    body: 'Eggs, milk, honey, garden harvest totals, and production trends.',
    alt: 'Homestead Production report with totals and trends for eggs, milk, honey, and harvests.',
  },
  {
    src: 'assets/screenshots/report-maintenance.webp',
    title: 'Maintenance report',
    body: 'Completed work, overdue reminders, costs, service trends, and watchlists.',
    alt: 'Maintenance Overview report with health score, metrics, logbook trend, and watchlist.',
  },
  {
    src: 'assets/screenshots/report-warranty.webp',
    title: 'Warranty countdown',
    body: 'Expired, upcoming, and later warranty windows for equipment and supplies.',
    alt: 'Warranty Countdown report with expired and upcoming warranty items.',
  },
] as const;
