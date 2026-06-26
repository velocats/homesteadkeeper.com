export interface WorkflowShot {
  src: string;
  title: string;
  body: string;
  alt: string;
}

export interface WorkflowGuide {
  slug: string;
  title: string;
  shortTitle: string;
  category: 'Start Here' | 'Plan and Grow' | 'Manage Animals' | 'Operate and Review';
  summary: string;
  outcome: string;
  difficulty: string;
  hero: WorkflowShot;
  steps: { title: string; body: string; shot?: WorkflowShot }[];
  unlocks: string[];
}

const workflowAsset = (folder: string, file: string) => `assets/workflows/${folder}/${file}`;

const global = (file: string) => workflowAsset('global', file);
const addItems = (file: string) => workflowAsset('adding-items-to-hubs', file);
const garden = (file: string) => workflowAsset('garden-layout-plantings', file);
const orchard = (file: string) => workflowAsset('orchard-layout-plantings', file);
const breeding = (file: string) => workflowAsset('breeding', file);
const checklists = (file: string) => workflowAsset('checklists-for-items', file);
const map = (file: string) => workflowAsset('map', file);
const reports = (file: string) => workflowAsset('reports', file);
const calendar = (file: string) => workflowAsset('calendar', file);
const today = (file: string) => workflowAsset('today', file);
const animalProduction = (file: string) => workflowAsset('production-animals', file);
const plantProduction = (file: string) => workflowAsset('production-plants', file);

export const workflowOverviewShots: WorkflowShot[] = [
  {
    src: global('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-24 at 14.44.32.png'),
    title: 'Homestead Hub',
    body: 'Start from the main areas you manage across the whole homestead.',
    alt: 'Homestead Keeper Homestead Hub showing Garden, Animals, Property, Inventory, Orchard, Bees, Equipment, Food and Pantry, Off-grid, Weather and Seasons, Wildlife and Pests, Forestry, and Emergency Prep areas.',
  },
  {
    src: global('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-24 at 14.44.41.png'),
    title: 'Today review',
    body: 'See what is overdue, what is due now, and what changed recently.',
    alt: 'Homestead Keeper Today screen with overdue tasks, today chores, field log actions, recent reminders, and inventory alerts.',
  },
  {
    src: global('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-24 at 14.45.38.png'),
    title: 'Garden timeline',
    body: 'Track planting, growing, harvest windows, frost dates, and seasonal work.',
    alt: 'Garden timeline showing crop rows across months with planting windows, growing periods, harvest windows, frost date, and today marker.',
  },
  {
    src: global('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-24 at 14.46.12.png'),
    title: 'Map view',
    body: 'Review places and records on a real map of the property.',
    alt: 'Homestead Keeper map showing a satellite view of a homestead with labeled places and record markers.',
  },
];

