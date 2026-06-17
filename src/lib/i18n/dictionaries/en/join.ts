/* join namespace (en) — preenchido pela traducao por area. */
const join = {
  roles: {
    admin: "Admin",
    agent: "Agent",
    viewer: "Viewer",
  },
  fail: {
    notFound: {
      title: "Invite not found",
      body: "This link doesn’t match a valid invitation. Double-check the URL or ask the person who invited you to send a new one.",
    },
    used: {
      title: "Invite already used",
      body: "This invitation has already been accepted. If that wasn’t you, ask the account admin to send a fresh link.",
    },
    expired: {
      title: "Invite expired",
      body: "This invitation has expired. Ask the account admin to send a new one — they take a few seconds to generate.",
    },
    serverError: {
      title: "Something went wrong",
      body: "We couldn’t verify this invitation right now. Try refreshing the page in a moment.",
    },
  },
  loading: "Verifying invitation…",
  failActions: {
    tryAgain: "Try again",
    createAccountInstead: "Create a new account instead",
    signIn: "Sign in",
  },
  invite: {
    titlePrefix: "You're invited to",
    joinAsPrefix: "You'll join as",
    validUntil: "Link valid until {date}.",
  },
  accept: {
    accepting: "Accepting…",
    button: "Accept invitation",
    note: "Accepting moves your login into {accountName}. Your empty personal account from signup will be cleaned up.",
    success: "Welcome to the team",
    failed: "Failed to accept invitation",
    unreachable: "Could not reach the server",
  },
  conflict: {
    defaultMessage:
      "You are already in another account. Sign in with a different email to join this one.",
    title: "Can't join {accountName} with this account",
    body: "To join {accountName}, sign out and sign up again with a different email address. The invite link stays valid as long as it hasn't expired.",
    staySignedIn: "Stay signed in",
    signingOut: "Signing out…",
    signOutAndUseDifferentEmail: "Sign out & use a different email",
    signOutError: "Could not sign out. Try refreshing the page.",
  },
  cta: {
    createAccountAndJoin: "Create account & join",
    alreadyHaveAccount: "I already have an account",
  },
} as const;

export default join;
