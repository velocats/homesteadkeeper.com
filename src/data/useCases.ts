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
];

export const useCaseNavItems = useCases.map(({ slug, eyebrow }) => ({
  href: `/use-cases/${slug}`,
  label: eyebrow,
}));

export const getUseCase = (slug: string) => useCases.find((useCase) => useCase.slug === slug);
