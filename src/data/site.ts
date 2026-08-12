export const site = {
  name: "My Flower Shop Wiki",
  gameName: "My Flower Shop",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3212",
  description:
    "An independent My Flower Shop Roblox wiki with a beginner route, flower and bouquet explainers, shop progression notes, and current official game links.",
  developer: "Magic Box Games",
  developerVerified: true,
  placeId: "93028168925975",
  universeId: "10324001605",
  genre: "Simulation / Tycoon",
  gameUrl: "https://www.roblox.com/games/93028168925975/My-Flower-Shop",
  checkedAt: "2026-08-12T10:00:00+08:00",
  checkedLabel: "Aug 12, 2026",
  playing: 7183,
  favorites: 117537,
  navigation: [
    { href: "/beginner-guide", label: "Beginner guide" },
    { href: "/controls", label: "Controls" },
    { href: "/flowers", label: "Flowers" },
    { href: "/money-guide", label: "Money guide" },
    { href: "/staff-and-upgrades", label: "Staff & upgrades" },
  ],
} as const;

export const confirmedSystems = [
  { title: "Plant and harvest", detail: "Plant, grow, and harvest flowers." },
  { title: "Craft arrangements", detail: "Use harvested flowers to craft bouquets and other arrangements." },
  { title: "Serve customers", detail: "Sell flowers and finished arrangements to customers." },
  { title: "Keep growing", detail: "Flowers can grow while you are offline." },
  { title: "Build the shop", detail: "Hire staff, buy upgrades, and decorate the shop and garden." },
  { title: "Return each day", detail: "The game includes daily streak rewards." },
] as const;

export const gamePasses = [
  { name: "Bigger Backpack", id: "1917897745", priceRobux: 79 },
  { name: "2X Cash", id: "1917825672", priceRobux: 499 },
  { name: "2X Grow Speed", id: "1918275712", priceRobux: 299 },
  { name: "Customize", id: "1919625697", priceRobux: 149 },
] as const;

export const sourceLinks = [
  {
    name: "Official Roblox experience",
    publisher: "Magic Box Games",
    url: site.gameUrl,
    use: "Game identity, description, developer, and the final check before playing or spending Robux.",
  },
  {
    name: "How to play My Flower Shop full guide",
    publisher: "VendoPlus",
    url: "https://www.youtube.com/watch?v=gmWVnToeDCk",
    use: "A dated gameplay source for beginner actions and interface labels, preserved with its Aug 8, 2026 context.",
  },
  {
    name: "Build the best store in My Flower Shop",
    publisher: "AccelToWin",
    url: "https://www.youtube.com/watch?v=ab6vz83v4d4&t=724s",
    use: "A dated view of the working flower shop interior used in the homepage and staff guide.",
  },
  {
    name: "Roblox: My Flower Shop",
    publisher: "Velace",
    url: "https://www.youtube.com/watch?v=GI2Wkuz6z6o&t=3s",
    use: "The beginner feature plays this planting walkthrough in place, beginning at 0:03.",
  },
  {
    name: "How to buy and plant flower seeds and harvest plants",
    publisher: "VendoPlus",
    url: "https://www.youtube.com/watch?v=S97Z4J05VmU",
    use: "A dated gameplay source for seed, planting, and harvesting fields. Published Aug 8, 2026.",
  },
  {
    name: "How to get more cash and money",
    publisher: "VendoPlus",
    url: "https://www.youtube.com/watch?v=-P-g5GgpWFM",
    use: "A dated gameplay source for the cash loop and any visible values that can be tied to the Aug 8, 2026 build.",
  },
  {
    name: "How to add and hire staff",
    publisher: "VendoPlus",
    url: "https://www.youtube.com/watch?v=51A1WZMnf_c",
    use: "A dated gameplay source for staff names, roles, and visible costs. Published Aug 8, 2026.",
  },
  {
    name: "How to use supplies to make plants grow faster",
    publisher: "VendoPlus",
    url: "https://www.youtube.com/watch?v=02kx7GcM-kA",
    use: "A dated gameplay source for supplies and visible growth effects. Values must keep the Aug 8, 2026 context unless a newer source updates them.",
  },
  {
    name: "How to make shop upgrades",
    publisher: "VendoPlus",
    url: "https://www.youtube.com/watch?v=S6G1hq8_njY",
    use: "A dated gameplay source for upgrade names, effects, and costs. Published Aug 8, 2026; extracted values keep that date.",
  },
  {
    name: "How to craft flowers on the craft table",
    publisher: "VendoPlus",
    url: "https://www.youtube.com/watch?v=WH8jO_1LBh8",
    use: "The source for arrangement designs, flower capacities, unlock levels, style names, and visible seed cards in the Aug 8, 2026 build. It shows a flexible craft menu, not fixed flower recipes.",
  },
  {
    name: "How to add and remove buildings",
    publisher: "VendoPlus",
    url: "https://www.youtube.com/watch?v=N_3ZvYuxGiY",
    use: "A dated gameplay source for building controls and visible layout actions. Published Aug 8, 2026.",
  },
  {
    name: "Roblox game information API",
    publisher: "Roblox",
    url: `https://games.roblox.com/v1/games?universeIds=${site.universeId}`,
    use: "Current players, favorites, genre, visits, and the official game description.",
  },
  {
    name: "Roblox game passes API",
    publisher: "Roblox",
    url: `https://apis.roblox.com/game-passes/v1/universes/${site.universeId}/game-passes?passView=Full&pageSize=100`,
    use: "Current game pass names, product IDs, and listed Robux prices at the Aug 11, 2026 check.",
  },
] as const;

export const reviewedPages = [
  {
    href: "/beginner-guide",
    label: "Beginner guide",
    title: "Follow the flower-to-customer loop",
    summary: "Start with the game loop, then open deeper notes exactly when flowers, bouquets, staff, or upgrades become relevant.",
  },
  {
    href: "/flowers",
    label: "Flowers",
    title: "Compare seed costs, timers, and unlocks",
    summary: "Check eight flowers observed in Aug 8 gameplay, with the video time and any missing price kept visible.",
  },
  {
    href: "/bouquets",
    label: "Bouquets",
    title: "Choose an arrangement by capacity",
    summary: "Compare eight designs from 1 to 12 flowers and see the captured unlock levels before opening the craft table.",
  },
  {
    href: "/money-guide",
    label: "Money guide",
    title: "Use early quests to plan cash",
    summary: "See two observed quest rewards, then compare staff, upgrade, and display costs without a guessed profit ranking.",
  },
] as const;
