export const tutorials = [
  {
    id: 'app-walkthrough',
    videoId: 'BrUu8FY-dzU',
    title: 'Homestead Keeper walkthrough',
    iframeTitle: 'Homestead Keeper app walkthrough',
    description: 'A complete overview of the app and how its tools work together.',
    category: 'Start here',
  },
  {
    id: 'checklists',
    videoId: 'YXS0_ql1mM0',
    title: 'Checklists how-to',
    iframeTitle: 'Homestead Keeper checklists how-to',
    description: 'Learn how to use checklists to organize repeatable work and keep homestead tasks on track.',
    category: 'Organize work',
  },
  {
    id: 'garden-layout',
    videoId: 'dC8ghhCS1EU',
    title: 'Garden layout overview',
    iframeTitle: 'Homestead Keeper garden layout overview',
    description: 'See how to plan beds and keep garden layouts organized in Homestead Keeper.',
    category: 'Garden',
  },
  {
    id: 'garden-timeline',
    videoId: '_d8nW_cCRPk',
    title: 'Garden Timeline Calendar how-to',
    iframeTitle: 'Homestead Keeper Garden Timeline Calendar how-to',
    description: 'Learn how to use the timeline calendar to follow garden activity and seasonal plans.',
    category: 'Garden',
  },
  {
    id: 'breeding-calendar',
    videoId: 'puz9x0UlWco',
    title: 'Breeding Calendar how-to',
    iframeTitle: 'Homestead Keeper Breeding Calendar how-to',
    description: 'Learn how to organize breeding dates, milestones, and upcoming events in the calendar.',
    category: 'Animals',
  },
] as const;

export const featuredTutorialIds = ['app-walkthrough', 'checklists', 'garden-layout'] as const;
