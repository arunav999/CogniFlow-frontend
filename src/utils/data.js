// React-Icons
import {
  FiPackage,
  FiBriefcase,
  FiInfo,
  FiPenTool,
  FiMail,
  FiLifeBuoy,
} from "react-icons/fi";
import {
  AiOutlineAppstore,
  AiOutlinePlayCircle,
  AiOutlineQuestionCircle,
} from "react-icons/ai";
import { BiMoney, BiBookContent, BiBug } from "react-icons/bi";

import cogniLogo from "../assets/cimg.png";

/* ======================== */
/*      FEATURES DATA      */
/* ======================== */

export const FEATURES_DATA = [
  {
    id: 1,
    title: "Task Boards",
    description:
      "Drag, drop, and get things done with intuitive boards that just make sense.",
    imgSrc: cogniLogo,
    imgAlt: "task boards img",
  },
  {
    id: 2,
    title: "Smart Scheduling",
    description:
      "Set deadlines, recurring tasks, and let Cogniflow keep your calendar clean.",
    imgSrc: cogniLogo,
    imgAlt: "smart scheduling img",
  },
  {
    id: 3,
    title: "Team Collaboration",
    description: "Tag teammates, assign tasks, and chat — all in one flow.",
    imgSrc: cogniLogo,
    imgAlt: "team collaboration img",
  },
  {
    id: 4,
    title: "Reminders That Work",
    description:
      "Get notified before it's too late. Not too early. Just right.",
    imgSrc: cogniLogo,
    imgAlt: "reminders that work img",
  },
  {
    id: 5,
    title: "Progress Insights",
    description:
      "See how far you've come — and what's next — with simple visual summaries.",
    imgSrc: cogniLogo,
    imgAlt: "progress insights img",
  },
];

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
/*     FOOTER CARD DATA     */
/* ======================== */

export const FOOTER_DATA = [
  {
    id: 1,
    head: "Product",
    logo: FiPackage,
    items: [
      {
        id: 1,
        name: "Features",
        logo: AiOutlineAppstore,
        href: "/#features",
      },
      {
        id: 2,
        name: "Pricing",
        logo: BiMoney,
        href: "/#pricing",
      },
      {
        id: 3,
        name: "Demo",
        logo: AiOutlinePlayCircle,
        href: "/#demo",
      },
    ],
  },
  {
    id: 2,
    head: "Company",
    logo: FiBriefcase,
    items: [
      {
        id: 1,
        name: "About",
        logo: FiInfo,
        href: "/#about",
      },
      {
        id: 2,
        name: "Blog",
        logo: FiPenTool,
      },
      {
        id: 3,
        name: "Contact",
        logo: FiMail,
      },
    ],
  },
  {
    id: 3,
    head: "Support",
    logo: FiLifeBuoy,
    items: [
      {
        id: 1,
        name: "FAQs",
        logo: AiOutlineQuestionCircle,
      },
      {
        id: 2,
        name: "Help Center",
        logo: BiBookContent,
      },
      {
        id: 3,
        name: "Report Issue",
        logo: BiBug,
      },
    ],
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
