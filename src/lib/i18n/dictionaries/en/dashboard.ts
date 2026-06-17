/* dashboard namespace (en) — preenchido pela traducao por area. */
const dashboard = {
  page: {
    title: "Dashboard",
    subtitle:
      "Live analytics across conversations, contacts, deals, broadcasts, and automations.",
  },
  metrics: {
    activeConversations: "Active Conversations",
    newContactsToday: "New Contacts Today",
    openDealsValue: "Open Deals Value",
    messagesSentToday: "Messages Sent Today",
    openDeal: "{count} open deal",
    openDeals: "{count} open deals",
    newTodayVsYesterday: "new today vs yesterday",
    vsYesterday: "vs yesterday",
    noChange: "No change {suffix}",
    delta: "{sign}{value} {suffix}",
  },
  quickActions: {
    newContact: "New Contact",
    newDeal: "New Deal",
    newBroadcast: "New Broadcast",
    newAutomation: "New Automation",
  },
  conversationsChart: {
    title: "Conversations Over Time",
    subtitle: "Daily message volume by direction",
    rangeDays: "{days} days",
    ariaLabel: "Conversations per day",
    emptyTitle: "No message activity in this range",
    emptyHint: "Send or receive messages to start populating this chart.",
    incoming: "Incoming",
    outgoing: "Outgoing",
    tooltipIncoming: "{count} incoming",
    tooltipOutgoing: "{count} outgoing",
  },
  pipeline: {
    title: "Pipeline Value",
    subtitle: "Open deals by stage",
    ariaLabel: "Pipeline value by stage",
    emptyTitle: "No open deals yet",
    emptyHint: "Create deals in Pipelines to see stage breakdowns here.",
    total: "Total",
    deal: "{count} deal",
    deals: "{count} deals",
  },
  responseTime: {
    title: "Average First Response Time",
    subtitle:
      "Minutes to reply to a customer's first unreplied message, by weekday",
    category: "Avg minutes",
    target: "target {minutes}m",
    thisWeek: "This week:",
    lastWeek: "Last week:",
    emptyTitle: "No replies recorded yet",
    emptyHint: "This chart fills in as you reply to customer messages.",
  },
  activity: {
    title: "Recent Activity",
    viewAll: "View all →",
    emptyTitle: "No activity yet",
    emptyHint:
      "Activity from messages, deals, broadcasts, and automations will appear here.",
    showing: "Showing {visible} of {total}",
    showingPlus: "Showing {visible} of {total}+",
    show: "Show",
    secondsAgo: "{count}s ago",
    minutesAgo: "{count}m ago",
    hoursAgo: "{count}h ago",
    daysAgo: "{count}d ago",
  },
  emptyState: {
    defaultTitle: "Not enough data yet",
  },
} as const;

export default dashboard;
