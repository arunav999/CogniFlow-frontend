/* ======================== */
/*     PRICING CARD DATA    */
/* ======================== */

const CARD_DATA = [
  {
    id: 1,
    plan: "Starter",
    price: "Free",
    details: [
      "Ideal for individuals",
      "Basic task boards",
      "Calendar View",
      "Reminders",
      "Limited history",
      "Normal support",
    ],
    button: "Get Started",
    front: "var(--color-gradient-soft-aqua)",
    gradient: "var(--color-gradient-fresh-pastel)",
  },
  {
    id: 2,
    plan: "Pro",
    price: "₹299 / month",
    details: [
      "For power users and small teams",
      "Everything in Free, plus:",
      "Team collaboration",
      "Project insights",
      "Custom tags",
      "Priority support",
    ],
    button: "Upgrade Now",
    front: "var(--color-gradient-cool-mint)",
    gradient: "var(--color-gradient-deep-cool)",
  },
  {
    id: 3,
    plan: "Team",
    price: "₹999 / month",
    details: [
      "Best for teams and startups",
      "Everything in Pro, plus:",
      "Unlimited collaborators",
      "Admin dashboard",
      "Permissions & roles",
      "Early access to new features",
    ],
    button: "Contact Us",
    front: "var(--color-gradient-warm-muted)",
    gradient: "var(--color-gradient-soft-muted)",
    secondary: true,
  },
];

/* ======================== */
/*   DYNAMIC TYPING DATA    */
/* ======================== */

const typingConfig = [
  {
    texts: [
      "get organized",
      "crush deadlines",
      "sync up",
      "stay chill",
      "win your day.",
    ],
    typingDuration: 1100,
    deletingDuration: 550,
    blinkSpeed: 250,
    pauseDuration: 1500,
  },
];

export default CARD_DATA;
export { typingConfig };
