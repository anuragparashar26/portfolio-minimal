export const githubConfig = {
  username: "anuragparashar26",
  apiUrl: "https://github-contributions-api.deno.dev",

  // Display settings
  title: "GitHub Activity",
  subtitle: "commit trail over the past year",

  // Chart settings
  blockSize: 9.8,
  blockMargin: 2,
  fontSize: 10,
  maxLevel: 4,

  // Month labels
  months: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  // Weekday labels (shown at left of chart)
  weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],

  // Total count label template
  totalCountLabel: "{{count}} contributions in the last year",

  // Theme configuration for dark and light modes
  theme: {
    dark: [
      "rgb(22, 27, 34)",
      "rgb(14, 68, 41)",
      "rgb(0, 109, 50)",
      "rgb(38, 166, 65)",
      "rgb(57, 211, 83)",
    ],
    light: [
      "rgb(235, 237, 240)",
      "rgb(155, 233, 168)",
      "rgb(64, 196, 99)",
      "rgb(48, 161, 78)",
      "rgb(33, 110, 57)",
    ],
  },

  // Error state configuration
  errorState: {
    title: "Unable to load GitHub contributions",
    description: "Check out my profile directly for the latest activity",
    buttonText: "View on GitHub",
  },

  // Loading state configuration
  loadingState: {
    title: "Loading contributions...",
    description: "Fetching your GitHub activity data",
  },
};