export const workflows: WorkflowGuide[] = [
  {
    slug: 'adding-items-to-hubs',
    title: 'Adding Items to Hubs',
    shortTitle: 'Adding Items',
    category: 'Start Here',
    summary: 'Create animals, beds, equipment, supplies, and places from the right hub.',
    outcome: 'Add a new item, fill in its core details, and see it appear in the right area with its own record page.',
    difficulty: 'Beginner',
    hero: {
      src: addItems('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-24 at 15.04.11.png'),
      title: 'Finished animal record',
      body: 'A saved item becomes its own record with details, actions, and history.',
      alt: 'Animal detail screen for Copper with profile information, photo, and action buttons.',
    },
    steps: [
      {
        title: 'Open the hub for the thing you want to track',
        body: 'Start in the matching hub, such as Animals, Garden, Inventory, Equipment, or Places.',
        shot: {
          src: addItems('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-24 at 15.00.57.png'),
          title: 'Animals hub before adding',
          body: 'The hub shows existing records and the add action.',
          alt: 'Animals hub screen with no animals visible and an add animal action.',
        },
      },
      {
        title: 'Fill in the important details',
        body: 'Add the name, type, location, status, and any notes that will help you find or maintain the record later.',
        shot: {
          src: addItems('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-24 at 15.03.04.png'),
          title: 'New animal form',
          body: 'Core fields keep the item useful without making setup heavy.',
          alt: 'New animal form with fields for name, species, type, status, sex, location, and notes.',
        },
      },
      {
        title: 'Add details only when they matter',
        body: 'Optional tabs and fields let the record grow over time without forcing every detail up front.',
        shot: {
          src: addItems('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-24 at 15.03.11.png'),
          title: 'Optional detail fields',
          body: 'Dates, identifiers, and other details can be added as needed.',
          alt: 'Animal form showing optional detail fields for a goat record.',
        },
      },
      {
        title: 'Save and review the new item',
        body: 'After saving, the item appears in the hub and can receive logs, reminders, checklists, production entries, documents, and reports.',
        shot: {
          src: addItems('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-24 at 15.03.51.png'),
          title: 'Item appears in the hub',
          body: 'The new record is now part of the working homestead.',
          alt: 'Animals hub showing Copper added to the list with quick details and actions.',
        },
      },
    ],
    unlocks: ['A permanent record for the item', 'Linked reminders, logs, and checklists', 'Better calendar, report, and map context'],
  },
  {
    slug: 'garden-layout-plantings',
    title: 'Garden Plantings and Layout',
    shortTitle: 'Garden Layout',
    category: 'Plan and Grow',
    summary: 'Plan raised beds, place crops visually, and connect layouts to planting records.',
    outcome: 'Create a garden layout that shows what is planted where and connects to planting dates, reminders, and harvest history.',
    difficulty: 'Planning',
    hero: {
      src: garden('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-24 at 15.45.13.png'),
      title: 'Planted bed layout',
      body: 'The bed layout makes crop placement easy to inspect.',
      alt: 'Garden layout screen showing crop placements in a raised bed grid.',
    },
    steps: [
      {
        title: 'Start from the Garden hub',
        body: 'Use the Garden area to review crops, beds, records, reminders, and current activity.',
        shot: {
          src: garden('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-24 at 15.39.16.png'),
          title: 'Garden hub overview',
          body: 'The hub keeps growing records, reminders, and recent activity together.',
          alt: 'Garden hub showing crops, current items, field log actions, upcoming work, and recent activity.',
        },
      },
      {
        title: 'Open a bed and review the layout',
        body: 'Each bed can carry its own layout, crop records, notes, and planting history.',
        shot: {
          src: garden('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-24 at 15.43.59.png'),
          title: 'Garden bed layout',
          body: 'Start with the bed shape and planting season.',
          alt: 'Raised Bed 2 layout screen showing an empty grid and layout controls.',
        },
      },
      {
        title: 'Place crops into the bed',
        body: 'Map crop placement visually so the plan is understandable later in the season.',
        shot: {
          src: garden('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-24 at 15.45.13.png'),
          title: 'Crops placed in the grid',
          body: 'A visual layout helps during planting, watering, and harvest.',
          alt: 'Garden bed grid with tomatoes, peppers, paths, and other crop placements.',
        },
      },
      {
        title: 'Connect the plan to planting records',
        body: 'Save plantings with dates and notes so the layout becomes part of the record, not just a drawing.',
        shot: {
          src: garden('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-24 at 15.45.19.png'),
          title: 'Add planting log',
          body: 'Planting details connect the layout to the season.',
          alt: 'Add planting log form with planting date, bed, crop, and notes fields.',
        },
      },
      {
        title: 'Use timeline and calendar views',
        body: 'Planting records help build seasonal timelines and calendar work for the garden.',
        shot: {
          src: garden('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-24 at 15.46.11.png'),
          title: 'Garden timeline',
          body: 'See planting and harvest windows at a glance.',
          alt: 'Garden timeline showing crop schedules, harvest windows, frost date, and today marker.',
        },
      },
    ],
    unlocks: ['Readable bed plans', 'Planting and harvest history', 'Garden reminders and seasonal timelines'],
  },
  {
    slug: 'orchard-layout-plantings',
    title: 'Orchard Plantings and Layout',
    shortTitle: 'Orchard Layout',
    category: 'Plan and Grow',
    summary: 'Place trees and berry rows, track varieties, and connect orchard care to production records.',
    outcome: 'Build an orchard layout and keep tree, row, care, and harvest history connected.',
    difficulty: 'Planning',
    hero: {
      src: orchard('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-24 at 15.59.19.png'),
      title: 'Orchard layout',
      body: 'Tree and row placement gives perennial records a real-world home.',
      alt: 'Orchard layout screen showing a grid with fruit trees and planting positions.',
    },
    steps: [
      {
        title: 'Create or open the orchard area',
        body: 'Use the Orchard area for fruit trees, berries, pruning notes, sprays, yields, and seasonal care.',
        shot: {
          src: orchard('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-24 at 15.55.38.png'),
          title: 'Orchard starting point',
          body: 'Begin with the orchard record before placing plants.',
          alt: 'Orchard screen with empty state and options to add orchard plants or layout details.',
        },
      },
      {
        title: 'Choose the plant type',
        body: 'Add the tree, berry, vine, or other perennial record that belongs in the layout.',
        shot: {
          src: orchard('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-24 at 15.58.52.png'),
          title: 'Fruit type picker',
          body: 'Use plant type choices to keep orchard records organized.',
          alt: 'Fruit type picker showing options such as apple, pear, peach, grape, blueberry, and other fruit plants.',
        },
      },
      {
        title: 'Fill in orchard plant details',
        body: 'Track variety, planting information, location, status, and care notes for each plant.',
        shot: {
          src: orchard('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-24 at 16.00.54.png'),
          title: 'New orchard plant',
          body: 'Variety and care details keep perennial records useful for years.',
          alt: 'New orchard plant form with name, type, variety, planting details, and care fields.',
        },
      },
      {
        title: 'Review the saved orchard record',
        body: 'The orchard hub shows plants, field log actions, upcoming work, and recent activity.',
        shot: {
          src: orchard('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-24 at 16.01.02.png'),
          title: 'Orchard hub with records',
          body: 'Saved plants become part of the orchard workflow.',
          alt: 'Orchard hub showing apple records, field log actions, upcoming work, and recent activity.',
        },
      },
      {
        title: 'Track harvests and production',
        body: 'Orchard records can feed production views and harvest history over time.',
        shot: {
          src: orchard('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-25 at 10.26.49.png'),
          title: 'Orchard production',
          body: 'Harvest history turns care records into seasonal output.',
          alt: 'Harvested production view showing fruit harvest entries and production totals.',
        },
      },
    ],
    unlocks: ['Long-term tree and berry records', 'Seasonal care reminders', 'Orchard harvest history'],
  },
  {
    slug: 'animal-breeding',
    title: 'Animal Breeding',
    shortTitle: 'Animal Breeding',
    category: 'Manage Animals',
    summary: 'Create breeding records, track milestones, and review upcoming breeding dates on the calendar.',
    outcome: 'Record a breeding event and follow the expected dates through animal records, timelines, and calendar views.',
    difficulty: 'Intermediate',
    hero: {
      src: breeding('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-25 at 10.33.56.png'),
      title: 'Breeding timeline',
      body: 'Milestones make longer animal workflows easier to follow.',
      alt: 'Breeding timeline showing expected dates and milestone bars on a calendar timeline.',
    },
    steps: [
      {
        title: 'Open the animal record',
        body: 'Start from the animal or group that should carry the breeding history.',
        shot: {
          src: breeding('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-25 at 10.32.27.png'),
          title: 'Animal detail',
          body: 'Breeding lives alongside care, health, production, and notes.',
          alt: 'Animal detail screen for Clover with photo, summary, actions, and record sections.',
        },
      },
      {
        title: 'Add a breeding record',
        body: 'Choose the breeding type, date, partner, and notes that describe the event.',
        shot: {
          src: breeding('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-25 at 10.32.40.png'),
          title: 'Breeding type selection',
          body: 'The event starts with the breeding record type.',
          alt: 'Breeding record sheet with options for breeding type.',
        },
      },
      {
        title: 'Save expected dates',
        body: 'Expected dates turn the record into actionable follow-up work.',
        shot: {
          src: breeding('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-25 at 10.33.39.png'),
          title: 'Breeding record details',
          body: 'Dates and notes help future checks make sense.',
          alt: 'Breeding record form with service date, expected due date, and notes fields.',
        },
      },
      {
        title: 'Review calendar impact',
        body: 'Breeding milestones can appear in calendar views so important windows do not disappear into notes.',
        shot: {
          src: breeding('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-25 at 10.33.51.png'),
          title: 'Calendar month',
          body: 'Breeding work is visible beside other homestead tasks.',
          alt: 'Calendar month view showing breeding-related dates and tasks.',
        },
      },
      {
        title: 'Close the loop with follow-up notes',
        body: 'As the timeline progresses, record observations, outcomes, and care details on the animal history.',
        shot: {
          src: breeding('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-25 at 10.34.51.png'),
          title: 'Follow-up record',
          body: 'Outcome notes keep breeding history useful next season.',
          alt: 'Pregnancy details record with status, expected date, notes, and linked animal record.',
        },
      },
    ],
    unlocks: ['Breeding history per animal', 'Calendar milestones', 'Better handoff and seasonal planning'],
  },
  {
    slug: 'checklists-for-items',
    title: 'Checklists for Items',
    shortTitle: 'Checklists',
    category: 'Operate and Review',
    summary: 'Attach repeatable checklist work to equipment, places, systems, and other items.',
    outcome: 'Create a checklist on an item, complete it, and keep the result in the item history.',
    difficulty: 'Daily use',
    hero: {
      src: checklists('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-25 at 13.06.23.png'),
      title: 'Completed checklist record',
      body: 'Completed checklist work stays with the item.',
      alt: 'Riding mower checklist screen showing a completed maintenance checklist entry.',
    },
    steps: [
      {
        title: 'Open the item that needs repeatable work',
        body: 'Checklists are most useful on equipment, places, buildings, water systems, coops, and other recurring work.',
        shot: {
          src: checklists('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-25 at 11.18.38.png'),
          title: 'Riding mower item',
          body: 'The checklist belongs with the item it maintains.',
          alt: 'Riding mower detail screen with photo and action buttons.',
        },
      },
      {
        title: 'Create a checklist',
        body: 'Add the checklist name, cadence, and the steps that need to be done.',
        shot: {
          src: checklists('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-25 at 13.03.37.png'),
          title: 'Checklist setup',
          body: 'Checklist tasks can be tailored to the item.',
          alt: 'Checklist form showing maintenance tasks and reminder options for a riding mower.',
        },
      },
      {
        title: 'Save reminders when needed',
        body: 'Scheduled checklist work can show up in the calendar so recurring maintenance does not rely on memory.',
        shot: {
          src: checklists('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-25 at 13.05.09.png'),
          title: 'Reminder schedule',
          body: 'Repeat settings turn a checklist into a maintenance rhythm.',
          alt: 'Reminder setup screen for equipment maintenance with repeat options.',
        },
      },
      {
        title: 'Complete checklist tasks',
        body: 'Mark each task as done and keep notes when something needs attention.',
        shot: {
          src: checklists('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-25 at 13.06.11.png'),
          title: 'Checklist in progress',
          body: 'Each item can be checked off during the work.',
          alt: 'Checklist completion sheet with multiple maintenance tasks and toggle controls.',
        },
      },
      {
        title: 'Review it on the calendar',
        body: 'Calendar visibility keeps item work connected to the rest of the homestead schedule.',
        shot: {
          src: checklists('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-25 at 13.07.21.png'),
          title: 'Checklist on calendar',
          body: 'Completed and upcoming checklist work appears beside other tasks.',
          alt: 'Calendar month view showing equipment checklist tasks and maintenance work.',
        },
      },
    ],
    unlocks: ['Repeatable care steps', 'Maintenance history', 'Calendar visibility for recurring item work'],
  },
  {
    slug: 'map-usage',
    title: 'Map Usage',
    shortTitle: 'Map',
    category: 'Start Here',
    summary: 'Use the map to see places, systems, and homestead records in real-world context.',
    outcome: 'Move from a flat list of records to a spatial view of the property.',
    difficulty: 'Beginner',
    hero: {
      src: map('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-25 at 13.20.20.png'),
      title: 'Homestead map',
      body: 'Map markers help connect records to real places.',
      alt: 'Satellite map of a homestead with colored markers for places and records.',
    },
    steps: [
      {
        title: 'Open the map view',
        body: 'The map starts with the property area and the records that have location context.',
        shot: {
          src: map('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-25 at 13.11.16.png'),
          title: 'Map starting view',
          body: 'Start with the property layout.',
          alt: 'Map view showing a simple property map with roads and structures.',
        },
      },
      {
        title: 'Switch to satellite context',
        body: 'Satellite imagery helps make buildings, fields, rows, and systems easier to place.',
        shot: {
          src: map('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-25 at 13.11.24.png'),
          title: 'Satellite map',
          body: 'Aerial context makes property records easier to understand.',
          alt: 'Satellite map showing barns, fields, driveway, and property structures.',
        },
      },
      {
        title: 'Review marked places',
        body: 'Markers show where key places, systems, and records live on the homestead.',
        shot: {
          src: map('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-25 at 13.20.20.png'),
          title: 'Map with markers',
          body: 'Markers turn the homestead into a navigable record system.',
          alt: 'Satellite map with multiple colored markers across the homestead property.',
        },
      },
      {
        title: 'Open details from the map',
        body: 'Map popovers help move from a location to the record that explains what is there.',
        shot: {
          src: map('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-25 at 13.20.34.png'),
          title: 'Map places list',
          body: 'Use map context to jump into records.',
          alt: 'Map screen with a manage places popover listing homestead places and statuses.',
        },
      },
    ],
    unlocks: ['Spatial record context', 'Faster place lookup', 'Clearer property handoff information'],
  },
  {
    slug: 'reports-demonstration',
    title: 'Reports Demonstration',
    shortTitle: 'Reports',
    category: 'Operate and Review',
    summary: 'Review summaries for health, cost, production, inventory, maintenance, and warranties.',
    outcome: 'Use reports to turn daily records into useful seasonal and monthly review material.',
    difficulty: 'Review',
    hero: {
      src: reports('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.08.32.png'),
      title: 'Homestead summary',
      body: 'A high-level report gives you a quick read on the whole homestead.',
      alt: 'Homestead Summary report showing health score, floor plan metrics, and activity by type.',
    },
    steps: [
      {
        title: 'Start with the Homestead Summary',
        body: 'Use the summary report to see broad activity, health, and records across the homestead.',
        shot: {
          src: reports('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.08.32.png'),
          title: 'Summary report',
          body: 'Start with the big picture.',
          alt: 'Homestead Summary report showing health score and activity by type.',
        },
      },
      {
        title: 'Review costs',
        body: 'Cost reports help separate income, expenses, repairs, and replacement values.',
        shot: {
          src: reports('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.09.54.png'),
          title: 'Cost summary',
          body: 'Costs become easier to understand by category and trend.',
          alt: 'Cost Summary report showing metrics, spending trends, and category charts.',
        },
      },
      {
        title: 'Check inventory and supplies',
        body: 'Inventory reports surface low stock, expiring supplies, and supply trends.',
        shot: {
          src: reports('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.10.30.png'),
          title: 'Inventory report',
          body: 'Supplies become part of routine review.',
          alt: 'Inventory report showing overview metrics, supply levels, low stock, and expiring items.',
        },
      },
      {
        title: 'Compare production',
        body: 'Production reports show eggs, milk, honey, harvests, and other output over time.',
        shot: {
          src: reports('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.12.40.png'),
          title: 'Production report',
          body: 'Production records become patterns instead of isolated notes.',
          alt: 'Homestead Production report with filter controls, item list, and production charts.',
        },
      },
      {
        title: 'Review maintenance and warranties',
        body: 'Maintenance and warranty reports help catch overdue work, watchlists, and replacement timing.',
        shot: {
          src: reports('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.13.24.png'),
          title: 'Maintenance overview',
          body: 'Maintenance reports turn chores into operating history.',
          alt: 'Maintenance Overview report showing health score, upcoming work, and maintenance trend chart.',
        },
      },
    ],
    unlocks: ['Monthly and seasonal review', 'Better cost and production visibility', 'Export-ready records with Pro'],
  },
  {
    slug: 'calendar-demonstration',
    title: 'Calendar Demonstration',
    shortTitle: 'Calendar',
    category: 'Operate and Review',
    summary: 'Use month, week, timeline, and detail views to keep homestead work visible.',
    outcome: 'See garden, animal, equipment, breeding, and checklist work in one calendar system.',
    difficulty: 'Daily use',
    hero: {
      src: calendar('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.21.42.png'),
      title: 'Calendar month',
      body: 'Month view keeps the whole homestead rhythm visible.',
      alt: 'Calendar month view showing upcoming and overdue homestead tasks.',
    },
    steps: [
      {
        title: 'Review the month',
        body: 'Start with a broad view of overdue work, due dates, and upcoming tasks.',
        shot: {
          src: calendar('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.21.42.png'),
          title: 'Month view',
          body: 'Use the month to spot workload patterns.',
          alt: 'Calendar month view with task list beneath the month grid.',
        },
      },
      {
        title: 'Narrow the view',
        body: 'Move between views or filtered dates when you need a more focused work list.',
        shot: {
          src: calendar('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.21.50.png'),
          title: 'Focused calendar range',
          body: 'Focused ranges make upcoming work easier to act on.',
          alt: 'Calendar view showing a highlighted week and matching task list.',
        },
      },
      {
        title: 'Use category timelines',
        body: 'Timeline views work well for breeding, garden plans, and longer seasonal windows.',
        shot: {
          src: calendar('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.24.10.png'),
          title: 'Timeline view',
          body: 'Long-running workflows become readable at a glance.',
          alt: 'Calendar timeline showing breeding and milestone bars across dates.',
        },
      },
      {
        title: 'Review garden timing',
        body: 'Garden timelines keep seed starts, planting windows, growing periods, harvest windows, and frost dates together.',
        shot: {
          src: calendar('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.24.29.png'),
          title: 'Garden timeline',
          body: 'Seasonal work stays visible across months.',
          alt: 'Garden timeline showing crop schedules with planting, growing, harvest, frost, and today markers.',
        },
      },
      {
        title: 'Open a task detail',
        body: 'Task details keep the date, linked item, notes, status, and actions in one place.',
        shot: {
          src: calendar('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.32.02.png'),
          title: 'Calendar item detail',
          body: 'Calendar work can be tied back to records.',
          alt: 'Calendar task detail showing category, priority, assigned record, due date, notes, and update action.',
        },
      },
    ],
    unlocks: ['One place for homestead dates', 'Overdue and upcoming work visibility', 'Timeline views for seasonal workflows'],
  },
  {
    slug: 'today-screen-review',
    title: 'Today Screen Review',
    shortTitle: 'Today Screen',
    category: 'Start Here',
    summary: 'Use Today to check overdue tasks, chores, recent activity, inventory alerts, and what needs attention.',
    outcome: 'Turn a daily glance into a practical work list for the homestead.',
    difficulty: 'Beginner',
    hero: {
      src: today('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.25.12.png'),
      title: 'Today screen',
      body: 'Today collects the work that needs attention now.',
      alt: 'Today screen showing overdue tasks, chores, field log shortcuts, recent reminders, and inventory alerts.',
    },
    steps: [
      {
        title: 'Start with overdue and due work',
        body: 'The top of Today shows the items most likely to need attention first.',
        shot: {
          src: today('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.25.12.png'),
          title: 'Overdue and due tasks',
          body: 'Start the day with the work that cannot drift.',
          alt: 'Today screen showing overdue and today chore cards.',
        },
      },
      {
        title: 'Review inventory alerts',
        body: 'Low stock and expiring items can surface during daily review instead of surprising you later.',
        shot: {
          src: today('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.25.28.png'),
          title: 'Inventory alerts',
          body: 'Supplies stay connected to daily operations.',
          alt: 'Today screen showing inventory alerts and recent expiring or low stock items.',
        },
      },
      {
        title: 'Use Field Log shortcuts',
        body: 'Field Log actions are quick entry points for records you need to capture during chores.',
        shot: {
          src: today('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.25.55.png'),
          title: 'Field Log actions',
          body: 'Capture work while it is fresh.',
          alt: 'Today screen showing Field Log action buttons for different homestead record types.',
        },
      },
      {
        title: 'Complete work from Today',
        body: 'Update a task directly as the work is finished.',
        shot: {
          src: today('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.27.41.png'),
          title: 'Complete a task',
          body: 'Today can move from review to action.',
          alt: 'Task completion panel on the Today screen with completion notes and update controls.',
        },
      },
      {
        title: 'Confirm the updated state',
        body: 'After completion, Today reflects the changed task list and recent activity.',
        shot: {
          src: today('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.27.54.png'),
          title: 'Updated Today view',
          body: 'The daily list stays current as work is completed.',
          alt: 'Today screen after task completion showing updated reminders and inventory sections.',
        },
      },
    ],
    unlocks: ['A daily operating checklist', 'Quick Field Log capture', 'Fewer missed reminders and low-stock surprises'],
  },
  {
    slug: 'animal-production',
    title: 'Production Demonstration for Animals',
    shortTitle: 'Animal Production',
    category: 'Manage Animals',
    summary: 'Record eggs, milk, honey, weights, and other animal production over time.',
    outcome: 'Add a production record and review trends, history, and report context.',
    difficulty: 'Daily use',
    hero: {
      src: animalProduction('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.32.48.png'),
      title: 'Animal production chart',
      body: 'Production entries become trends and history.',
      alt: 'Animal production screen showing a chart and production record history.',
    },
    steps: [
      {
        title: 'Open the animal or group',
        body: 'Start from the animal record that owns the production history.',
        shot: {
          src: animalProduction('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.29.06.png'),
          title: 'Animal record',
          body: 'Production sits beside the animal history.',
          alt: 'Dairy goat herd detail screen with tabs and recent records.',
        },
      },
      {
        title: 'Add a production entry',
        body: 'Record quantity, date, unit, and notes for the output you are tracking.',
        shot: {
          src: animalProduction('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.32.42.png'),
          title: 'Production entry form',
          body: 'Fast entry keeps daily records lightweight.',
          alt: 'Add production form for a dairy goat herd with date, amount, unit, and notes fields.',
        },
      },
      {
        title: 'Review the chart and history',
        body: 'Saved entries create a production history that can reveal changes across time.',
        shot: {
          src: animalProduction('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.32.48.png'),
          title: 'Saved production',
          body: 'Entries become readable patterns.',
          alt: 'Production chart and history list for animal production records.',
        },
      },
      {
        title: 'Use reports for broader review',
        body: 'Production records can also appear in homestead-level reports.',
        shot: {
          src: animalProduction('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.33.53.png'),
          title: 'Production report context',
          body: 'Animal output can be reviewed alongside other production.',
          alt: 'Homestead production report showing animal production rows and chart context.',
        },
      },
    ],
    unlocks: ['Animal production history', 'Trend visibility', 'Production report data'],
  },
  {
    slug: 'plant-harvests',
    title: 'Harvest Demonstration for Plants',
    shortTitle: 'Plant Harvests',
    category: 'Plan and Grow',
    summary: 'Record plant harvests and review harvest totals from plants, gardens, and reports.',
    outcome: 'Capture a harvest and connect it to plant history, timelines, and production reports.',
    difficulty: 'Daily use',
    hero: {
      src: plantProduction('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.36.45.png'),
      title: 'Harvest production',
      body: 'Harvests become production records you can review later.',
      alt: 'Harvested production screen showing tomato harvest entries and production chart.',
    },
    steps: [
      {
        title: 'Open the plant or crop record',
        body: 'Start from the plant, bed, crop, or orchard record that produced the harvest.',
        shot: {
          src: plantProduction('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.35.21.png'),
          title: 'Tomatoes record',
          body: 'The crop record keeps harvest context nearby.',
          alt: 'Tomatoes record screen with photo, summary details, and action buttons.',
        },
      },
      {
        title: 'Add harvest details',
        body: 'Record quantity, unit, date, and notes so the harvest is useful later.',
        shot: {
          src: plantProduction('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.35.52.png'),
          title: 'Harvest entry form',
          body: 'A harvest entry captures what came in and when.',
          alt: 'Tomatoes harvest form with quantity, unit, date, and notes fields.',
        },
      },
      {
        title: 'Review harvested production',
        body: 'Saved harvests become charted production and searchable history.',
        shot: {
          src: plantProduction('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.36.01.png'),
          title: 'Harvest chart',
          body: 'Harvest records become visible output.',
          alt: 'Harvested production screen with tomato harvest chart and history.',
        },
      },
      {
        title: 'Compare harvests over time',
        body: 'Production views help compare harvest totals across dates, plants, and seasons.',
        shot: {
          src: plantProduction('Simulator Screenshot - iPad Air 13-inch (M3) - 2026-06-26 at 10.36.45.png'),
          title: 'Harvest history',
          body: 'Harvest history supports seasonal review.',
          alt: 'Harvested production report showing harvest records and totals.',
        },
      },
    ],
    unlocks: ['Crop harvest history', 'Production trends', 'Better seasonal garden review'],
  },
];

export const plannedWorkflows = [
  {
    slug: 'import-excel-csv',
    title: 'Import Data From Excel/CSV',
    summary: 'A future walkthrough for bringing existing spreadsheet records into Homestead Keeper.',
  },
] as const;

export const workflowNavItems = [
  ...workflows.map(({ slug, shortTitle }) => ({
    href: `/workflows/${slug}`,
    label: shortTitle,
  })),
  { href: '/workflows/import-excel-csv', label: 'Import CSV' },
];
