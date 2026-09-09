import { pricingTiers } from './site';

// Public product pages reviewed 2026-09-09; not a hands-on competitor test.
export const homesteadPlannerComparison = {
  reviewed: 'September 9, 2026',
  rows: [
    ['Devices and account', 'iPhone, iPad, and Mac. No Homestead Keeper account required.', 'Browser app with account signup.'],
    ['Offline records', 'Records stored on your devices; optional iCloud sync across your Apple devices.', 'Offline behavior is not confirmed in the public pages reviewed.'],
    ['Free plan', 'Up to 20 items, reminders, calendar, Field Log entries, and demo data.', '3 animal groups, 1 garden, 5 active tasks, unlimited journal entries, and produce logging.'],
    ['Paid options', pricingTiers.find((tier) => tier.name === 'Pro')!.price, '$9/month or $79/year.'],
    ['Animals and production', 'Animal histories, care, breeding, feed costs, and production records.', 'Animal records, produce logs, and group-level financial tracking.'],
    ['Garden and property', 'Garden and orchard layouts, planting and harvest history, plus places and map records.', 'Garden canvas and companion planting; satellite property-layout planner with Pro.'],
    ['Sharing and helpers', 'Documented sync uses your Apple ID. Check with support if separate helper accounts are essential.', 'Pro includes helper logins for chores and journal updates.'],
    ['Exports', 'Pro includes PDF and CSV exports, plus backup and restore tools.', 'Export formats are not confirmed in the public pages reviewed.'],
  ],
  sources: [
    { title: 'Homestead Keeper features, plans, and product tour', href: '/more-info/' },
    { title: 'Homestead Keeper privacy and sync', href: '/privacy/' },
    { title: 'Homestead Keeper App Store listing', href: 'https://apps.apple.com/us/app/homestead-keeper-planner/id6778182157' },
    { title: 'Homestead Planner features and pricing', href: 'https://homesteadplanner.net/' },
    { title: 'Homestead Planner feature directory', href: 'https://homesteadplanner.net/features' },
  ],
};
