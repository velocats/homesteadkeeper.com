export interface UseCase {
  slug: string;
  title: string;
  eyebrow: string;
  h1: string;
  description: string;
  intro: string;
  audience: string[];
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
    title: 'Homestead Management App for iPhone, iPad, and Mac | Homestead Keeper',
    eyebrow: 'Homestead management',
    h1: 'A homestead management app for animals, gardens, inventory, property, and seasonal work.',
    description:
      'Homestead Keeper is a homestead management app for tracking animals, gardens, inventory, equipment, property records, reminders, reports, and small-acreage work.',
    intro:
      'Homestead Keeper helps bring the daily pieces of a homestead together: animal care, garden beds, orchard work, equipment maintenance, pantry inventory, property places, reminders, reports, and exports.',
    audience: ['Backyard homesteads', 'Small acreage properties', 'Hobby farms', 'Rural homeowners managing mixed records'],
    keywords: ['homestead management app', 'homestead record keeping app', 'homestead planner app', 'small acreage management app'],
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
    ],
    relatedFeatures: [
      { title: 'Features overview', href: '/features', summary: 'See animals, growing, property, home, planning, reports, and exports.' },
      { title: 'Workflows', href: '/workflows', summary: 'Walk through common map, garden, animal, report, calendar, and import tasks.' },
      { title: 'Hobby farms', href: '/use-cases/hobby-farms', summary: 'See how Homestead Keeper fits mixed hobby farm and small-acreage records.' },
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
    keywords: ['chicken flock record keeping app', 'egg production tracker', 'chicken care reminders', 'backyard chicken app'],
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
    keywords: ['garden planning app', 'garden bed layout app', 'garden harvest tracker', 'planting record app'],
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
    slug: 'hobby-farms',
    title: 'Hobby Farm Management App | Homestead Keeper',
    eyebrow: 'Hobby farms',
    h1: 'A calmer way to manage mixed hobby farm records.',
    description:
      'Use Homestead Keeper as a hobby farm management app for animals, gardens, equipment, inventory, reminders, reports, and small-property records.',
    intro:
      'Homestead Keeper is designed for small acreage and hobby farm record keeping, especially when animals, gardens, equipment, inventory, and seasonal property work all overlap.',
    audience: ['Hobby farms', 'Small acreage properties', 'Mixed homesteads', 'Rural homeowners with animals and gardens'],
    keywords: ['hobby farm management app', 'small farm record keeping app', 'homestead management app', 'small acreage record keeping'],
    sections: [
      {
        title: 'Manage more than one kind of work',
        body: [
          'Many hobby farms do not need enterprise farm software, but they do need better records than scattered notes and spreadsheets.',
          'Homestead Keeper brings animals, garden beds, orchards, equipment, supplies, places, reminders, and reports into one Apple-device app.',
        ],
      },
      {
        title: 'Keep records attached to the right place or item',
        body: [
          'Records are easier to find when they live with the flock, raised bed, mower, pump, pantry shelf, hive, pasture, or building they belong to.',
          'This helps with seasonal handoffs, maintenance history, health notes, production totals, and planning.',
        ],
      },
      {
        title: 'Review what happened over time',
        body: [
          'Reports turn routine logs into summaries for animal care, production, inventory, cost, maintenance, and homestead activity.',
          'The goal is practical visibility without forcing a small homestead into complicated business software.',
        ],
      },
    ],
    relatedFeatures: [
      { title: 'Features overview', href: '/features', summary: 'See animals, growing, property, home, planning, reports, and exports.' },
      { title: 'Workflows', href: '/workflows', summary: 'Walk through common setup, garden, animal, map, report, and calendar tasks.' },
      { title: 'Pricing', href: '/pricing', summary: 'Try free with up to 20 items, then upgrade when your records grow.' },
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
    keywords: ['rural property management app', 'equipment maintenance tracker', 'property maintenance app', 'small acreage management app'],
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
    keywords: ['homestead task tracker', 'homestead chore app', 'homestead chores tracker', 'homestead reminder app', 'farm chore tracker'],
    screenshots: [
      {
        src: 'assets/workflows/today/Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.25.12.png',
        title: 'Today task list',
        body: 'Review overdue chores, today’s work, field log actions, and inventory alerts.',
        alt: 'Homestead Keeper Today screen showing overdue tasks, today chores, field log shortcuts, recent reminders, and inventory alerts.',
      },
      {
        src: 'assets/workflows/calendar/Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.21.42.png',
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
    title: 'Homestead Maintenance App for Equipment and Property | Homestead Keeper',
    eyebrow: 'Maintenance',
    h1: 'Homestead maintenance records for equipment, property systems, coops, wells, and seasonal chores.',
    description:
      'Track homestead maintenance for equipment, coops, fences, gates, wells, pumps, buildings, tools, warranties, service history, reminders, costs, and reports.',
    intro:
      'Homestead Keeper helps rural property owners keep maintenance reminders, repairs, service logs, warranties, costs, documents, and property history connected to the equipment, buildings, and systems they belong to.',
    audience: ['Rural homeowners', 'Small acreage owners', 'Homesteads with equipment', 'Properties with wells, pumps, fences, buildings, and coops'],
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
  {
    slug: 'chicken-egg-tracker',
    title: 'Chicken Egg Tracker and Flock Records App | Homestead Keeper',
    eyebrow: 'Egg tracker',
    h1: 'Track chicken eggs, flock care, feed, health notes, and coop work in one app.',
    description:
      'Use Homestead Keeper as a chicken egg tracker and flock record app for egg counts, production history, feed notes, care reminders, coop maintenance, breeding, and health records.',
    intro:
      'Homestead Keeper helps chicken keepers track egg counts and flock history while keeping feed inventory, coop maintenance, care reminders, health notes, and reports connected to the rest of the homestead.',
    audience: ['Backyard chicken keepers', 'Small flock owners', 'Homestead egg producers', 'Families tracking flock care'],
    keywords: ['chicken egg tracker', 'egg production tracker', 'chicken egg count app', 'chicken flock records', 'backyard chicken tracker'],
    screenshots: [
      {
        src: 'assets/screenshots/animal-production.webp',
        title: 'Egg production tracking',
        body: 'Record egg counts and review totals, charts, uses, sales, and history.',
        alt: 'Homestead Keeper animal production screen showing egg totals, a 14 day bar chart, and production history rows.',
      },
      {
        src: 'assets/screenshots/animal-summary.webp',
        title: 'Flock record',
        body: 'Keep flock care, records, production, photos, health, and breeding notes together.',
        alt: 'Homestead Keeper animal detail screen with summary, records, production, photos, care, pedigree, and breeding tabs.',
      },
    ],
    sections: [
      {
        title: 'Log egg counts and production history',
        body: [
          'Record daily egg counts, production notes, uses, sales, storage, and flock observations while the details are still fresh.',
          'Production history makes it easier to notice seasonal patterns, changes after a molt, feed changes, weather shifts, or health issues.',
        ],
      },
      {
        title: 'Connect eggs to flock care',
        body: [
          'Egg records are more useful when they live near care reminders, health notes, feed changes, coop work, breeding records, and photos.',
          'That context helps explain changes in production without keeping a separate spreadsheet, notebook, and reminder app.',
        ],
      },
      {
        title: 'Manage chickens as part of the whole homestead',
        body: [
          'Feed inventory, bedding, medicine, coop maintenance, costs, reports, calendar work, and garden harvests can live in the same system as chicken records.',
          'That makes Homestead Keeper a stronger fit for backyard homesteads than a single-purpose egg counter.',
        ],
      },
    ],
    relatedFeatures: [
      { title: 'Animal records', href: '/features/animals', summary: 'Care, health, production, breeding, pedigree, photos, documents, and reports.' },
      { title: 'Chicken keepers', href: '/use-cases/chicken-keepers', summary: 'Track flock records, egg production, care reminders, coop maintenance, and feed notes.' },
      { title: 'Animal production workflow', href: '/workflows/animal-production', summary: 'See how production entries become trends and history.' },
    ],
  },
  {
    slug: 'garden-harvest-tracker',
    title: 'Garden Harvest Tracker and Planting Log App | Homestead Keeper',
    eyebrow: 'Harvest tracker',
    h1: 'Track garden harvests, plantings, bed layouts, crop history, and seasonal garden work.',
    description:
      'Use Homestead Keeper as a garden harvest tracker and planting log for raised beds, crop placement, harvest totals, garden timelines, pest notes, soil work, and seasonal reports.',
    intro:
      'Homestead Keeper connects garden bed layouts, planting records, harvest totals, crop notes, reminders, timelines, and reports so each season becomes easier to review.',
    audience: ['Homestead gardeners', 'Raised bed gardeners', 'Food preservation households', 'Orchard and berry growers'],
    keywords: ['garden harvest tracker', 'garden planting log app', 'homestead garden app', 'garden bed layout app', 'vegetable harvest tracker'],
    screenshots: [
      {
        src: 'assets/screenshots/garden-bed-layout.webp',
        title: 'Garden bed map',
        body: 'Plan raised beds and crop placement before planting day.',
        alt: 'Homestead Keeper garden bed layout showing crops assigned to a grid and a prompt to log the layout as planting.',
      },
      {
        src: 'assets/screenshots/garden-timeline.webp',
        title: 'Garden timeline',
        body: 'See planting, growing, harvest windows, frost dates, and today markers by crop.',
        alt: 'Homestead Keeper garden timeline showing crops with seed start, growing, and harvest windows.',
      },
    ],
    sections: [
      {
        title: 'Track what was planted where',
        body: [
          'Garden bed layouts help you map raised beds, plots, rows, and crop placement by season so planting plans stay understandable after the busy part of spring.',
          'Planting records can capture crop, variety, date, location, notes, and care history for better rotation and planning later.',
        ],
      },
      {
        title: 'Turn harvest notes into useful totals',
        body: [
          'Harvest records help track crop, quantity, unit, date, and notes, making the harvest log more useful than a scattered notebook entry.',
          'Over time, harvest totals help show what produced well, what underperformed, and what belongs in next year’s seed order or preservation plan.',
        ],
      },
      {
        title: 'Review the season, not just individual entries',
        body: [
          'Timelines, reminders, and reports help connect planting dates, pest pressure, soil amendments, treatments, harvests, costs, and seasonal work.',
          'That gives homestead gardeners a clearer record of what happened and what to adjust next year.',
        ],
      },
    ],
    relatedFeatures: [
      { title: 'Garden features', href: '/features/garden', summary: 'Garden bed layouts, planting records, harvests, timelines, and reports.' },
      { title: 'Garden workflow', href: '/workflows/garden-layout-plantings', summary: 'See how garden layouts connect to planting records.' },
      { title: 'Plant harvest workflow', href: '/workflows/plant-harvests', summary: 'Record plant harvests and review harvest totals from plants, gardens, and reports.' },
    ],
  },
];

export const useCaseNavItems = useCases.map(({ slug, eyebrow }) => ({
  href: `/use-cases/${slug}`,
  label: eyebrow,
}));

export const getUseCase = (slug: string) => useCases.find((useCase) => useCase.slug === slug);
