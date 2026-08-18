export interface GuideSection {
  title: string;
  body?: string[];
  list?: string[];
}

export interface Guide {
  slug: string;
  title: string;
  h1: string;
  description: string;
  eyebrow: string;
  /** Short answer shown before the body. Keeps the question answered in the first screenful. */
  answer: string;
  intro: string;
  sections: GuideSection[];
  /** Honest scope limit. Rendered as a visible caveat, never omitted. */
  limitation: string;
  video?: {
    videoId: string;
    title: string;
    iframeTitle: string;
    description: string;
  };
  /** Curated, not sliced. Every link must be topically earned. */
  related: Array<{ title: string; href: string; summary: string }>;
  keywords: string[];
}

export const guides: Guide[] = [
  {
    slug: 'what-records-to-keep-for-chickens',
    title: 'What Records Should You Keep for Chickens? | Homestead Keeper',
    h1: 'What records should you keep for chickens?',
    description:
      'The chicken records worth keeping: flock details, egg production, feed and cost, health and treatments, coop maintenance, and how much detail is useful.',
    eyebrow: 'Guide',
    answer:
      'For most backyard flocks, six record types cover almost everything useful: flock composition, egg production, feed and cost, health and treatments, coop and equipment maintenance, and breeding or hatching if you raise your own birds. Everything else is optional.',
    intro:
      'Chicken keepers usually start recording nothing, then briefly try to record everything, then stop. The records that survive are the ones that answer a real question later. This guide covers what those are and how much detail each one actually needs.',
    sections: [
      {
        title: '1. Flock composition',
        body: [
          'Know what you have. Breed, hatch date or purchase date, source, and count per group are enough for most flocks, and they answer questions that come up constantly: how old the layers are, which birds came from which hatchery, and when a group is due to slow down.',
          'Individual records make sense for a small flock or for birds you can tell apart. For larger flocks, tracking by group is far more sustainable than naming forty hens.',
        ],
      },
      {
        title: '2. Egg production',
        body: [
          'A daily egg count is the single most useful chicken record, and the easiest to keep. Over time it shows the seasonal curve, the effect of a molt, the drop that comes with short winter days, and the point at which a group of layers is no longer paying its feed bill.',
          'Daily counts are ideal, but a count logged most days still gives a usable trend. Precision matters less than consistency.',
        ],
      },
      {
        title: '3. Feed and cost',
        body: [
          'Record feed purchases with quantity, cost, and date. Two things follow from that: you learn your real cost per dozen, and you learn your consumption rate, which is what tells you when to buy again before you run out.',
          'If you sell eggs, this is also the only honest basis for pricing them.',
        ],
      },
      {
        title: '4. Health and treatments',
        body: [
          'This is the record most worth having and least likely to exist. Worth logging: symptoms and the date you first noticed them, treatments given with dose and date, vaccinations, mite or worm treatments, injuries, deaths and a probable cause, and any withdrawal period that affects eggs or meat.',
          'A treatment date is not useful on its own. It becomes useful when you can find it three weeks later to confirm a withdrawal period has passed, or next year when the same problem shows up in the same month.',
        ],
      },
      {
        title: '5. Coop and equipment maintenance',
        body: [
          'Deep cleans, bedding changes, repairs to runs and fencing, predator incidents, and waterer or feeder maintenance are all worth a dated line. Predator records in particular tend to reveal a pattern nobody noticed while it was happening.',
        ],
      },
      {
        title: '6. Breeding and hatching',
        body: [
          'If you hatch your own, record the set date, source of eggs, lockdown date, hatch date, number set versus number hatched, and which pairings produced them. Hatch rate is only meaningful when you can compare it to previous attempts.',
        ],
      },
      {
        title: 'How much detail is too much',
        body: [
          'A record you will not maintain is worse than no record, because you will not trust the gaps. If you are starting from nothing, keep egg counts and a health log for one season and add nothing else. Those two carry most of the value.',
          'The useful test for any new record type: name the decision it will inform. If you cannot, skip it.',
        ],
      },
      {
        title: 'Where Homestead Keeper fits',
        body: [
          'Homestead Keeper keeps these records attached to the flock or bird they belong to rather than in separate lists. Egg counts go in as production records and roll up into charts and totals. Treatments and health notes live on the animal record with dates. Care work becomes recurring reminders whose completions turn into history, and feed is tracked as inventory with low-stock visibility.',
          'It runs on iPhone, iPad, and Mac with records stored on your devices, which matters because most chicken records get entered standing in a coop with no signal.',
        ],
      },
    ],
    limitation:
      'This guide is about record keeping, not poultry health. It does not provide veterinary advice, diagnoses, treatment or dosage recommendations, or food-safety guidance. Consult a veterinarian or your state extension service for those.',
    related: [
      { title: 'Animal records', href: '/features/animals', summary: 'Profiles, groups, daily care, medical records, breeding, pedigree, production, and weights.' },
      { title: 'Chicken flock records', href: '/use-cases/chicken-keepers', summary: 'Flock records, egg tracking, care reminders, and coop work in one place.' },
      { title: 'Build a record system', href: '/playbook', summary: 'A ten-step guide to setting up homestead records that you will actually keep.' },
    ],
    keywords: [
      'what records should I keep for chickens',
      'chicken record keeping',
      'egg production log',
      'chicken health records',
      'backyard flock records',
    ],
  },
  {
    slug: 'equipment-maintenance-records',
    title: 'How to Keep Equipment Maintenance Records | Homestead Keeper',
    h1: 'How to keep equipment maintenance records',
    description:
      'What to record for each machine, how to set service intervals you will follow, and how history helps with repair-or-replace decisions.',
    eyebrow: 'Guide',
    answer:
      'Give every machine one record, log every service and repair with a date and cost, and attach service intervals as recurring reminders rather than trusting memory. Those three habits produce a maintenance history that pays for itself the first time something breaks.',
    intro:
      'Most homestead equipment records live in three places: the manual in a drawer, a receipt in a truck, and a memory of roughly when the oil was last changed. That works until a machine fails in a season you cannot afford to lose it, or until you try to sell it.',
    sections: [
      {
        title: 'Start with one record per machine',
        body: [
          'Before logging any work, create a record for each piece of equipment worth maintaining: tractors, mowers, chainsaws, tillers, generators, pumps, trailers, and the better hand tools. Capture make, model, serial number, purchase date and price, and where it is kept.',
          'The serial number matters more than people expect. Parts lookups, warranty claims, and recall notices all key off it, and it is easiest to record once, up front.',
        ],
      },
      {
        title: 'What to log for each service',
        list: [
          'Date, and hours or mileage if the machine tracks them',
          'What you did, in plain language, including what you found unexpectedly',
          'Parts used, with part numbers where you have them',
          'Cost, split between parts and labor if someone else did the work',
          'Who did the work, if it was a shop or a neighbor',
          'What you deferred, and what you want to check next time',
        ],
        body: [
          'That last item is the one most people leave out and later wish they had. "Left rear tire slow leak, watch it" is worth more next spring than a tidy oil-change entry.',
        ],
      },
      {
        title: 'Set service intervals you will actually follow',
        body: [
          'Manufacturer intervals are usually stated in operating hours. Most homesteaders do not track hours reliably, so a calendar interval anchored to the season the machine is used is more realistic: service the mower before mowing season, the chainsaw before firewood season, the generator before storm season.',
          'The right interval is the one you will honor. An annual service you complete beats a 50-hour service you skip.',
        ],
      },
      {
        title: 'Track warranties separately from repairs',
        body: [
          'Warranty end dates are worth recording as dates you can review, not buried in a receipt. Knowing a pump is still covered changes whether you open it up yourself, and warranty windows tend to expire quietly.',
        ],
      },
      {
        title: 'Use history for repair-or-replace decisions',
        body: [
          'The genuine payoff of maintenance records is arithmetic. When a machine needs a repair that costs a meaningful share of its replacement price, the question is whether this is unusual or the third such repair in two years. Without a cost history, that is a feeling. With one, it is a number.',
          'The same history is the best evidence you have when selling: a documented service record is a real argument for a higher price.',
        ],
      },
      {
        title: 'Keep records where the work happens',
        body: [
          'Maintenance logging fails at the point of entry. If logging a repair means walking to a computer, it does not get logged. Records that can be entered at the machine, offline, in work gloves, are the ones that stay complete.',
        ],
      },
      {
        title: 'Where Homestead Keeper fits',
        body: [
          'Homestead Keeper gives each machine a record with manuals, receipts, and photos attached, logs service and repairs with dates, costs, parts, and vendors, and turns service intervals into recurring reminders whose completions become history.',
          'The Warranty Countdown report separates expired coverage from what expires soon, the Cost Summary report totals repair and service spending, and printable QR labels let you scan a tag on the machine to open its record while you are standing at it.',
        ],
      },
    ],
    limitation:
      'This guide covers record keeping. It is not a maintenance manual and does not replace the service intervals, procedures, or safety instructions in your equipment documentation.',
    related: [
      { title: 'Equipment maintenance', href: '/features/equipment', summary: 'Service history, repairs, fuel, parts, manuals, warranties, and maintenance reminders.' },
      { title: 'Homestead maintenance app', href: '/use-cases/homestead-maintenance-app', summary: 'Maintenance records across equipment, property systems, coops, and wells.' },
      { title: 'Build a maintenance checklist', href: '/guides/homestead-maintenance-checklist', summary: 'Turn scattered seasonal jobs into a checklist you will finish.' },
      { title: 'Reports and exports', href: '/features/reports', summary: 'Cost, maintenance, and warranty summaries with PDF and CSV export.' },
    ],
    keywords: [
      'how to keep equipment maintenance records',
      'equipment maintenance log',
      'tractor maintenance records',
      'service interval tracking',
      'repair or replace equipment',
    ],
  },
  {
    slug: 'homestead-maintenance-checklist',
    title: 'How to Build a Homestead Maintenance Checklist | Homestead Keeper',
    h1: 'How to build a homestead maintenance checklist',
    description:
      'How to turn scattered seasonal jobs into a maintenance checklist you will finish, organized by place, season, and system.',
    eyebrow: 'Guide',
    answer:
      'Build the checklist from your own property rather than from a generic list: walk the place, write down what needs attention by location, group those items by season, then attach each group to the place or machine it belongs to so it reappears at the right time every year.',
    intro:
      'Generic homestead maintenance checklists rarely survive contact with a real property. They list items you do not have and omit the gate that always sags in spring. A checklist built from your own place, and repeated seasonally, works better than a longer one copied from elsewhere.',
    sections: [
      {
        title: 'Step 1: Walk the property and write down what you see',
        body: [
          'Start with a notebook and an hour. Walk every building, pasture, garden area, water source, and access road, and write down anything that needs periodic attention: gates, fences, gutters, roof, water lines, hydrants, pumps, septic, chimneys, culverts, driveways, and equipment sheds.',
          'This is the step people skip in favor of a downloaded template, and it is the step that makes the checklist yours.',
        ],
      },
      {
        title: 'Step 2: Organize by place, not by task type',
        body: [
          'A list of forty tasks in task order means walking the property four times. The same forty organized by location means one pass through the barn covers everything the barn needs.',
          'Places also make delegation and handoff possible. "Everything in the pump house" is an instruction someone else can follow.',
        ],
      },
      {
        title: 'Step 3: Assign each item a season',
        list: [
          'Spring: frost damage, water lines and hydrants, fencing, gutters, mower and tiller service, coop deep clean',
          'Summer: irrigation, pasture and brush, roof and siding, dust and airflow in outbuildings, water storage',
          'Fall: winterizing, chimney and heating, generator test, chainsaw and firewood equipment, drainage and culverts, animal housing prep',
          'Winter: indoor repairs, tool and small-engine service, planning and ordering, snow and ice access, checking stored food and supplies',
          'Annual or as needed: septic, well testing, insurance and document review, deep equipment service',
        ],
        body: [
          'Seasons matter more than exact dates on a homestead, because the right week shifts with the weather every year.',
        ],
      },
      {
        title: 'Step 4: Be honest about frequency',
        body: [
          'A checklist fails when it asks for more than the year has room for. If an item has gone undone for three years, either it does not matter or it needs to be scheduled somewhere realistic. Cut or reschedule it rather than carrying it as permanent guilt.',
          'Start with a shorter checklist you complete. Add items in the second year.',
        ],
      },
      {
        title: 'Step 5: Make it repeat without rebuilding it',
        body: [
          'The difference between a checklist and a maintenance system is repetition. A paper list gets completed once and lost. The same list attached to the places and machines it concerns, set to recur seasonally, comes back on its own and carries a record of the last time it was done.',
          'That history is what turns "I think we did the gutters last fall" into a date.',
        ],
      },
      {
        title: 'Where Homestead Keeper fits',
        body: [
          'Homestead Keeper supports repeatable checklists attached to equipment, places, and property systems, so a seasonal walkthrough is a checklist on the barn rather than a note somewhere. Recurring and seasonal reminders bring the work back each year, overdue items stay visible on the Today screen and calendar, and completions become maintenance history.',
          'The Maintenance Overview report then shows completed work, overdue items, service costs, and a watchlist, and the Property Handoff report collects the same information for a caretaker, a house sitter, or a future owner.',
        ],
      },
    ],
    limitation:
      'This guide is a starting framework, not a safety or code-compliance checklist. Work involving electrical systems, chimneys, septic, structural repair, wells, or heavy equipment may require a qualified professional or a permit where you live.',
    video: {
      videoId: 'YXS0_ql1mM0',
      title: 'Checklists in Homestead Keeper',
      iframeTitle: 'Homestead Keeper checklists how-to walkthrough',
      description: 'A walkthrough of building repeatable checklists and attaching them to the equipment, places, and systems they belong to.',
    },
    related: [
      { title: 'Reminders and chores', href: '/features/reminders', summary: 'One-time, recurring, and seasonal work with overdue alerts and calendar views.' },
      { title: 'Homestead maintenance app', href: '/use-cases/homestead-maintenance-app', summary: 'Maintenance records across equipment, property systems, coops, and wells.' },
      { title: 'Equipment maintenance', href: '/features/equipment', summary: 'Service history, repairs, parts, warranties, and maintenance reminders.' },
      { title: 'Checklists workflow', href: '/workflows/checklists-for-items', summary: 'Step-by-step: attach repeatable checklist work to items in the app.' },
      { title: 'Equipment maintenance records', href: '/guides/equipment-maintenance-records', summary: 'What to log for each machine and how to set intervals you will follow.' },
    ],
    keywords: [
      'homestead maintenance checklist',
      'seasonal homestead chores',
      'property maintenance schedule',
      'fall homestead checklist',
      'spring property checklist',
    ],
  },
  {
    slug: 'livestock-health-and-treatment-records',
    title: 'How to Track Livestock Health and Treatment Records | Homestead Keeper',
    h1: 'How to track livestock health and treatment records',
    description:
      'What livestock health records are worth keeping, how to track treatments and withdrawal periods, and how to tell a pattern from a one-off.',
    eyebrow: 'Guide',
    answer:
      'Log every treatment with a date, dose, and reason, note withdrawal periods where they apply to milk, eggs, or meat, and keep a running symptom timeline per animal or group rather than a single note. Those three habits turn scattered vet-visit memories into a record you can actually check.',
    intro:
      'Livestock health records tend to exist only in the moment: a text to a spouse, a sticky note on the fridge, a mental note to "keep an eye on her." That works until a withdrawal period matters, a symptom recurs, or a vet asks what happened last time.',
    sections: [
      {
        title: 'Log symptoms as they happen, not after',
        body: [
          'The date a symptom first appeared is more useful than a summary written a week later from memory. Record what you saw, when, and which animal, even if you are not sure it means anything yet.',
          'A single odd entry is noise. Three entries across two months, for the same animal, are a pattern worth a vet call.',
        ],
      },
      {
        title: 'Treat every treatment as a dated record',
        list: [
          'What was given, including drug name and dose',
          'Date and who administered it',
          'Reason for treatment',
          'Withdrawal period, if it applies to milk, eggs, or meat',
          'Follow-up needed, and whether it happened',
        ],
        body: [
          'Withdrawal periods are the one thing on this list with a real deadline attached. A treatment date without a visible withdrawal window is a date you have to remember to calculate every time it matters.',
        ],
      },
      {
        title: 'Keep records with the animal, not the medicine cabinet',
        body: [
          'A treatment log that lives separately from the animal it concerns stops getting checked. Records attached directly to the animal or group profile are the ones a person actually opens before making a decision about that animal.',
          'This matters more for mixed herds and flocks, where a treatment history has to be findable per individual, not buried in one long list for the whole barn.',
        ],
      },
      {
        title: 'Vaccinations and preventive care belong on the same timeline',
        body: [
          'Vaccination dates, dewormings, and routine vet visits are easy to lose track of across a herd or flock. Recording them alongside treatments — not in a separate system — is what makes it possible to see an animal\'s full health history in one place.',
        ],
      },
      {
        title: 'Where Homestead Keeper fits',
        body: [
          'Homestead Keeper keeps vaccination, medication, treatment, deworming, illness, injury, vet visit, and health certificate records attached to the animal or group they belong to, with withdrawal warnings that surface on production records for milk, eggs, or meat when they apply.',
          'It organizes what happened and when. It does not provide veterinary advice, diagnoses, or dosage recommendations.',
        ],
      },
    ],
    limitation:
      'This guide is about record keeping, not veterinary medicine. It does not provide diagnoses, treatment recommendations, or dosage guidance. Consult a veterinarian for those.',
    related: [
      { title: 'Animal records', href: '/features/animals', summary: 'Profiles, groups, daily care, medical records, breeding, pedigree, production, and weights.' },
      { title: 'Chicken flock records', href: '/use-cases/chicken-keepers', summary: 'Flock records, egg tracking, care reminders, and coop work in one place.' },
      { title: 'What records to keep for chickens', href: '/guides/what-records-to-keep-for-chickens', summary: 'The six chicken record types worth keeping and how much detail each needs.' },
    ],
    keywords: [
      'livestock health records',
      'how to track animal treatments',
      'withdrawal period tracking',
      'livestock medical records app',
      'farm animal health log',
    ],
  },
  {
    slug: 'what-records-to-keep-for-a-vegetable-garden',
    title: 'What Records Should You Keep for a Vegetable Garden? | Homestead Keeper',
    h1: 'What records should you keep for a vegetable garden?',
    description:
      'The garden records worth keeping: bed layouts, planting dates, care notes, harvest totals, and how much detail actually helps next season.',
    eyebrow: 'Guide',
    answer:
      'Four record types cover most of what a home garden needs: what is planted where, when it went in, what happened to it during the season, and what it produced. Kept consistently, those four answer nearly every question you will have next spring.',
    intro:
      'Garden records fail for a predictable reason: they start detailed in April and stop entirely by July, when weeding and watering leave no time for notes. The records worth keeping are the ones brief enough to survive the busy months.',
    sections: [
      {
        title: '1. Bed layout and crop placement',
        body: [
          'Record what is planted in which bed, row, or container each season. This single record answers the most common planning question there is: what grew here last year, and what should not go there again.',
          'A sketch or a simple grid is enough. The value is in having last year\'s layout to compare against, not in the precision of the drawing.',
        ],
      },
      {
        title: '2. Planting dates and source',
        body: [
          'Log the crop, variety, planting date, and whether it was direct-seeded or transplanted. Over a few seasons this becomes a personal calendar of what actually works in your specific soil and microclimate, which is more useful than any generic zone chart.',
        ],
      },
      {
        title: '3. Care notes during the season',
        list: [
          'Pest or disease sightings, with date and what you did about it',
          'Soil amendments applied',
          'Watering or weather problems worth remembering',
          'Anything you would do differently',
        ],
        body: [
          'These notes matter most when they are brief. A pest sighting logged in one line the day you see it beats a detailed paragraph you never get around to writing.',
        ],
      },
      {
        title: '4. Harvest totals',
        body: [
          'Record crop, quantity, unit, and date for each harvest. Consistent units matter more than precise ones — deciding once that tomatoes are recorded in pounds, not "a basket," is what makes next year\'s total comparable to this year\'s.',
          'Harvest totals are the record that tells you whether a crop is worth the bed space it takes, which is a harder judgment to make from memory than it seems.',
        ],
      },
      {
        title: 'What to skip',
        body: [
          'Detailed weather logs, exact soil pH readings, and per-plant journals are rarely worth the time for a home garden. If a record does not change what you plant, where, or when next year, it is not pulling its weight.',
        ],
      },
      {
        title: 'Where Homestead Keeper fits',
        body: [
          'Homestead Keeper maps crop placement to a visual bed layout, keeps planting records with dates, variety, and care notes attached to the bed and crop, and logs harvests with quantity, unit, and date that roll up into garden timelines and season reports.',
          'The layout and timeline both carry forward year to year, so last season\'s garden is a reference instead of a memory.',
        ],
      },
    ],
    limitation:
      'This guide organizes garden planning and record keeping. It does not provide planting-date, climate-zone, or pest-treatment recommendations — those depend on your local conditions and are best confirmed with your local extension service.',
    related: [
      { title: 'Garden records', href: '/features/garden', summary: 'Bed layouts, crop placement, planting records, harvests, and garden season reports.' },
      { title: 'Garden planning and harvest tracking', href: '/use-cases/gardeners', summary: 'Bed layouts, planting records, and harvest history in one place.' },
      { title: 'Food preservation records', href: '/features/food-preservation', summary: 'Track what you canned, froze, dried, and stored, connected to the harvests they came from.' },
    ],
    keywords: [
      'what records to keep for a garden',
      'garden record keeping',
      'vegetable garden log',
      'garden planting records',
      'harvest tracking',
    ],
  },
  {
    slug: 'organizing-food-preservation-and-canning-records',
    title: 'How to Organize Food Preservation and Canning Records | Homestead Keeper',
    h1: 'How to organize food preservation and canning records',
    description:
      'How to track canning batches, freezer and dehydrated food, and root cellar storage by batch, method, and date instead of running totals.',
    eyebrow: 'Guide',
    answer:
      'Track preserved food by batch rather than by running total: record what you preserved, how, how much, and where it is stored, each time you preserve it. Batch records are what let you rotate stock, plan next year\'s garden, and actually find the applesauce.',
    intro:
      'A pantry inventory that only tracks "jars of tomatoes: 40" answers less than it seems to. It cannot tell you which batch is oldest, whether this year\'s harvest was actually enough, or where the fermented batch from October went. Batch-level records answer all three.',
    sections: [
      {
        title: 'Record each preservation session as its own batch',
        list: [
          'What was preserved and the method (canned, frozen, dehydrated, fermented, root cellared)',
          'Quantity and unit (pints, quarts, pounds, bags)',
          'Date preserved',
          'Storage location',
          'Source, if it connects to a harvest or a purchase',
        ],
        body: [
          'A batch is the natural unit for preserved food because it is also the natural unit of a shelf-life question: this specific batch of green beans, canned this specific week, is the thing that needs eating before the next one.',
        ],
      },
      {
        title: 'Attach records to real storage locations',
        body: [
          'Pantry shelves, a chest freezer, a root cellar, and a canning cupboard are different places with different rotation needs. Recording storage location, not just "pantry," is what makes it possible to actually find something six months later.',
        ],
      },
      {
        title: 'Use dates for rotation, not just inventory',
        body: [
          'The point of a preservation date is to use the oldest stock first. Reviewing what is expiring or oldest before a canning weekend or a shopping trip is how rotation actually happens, rather than staying a good intention.',
        ],
      },
      {
        title: 'Track supplies the same way you track produce',
        body: [
          'Jars, lids, rings, pectin, vinegar, salt, freezer bags, and vacuum-sealer rolls run out at inconvenient times. Tracking them as inventory means finding out you are short on lids before the tomatoes are already picked, not after.',
        ],
      },
      {
        title: 'Connect preservation back to the harvest',
        body: [
          'Preserved-food records are most useful when they connect to what grew and what was harvested. Knowing that forty pounds of tomatoes became eighteen quarts of sauce tells you something a harvest total alone cannot: whether it is worth planting that many tomato plants again.',
        ],
      },
      {
        title: 'Where Homestead Keeper fits',
        body: [
          'Homestead Keeper records canned goods, freezer food, dehydrated food, fermented batches, and root cellar storage with quantity, storage location, and date, organized by the real places in your home rather than one flat list.',
          'Expiration and best-by dates surface on the Inventory report alongside low-stock supplies, and canning supplies like jars, lids, and pectin can be tracked the same way as the food itself.',
        ],
      },
    ],
    limitation:
      'Homestead Keeper records what you preserved and where it is stored. It does not provide canning recipes, processing times, altitude adjustments, or food-safety guidance. Follow tested, current preservation instructions from a reliable food-safety source.',
    related: [
      { title: 'Food preservation records', href: '/features/food-preservation', summary: 'Track what you canned, froze, dried, and stored, connected to the harvests they came from.' },
      { title: 'Pantry inventory', href: '/use-cases/pantry-inventory', summary: 'Track pantry, freezer, and preserved food inventory with low-stock and expiration visibility.' },
      { title: 'Garden records', href: '/features/garden', summary: 'Bed layouts, crop placement, planting records, harvests, and garden season reports.' },
    ],
    keywords: [
      'canning inventory tracker',
      'food preservation records',
      'freezer inventory app',
      'root cellar inventory',
      'organize canning records',
    ],
  },
  {
    slug: 'what-belongs-in-a-homestead-handoff-binder',
    title: 'What Belongs in a Homestead Handoff Binder? | Homestead Keeper',
    h1: 'What belongs in a homestead handoff binder?',
    description:
      'What a homestead handoff binder should cover for a house sitter, a caretaker, or a future owner, and how to keep it current without redoing it every time.',
    eyebrow: 'Guide',
    answer:
      'A handoff binder needs five things: where everything is, what needs regular attention and how often, who to call, what is currently in progress, and where the records live. Most binders fail not from missing content but from going stale the month after they were written.',
    intro:
      'Every homestead accumulates knowledge that lives only in one person\'s head: which valve to turn first, which hen is broody, which gate sticks. A handoff binder exists to get that knowledge out of one head and onto paper before an absence, a sale, or an emergency makes it urgent.',
    sections: [
      {
        title: '1. Where everything is',
        body: [
          'A place-by-place list of what is where: the shutoff valves, the breaker panel, the propane tank, the feed storage, the tool shed, the well head. Someone unfamiliar with the property should be able to find the important things without a phone call.',
        ],
      },
      {
        title: '2. What needs regular attention and how often',
        body: [
          'Daily, weekly, and seasonal tasks for animals, gardens, and property systems, written as instructions rather than reminders to yourself. "Check waterers, they freeze below 20°F" is useful to a stranger. "Check waterers" is not.',
        ],
      },
      {
        title: '3. Who to call',
        list: [
          'Veterinarian',
          'Well or septic service',
          'Electrician and any other trades used before',
          'Neighbor who knows the property',
          'Utility company account numbers',
        ],
      },
      {
        title: '4. What is currently in progress',
        body: [
          'A breeding due date, a treatment still under withdrawal, a repair mid-project, a harvest about to come in. This section is the one that goes stale fastest, and the one most worth keeping current if only one section gets updated.',
        ],
      },
      {
        title: '5. Where the records live',
        body: [
          'If health, maintenance, and inventory records exist elsewhere, the binder should say where and how to read them, not duplicate them. A handoff binder that tries to contain every record becomes too long to read in an emergency.',
        ],
      },
      {
        title: 'Keeping it current is the real problem',
        body: [
          'A binder written once and never touched again is accurate for about a month. The sections that change — what is in progress, current counts, upcoming dates — need a source that updates itself, or the binder becomes actively misleading rather than simply outdated.',
        ],
      },
      {
        title: 'Where Homestead Keeper fits',
        body: [
          'The Property Handoff report pulls current information directly from your records — animals, gardens, equipment, inventory, and upcoming reminders — into one summary, so the sections that go stale fastest are generated from live records instead of retyped by hand.',
          'It complements a written binder rather than replacing the human judgment of what a specific caretaker needs to know.',
        ],
      },
    ],
    limitation:
      'This guide is about what to record and organize. It does not cover legal documents, insurance requirements, or estate planning, which should involve a qualified professional if they apply to your situation.',
    related: [
      { title: 'Reports and exports', href: '/features/reports', summary: 'Homestead, cost, production, inventory, maintenance, and handoff summaries with PDF and CSV export.' },
      { title: 'Build a record system', href: '/playbook', summary: 'A ten-step guide to setting up homestead records that you will actually keep.' },
      { title: 'Rural property records', href: '/use-cases/rural-property-owners', summary: 'Property, equipment, places, and seasonal work records for rural homes.' },
    ],
    keywords: [
      'homestead handoff binder',
      'property caretaker binder',
      'homestead handoff checklist',
      'house sitter instructions homestead',
      'farm sitter binder',
    ],
  },
  {
    slug: 'tracking-homestead-expenses-without-accounting-software',
    title: 'How to Track Homestead Expenses Without Accounting Software | Homestead Keeper',
    h1: 'How to track homestead expenses without accounting software',
    description:
      'How to keep useful homestead cost records without full accounting software: what to log, by category, and what a simple cost summary can and cannot tell you.',
    eyebrow: 'Guide',
    answer:
      'Log expenses at the point of purchase, tagged to the animal, bed, machine, or system they belong to, and total them by category rather than by transaction. That gives you real per-category costs without needing double-entry bookkeeping or a chart of accounts.',
    intro:
      'Full accounting software is built for businesses that need a general ledger, tax categories, and reconciled statements. Most homesteads need something smaller: a real answer to "what did the chickens actually cost this year," without the overhead of software built for a different job.',
    sections: [
      {
        title: 'Log the expense where the thing lives',
        body: [
          'Feed cost belongs with the flock. A repair cost belongs with the machine. A seed order belongs with the bed or the garden. Recording cost data next to the record it concerns, instead of in one long undifferentiated transaction list, is what makes it usable later — you do not have to remember what a line item was for.',
        ],
      },
      {
        title: 'Categories matter more than precision',
        list: [
          'Feed and supplies',
          'Veterinary and health',
          'Equipment purchase and repair',
          'Seed, plant, and soil amendments',
          'Fuel',
          'Infrastructure and building materials',
        ],
        body: [
          'A consistent category system that you actually use beats a detailed one you abandon. Six categories logged reliably outweigh twenty categories logged for two months.',
        ],
      },
      {
        title: 'Track income the same way, if there is any',
        body: [
          'Egg sales, produce sales, or the occasional sold animal are worth recording with the same discipline as expenses. Together they answer the question a lot of homesteaders eventually ask themselves: is this hobby paying for any part of itself?',
        ],
      },
      {
        title: 'What a simple cost summary can tell you',
        body: [
          'Total spend by category and by item, over a chosen period. Which animal, bed, or machine is costing the most. Whether a repair is a one-off or the third one this year, which is the same question maintenance history answers from the other direction.',
        ],
      },
      {
        title: 'What it cannot replace',
        body: [
          'This is not tax software, and it does not produce a profit-and-loss statement suitable for a farm business return. If the homestead has business income, a bookkeeper or accountant familiar with farm taxes is still the right tool for that part.',
        ],
      },
      {
        title: 'Where Homestead Keeper fits',
        body: [
          'Costs can be logged against animals, garden beds, equipment, and inventory as they happen, and the Cost Summary report totals income, expenses, and net across categories with repair costs and tracked item value broken out.',
          'It is a practical cost picture for a homestead, not a substitute for accounting or tax software.',
        ],
      },
    ],
    limitation:
      'This guide covers practical cost tracking for personal use. It is not accounting, bookkeeping, or tax advice, and it does not replace software or a professional if your homestead has business income or reporting requirements.',
    related: [
      { title: 'Reports and exports', href: '/features/reports', summary: 'Homestead, cost, production, inventory, maintenance, and handoff summaries with PDF and CSV export.' },
      { title: 'Equipment maintenance records', href: '/guides/equipment-maintenance-records', summary: 'What to log for each machine and how history helps repair-or-replace decisions.' },
      { title: 'Homestead management app', href: '/use-cases/homestead-management-app', summary: 'A homestead management app for animals, gardens, inventory, property, and seasonal work.' },
    ],
    keywords: [
      'track homestead expenses',
      'homestead cost tracking',
      'farm expense log without accounting software',
      'homestead budget records',
      'cost summary app',
    ],
  },
  {
    slug: 'property-and-infrastructure-maintenance-records',
    title: 'How to Keep Property and Infrastructure Maintenance Records | Homestead Keeper',
    h1: 'How to keep property and infrastructure maintenance records',
    description:
      'How to track maintenance for wells, pumps, gates, fences, and buildings, organized by system and place instead of one long to-do list.',
    eyebrow: 'Guide',
    answer:
      'Give every property system — well, septic, generator, gates, fencing, roofing — its own record with service history and the next expected date, organized by the place it lives, not by task. That structure is what makes fifteen years of scattered repairs into a usable history.',
    intro:
      'Property infrastructure fails quietly and expensively: a well pump that has never had a filter change, a generator no one has started since the last outage, a gate hinge that has been "on the list" for two summers. Most of this is preventable with a record system built around real property systems, not a running notebook.',
    sections: [
      {
        title: 'Organize by system, not by date',
        body: [
          'A well, a septic system, a generator, and a fence line each have their own service rhythm and their own history. Keeping one record per system, rather than one long chronological log, is what lets you answer "when did we last test the well" without reading every entry from the last three years.',
        ],
      },
      {
        title: 'What to record for each system',
        list: [
          'Installation or last-known-service date',
          'Manufacturer, model, and capacity where relevant',
          'Service and repair history with dates and costs',
          'Next expected service or inspection',
          'Manuals, permits, or test results attached to the record',
        ],
      },
      {
        title: 'Wells, septic, and water systems deserve their own attention',
        body: [
          'Water and septic systems are the property infrastructure most likely to have real health and cost consequences when neglected, and the most likely to be invisible until they fail. A recorded test or service date is what turns "probably fine" into an actual answer.',
        ],
      },
      {
        title: 'Fences, gates, and access are easy to under-record',
        body: [
          'A sagging gate or a fence line down in one spot rarely gets logged because it feels too minor for a maintenance record. But a place-based record of recurring problem spots — the gate that always needs adjustment, the fence section prone to washouts — reveals a pattern that a single repair does not.',
        ],
      },
      {
        title: 'Use places, not just equipment, as the organizing unit',
        body: [
          'Not every property system is a discrete machine. A pump house, a barn roof, or a driveway culvert is a place with maintenance needs of its own. Recording by real property location — the pump house, not just "the pump" — keeps related work findable together.',
        ],
      },
      {
        title: 'Where Homestead Keeper fits',
        body: [
          'Homestead Keeper keeps notes and history for wells, pumps, gates, fences, irrigation, barns, sheds, roads, solar, generators, and water storage, organized by the real places on a property, with maintenance reminders and Field Log entries attached to the system or place they concern.',
          'The Maintenance Overview report then rolls that history into completed work, overdue items, costs, and a watchlist for the whole property.',
        ],
      },
    ],
    limitation:
      'This guide is about record keeping. It is not an inspection standard and does not substitute for professional inspection, code compliance, or licensed service on wells, septic, electrical, or structural systems.',
    related: [
      { title: 'Rural property records', href: '/use-cases/rural-property-owners', summary: 'Property, equipment, places, and seasonal work records for rural homes.' },
      { title: 'Equipment maintenance records', href: '/guides/equipment-maintenance-records', summary: 'What to log for each machine and how to set intervals you will follow.' },
      { title: 'Homestead maintenance app', href: '/use-cases/homestead-maintenance-app', summary: 'Maintenance records across equipment, property systems, coops, and wells.' },
      { title: 'Build a maintenance checklist', href: '/guides/homestead-maintenance-checklist', summary: 'Turn scattered seasonal jobs into a checklist organized by place, season, and system.' },
    ],
    keywords: [
      'property maintenance records',
      'well and septic maintenance log',
      'infrastructure maintenance tracking',
      'rural property maintenance app',
      'fence and gate maintenance records',
    ],
  },
  {
    slug: 'moving-homestead-records-off-spreadsheets',
    title: 'Moving Homestead Records Off Spreadsheets | Homestead Keeper',
    h1: 'Moving homestead records off spreadsheets',
    description:
      'Why homestead spreadsheets tend to break down, what to look for in a replacement, and how to migrate records without losing history.',
    eyebrow: 'Guide',
    answer:
      'Spreadsheets work well for one flat list, and break down once records need to connect to each other — an animal to its treatments, a machine to its service history, a bed to its harvests. If your spreadsheet has grown extra tabs to work around that, it is usually time to move to something built for connected records.',
    intro:
      'Almost every homestead record system starts as a spreadsheet, and for a while that is the right call — it is flexible, free, and familiar. The trouble shows up later: a second tab for animals, a third for treatments, a lookup formula linking them that breaks when a row gets inserted in the wrong place.',
    sections: [
      {
        title: 'Signs a spreadsheet has stopped working',
        list: [
          'More than two or three tabs cross-referencing each other',
          'You have stopped trusting whether a formula updated correctly',
          'Entering a record on your phone standing in the barn is awkward or impossible',
          'You keep meaning to build a "dashboard" tab and never finish it',
          'Finding one animal or machine\'s full history means checking multiple tabs',
        ],
        body: [
          'None of these mean the spreadsheet was a bad choice. They mean the records have outgrown a flat, tab-based structure and need something that understands relationships between records natively.',
        ],
      },
      {
        title: 'What to look for in a replacement',
        body: [
          'The core question is whether records can attach to the thing they belong to — an animal, a bed, a machine, a place — without manual lookups holding it together. A treatment record that lives with the animal, not in a separate sheet joined by an ID column, is the structural difference that actually matters.',
          'Offline entry matters as much as structure. A system that requires a signal or a laptop to log a repair standing at the tractor gets used less than a spreadsheet on a phone, even a clunky one.',
        ],
      },
      {
        title: 'Migrating without losing history',
        body: [
          'Start with the records you actually reference, not everything. Import or re-enter current animals, active equipment, and open inventory first, so the new system is useful immediately. Historical entries that only ever get consulted for context can be imported in a second pass, or kept as an archived spreadsheet you refer back to rather than actively maintain.',
          'Bulk import from CSV, where supported, is worth checking before re-typing years of records by hand.',
        ],
      },
      {
        title: 'What you give up, honestly',
        body: [
          'A spreadsheet is infinitely customizable in a way purpose-built software is not. If your tracking needs are genuinely unusual, a well-built spreadsheet may still be the better tool. Most homestead record needs, though, are common enough — care, production, maintenance, inventory — that they are worth solving once in software built for them.',
        ],
      },
      {
        title: 'Where Homestead Keeper fits',
        body: [
          'Homestead Keeper is built around the relationships a spreadsheet struggles with: animals connect to their treatments and production, equipment connects to its service history, gardens connect to their harvests, all attached to the real places they belong to. CSV import supports bringing existing spreadsheet data across rather than starting from zero.',
          'It runs locally on iPhone, iPad, and Mac, so entry at the coop or the tractor does not depend on a signal.',
        ],
      },
    ],
    limitation:
      'This guide is about record-keeping structure, not a claim that spreadsheets are always the wrong tool. For genuinely unusual or highly custom tracking needs, a spreadsheet may still be the better fit.',
    related: [
      { title: 'Build a record system', href: '/playbook', summary: 'A ten-step guide to setting up homestead records that you will actually keep.' },
      { title: 'Import from Excel or CSV', href: '/workflows/import-excel-csv', summary: 'Step-by-step: bring existing spreadsheet records into Homestead Keeper.' },
      { title: 'Homestead management app', href: '/use-cases/homestead-management-app', summary: 'A homestead management app for animals, gardens, inventory, property, and seasonal work.' },
      { title: 'Reports and exports', href: '/features/reports', summary: 'Homestead, cost, production, inventory, maintenance, and handoff summaries with PDF and CSV export.' },
    ],
    keywords: [
      'move off spreadsheets homestead',
      'homestead record keeping app vs spreadsheet',
      'spreadsheet alternative for farm records',
      'import spreadsheet into homestead app',
      'homestead database vs spreadsheet',
    ],
  },
];

export const getGuide = (slug: string) => guides.find((guide) => guide.slug === slug);
