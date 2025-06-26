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
    gradient: "var(--color-gradient-fresh-pastel)",
  },
  {
    id: 2,
    plan: "Pro",
    price: "₹299/month or $5/month",
    details: [
      "For power users and small teams",
      "Everything in Free, plus:",
      "Team collaboration",
      "Project insights",
      "Custom tags",
      "Priority support",
    ],
    button: "Upgrade Now",
    gradient: "var(--color-gradient-deep-cool)",
  },
  {
    id: 3,
    plan: "Team",
    price: "₹999/month or $12/month",
    details: [
      "Best for teams and startups",
      "Everything in Pro, plus:",
      "Unlimited collaborators",
      "Admin dashboard",
      "Permissions & roles",
      "Early access to new features",
    ],
    button: "Contact Us",
    gradient: "var(--color-gradient-soft-muted)",
  },
];

export default CARD_DATA;
