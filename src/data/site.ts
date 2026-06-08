export const site = {
  name: 'Homestead Keeper',
  tagline: 'Keep your homestead running.',
  url: 'https://homesteadkeeper.com',
  supportEmail: 'support@homesteadkeeper.com',
  appStoreLabel: 'App Store coming soon',
  appStoreUrl: '#app-store-coming-soon',
  description:
    'A calm, local-first homestead management app for animals, gardens, orchards, bees, equipment, inventory, chores, records, reports, and rural property care on iPhone, iPad, and Mac.',
};

export const navItems = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/faq', label: 'FAQ' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/support', label: 'Support' },
];

export const managementAreas = [
  ['Animals', 'Care reminders, health notes, egg counts, breeding, pedigree, production, photos, and records for chickens, goats, rabbits, cattle, guardian animals, and more.'],
  ['Garden & Harvest', 'Plan beds, crops, seed starts, planting dates, watering, pest notes, harvests, and seasonal garden records.'],
  ['Orchard', 'Track fruit trees, berries, vines, pruning, sprays, harvests, seasonal timing, and long-term perennial care.'],
  ['Bees & Hives', 'Record hive inspections, queen notes, feeding, treatments, splits, swarms, honey harvests, and equipment.'],
  ['Equipment & Workshop', 'Log repairs, maintenance, fuel, parts, manuals, service history, warranty notes, and tool records.'],
  ['Property, Fences & Water', 'Keep records for gates, fences, wells, pumps, irrigation, buildings, roads, storm damage, and property repairs.'],
  ['Inventory', 'Track feed, medicine, seeds, fuel, filters, bedding, pantry goods, canning supplies, spare parts, and emergency supplies.'],
  ['Food Preservation', 'Keep batch notes for canning, freezing, dehydrating, fermenting, pantry storage, dates, yields, and supplies.'],
  ['Off-grid Systems', 'Track solar, batteries, generators, propane, water storage, backup power, filters, and seasonal checks.'],
  ['Weather & Seasons', 'Keep weather-aware notes, seasonal chores, frost timing, irrigation checks, and recurring seasonal reminders.'],
  ['Wildlife & Pests', 'Record pest pressure, wildlife sightings, damage, treatments, exclusion work, and follow-up reminders.'],
  ['Forestry', 'Track tree work, fire mitigation, wood lots, brush clearing, storm cleanup, and property access tasks.'],
  ['Emergency Prep', 'Track stored water, food, first aid, generator readiness, batteries, documents, and expiration dates.'],
  ['Projects', 'Keep repair projects, garden builds, coop upgrades, fencing jobs, and seasonal improvements organized.'],
  ['Family & Education', 'Record shared chores, learning projects, youth involvement, notes, and family handoff details.'],
  ['Farm Business', 'Keep practical business-adjacent records without turning the app into enterprise farm ERP or accounting software.'],
  ['Places', 'Organize work by coops, barns, gardens, sheds, pastures, apiaries, pump houses, pantries, and other real locations.'],
  ['Calendar & Reports', 'Review upcoming work, cost summaries, logbooks, animal care, production, inventory, and handoff reports.'],
] as const;

export const coreFeatures = [
  ['Home dashboard', 'See what needs attention today: overdue work, upcoming reminders, quick field logs, and the records you use most.'],
  ['Homestead Hub', 'Start from a single place for animals, crops, equipment, inventory, reports, projects, and property systems.'],
  ['Quick logs', 'Capture egg counts, feed, watering, treatments, inspections, harvests, repairs, inventory changes, and notes fast.'],
  ['Reminders', 'Create one-time, recurring, and seasonal reminders for chores, animal care, maintenance, planting, and inspection work.'],
  ['Production tracking', 'Track eggs, harvests, honey, weights, yields, and other practical outputs over time.'],
  ['Cost records', 'Keep the costs tied to animals, gardens, equipment, inventory, property projects, and recurring care.'],
  ['Photos and documents', 'Attach useful reference materials such as photos, receipts, manuals, labels, and notes when supported by your app version.'],
  ['Reports and exports', 'Review summaries, logbooks, upcoming seasonal work, inventory reports, production history, and handoff information.'],
] as const;

export const pricingTiers = [
  {
    name: 'Starter',
    price: 'Free',
    note: 'For trying the app and keeping a small set of records.',
    features: ['Limited real records', 'Core dashboard', 'Basic reminders', 'Demo homestead', 'Local-first record keeping'],
  },
  {
    name: 'Homestead Keeper',
    price: 'Pricing to be finalized',
    note: 'The full toolkit for a whole homestead, backyard farm, or rural property.',
    features: ['More assets and places', 'Animals, garden, equipment, inventory, and property systems', 'Reports and exports', 'Backup and restore tools where available', 'iPhone, iPad, and Mac support'],
    highlighted: true,
  },
  {
    name: 'Backyard Homesteader',
    price: 'Under consideration',
    note: 'A possible smaller tier for serious backyard keepers who do not need every advanced area.',
    features: ['Chicken and garden workflows', 'Inventory essentials', 'Seasonal reminders', 'Simple reports', 'No cloud dashboard required'],
  },
] as const;

export const faqs = [
  ['Is Homestead Keeper for farms or backyard homesteads?', 'It is built for serious backyard homesteaders, small property owners, hobby farms, rural homeowners, gardeners, chicken keepers, and mixed-use homesteads. It is not trying to be enterprise farm ERP.'],
  ['Does Homestead Keeper require the cloud?', 'No. Homestead Keeper is designed as a local-first Apple app for practical record keeping without a required web dashboard or hosted account for normal use.'],
  ['Does it work on iPhone, iPad, and Mac?', 'Homestead Keeper is being built for iPhone, iPad, and Mac. Final availability depends on the App Store release and platform support at launch.'],
  ['Can I track chickens and egg counts?', 'Yes. Animal records can cover chickens and other animals, including care reminders, production records such as egg counts, health notes, photos, and history.'],
  ['Can I track gardens and planting schedules?', 'Yes. The garden tools are meant for beds, crops, seeds, planting timing, harvest records, watering, pest notes, and seasonal history.'],
  ['Can I track equipment maintenance?', 'Yes. Homestead Keeper can keep repair logs, maintenance reminders, service history, parts, fuel, manuals, and warranty notes.'],
  ['Can I track inventory?', 'Yes. Inventory can cover feed, seeds, medicine, bedding, filters, fuel, pantry goods, canning supplies, spare parts, and emergency supplies.'],
  ['Can I export reports?', 'Reports and exports are part of the product direction, including summaries, logbooks, inventory, production, costs, seasonal work, and handoff reports.'],
  ['Can I try demo data?', 'Yes. The Cedar Ridge demo homestead is intended to help people explore the app before building their own records.'],
  ['Is this a business accounting app?', 'No. Homestead Keeper can track useful costs and records, but it is not a replacement for accounting, tax, payroll, or farm business compliance software.'],
  ['Is this for large commercial farms?', 'No. The app is aimed at homesteads, backyard farms, hobby farms, and small rural properties rather than large commercial operations.'],
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
  'Whole-homestead records',
  'Reports and exports where available',
  'Backup and restore tools where available',
  'Advanced reminders',
  'Photos and documents where supported',
];
