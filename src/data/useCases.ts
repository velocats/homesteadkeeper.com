export interface UseCase {
  slug: string;
  title: string;
  eyebrow: string;
  h1: string;
  description: string;
  intro: string;
  audience: string[];
  chooseIf?: string[];
  example?: { title: string; body: string };
  limitation?: string;
  sections: Array<{
    title: string;
    body: string[];
  }>;
  relatedFeatures: Array<{
    title: string;
    href: string;
    summary: string;
  }>;
  keywords: string[];
  /** Curated related use-case slugs. Replaces arbitrary array-order slicing. */
  relatedSlugs?: string[];
  /** Curated links to informational guides, so clusters link both ways. */
  guides?: Array<{ title: string; href: string; summary: string }>;
  screenshots?: Array<{
    src: string;
    title: string;
    body: string;
    alt: string;
  }>;
}

export const useCases: UseCase[] = [
  {
    slug: 'homestead-management-app',
    title: 'Homestead Management App | Homestead Keeper',
    eyebrow: 'Homestead management',
    h1: 'A homestead management app for animals, gardens, inventory, property, and seasonal work.',
    description:
      'Homestead Keeper is a homestead management app for tracking animals, gardens, inventory, equipment, property records, reminders, reports, and small-acreage work.',
    intro:
      'Homestead Keeper helps bring the daily pieces of a homestead together: animal care, garden beds, orchard work, equipment maintenance, pantry inventory, property places, reminders, reports, and exports.',
    audience: ['Backyard homesteads', 'Small acreage properties', 'Hobby farms', 'Rural homeowners managing mixed records', 'Small farms outgrowing notes and spreadsheets'],
    chooseIf: ['Your animals, gardens, equipment, supplies, and property work overlap', 'You want records attached to real items and places', 'You prefer an Apple app without a separate web account'],
    example: { title: 'A simple first setup', body: 'Create the main places you use, add no more than 20 important animals, beds, tools, systems, or supplies, then attach recurring work and Field Log entries to those records. Expand only after the daily review feels useful.' },
    limitation: 'Homestead Keeper supports practical property and production records, but it is not enterprise farm ERP, payroll, tax, or regulatory-compliance software.',
    keywords: ['homestead management app', 'homestead record keeping app', 'homestead planner app', 'small acreage management app', 'hobby farm management app', 'small farm record keeping app'],
    screenshots: [
      {
        src: 'assets/screenshots/homestead-hub.webp',
        title: 'Homestead Hub',
        body: 'Animals, garden, property, and inventory in one view, with overdue work and recent notes surfaced first.',
        alt: 'Homestead Keeper Homestead Hub showing Garden, Animals, Property, and Inventory cards plus Orchard, Bees, Equipment, and Food & Pantry.',
      },
      {
        src: 'assets/screenshots/report-homestead-summary.webp',
        title: 'Homestead summary report',
        body: 'A rolled-up summary across animals, gardens, inventory, and maintenance for a given period.',
        alt: 'Homestead Keeper homestead summary report showing activity totals across animals, garden, inventory, and maintenance.',
      },
    ],
    sections: [
      {
        title: 'Keep mixed homestead records in one app',
        body: [
          'Most small homesteads are not only gardens, only livestock, or only inventory. The work overlaps across animals, crops, equipment, buildings, food storage, reminders, and property systems.',
          'Homestead Keeper is built around that mixed reality, so records can stay connected to the item, place, animal, bed, building, or system they belong to.',
        ],
      },
      {
        title: 'Plan, log, and review the work over time',
        body: [
          'Use the app to plan seasonal work, log daily activity, track production, keep maintenance notes, review inventory, and export reports when you need a clearer view.',
          'That gives you a practical history of what happened without forcing your homestead into complicated farm business software.',
        ],
      },
      {
        title: 'Use it across Apple devices',
        body: [
          'Homestead Keeper works on iPhone, iPad, and Mac, with local-first records and optional iCloud sync.',
          'It is designed for people who want useful homestead records without creating another web account or maintaining a browser-first dashboard.',
        ],
      },
      {
        title: 'A fit for hobby farms, not just backyard homesteads',
        body: [
          'The same structure works whether "homestead" means a quarter-acre with chickens or several acres with mixed livestock, pasture, and equipment — organize by the barn, garden, workshop, pantry, or pasture you actually use, then attach records to those places.',
          'It stays short of enterprise farm software: useful for planning, care, maintenance, and seasonal review, not for payroll, tax, or regulated farm-business operations.',
        ],
      },
    ],
    relatedFeatures: [
      { title: 'Features overview', href: '/features', summary: 'See animals, growing, property, home, planning, reports, and exports.' },
      { title: 'Workflows', href: '/workflows', summary: 'Walk through common map, garden, animal, report, calendar, and import tasks.' },
      { title: 'Pricing', href: '/pricing', summary: 'Try free with up to 20 items, then upgrade when your records grow.' },
    ],
  },
  {
    slug: 'chicken-keepers',
    title: 'Chicken Flock Record Keeping App | Homestead Keeper',
    eyebrow: 'Chicken keepers',
    h1: 'Chicken flock records without a spreadsheet.',
    description:
      'Track chicken flock records, egg counts, care reminders, health notes, feed, coop maintenance, breeding, photos, and production history with Homestead Keeper.',
    intro:
      'Homestead Keeper helps chicken keepers keep flock records, egg production, care reminders, coop maintenance, feed notes, and health history together on iPhone, iPad, and Mac.',
    audience: ['Backyard chicken keepers', 'Small flock owners', 'Egg producers', 'Homesteads with mixed animals'],
    chooseIf: ['You want egg counts beside flock history', 'Feed, care, and coop work need one record system', 'You manage chickens as part of a larger homestead'],
    example: { title: 'A practical flock setup', body: 'Start with one flock profile, a recurring care reminder, a daily egg-production entry, feed inventory, and a coop maintenance record. Add individual bird profiles only when bird-specific identification, health, breeding, or production history is useful.' },
    limitation: 'The app stores observations and treatment history; it does not diagnose illness or replace advice from a qualified veterinarian.',
    keywords: ['chicken flock record keeping app', 'egg production tracker', 'chicken care reminders', 'backyard chicken app', 'chicken egg tracker', 'chicken egg count app'],
    screenshots: [
      {
        src: 'assets/screenshots/animal-summary.webp',
        title: 'Chicken and animal records',
        body: 'Keep flock profiles, care, production, health notes, photos, and history together.',
        alt: 'Homestead Keeper animal record screen with summary, records, production, photos, care, pedigree, and breeding tabs.',
      },
      {
        src: 'assets/screenshots/animal-production.webp',
        title: 'Egg production history',
        body: 'Track egg counts and other production with totals, charts, and history.',
        alt: 'Homestead Keeper animal production screen showing egg totals, a bar chart, and production history rows.',
      },
    ],
    sections: [
      {
        title: 'Track egg production and flock activity',
        body: [
          'Log egg counts, production notes, flock checks, feed changes, and daily observations while the details are fresh.',
          'Production history helps you notice seasonal patterns, compare output over time, and keep useful records without rebuilding the story from memory.',
          'Production records can reveal patterns, but they do not diagnose animal health or establish why production changed — treat a dip as a prompt to look closer, not a conclusion.',
        ],
      },
      {
        title: 'Keep care and health records attached to the flock',
        body: [
          'Care reminders, treatment notes, photos, documents, and health records stay with the chicken flock or individual bird they belong to.',
          'That makes it easier to review what happened before a molt, illness, hatch, predator issue, coop repair, or change in production.',
        ],
      },
      {
        title: 'Connect the coop to the rest of the homestead',
        body: [
          'Homestead Keeper is not only a chicken app. Feed inventory, coop maintenance, equipment, garden harvests, costs, calendar work, and reports can live in the same system.',
          'This helps when chickens are one part of a larger backyard homestead, hobby farm, or rural property.',
        ],
      },
    ],
    relatedFeatures: [
      { title: 'Animal records', href: '/features/animals', summary: 'Care, health, production, breeding, pedigree, photos, documents, and reports.' },
      { title: 'Inventory', href: '/features/inventory', summary: 'Track feed, bedding, medicine, supplies, low stock, and expirations.' },
      { title: 'Reports', href: '/features/reports', summary: 'Review production, care, inventory, costs, and maintenance history.' },
    ],
  },
  {
    slug: 'gardeners',
    title: 'Garden Planning and Harvest Tracking App | Homestead Keeper',
    eyebrow: 'Gardeners',
    h1: 'Garden bed layouts, planting records, and harvest history in one place.',
    description:
      'Plan garden bed layouts, track plantings, record harvests, review crop history, and connect garden work to reminders and reports with Homestead Keeper.',
    intro:
      'Homestead Keeper helps gardeners track raised beds, crop placement, planting dates, pest notes, soil work, harvests, reminders, and seasonal garden records.',
    audience: ['Backyard gardeners', 'Raised bed gardeners', 'Homestead gardeners', 'Orchard and berry growers'],
    chooseIf: ['You want bed layouts connected to planting history', 'Harvest totals and seasonal notes matter for next year', 'Garden work needs to appear beside the rest of the homestead calendar'],
    example: { title: 'Follow one crop through the season', body: 'Place a crop in a bed layout, create its planting record, log soil work or pest observations as they happen, record each harvest, and review the garden timeline and season report before planning the next rotation.' },
    limitation: 'The app organizes plans and observations; planting dates, treatments, and crop recommendations still need to reflect your climate, labels, and qualified local guidance.',
    keywords: ['garden planning app', 'garden bed layout app', 'garden harvest tracker', 'planting record app', 'garden planting log app', 'vegetable harvest tracker'],
    screenshots: [
      {
        src: 'assets/screenshots/garden-bed-layout.webp',
        title: 'Garden bed layout',
        body: 'Map raised beds and crop placement by bed, crop, and season.',
        alt: 'Homestead Keeper garden bed layout showing crops assigned to a raised bed grid.',
      },
      {
        src: 'assets/screenshots/garden-timeline.webp',
        title: 'Garden timeline',
        body: 'Review planting, growing, harvest windows, frost dates, and seasonal work.',
        alt: 'Homestead Keeper garden timeline showing crop schedules with seed start, growing, and harvest windows.',
      },
    ],
    sections: [
      {
        title: 'Make garden plans visual',
        body: [
          'Garden bed layouts help you map what is planted where by bed, crop, and season.',
          'A visual layout is easier to use during planting, watering, pest checks, and harvest than a note buried in a notebook.',
        ],
      },
      {
        title: 'Keep planting and harvest records together',
        body: [
          'Track crop, variety, planting date, location, care notes, treatments, and harvest totals in the same app.',
          'Over time, these records help answer practical questions: what grew well, which bed produced, what should rotate, and what is worth planting again.',
          'Recorded yield is only as complete as the entries made — use consistent units and note skipped or estimated harvests before comparing one season to another.',
        ],
      },
      {
        title: 'Connect garden work to the calendar',
        body: [
          'Use reminders and calendar views for seed starting, transplanting, watering, pest scouting, harvest windows, and seasonal cleanup.',
          'Reports can turn garden logs into useful seasonal summaries for planning next year.',
        ],
      },
    ],
    relatedFeatures: [
      { title: 'Garden features', href: '/features/garden', summary: 'Garden bed layouts, planting records, harvests, timelines, and reports.' },
      { title: 'Calendar and reminders', href: '/features/reminders', summary: 'Recurring, seasonal, overdue, and upcoming garden work in one place.' },
      { title: 'Garden workflow', href: '/workflows/garden-layout-plantings', summary: 'See how garden layouts connect to planting records.' },
    ],
  },
  {
    slug: 'rural-property-owners',
    title: 'Rural Property Management App | Homestead Keeper',
    eyebrow: 'Rural property',
    h1: 'Property, equipment, places, and seasonal work records for rural homes.',
    description:
      'Track rural property records, equipment maintenance, buildings, wells, pumps, gates, inventory, emergency prep, reminders, maps, and reports with Homestead Keeper.',
    intro:
      'Homestead Keeper helps rural homeowners and small acreage owners organize property systems, places, maintenance, equipment, inventory, and seasonal work.',
    audience: ['Rural homeowners', 'Small acreage owners', 'Off-grid properties', 'Properties with wells, pumps, gates, buildings, and equipment'],
    chooseIf: ['Wells, pumps, gates, buildings, or equipment need service history', 'You organize work by real property locations', 'A caretaker or helper may need a clearer handoff'],
    example: { title: 'Build a property-system record', body: 'Create the pump house as a place, add the well pump and filter as items, attach manuals or photos, record service history, and schedule the next inspection or filter change. The same pattern works for gates, generators, irrigation, and buildings.' },
    limitation: 'Property records support planning and handoffs, but they are not inspections, insurance documentation, or proof of regulatory compliance unless the relevant authority accepts them.',
    keywords: ['rural property management app', 'equipment maintenance tracker', 'property maintenance app', 'small acreage management app'],
    screenshots: [
      {
        src: 'assets/screenshots/equipment-detail.webp',
        title: 'Equipment and system records',
        body: 'Service history, repairs, parts, and warranties stay with the pump, generator, or tool they belong to.',
        alt: 'Homestead Keeper equipment detail screen showing service history, parts, and warranty information.',
      },
      {
        src: 'assets/screenshots/report-warranty.webp',
        title: 'Warranty report',
        body: 'Review warranty coverage and expiration across property equipment at a glance.',
        alt: 'Homestead Keeper warranty report listing equipment with warranty status and expiration dates.',
      },
    ],
    sections: [
      {
        title: 'Track the systems that keep a property running',
        body: [
          'Keep notes and history for wells, pumps, gates, fences, irrigation, barns, sheds, roads, solar, generators, propane, water storage, and other property systems.',
          'Maintenance reminders and Field Log entries help capture work before it disappears into memory.',
        ],
      },
      {
        title: 'Use places and maps for real-world organization',
        body: [
          'Organize records by real places such as the barn, coop, garden, workshop, pump house, pantry, pasture, or equipment shed.',
          'Map views help show where work, records, systems, and places live on the property.',
        ],
      },
      {
        title: 'Prepare for handoffs and seasonal review',
        body: [
          'Reports and exports can help summarize maintenance, inventory, costs, warranties, and property care history.',
          'That makes the app useful for seasonal planning, helpers, property handoffs, insurance conversations, and routine review.',
        ],
      },
    ],
    relatedFeatures: [
      { title: 'Inventory', href: '/features/inventory', summary: 'Track supplies, parts, fuel, feed, medicine, pantry goods, and expirations.' },
      { title: 'Reports', href: '/features/reports', summary: 'Review maintenance, cost, production, inventory, and handoff summaries.' },
      { title: 'Map workflow', href: '/workflows/map-usage', summary: 'See how places and records appear in property context.' },
    ],
  },
  {
    slug: 'pantry-inventory',
    title: 'Pantry and Homestead Inventory App | Homestead Keeper',
    eyebrow: 'Inventory and pantry',
    h1: 'Track pantry, feed, supplies, and homestead inventory before they run out.',
    description:
      'Use Homestead Keeper to track pantry inventory, feed, medicine, seeds, fuel, filters, canning supplies, emergency prep, low stock, expirations, and reports.',
    intro:
      'Homestead Keeper helps track the supplies that matter around a homestead: feed, medicine, seeds, fuel, filters, pantry goods, canning supplies, emergency prep, and spare parts.',
    audience: ['Pantry managers', 'Food preservation households', 'Chicken and livestock keepers', 'Prepared rural homes'],
    chooseIf: ['Supplies are stored across several locations', 'Low-stock and expiration review needs to be routine', 'Feed, pantry, maintenance, and emergency items should share one system'],
    example: { title: 'Review inventory by location', body: 'Create pantry, freezer, barn, shop, and equipment storage places. Add quantities, units, thresholds, and expiration dates to the items that matter most, then review low-stock and expiring-soon results during a scheduled weekly or monthly check.' },
    limitation: 'Inventory dates and notes do not override food, medicine, feed, or product safety instructions. Follow labels and qualified public-health or veterinary guidance.',
    keywords: ['pantry inventory app', 'homestead inventory app', 'feed inventory tracker', 'emergency supplies tracker'],
    screenshots: [
      {
        src: 'assets/screenshots/inventory-list.webp',
        title: 'Inventory list',
        body: 'Track quantities, categories, storage places, status, and expiration dates.',
        alt: 'Homestead Keeper inventory table showing item, category, quantity, location, status, and expiration columns.',
      },
      {
        src: 'assets/screenshots/report-inventory.webp',
        title: 'Inventory report',
        body: 'Review low stock, expiring supplies, categories, places, and supply trends.',
        alt: 'Homestead Keeper inventory report showing low stock, expiring soon, categories, and supply trends.',
      },
    ],
    sections: [
      {
        title: 'Track supplies by category and place',
        body: [
          'Inventory can cover feed, bedding, medicine, seeds, soil inputs, filters, fuel, pantry goods, preserved food, canning supplies, tools, parts, and emergency supplies.',
          'Places help keep records tied to the pantry, barn, shed, root cellar, freezer, shop, or equipment area where things are stored.',
        ],
      },
      {
        title: 'See low stock and expiring items',
        body: [
          'Quantity, status, thresholds, and expiration dates help surface what needs attention before a chore or emergency depends on it.',
          'Inventory reports make it easier to review categories, low stock, expiring supplies, and supply trends.',
        ],
      },
      {
        title: 'Connect inventory to daily records',
        body: [
          'Field Log entries, animal care, garden work, equipment maintenance, and reports can all connect back to the supplies you use.',
          'That gives inventory context instead of leaving it as a separate list.',
        ],
      },
    ],
    relatedFeatures: [
      { title: 'Inventory features', href: '/features/inventory', summary: 'Inventory lists, low stock, expirations, categories, places, and reports.' },
      { title: 'Reports', href: '/features/reports', summary: 'Review inventory, production, cost, maintenance, and homestead summaries.' },
      { title: 'Today workflow', href: '/workflows/today-screen-review', summary: 'See how inventory alerts surface during daily review.' },
    ],
  },
  {
    slug: 'homestead-task-tracker',
    title: 'Homestead Task Tracker and Chore App | Homestead Keeper',
    eyebrow: 'Task tracker',
    h1: 'A homestead task tracker for chores, reminders, maintenance, and seasonal work.',
    description:
      'Use Homestead Keeper as a homestead task tracker for chores, recurring reminders, animal care, garden work, equipment maintenance, inventory alerts, and seasonal property tasks.',
    intro:
      'Homestead Keeper keeps daily chores, overdue reminders, seasonal jobs, maintenance tasks, and inventory alerts visible beside the records they belong to.',
    audience: ['Homesteaders with recurring chores', 'Chicken keepers and animal owners', 'Gardeners with seasonal tasks', 'Rural properties with maintenance work'],
    chooseIf: ['Daily chores and seasonal jobs appear in different notebooks', 'Tasks need to remain connected to the item or place involved', 'You want overdue work, reminders, and inventory alerts in one review'],
    example: { title: 'Use three task rhythms', body: 'Put daily work in recurring reminders, seasonal work on dated or seasonal schedules, and unusual events in the Field Log. Review Today for immediate work and Calendar for the longer horizon instead of rebuilding one giant checklist.' },
    limitation: 'Homestead Keeper is a personal record and reminder system; it does not provide workforce dispatch, payroll, or regulated task-compliance controls.',
    keywords: ['homestead task tracker', 'homestead chore app', 'homestead chores tracker', 'homestead reminder app', 'farm chore tracker'],
    screenshots: [
      {
        src: 'assets/workflows/today/Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.25.12.webp',
        title: 'Today task list',
        body: 'Review overdue chores, today’s work, field log actions, and inventory alerts.',
        alt: 'Homestead Keeper Today screen showing overdue tasks, today chores, field log shortcuts, recent reminders, and inventory alerts.',
      },
      {
        src: 'assets/workflows/calendar/Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.21.42.webp',
        title: 'Homestead calendar',
        body: 'See upcoming and overdue homestead tasks in calendar context.',
        alt: 'Homestead Keeper calendar month view showing upcoming and overdue homestead tasks.',
      },
    ],
    sections: [
      {
        title: 'Track chores where the work happens',
        body: [
          'Homestead tasks are easier to manage when they stay connected to the coop, garden bed, mower, pump, pantry shelf, animal group, or place that needs attention.',
          'Homestead Keeper lets chores and reminders sit beside the records, logs, documents, costs, and history for the thing being managed.',
        ],
      },
      {
        title: 'Use Today as a daily homestead checklist',
        body: [
          'The Today view surfaces overdue work, chores due now, recent reminders, Field Log shortcuts, and inventory alerts so the day starts with a practical work list.',
          'That makes it useful for feeding checks, egg collection, watering, garden scouting, supply review, equipment work, and other repeated homestead tasks.',
        ],
      },
      {
        title: 'Plan recurring and seasonal work',
        body: [
          'Recurring reminders help with daily, weekly, monthly, quarterly, yearly, and seasonal rhythms without rebuilding the same task over and over.',
          'Calendar and timeline views help longer work stay visible, from breeding milestones and planting windows to maintenance checks and harvest timing.',
        ],
      },
    ],
    relatedFeatures: [
      { title: 'Reminders and calendar', href: '/features/reminders', summary: 'Track recurring chores, overdue work, seasonal tasks, and calendar views.' },
      { title: 'Today workflow', href: '/workflows/today-screen-review', summary: 'See how Today becomes a daily operating checklist.' },
      { title: 'Calendar workflow', href: '/workflows/calendar-demonstration', summary: 'Review homestead tasks across month, week, timeline, and detail views.' },
    ],
  },
  {
    slug: 'homestead-maintenance-app',
    title: 'Homestead Maintenance App | Homestead Keeper',
    eyebrow: 'Maintenance',
    h1: 'Homestead maintenance records for equipment, property systems, coops, wells, and seasonal chores.',
    description:
      'Track homestead maintenance for equipment, coops, fences, gates, wells, pumps, buildings, tools, warranties, service history, reminders, costs, and reports.',
    intro:
      'Homestead Keeper helps rural property owners keep maintenance reminders, repairs, service logs, warranties, costs, documents, and property history connected to the equipment, buildings, and systems they belong to.',
    audience: ['Rural homeowners', 'Small acreage owners', 'Homesteads with equipment', 'Properties with wells, pumps, fences, buildings, and coops'],
    chooseIf: ['Service history is scattered across receipts and notes', 'Recurring property checks are easy to miss', 'Costs, warranties, manuals, and maintenance should stay with each asset'],
    example: { title: 'Track one asset completely', body: 'Add a mower or pump, attach its manual and purchase details, log the last service with cost and parts, then schedule the next inspection. Later reports can show overdue work, service history, costs, vendors, and warranty deadlines together.' },
    limitation: 'Maintenance records do not replace manufacturer instructions, licensed inspections, or professional service where safety, warranty, or law requires them.',
    keywords: ['homestead maintenance app', 'homestead maintenance tracker', 'rural property maintenance app', 'equipment maintenance tracker', 'property maintenance records'],
    screenshots: [
      {
        src: 'assets/screenshots/equipment-detail.webp',
        title: 'Equipment service records',
        body: 'Keep repairs, service, inspection, fuel, costs, photos, and notes on each item.',
        alt: 'Homestead Keeper equipment detail screen for a riding mower with service and repair record fields.',
      },
      {
        src: 'assets/screenshots/report-maintenance.webp',
        title: 'Maintenance overview',
        body: 'Review completed work, overdue reminders, service costs, vendors, trends, and watchlists.',
        alt: 'Homestead Keeper Maintenance Overview report showing health score, upcoming care, watchlist, and maintenance trend chart.',
      },
      {
        src: 'assets/screenshots/report-warranty.webp',
        title: 'Warranty countdown',
        body: 'See expired, upcoming, and later warranty deadlines for equipment and supplies.',
        alt: 'Homestead Keeper Warranty Countdown report showing expired warranties, 90 day warranties, and later warranty items.',
      },
    ],
    sections: [
      {
        title: 'Keep service history attached to the asset',
        body: [
          'A mower repair, coop fix, gate adjustment, pump inspection, filter change, or generator service is most useful when it stays attached to the item or place it belongs to.',
          'Homestead Keeper keeps maintenance notes, costs, reminders, photos, documents, and reports connected so the next repair starts with history instead of guesswork.',
        ],
      },
      {
        title: 'Plan recurring property care',
        body: [
          'Use reminders for oil changes, blade sharpening, fence walks, well checks, water filters, coop cleanouts, irrigation checks, seasonal inspections, and warranty dates.',
          'Overdue work, snoozing, calendar views, and reports help keep small recurring jobs from becoming stressful surprises.',
        ],
      },
      {
        title: 'Review maintenance costs and warranties',
        body: [
          'Maintenance and cost reports help show what has been done, what is coming up, which items are becoming expensive, and what warranty deadlines need attention.',
          'That makes the app useful for seasonal reviews, property handoffs, helper instructions, and long-term replacement planning.',
        ],
      },
    ],
    relatedFeatures: [
      { title: 'Reminders and calendar', href: '/features/reminders', summary: 'Recurring maintenance, seasonal chores, overdue work, and calendar review.' },
      { title: 'Reports', href: '/features/reports', summary: 'Maintenance, cost, warranty, handoff, inventory, and homestead summaries.' },
      { title: 'Checklists workflow', href: '/workflows/checklists-for-items', summary: 'Attach repeatable checklist work to equipment, places, systems, and other items.' },
    ],
  },
];

