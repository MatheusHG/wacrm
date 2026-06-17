/* nav namespace (en) — sidebar, header, account menu, page titles, roles. */
const nav = {
  appName: "CRM Template for WhatsApp",
  openMenu: "Open menu",
  closeMenu: "Close menu",
  primary: "Primary",
  openAccountMenu: "Open account menu",
  beta: "Beta",
  betaFeature: "Beta feature",
  user: "User",
  avatar: "Avatar",
  profile: "Profile",
  settings: "Settings",
  signOut: "Sign out",
  unreadConversations: "{count} unread conversations",
  unreadConversation: "{count} unread conversation",
  items: {
    dashboard: "Dashboard",
    inbox: "Inbox",
    contacts: "Contacts",
    pipelines: "Pipelines",
    broadcasts: "Broadcasts",
    automations: "Automations",
    flows: "Flows",
    settings: "Settings",
  },
  roles: {
    owner: "Owner",
    admin: "Admin",
    agent: "Agent",
    viewer: "Viewer",
  },
} as const;

export default nav;
