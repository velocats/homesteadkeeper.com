export const site = {
  name: 'Homestead Keeper',
  tagline: 'Whole-homestead records on your Apple devices.',
  url: 'https://homesteadkeeper.com',
  supportEmail: 'support@homesteadkeeper.com',
  appStoreLabel: 'App Store coming soon',
  appStoreUrl: '#app-store-coming-soon',
  description:
    'A calm homestead management app for animals, gardens, garden bed layouts, orchards, bees, equipment, inventory, food and pantry records, reminders, reports, and rural property care on iPhone, iPad, and Mac.',
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/privacy', label: 'Privacy' },
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
  ['Projects', 'Keep repair projects, garden builds, coop upgrades, fencing jobs, and seasonal improvements organized.'],
  ['Farm Business', 'Keep practical business-adjacent records without turning the app into enterprise farm ERP or accounting software.'],
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