export const useCaseNavItems = useCases.map(({ slug, eyebrow }) => ({
  href: `/use-cases/${slug}`,
  label: eyebrow,
}));

// Topical relationships, authored rather than derived. Previously the [slug] template
// used .slice(0, 3) on array order, so every page linked to the same first three entries
// regardless of subject (an egg-tracking page linked to gardening).
const relatedSlugMap: Record<string, string[]> = {
  'homestead-management-app': ['homestead-task-tracker', 'homestead-maintenance-app', 'chicken-keepers'],
  'homestead-task-tracker': ['homestead-maintenance-app', 'homestead-management-app', 'chicken-keepers'],
  'homestead-maintenance-app': ['rural-property-owners', 'homestead-task-tracker', 'homestead-management-app'],
  'rural-property-owners': ['homestead-maintenance-app', 'homestead-management-app', 'pantry-inventory'],
  'chicken-keepers': ['gardeners', 'homestead-management-app', 'pantry-inventory'],
  'gardeners': ['pantry-inventory', 'chicken-keepers', 'homestead-management-app'],
  'pantry-inventory': ['gardeners', 'chicken-keepers', 'rural-property-owners'],
};

const GUIDE_CHICKENS = {
  title: 'What records should you keep for chickens?',
  href: '/guides/what-records-to-keep-for-chickens',
  summary: 'The six chicken record types worth keeping, and how much detail each one actually needs.',
};
const GUIDE_EQUIPMENT = {
  title: 'How to keep equipment maintenance records',
  href: '/guides/equipment-maintenance-records',
  summary: 'What to log for each machine, and how to set service intervals you will actually follow.',
};
const GUIDE_CHECKLIST = {
  title: 'How to build a homestead maintenance checklist',
  href: '/guides/homestead-maintenance-checklist',
  summary: 'Turn scattered seasonal jobs into a checklist organized by place, season, and system.',
};
const GUIDE_PLAYBOOK = {
  title: 'How to build a homestead record-keeping system',
  href: '/playbook',
  summary: 'A ten-step setup guide for places, animals, gardens, inventory, reminders, and reports.',
};

const guideMap: Record<string, Array<{ title: string; href: string; summary: string }>> = {
  'homestead-management-app': [GUIDE_PLAYBOOK, GUIDE_CHECKLIST, GUIDE_CHICKENS],
  'homestead-task-tracker': [GUIDE_CHECKLIST, GUIDE_PLAYBOOK],
  'homestead-maintenance-app': [GUIDE_CHECKLIST, GUIDE_EQUIPMENT],
  'rural-property-owners': [GUIDE_CHECKLIST, GUIDE_EQUIPMENT],
  'chicken-keepers': [GUIDE_CHICKENS, GUIDE_PLAYBOOK],
  'gardeners': [GUIDE_PLAYBOOK],
  'pantry-inventory': [GUIDE_PLAYBOOK, GUIDE_CHECKLIST],
};

for (const useCase of useCases) {
  useCase.relatedSlugs = relatedSlugMap[useCase.slug];
  useCase.guides = guideMap[useCase.slug];
}

export const getUseCase = (slug: string) => useCases.find((useCase) => useCase.slug === slug);
