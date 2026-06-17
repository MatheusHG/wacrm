/* common namespace (en) — shared UI verbs, labels, and the language picker. */
const common = {
  save: "Save",
  saving: "Saving...",
  cancel: "Cancel",
  delete: "Delete",
  deleting: "Deleting...",
  edit: "Edit",
  close: "Close",
  create: "Create",
  add: "Add",
  remove: "Remove",
  search: "Search",
  loading: "Loading...",
  back: "Back",
  next: "Next",
  previous: "Previous",
  confirm: "Confirm",
  active: "Active",
  yes: "Yes",
  no: "No",
  optional: "Optional",
  required: "Required",
  retry: "Retry",
  language: {
    label: "Language",
    description: "Choose the interface language. Saved to this browser.",
    switchTo: "Switch to {lang}",
  },
  ui: {
    close: "Close",
    readOnlyTooltip: "Read-only — your role can't {action}",
  },
} as const;

export default common;
