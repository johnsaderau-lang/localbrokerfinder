import { useState } from "react";

// ─── CUSTOM SVG ICON LIBRARY ──────────────────────────────────────────────────
// All icons: filled, consistent 24x24 viewBox, bold and friendly

const Icon = ({ name, size = 24, color = "currentColor", style = {} }) => {
  const icons = {
    // Logo mark — house with finder pin
    logo: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10.5L12 3L21 10.5V21H15V15H9V21H3V10.5Z" fill={color} />
        <circle cx="18" cy="18" r="3.5" fill="white" />
        <circle cx="18" cy="18" r="2" fill={color} />
        <path d="M20.5 20.5L23 23" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    // Borrowing power — fist / muscle
    borrow: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill={color}/>
        <text x="12" y="17" textAnchor="middle" fill="white" fontSize="13" fontWeight="900" fontFamily="sans-serif">$</text>
      </svg>
    ),
    // Repayments — calendar with dollar
    repay: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="18" height="16" rx="2" fill={color} />
        <rect x="3" y="5" width="18" height="5" rx="2" fill={color} opacity="0.7" />
        <rect x="7" y="2" width="2" height="5" rx="1" fill={color} />
        <rect x="15" y="2" width="2" height="5" rx="1" fill={color} />
        <text x="12" y="17" textAnchor="middle" fill="white" fontSize="7" fontWeight="800" fontFamily="sans-serif">$</text>
      </svg>
    ),
    // Property value — house with magnifier
    property: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 11L10 4L18 11V21H13V16H7V21H2V11Z" fill={color} />
        <circle cx="18.5" cy="17.5" r="3.5" fill="white" stroke={color} strokeWidth="2" />
        <path d="M21 20L23 22" stroke={color} strokeWidth="2.2" strokeLinecap="round" />
      </svg>
    ),
    // Credit score — shield with checkmark
    credit: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L4 6V12C4 16.4 7.4 20.5 12 22C16.6 20.5 20 16.4 20 12V6L12 2Z" fill={color} />
        <path d="M8.5 12L11 14.5L15.5 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    // First home
    firsthome: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10.5L12 3L21 10.5V21H15V15H9V21H3V10.5Z" fill={color} />
        <circle cx="12" cy="10" r="2" fill="white" />
      </svg>
    ),
    // Investment / growth
    investment: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="14" width="4" height="7" rx="1" fill={color} />
        <rect x="10" y="10" width="4" height="11" rx="1" fill={color} />
        <rect x="17" y="5" width="4" height="16" rx="1" fill={color} />
        <path d="M5 10L10 7L15 9L21 4" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M18 4H21V7" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    // Refinance — circular arrows
    refinance: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4C8.7 4 6 6.7 6 10H3L7 14L11 10H8C8 7.8 9.8 6 12 6C14.2 6 16 7.8 16 10C16 12.2 14.2 14 12 14C11.1 14 10.3 13.7 9.7 13.2L8.2 14.7C9.2 15.5 10.5 16 12 16C15.3 16 18 13.3 18 10C18 6.7 15.3 4 12 4Z" fill={color} />
        <path d="M12 16V21M12 21L10 19M12 21L14 19" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    // Self-employed — briefcase
    selfemployed: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="9" width="20" height="13" rx="2" fill={color} />
        <path d="M8 9V7C8 5.9 8.9 5 10 5H14C15.1 5 16 5.9 16 7V9" stroke={color} strokeWidth="2" strokeLinecap="round" />
        <path d="M2 14H22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="10" y="12" width="4" height="4" rx="1" fill="white" />
      </svg>
    ),
    // Construction — hard hat
    construction: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 17H20C20 17 19 11 12 11C5 11 4 17 4 17Z" fill={color} />
        <rect x="3" y="17" width="18" height="3" rx="1.5" fill={color} />
        <rect x="11" y="5" width="2" height="6" rx="1" fill={color} />
        <path d="M7 11V8L11 11" fill={color} />
        <path d="M17 11V8L13 11" fill={color} />
      </svg>
    ),
    // Low deposit — piggy bank
    lowdeposit: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 10C18 7.2 15.3 5 12 5C8.7 5 6 7.2 6 10C6 12 7.2 13.7 9 14.7V17H15V14.7C16.8 13.7 18 12 18 10Z" fill={color} />
        <rect x="9" y="17" width="6" height="3" rx="1" fill={color} />
        <circle cx="19" cy="10" r="2" fill={color} />
        <path d="M10 9C10 8.4 10.9 8 12 8C13.1 8 14 8.4 14 9" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    // Timeline — lightning (ready now)
    ready: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13 2L4 14H12L11 22L20 10H12L13 2Z" fill={color} />
      </svg>
    ),
    // Calendar — getting serious
    calendar: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="5" width="18" height="16" rx="2" fill={color} />
        <rect x="3" y="5" width="18" height="6" rx="2" fill={color} opacity="0.65" />
        <rect x="7" y="2" width="2" height="5" rx="1" fill={color} />
        <rect x="15" y="2" width="2" height="5" rx="1" fill={color} />
        <circle cx="8" cy="15" r="1.5" fill="white" />
        <circle cx="12" cy="15" r="1.5" fill="white" />
        <circle cx="16" cy="15" r="1.5" fill="white" />
      </svg>
    ),
    // Compass — planning ahead
    compass: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="9" fill={color} />
        <path d="M15 8L13 13L8 15L10 10L15 8Z" fill="white" />
        <circle cx="12" cy="12" r="1.5" fill={color} />
      </svg>
    ),
    // Eyes — just looking
    looking: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 12C3 12 6 6 12 6C18 6 21 12 21 12C21 12 18 18 12 18C6 18 3 12 3 12Z" fill={color} />
        <circle cx="12" cy="12" r="3.5" fill="white" />
        <circle cx="12" cy="12" r="2" fill={color} />
      </svg>
    ),
    // PAYG — person with tie
    payg: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="7" r="4" fill={color} />
        <path d="M4 21C4 17.1 7.6 14 12 14C16.4 14 20 17.1 20 21" fill={color} />
        <path d="M11 14L12 17L13 14" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 17L11.5 20H12.5L12 17Z" fill="white" />
      </svg>
    ),
    // Company / trust — building
    company: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="8" width="18" height="14" rx="1" fill={color} />
        <rect x="6" y="3" width="12" height="5" rx="1" fill={color} opacity="0.7" />
        <rect x="7" y="12" width="3" height="3" rx="0.5" fill="white" />
        <rect x="14" y="12" width="3" height="3" rx="0.5" fill="white" />
        <rect x="10" y="16" width="4" height="6" rx="0.5" fill="white" />
      </svg>
    ),
    // Other — clipboard
    other: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="3" width="14" height="18" rx="2" fill={color} />
        <rect x="9" y="1" width="6" height="4" rx="1" fill={color} />
        <rect x="8" y="9" width="8" height="1.5" rx="0.75" fill="white" />
        <rect x="8" y="12.5" width="6" height="1.5" rx="0.75" fill="white" />
        <rect x="8" y="16" width="4" height="1.5" rx="0.75" fill="white" />
      </svg>
    ),
    // Handshake — match/connect
    handshake: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3 10H7L9 8H13L15 10H21V15H17L13 17H11L7 15H3V10Z" fill={color} />
        <path d="M9 8L11 10L13 8" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7" cy="12.5" r="1" fill="white" />
        <circle cx="17" cy="12.5" r="1" fill="white" />
      </svg>
    ),
    // Star — best match
    star: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.1 8.6L22 9.6L17 14.5L18.2 21.4L12 18L5.8 21.4L7 14.5L2 9.6L8.9 8.6L12 2Z" fill={color} />
      </svg>
    ),
    // Check — confirm
    check: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" fill={color} />
        <path d="M7 12L10.5 15.5L17 8.5" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    // Arrow right
    arrow: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    // Lock
    lock: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="11" width="14" height="11" rx="2" fill={color} />
        <path d="M8 11V7C8 4.8 9.8 3 12 3C14.2 3 16 4.8 16 7V11" stroke={color} strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="12" cy="16" r="1.5" fill="white" />
      </svg>
    ),
    // Search / find
    search: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10.5" cy="10.5" r="6.5" fill={color} />
        <path d="M15.5 15.5L21 21" stroke={color} strokeWidth="2.8" strokeLinecap="round" />
        <circle cx="10.5" cy="10.5" r="3.5" fill="white" opacity="0.3" />
      </svg>
    ),
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style}>
      {icons[name] || icons.search}
    </svg>
  );
};

// ─── DATA ────────────────────────────────────────────────────────────────────

const profiles = [
  { id: 1, tags: ["first-home", "investment", "refinance"], title: "The Bank Insider", tagline: "Knows exactly how lenders think", iconName: "borrow", avatarBg: "#E0F2F0", avatarColor: "#00897B", experience: "9 years", loans: "320+", rating: 4.9, reviews: 84, bio: "Spent years on the lender side before switching to broking. Uses that inside knowledge to get clients faster approvals and better rates.", traits: ["Get faster approvals", "Access a bigger lender panel", "Understand every step"] },
  { id: 2, tags: ["self-employed", "investment", "construction", "low-deposit"], title: "The Complex Deal Solver", tagline: "Finds yes when banks say no", iconName: "credit", avatarBg: "#E8F4FD", avatarColor: "#1A68C2", experience: "12 years", loans: "540+", rating: 4.8, reviews: 112, bio: "Specialises in tricky scenarios — self-employed, multiple properties, unusual income. If your situation is complicated, this is your person.", traits: ["Navigate self-employed lending", "Access non-bank lenders", "Structure deals creatively"] },
  { id: 3, tags: ["refinance", "investment"], title: "The Rate Optimizer", tagline: "Squeezes the best deal out of every lender", iconName: "repay", avatarBg: "#E0F2F0", avatarColor: "#00695C", experience: "7 years", loans: "280+", rating: 5.0, reviews: 61, bio: "Obsessed with finding the sharpest rate for every client. Runs comparison across dozens of lenders before recommending anything.", traits: ["Compare dozens of lenders", "Find a sharper rate", "Review your portfolio"] },
  { id: 4, tags: ["first-home", "low-deposit", "construction"], title: "The First Home Guide", tagline: "Makes the whole process easy to understand", iconName: "firsthome", avatarBg: "#E8F4FD", avatarColor: "#1A68C2", experience: "5 years", loans: "190+", rating: 4.9, reviews: 48, bio: "Patient, thorough, explains everything step by step. Perfect for first timers who want to feel confident, not overwhelmed.", traits: ["Understand every step", "Access grants & schemes", "Buy with confidence"] },
  { id: 5, tags: ["investment", "refinance", "self-employed"], title: "The Portfolio Builder", tagline: "Helps investors structure and scale", iconName: "investment", avatarBg: "#E0F2F0", avatarColor: "#00897B", experience: "11 years", loans: "410+", rating: 4.9, reviews: 97, bio: "Works primarily with property investors — from first IP to large portfolios. Understands equity, serviceability, and long-term structuring.", traits: ["Build your property portfolio", "Unlock your equity", "Structure loans to scale"] },
  { id: 6, tags: ["first-home", "refinance"], title: "The Straight Talker", tagline: "No jargon, no fluff — just results", iconName: "handshake", avatarBg: "#E8F4FD", avatarColor: "#1A68C2", experience: "6 years", loans: "220+", rating: 4.8, reviews: 53, bio: "Direct, efficient, gets things done fast. Clients always know exactly where their loan is at.", traits: ["Get answers fast", "Track your loan clearly", "Move without delays"] },
];

const loanPurposes = [
  { id: "first-home", label: "Buy my first home", iconName: "firsthome", desc: "Get into the market" },
  { id: "investment", label: "Buy an investment property", iconName: "investment", desc: "Grow my portfolio" },
  { id: "refinance", label: "Refinance my current loan", iconName: "refinance", desc: "Find a better deal" },
  { id: "self-employed", label: "Borrow as self-employed", iconName: "selfemployed", desc: "I run my own business" },
  { id: "construction", label: "Build or renovate", iconName: "construction", desc: "Fund construction" },
  { id: "low-deposit", label: "Buy with a low deposit", iconName: "lowdeposit", desc: "Less than 10% saved" },
];

const timelines = [
  { id: "now", label: "Ready to move", iconName: "ready", desc: "Within 3 months" },
  { id: "soon", label: "Getting serious", iconName: "calendar", desc: "3 to 6 months away" },
  { id: "planning", label: "Planning ahead", iconName: "compass", desc: "6 to 12 months out" },
  { id: "exploring", label: "Just looking", iconName: "looking", desc: "No rush, just curious" },
];

const employmentTypes = [
  { id: "payg", label: "Employed (PAYG)", iconName: "payg" },
  { id: "self", label: "Self-employed", iconName: "selfemployed" },
  { id: "company", label: "Company or trust", iconName: "company" },
  { id: "other", label: "Something else", iconName: "other" },
];

const entryCards = [
  { id: "borrow", iconName: "borrow", title: "See how much I can borrow", desc: "Work out my borrowing power based on my income", color: "#FFFFFF", accent: "#E53935", tag: null },
  { id: "repay", iconName: "repay", title: "Work out my repayments", desc: "See what my monthly repayments would look like", color: "#FFFFFF", accent: "#F9A825", tag: null },
  { id: "property", iconName: "property", title: "Get my property report", desc: "Request a real property report — we'll send it to you within 24 hours", color: "#FFFFFF", accent: "#1A68C2", tag: null },
  { id: "credit", iconName: "credit", title: "Get my credit report", desc: "Request a real credit check — we'll send your report within 24 hours", color: "#FFFFFF", accent: "#00897B", tag: null },
];

const fmt = (n) => n >= 1000000 ? `$${(n / 1000000).toFixed(2)}M` : n >= 1000 ? `$${Math.round(n / 1000)}k` : `$${n}`;
const calcBorrowing = (inc, exp) => Math.round(Math.max(0, inc - exp) * 5.8 * 0.85);
const calcRepayment = (amt, rate = 0.0614, yrs = 30) => { const r = rate / 12, n = yrs * 12; return Math.round(amt * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1)); };
const matchProfiles = (purpose) => profiles.filter(p => p.tags.includes(purpose)).slice(0, 3);
const captureLead = (lead) => {
  fetch("https://hook.eu1.make.com/trzjb66urt9ry46clbb6s1mprs8tkin7", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(lead),
  }).catch(err => console.error("Lead capture failed:", err));
};

const css = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
:root{
  --bg:#F7F5F2;--white:#fff;--teal:#00897B;--teal-lt:#E0F2F0;
  --teal-dk:#00695C;--text:#2D2D2D;--text2:#5C5C6B;--text3:#9898A8;
  --border:#E8E5E0;--sh:0 2px 12px rgba(0,0,0,.08);
  --sh-lg:0 8px 28px rgba(0,0,0,.13);--r:16px;--r-sm:10px;
  --font-head:'Plus Jakarta Sans',sans-serif;
  --font-body:'Inter',sans-serif;
}
body{background:var(--bg)}
.app{min-height:100vh;background:var(--bg);font-family:var(--font-body);color:var(--text)}
.nav{background:var(--white);border-bottom:2px solid var(--border);padding:16px 28px;display:flex;align-items:center;justify-content:space-between;position:sticky;top:0;z-index:100}
.logo{font-family:var(--font-head);font-size:21px;font-weight:800;color:var(--text);cursor:pointer;display:flex;align-items:center;gap:8px;letter-spacing:0}
.logo-mark{background:var(--teal);width:36px;height:36px;border-radius:10px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.nav-badge{background:var(--teal-lt);color:var(--teal-dk);border-radius:20px;font-size:12px;font-weight:700;padding:5px 14px;display:flex;align-items:center;gap:6px}
.prog{height:5px;background:var(--border)}
.prog-fill{height:5px;background:linear-gradient(90deg,var(--teal),#26C6B3);border-radius:0 3px 3px 0;transition:width .4s ease}
.hero{max-width:820px;margin:0 auto;padding:48px 24px 48px;text-align:center}
.pill{display:inline-flex;align-items:center;gap:8px;background:var(--teal-lt);color:var(--teal-dk);border-radius:20px;font-size:13px;font-weight:700;padding:7px 16px;margin-bottom:22px}
h1{font-family:var(--font-head);font-size:clamp(28px,5vw,48px);font-weight:900;line-height:1.15;margin-bottom:14px}
h1 .hi{color:var(--teal)}
.hero-sub{font-size:17px;color:var(--text2);line-height:1.7;margin-bottom:36px;max-width:540px;margin-left:auto;margin-right:auto}
.entry-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;max-width:720px;margin:0 auto 32px}
.entry-card{background:var(--white);border:2px solid var(--border);border-radius:var(--r);padding:24px 20px;text-align:left;cursor:pointer;transition:all .2s;position:relative;overflow:hidden}
.entry-card:hover{transform:translateY(-3px);box-shadow:var(--sh-lg)}
.entry-card.active{border-width:3px}
.entry-card-icon{width:52px;height:52px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:14px}
.entry-card-tag{position:absolute;top:14px;right:14px;font-size:10px;font-weight:800;letter-spacing:.06em;text-transform:uppercase;border-radius:20px;padding:3px 10px}
.entry-card-title{font-family:var(--font-head);font-size:16px;font-weight:800;margin-bottom:6px;line-height:1.3}
.entry-card-desc{font-size:13px;color:var(--text2);line-height:1.5}
.entry-card-arrow{position:absolute;bottom:18px;right:18px;opacity:0;transition:opacity .2s,transform .2s;transform:translateX(-4px)}
.entry-card:hover .entry-card-arrow,.entry-card.active .entry-card-arrow{opacity:1;transform:translateX(0)}
.calc-panel{max-width:720px;margin:0 auto;animation:slideDown .25s ease}
@keyframes slideDown{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}
.calc-inner{background:var(--white);border-radius:var(--r);box-shadow:var(--sh);padding:28px;border-top:4px solid var(--teal)}
.calc-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:22px}
.calc-title{font-family:var(--font-head);font-size:17px;font-weight:800;display:flex;align-items:center;gap:10px}
.calc-close{background:var(--bg);border:none;border-radius:8px;padding:7px 14px;font-size:13px;font-weight:700;color:var(--text2);cursor:pointer;font-family:var(--font-head);display:flex;align-items:center;gap:6px}
.calc-close:hover{background:var(--border)}
.calc-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:20px}
.flbl{display:block;font-size:13px;font-weight:700;color:var(--text2);margin-bottom:7px}
.inp-wrap{position:relative}
.inp-pre{position:absolute;left:14px;top:50%;transform:translateY(-50%);color:var(--teal);font-weight:700;font-size:15px;pointer-events:none}
.inp-suf{position:absolute;right:14px;top:50%;transform:translateY(-50%);color:var(--text3);font-weight:600;font-size:13px;pointer-events:none}
.inp{background:var(--bg);border:2px solid var(--border);border-radius:var(--r-sm);color:var(--text);font-family:var(--font-body);font-size:15px;font-weight:600;outline:none;padding:12px 12px 12px 30px;width:100%;transition:border-color .2s,box-shadow .2s}
.inp:focus{border-color:var(--teal);box-shadow:0 0 0 3px rgba(0,137,123,.12);background:var(--white)}
.inp::placeholder{color:var(--text3);font-weight:400}
.inp-bare{background:var(--bg);border:2px solid var(--border);border-radius:var(--r-sm);color:var(--text);font-family:var(--font-body);font-size:15px;font-weight:600;outline:none;padding:12px 14px;width:100%;transition:border-color .2s,box-shadow .2s}
.inp-bare:focus{border-color:var(--teal);box-shadow:0 0 0 3px rgba(0,137,123,.12);background:var(--white)}
.inp-bare::placeholder{color:var(--text3);font-weight:400}
.result-box{background:linear-gradient(135deg,#E0F7F4,#F0FBF9);border:2px solid #B2DFDB;border-radius:var(--r-sm);padding:18px;margin:16px 0}
.result-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.rv{font-family:var(--font-head);font-size:26px;font-weight:800;color:var(--teal-dk);text-align:center}
.rl{font-size:11px;font-weight:600;color:var(--teal);text-align:center;margin-top:4px;text-transform:uppercase;letter-spacing:.04em}
.prop-result{display:grid;grid-template-columns:1fr 1fr 1fr;gap:10px;margin:16px 0}
.pr-card{background:var(--bg);border:1px solid var(--border);border-radius:var(--r-sm);padding:12px;text-align:center}
.pr-val{font-family:var(--font-head);font-size:16px;font-weight:800;color:var(--teal-dk)}
.pr-lbl{font-size:10px;color:var(--text3);margin-top:3px;font-weight:600;text-transform:uppercase}
.score-meter{margin:8px 0 12px}
.score-track{height:14px;border-radius:7px;background:linear-gradient(90deg,#FF5252 0%,#FF9800 35%,#FFC107 55%,#8BC34A 75%,#4CAF50 100%);position:relative;margin-bottom:8px}
.score-needle{position:absolute;top:-4px;width:4px;height:22px;background:var(--text);border-radius:2px;transform:translateX(-50%);transition:left .5s ease}
.score-labels{display:flex;justify-content:space-between;font-size:10px;font-weight:700;color:var(--text3)}
.score-value{font-family:var(--font-head);font-size:32px;font-weight:800;text-align:center;margin:8px 0 4px}
.score-band{font-size:13px;font-weight:700;text-align:center;margin-bottom:12px}
.credit-info{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:4px}
.ci-card{background:var(--bg);border:1px solid var(--border);border-radius:var(--r-sm);padding:12px;text-align:center}
.ci-val{font-family:var(--font-head);font-size:14px;font-weight:800}
.ci-lbl{font-size:11px;color:var(--text3);margin-top:3px;font-weight:600}
.btn-p{background:var(--teal);border:none;border-radius:var(--r-sm);color:white;cursor:pointer;font-family:var(--font-head);font-size:15px;font-weight:800;padding:15px 28px;width:100%;transition:background .2s,transform .1s,box-shadow .2s;box-shadow:0 4px 14px rgba(0,137,123,.3);display:flex;align-items:center;justify-content:center;gap:8px}
.btn-p:hover{background:var(--teal-dk);transform:translateY(-1px);box-shadow:0 6px 20px rgba(0,137,123,.35)}
.btn-p:disabled{background:#B0BEC5;box-shadow:none;cursor:not-allowed;transform:none}
.btn-s{background:var(--white);border:2px solid var(--border);border-radius:var(--r-sm);color:var(--text2);cursor:pointer;font-family:var(--font-head);font-size:14px;font-weight:700;padding:12px 22px;transition:all .2s;display:flex;align-items:center;gap:6px}
.btn-s:hover{border-color:var(--teal);color:var(--teal);background:var(--teal-lt)}
.trust{display:flex;background:var(--white);border-radius:var(--r);box-shadow:var(--sh);max-width:480px;margin:32px auto 0;overflow:hidden}
.trust-item{flex:1;padding:16px 10px;text-align:center;border-right:1px solid var(--border);display:flex;flex-direction:column;align-items:center;gap:6px}
.trust-item:last-child{border-right:none}
.tv{font-family:var(--font-head);font-size:14px;font-weight:800;color:var(--text)}
.tl{font-size:11px;color:var(--text3);font-weight:600}
.quiz-wrap{max-width:660px;margin:0 auto;padding:36px 24px}
.step-pills{display:flex;gap:8px;margin-bottom:28px}
.spill{height:6px;border-radius:3px;flex:1;transition:background .3s}
.recall{background:var(--teal-lt);border-radius:var(--r-sm);padding:12px 18px;margin-bottom:24px;display:flex;gap:12px;align-items:center}
.quiz-q{font-family:var(--font-head);font-size:24px;font-weight:800;margin-bottom:8px}
.quiz-hint{font-size:15px;color:var(--text2);margin-bottom:26px}
.icon-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(148px,1fr));gap:12px;margin-bottom:28px}
.ibtn{background:var(--white);border:2px solid var(--border);border-radius:var(--r);cursor:pointer;padding:20px 14px;text-align:center;transition:all .18s;color:var(--text);width:100%;display:flex;flex-direction:column;align-items:center;gap:8px}
.ibtn:hover{border-color:var(--teal);background:var(--teal-lt);transform:translateY(-2px);box-shadow:var(--sh)}
.ibtn.sel{border-color:var(--teal);background:var(--teal-lt);box-shadow:0 0 0 3px rgba(0,137,123,.15)}
.ibtn .lbl{font-family:var(--font-head);font-size:13px;font-weight:800;display:block}
.ibtn .dsc{font-size:11px;color:var(--text3)}
.quiz-nav{display:flex;gap:12px;align-items:center}
.step-ctr{font-size:13px;color:var(--text3);font-weight:600;margin-top:14px}
.match-wrap{max-width:960px;margin:0 auto;padding:36px 24px}
.match-title{font-family:var(--font-head);font-size:28px;font-weight:900;margin-bottom:8px}
.profile-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(290px,1fr));gap:20px;margin:28px 0 32px}
.pcard{background:var(--white);border:2px solid var(--border);border-radius:var(--r);padding:26px;box-shadow:var(--sh);transition:all .2s}
.pcard:hover{box-shadow:var(--sh-lg);transform:translateY(-3px);border-color:#B2DFDB}
.pcard.top{border-color:var(--teal);box-shadow:0 4px 20px rgba(0,137,123,.15)}
.top-badge{display:inline-flex;align-items:center;gap:6px;background:var(--teal);color:white;font-size:11px;font-weight:800;border-radius:20px;padding:5px 12px;margin-bottom:16px}
.p-icon-wrap{width:56px;height:56px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:14px}
.p-title{font-family:var(--font-head);font-size:18px;font-weight:900;margin-bottom:4px}
.p-tagline{font-size:13px;font-weight:600;margin-bottom:14px}
.p-bio{font-size:14px;color:var(--text2);line-height:1.6;margin-bottom:16px}
.trait-list{display:flex;flex-direction:column;gap:6px;margin-bottom:16px}
.trait{display:flex;align-items:center;gap:8px;font-size:13px;font-weight:600;color:var(--text2)}
.stat-row{display:grid;grid-template-columns:1fr 1fr 1fr;gap:8px;margin-bottom:18px}
.sc{background:var(--bg);border-radius:var(--r-sm);padding:10px;text-align:center;border:1px solid var(--border)}
.sv{font-family:var(--font-head);font-size:15px;font-weight:800;color:var(--teal-dk)}
.sl{font-size:10px;color:var(--text3);margin-top:2px;font-weight:600}
.star-row{display:flex;align-items:center;gap:2px}
.star{width:12px;height:12px}
.overlay{position:fixed;inset:0;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;z-index:200;padding:20px;backdrop-filter:blur(4px)}
.modal{background:var(--white);border-radius:20px;max-width:500px;width:100%;max-height:92vh;overflow-y:auto;padding:32px;box-shadow:0 20px 60px rgba(0,0,0,.2)}
.modal-steps{display:flex;gap:6px;margin-bottom:24px}
.mseg{flex:1;height:5px;border-radius:3px;transition:background .3s}
.mtitle{font-family:var(--font-head);font-size:22px;font-weight:800;margin-bottom:6px}
.msub{font-size:14px;color:var(--text2);margin-bottom:24px;line-height:1.5}
.mfield{margin-bottom:14px}
.inp-plain{background:var(--bg);border:2px solid var(--border);border-radius:var(--r-sm);color:var(--text);font-family:var(--font-body);font-size:15px;font-weight:600;outline:none;padding:12px 14px;width:100%;transition:border-color .2s,box-shadow .2s}
.inp-plain:focus{border-color:var(--teal);box-shadow:0 0 0 3px rgba(0,137,123,.12);background:var(--white)}
.inp-plain::placeholder{color:var(--text3);font-weight:400}
.frow{display:grid;grid-template-columns:1fr 1fr;gap:12px}
.confirmed-val{background:var(--teal-lt);border:2px solid #B2DFDB;border-radius:var(--r-sm);padding:12px 14px;font-size:15px;font-weight:700;color:var(--teal-dk);display:flex;align-items:center;gap:8px}
.mbtns{display:flex;gap:10px;margin-top:20px}
.legal{font-size:11px;color:var(--text3);text-align:center;margin-top:12px;line-height:1.5}
.sico{width:68px;height:68px;background:var(--teal-lt);border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 20px}
.sum-box{background:var(--bg);border:2px solid var(--border);border-radius:var(--r-sm);padding:16px;margin:18px 0;text-align:left}
.sum-title{font-size:11px;font-weight:700;color:var(--teal);text-transform:uppercase;letter-spacing:.07em;margin-bottom:12px}
.sum-row{display:flex;justify-content:space-between;font-size:14px;margin-bottom:8px}
.sum-row:last-child{margin-bottom:0}
.next-box{background:#FFFBEA;border:2px solid #FFE082;border-radius:var(--r-sm);padding:16px;margin:16px 0;text-align:left}
.next-step{display:flex;gap:12px;align-items:flex-start;margin-bottom:12px;font-size:14px}
.next-step:last-child{margin-bottom:0}
.next-num{background:var(--teal);color:white;width:24px;height:24px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:800;flex-shrink:0;margin-top:1px}
.footer{border-top:2px solid var(--border);padding:24px 28px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;margin-top:60px;background:var(--white)}
.flogo{font-family:var(--font-head);font-weight:800;font-size:17px;color:var(--text3);display:flex;align-items:center;gap:8px}
.flegal{font-size:12px;color:var(--text3)}
select.inp-plain option{background:white}
@media(max-width:600px){
  .entry-grid{grid-template-columns:1fr 1fr}.calc-grid{grid-template-columns:1fr}
  .frow{grid-template-columns:1fr}.icon-grid{grid-template-columns:repeat(2,1fr)}
  .nav{padding:14px 18px}.modal{padding:24px 18px}.hero{padding:32px 18px 36px}
  .stat-row{grid-template-columns:1fr 1fr}.prop-result{grid-template-columns:1fr 1fr}
  .entry-card{padding:18px 14px}
}
`;

// ─── STAR RATING ──────────────────────────────────────────────────────────────

const StarRating = ({ rating }) => (
  <div className="star-row">
    {[1,2,3,4,5].map(i => (
      <svg key={i} className="star" viewBox="0 0 24 24">
        <path d="M12 2L15.1 8.6L22 9.6L17 14.5L18.2 21.4L12 18L5.8 21.4L7 14.5L2 9.6L8.9 8.6L12 2Z"
          fill={i <= Math.floor(rating) ? "#FFA500" : "#E8E5E0"} />
      </svg>
    ))}
    <span style={{fontSize:"12px",color:"var(--text3)",marginLeft:"4px",fontWeight:600}}>
      {rating}
    </span>
  </div>
);

// ─── CALCULATORS ──────────────────────────────────────────────────────────────

function BorrowCalc({ onReady, accent }) {
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const inc = parseFloat(income) || 0;
  const exp = parseFloat(expenses) || 0;
  const borrowing = inc > 0 ? calcBorrowing(inc, exp) : 0;
  const repay = borrowing > 0 ? calcRepayment(borrowing) : 0;
  return (
    <>
      <div className="calc-grid">
        <div>
          <label className="flbl">Enter your annual income</label>
          <div className="inp-wrap"><span className="inp-pre">$</span>
            <input className="inp" type="number" placeholder="e.g. 120,000" value={income} onChange={e => setIncome(e.target.value)} />
          </div>
        </div>
        <div>
          <label className="flbl">Enter your monthly expenses</label>
          <div className="inp-wrap"><span className="inp-pre">$</span>
            <input className="inp" type="number" placeholder="e.g. 3,500" value={expenses} onChange={e => setExpenses(e.target.value)} />
          </div>
        </div>
      </div>
      {borrowing > 0 && (
        <div className="result-box">
          <div className="result-grid">
            <div><div className="rv">{fmt(borrowing)}</div><div className="rl">Borrowing Power</div></div>
            <div><div className="rv">${repay.toLocaleString()}<span style={{fontSize:"15px"}}>/mo</span></div><div className="rl">Est. Repayment</div></div>
          </div>
        </div>
      )}
      <button className="btn-p" style={{background:accent}} onClick={() => onReady({ borrowing, repay, calcType:"borrow" })} disabled={!income}>
        Find me a broker who can help <Icon name="arrow" size={18} color="white" />
      </button>
      <p style={{fontSize:"11px",color:"var(--text3)",textAlign:"center",marginTop:"10px"}}>Estimate only · Based on 6.14% variable rate · 30yr P&I</p>
    </>
  );
}

function RepayCalc({ onReady, accent }) {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState("6.14");
  const [years, setYears] = useState("30");
  const amt = parseFloat(amount) || 0;
  const r = parseFloat(rate) / 100 || 0.0614;
  const y = parseInt(years) || 30;
  const repay = amt > 0 ? calcRepayment(amt, r, y) : 0;
  const totalInterest = repay * y * 12 - amt;
  return (
    <>
      <div className="calc-grid">
        <div>
          <label className="flbl">Enter your loan amount</label>
          <div className="inp-wrap"><span className="inp-pre">$</span>
            <input className="inp" type="number" placeholder="e.g. 600,000" value={amount} onChange={e => setAmount(e.target.value)} />
          </div>
        </div>
        <div>
          <label className="flbl">Enter your interest rate</label>
          <div className="inp-wrap">
            <input className="inp" type="number" step="0.01" placeholder="6.14" value={rate} onChange={e => setRate(e.target.value)} style={{paddingLeft:"14px",paddingRight:"30px"}} />
            <span className="inp-suf">%</span>
          </div>
        </div>
      </div>
      <div style={{marginBottom:"20px"}}>
        <label className="flbl">Select your loan term</label>
        <div style={{display:"flex",gap:"8px"}}>
          {[10,15,20,25,30].map(y => (
            <button key={y} onClick={() => setYears(String(y))} style={{flex:1,padding:"10px 4px",border:`2px solid ${years===String(y)?accent:"var(--border)"}`,borderRadius:"8px",background:years===String(y)?"rgba(26,104,194,.08)":"var(--white)",color:years===String(y)?accent:"var(--text2)",fontFamily:"var(--font-head)",fontWeight:800,fontSize:"13px",cursor:"pointer",transition:"all .18s"}}>
              {y}yr
            </button>
          ))}
        </div>
      </div>
      {repay > 0 && (
        <div className="result-box">
          <div className="result-grid">
            <div><div className="rv">${repay.toLocaleString()}<span style={{fontSize:"15px"}}>/mo</span></div><div className="rl">Monthly Repayment</div></div>
            <div><div className="rv">{fmt(totalInterest)}</div><div className="rl">Total Interest Paid</div></div>
          </div>
        </div>
      )}
      <button className="btn-p" style={{background:accent}} onClick={() => onReady({ repay, loanAmount:amt, calcType:"repay" })} disabled={!amount}>
        Find a broker to beat this rate <Icon name="arrow" size={18} color="white" />
      </button>
      <p style={{fontSize:"11px",color:"var(--text3)",textAlign:"center",marginTop:"10px"}}>Estimate only · Principal & Interest · Indicative rate</p>
    </>
  );
}

function PropertyCalc({ accent }) {
  const [step, setStep] = useState(0);
  const [address, setAddress] = useState("");
  const [propType, setPropType] = useState("house");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const submit = () => {
    captureLead({ type: "property-report", address, propType, name, phone, email, timestamp: new Date().toISOString() });
    setStep(2);
  };

  return (
    <>
      {step === 0 && (
        <>
          <p style={{fontSize:"14px",color:"var(--text2)",marginBottom:"20px",lineHeight:"1.7"}}>
            We'll pull a real property report for your address — including recent sales, comparable properties, and an estimated value range. Leave your details and we'll have it with you within 24 hours.
          </p>
          <div style={{marginBottom:"16px"}}>
            <label className="flbl">Enter your property address</label>
            <input className="inp-bare" type="text" placeholder="e.g. 42 Smith Street, Newtown NSW" value={address} onChange={e => setAddress(e.target.value)} />
          </div>
          <div style={{marginBottom:"20px"}}>
            <label className="flbl">Select property type</label>
            <div style={{display:"flex",gap:"8px"}}>
              {[["house","🏠 House"],["unit","🏢 Unit / Apt"]].map(([val,label]) => (
                <button key={val} onClick={() => setPropType(val)} style={{flex:1,padding:"11px 8px",border:`2px solid ${propType===val?accent:"var(--border)"}`,borderRadius:"8px",background:propType===val?`${accent}12`:"var(--white)",color:propType===val?accent:"var(--text2)",fontFamily:"var(--font-head)",fontWeight:800,fontSize:"13px",cursor:"pointer",transition:"all .18s"}}>
                  {label}
                </button>
              ))}
            </div>
          </div>
          <div style={{background:`${accent}10`,border:`1px solid ${accent}30`,borderRadius:"8px",padding:"12px 14px",marginBottom:"18px",fontSize:"13px",color:accent,fontWeight:600,display:"flex",alignItems:"center",gap:"8px"}}>
            <Icon name="check" size={16} color={accent} />
            Real data from recent sales · Delivered within 24 hours · Free
          </div>
          <button className="btn-p" style={{background:accent}} onClick={() => setStep(1)} disabled={!address}>
            Request my property report <Icon name="arrow" size={18} color="white" />
          </button>
        </>
      )}

      {step === 1 && (
        <>
          <div style={{background:"#FFFBEA",border:"2px solid #FFE082",borderRadius:"10px",padding:"18px 20px",marginBottom:"22px"}}>
            <div style={{fontFamily:"var(--font-head)",fontWeight:800,fontSize:"15px",marginBottom:"4px",color:"#6D4C00"}}>
              Almost there — where should we send your report?
            </div>
            <div style={{fontSize:"13px",color:"var(--text2)",lineHeight:"1.6"}}>
              We'll pull the data for <strong>{address}</strong> and send your report within 24 hours.
            </div>
          </div>
          <div className="calc-grid">
            <div>
              <label className="flbl">Your first name</label>
              <input className="inp-bare" type="text" placeholder="Jane" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
              <label className="flbl">Your mobile</label>
              <input className="inp-bare" type="tel" placeholder="04XX XXX XXX" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
          </div>
          <div style={{marginBottom:"18px"}}>
            <label className="flbl">Your email address</label>
            <input className="inp-bare" type="email" placeholder="jane@example.com" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <button className="btn-p" style={{background:accent}} onClick={submit} disabled={!name||!phone||!email}>
            Send me my report <Icon name="arrow" size={18} color="white" />
          </button>
          <p style={{fontSize:"11px",color:"var(--text3)",textAlign:"center",marginTop:"10px"}}>Your details are never shared with third parties.</p>
        </>
      )}

      {step === 2 && (
        <div style={{textAlign:"center",padding:"12px 0"}}>
          <div style={{width:"64px",height:"64px",background:`${accent}15`,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px"}}>
            <Icon name="check" size={32} color={accent} />
          </div>
          <div style={{fontFamily:"var(--font-head)",fontWeight:800,fontSize:"20px",marginBottom:"8px"}}>Report requested!</div>
          <p style={{fontSize:"14px",color:"var(--text2)",lineHeight:"1.7",marginBottom:"0"}}>
            We'll pull the data for <strong>{address}</strong> and send your property report to <strong>{email}</strong> within 24 hours.
          </p>
        </div>
      )}
    </>
  );
}

function CreditCalc({ accent }) {
  const [step, setStep] = useState(0);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const submit = () => {
    captureLead({ type: "credit-report", name, dob, phone, email, timestamp: new Date().toISOString() });
    setStep(2);
  };

  return (
    <>
      {step === 0 && (
        <>
          <p style={{fontSize:"14px",color:"var(--text2)",marginBottom:"20px",lineHeight:"1.7"}}>
            Lenders check your credit file before every home loan application. We'll pull a real credit report for you and walk you through what it means — usually within 24 hours. Free, and it won't affect your score.
          </p>
          <div className="calc-grid">
            <div>
              <label className="flbl">Your full name</label>
              <input className="inp-bare" type="text" placeholder="e.g. Jane Smith" value={name} onChange={e => setName(e.target.value)} />
            </div>
            <div>
              <label className="flbl">Your date of birth</label>
              <input className="inp-bare" type="date" value={dob} onChange={e => setDob(e.target.value)} />
            </div>
          </div>
          <div style={{background:`${accent}10`,border:`1px solid ${accent}30`,borderRadius:"8px",padding:"12px 14px",marginBottom:"18px",fontSize:"13px",color:accent,fontWeight:600,display:"flex",alignItems:"center",gap:"8px"}}>
            <Icon name="lock" size={16} color={accent} />
            Soft check only — won't leave a mark on your file
          </div>
          <button className="btn-p" style={{background:accent}} onClick={() => setStep(1)} disabled={!name||!dob}>
            Request my credit report <Icon name="arrow" size={18} color="white" />
          </button>
        </>
      )}

      {step === 1 && (
        <>
          <div style={{background:"#FFFBEA",border:"2px solid #FFE082",borderRadius:"10px",padding:"18px 20px",marginBottom:"22px"}}>
            <div style={{fontFamily:"var(--font-head)",fontWeight:800,fontSize:"15px",marginBottom:"4px",color:"#6D4C00"}}>
              Where should we send your report?
            </div>
            <div style={{fontSize:"13px",color:"var(--text2)",lineHeight:"1.6"}}>
              We'll pull your credit file and send a full report to you within 24 hours — along with a plain-English breakdown of what it means for your home loan.
            </div>
          </div>
          <div className="calc-grid">
            <div>
              <label className="flbl">Your mobile</label>
              <input className="inp-bare" type="tel" placeholder="04XX XXX XXX" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
            <div>
              <label className="flbl">Your email address</label>
              <input className="inp-bare" type="email" placeholder="jane@example.com" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
          </div>
          <button className="btn-p" style={{background:accent}} onClick={submit} disabled={!phone||!email}>
            Send me my report <Icon name="arrow" size={18} color="white" />
          </button>
          <p style={{fontSize:"11px",color:"var(--text3)",textAlign:"center",marginTop:"10px"}}>Your details are never shared with third parties.</p>
        </>
      )}

      {step === 2 && (
        <div style={{textAlign:"center",padding:"12px 0"}}>
          <div style={{width:"64px",height:"64px",background:`${accent}15`,borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 18px"}}>
            <Icon name="check" size={32} color={accent} />
          </div>
          <div style={{fontFamily:"var(--font-head)",fontWeight:800,fontSize:"20px",marginBottom:"8px"}}>Report requested!</div>
          <p style={{fontSize:"14px",color:"var(--text2)",lineHeight:"1.7",marginBottom:"0"}}>
            We'll pull your credit file and send your report to <strong>{email}</strong> within 24 hours — along with a plain-English breakdown of what it means for your borrowing power.
          </p>
        </div>
      )}
    </>
  );
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  const [screen, setScreen] = useState("hero");
  const [activeEntry, setActiveEntry] = useState(null);
  const [calcResults, setCalcResults] = useState({});
  const [quizStep, setQuizStep] = useState(0);
  const [purpose, setPurpose] = useState(null);
  const [timeline, setTimeline] = useState(null);
  const [employment, setEmployment] = useState(null);
  const [matched, setMatched] = useState([]);
  const [selProfile, setSelProfile] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [mStep, setMStep] = useState(0);
  const [loanRange, setLoanRange] = useState("");
  const [form, setForm] = useState({ name:"", phone:"", email:"", message:"" });

  const progress = screen==="hero"?8:screen==="quiz"?28+quizStep*22:screen==="match"?88:100;
  const activeCard = entryCards.find(c => c.id===activeEntry);

  const handleCalcReady = (results) => { setCalcResults(results); setScreen("quiz"); setQuizStep(0); };
  const nextQuiz = () => {
    if (quizStep<2) setQuizStep(q => q+1);
    else { setMatched(matchProfiles(purpose||"first-home")); setScreen("match"); }
  };
  const quizValid = [purpose,timeline,employment][quizStep]!==null;
  const openEnquiry = (p) => { setSelProfile(p); setShowModal(true); setMStep(0); };
  const submitLead = () => {
    captureLead({ timestamp:new Date().toISOString(), consumer:{...form}, calcType:calcResults.calcType, calcResults:{...calcResults}, purpose:loanPurposes.find(p=>p.id===purpose)?.label, timeline:timelines.find(t=>t.id===timeline)?.label, employment:employmentTypes.find(e=>e.id===employment)?.label, loanRange, profileMatched:selProfile?.title });
    setMStep(2);
  };
  const reset = () => { setScreen("hero"); setActiveEntry(null); setCalcResults({}); setQuizStep(0); setPurpose(null); setTimeline(null); setEmployment(null); setMatched([]); setSelProfile(null); setShowModal(false); setMStep(0); setLoanRange(""); setForm({name:"",phone:"",email:"",message:""}); };
  const recallText = () => {
    if (calcResults.borrowing) return `You can borrow up to ${fmt(calcResults.borrowing)}`;
    if (calcResults.repay&&calcResults.loanAmount) return `Repayments ~$${calcResults.repay.toLocaleString()}/mo on ${fmt(calcResults.loanAmount)}`;
    if (calcResults.propertyValue) return `Your property is estimated at ${fmt(calcResults.propertyValue)}`;
    if (calcResults.creditScore) return `Your credit score: ${calcResults.creditScore} (${calcResults.creditBand})`;
    return null;
  };

  return (
    <>
      <style>{css}</style>
      <div className="app">

        {/* NAV */}
        <nav className="nav">
          <div className="logo" onClick={reset} style={{alignItems:"flex-end"}}>
            <div style={{
              background:"#2D2D2D",
              borderRadius:"10px",
              padding:"6px 10px",
              lineHeight:1.05,
              letterSpacing:"-0.5px",
              fontFamily:"var(--font-head)",
              fontWeight:900,
              fontSize:"12px",
              color:"white",
              flexShrink:0,
            }}>
              <div>Loc<span style={{color:"#00897B"}}>A</span>l</div>
              <div style={{color:"#00897B"}}>broke</div>
              <div><span style={{color:"#00897B"}}>R</span>find</div>
              <div>er.<span style={{color:"#00897B"}}>Au</span></div>
            </div>
            <span style={{fontFamily:"var(--font-head)",fontWeight:800,fontSize:"16px",letterSpacing:"-0.3px",whiteSpace:"nowrap",alignSelf:"flex-end"}}>local<span style={{color:"#00897B"}}>broker</span>finder.au</span>
          </div>
          <div className="nav-badge">
            <Icon name="check" size={14} color="var(--teal-dk)" />
            Free to use
          </div>
        </nav>

        <div className="prog"><div className="prog-fill" style={{width:`${progress}%`}} /></div>

        {/* ── HERO ── */}
        {screen==="hero" && (
          <div className="hero">
            <div className="pill">
              <Icon name="handshake" size={16} color="var(--teal-dk)" />
              Australia's broker matching platform
            </div>

            <h1>
              Get matched with the right <span className="hi">broker</span> in minutes.
            </h1>

            <p className="hero-sub">
              Tell us what you're looking for. We'll handle the introductions — no awkward small talk required.
            </p>

            {/* ENTRY CARDS */}
            <div className="entry-grid">
              {entryCards.map(card => (
                <div
                  key={card.id}
                  className={`entry-card${activeEntry===card.id?" active":""}`}
                  style={{
                    borderColor: card.accent,
                    borderWidth: activeEntry===card.id ? "3px" : "2px",
                    background: card.color,
                    cursor: "pointer",
                    opacity: 1,
                  }}
                  onClick={() => setActiveEntry(prev => prev===card.id ? null : card.id)}
                >
                  {card.tag && (
                    <div className="entry-card-tag" style={{background:card.accent,color:"white"}}>{card.tag}</div>
                  )}
                  <div className="entry-card-icon" style={{background:`${card.accent}18`}}>
                    <Icon name={card.iconName} size={28} color={card.accent} />
                  </div>
                  <div className="entry-card-title" style={{color:activeEntry===card.id?card.accent:"var(--text)"}}>
                    {card.title}
                  </div>
                  <div className="entry-card-desc">{card.desc}</div>
                  <div className="entry-card-arrow">
                    <Icon name="arrow" size={18} color={card.accent} />
                  </div>
                </div>
              ))}
            </div>

            {/* CALC PANEL */}
            {activeEntry && activeCard && (
              <div className="calc-panel">
                <div className="calc-inner" style={{borderTopColor:activeCard.accent}}>
                  <div className="calc-header">
                    <div className="calc-title">
                      <Icon name={activeCard.iconName} size={22} color={activeCard.accent} />
                      {activeCard.title}
                    </div>
                    <button className="calc-close" onClick={() => setActiveEntry(null)}>
                      Close
                    </button>
                  </div>
                  {activeEntry==="borrow" && <BorrowCalc onReady={handleCalcReady} accent={activeCard.accent} />}
                  {activeEntry==="repay" && <RepayCalc onReady={handleCalcReady} accent={activeCard.accent} />}
                  {activeEntry==="property" && <PropertyCalc accent={activeCard.accent} />}
                  {activeEntry==="credit" && <CreditCalc accent={activeCard.accent} />}
                </div>
              </div>
            )}

            {/* TRUST STRIP */}
            {!activeEntry && (
              <div className="trust">
                {[
                  ["check","Independent","Not owned by any bank"],
                  ["search","Australia-wide","Brokers in every state"],
                  ["star","Free","No cost to you"],
                ].map(([icon,v,l]) => (
                  <div key={l} className="trust-item">
                    <Icon name={icon} size={20} color="var(--teal)" />
                    <div className="tv">{v}</div>
                    <div className="tl">{l}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ── QUIZ ── */}
        {screen==="quiz" && (
          <div className="quiz-wrap">
            <div className="step-pills">
              {[0,1,2].map(i => <div key={i} className="spill" style={{background:i<=quizStep?"var(--teal)":"var(--border)"}} />)}
            </div>
            {recallText() && (
              <div className="recall">
                <Icon name="check" size={18} color="var(--teal-dk)" />
                <span style={{fontSize:"14px",color:"var(--teal-dk)",fontWeight:600}}>{recallText()}</span>
              </div>
            )}
            {quizStep===0 && <>
              <div className="quiz-q">What are you looking for?</div>
              <div className="quiz-hint">Pick the option that fits — we'll find you the right match.</div>
              <div className="icon-grid">
                {loanPurposes.map(p => (
                  <button key={p.id} className={`ibtn${purpose===p.id?" sel":""}`} onClick={() => setPurpose(p.id)}>
                    <Icon name={p.iconName} size={32} color={purpose===p.id?"var(--teal-dk)":"var(--text3)"} />
                    <span className="lbl">{p.label}</span>
                    <span className="dsc">{p.desc}</span>
                  </button>
                ))}
              </div>
            </>}
            {quizStep===1 && <>
              <div className="quiz-q">How soon are you looking to move?</div>
              <div className="quiz-hint">No pressure — even just looking counts.</div>
              <div className="icon-grid">
                {timelines.map(t => (
                  <button key={t.id} className={`ibtn${timeline===t.id?" sel":""}`} onClick={() => setTimeline(t.id)}>
                    <Icon name={t.iconName} size={32} color={timeline===t.id?"var(--teal-dk)":"var(--text3)"} />
                    <span className="lbl">{t.label}</span>
                    <span className="dsc">{t.desc}</span>
                  </button>
                ))}
              </div>
            </>}
            {quizStep===2 && <>
              <div className="quiz-q">Tell us a bit about yourself</div>
              <div className="quiz-hint">Different income types suit different lenders — this helps us find your best match.</div>
              <div className="icon-grid" style={{gridTemplateColumns:"repeat(2,1fr)"}}>
                {employmentTypes.map(e => (
                  <button key={e.id} className={`ibtn${employment===e.id?" sel":""}`} onClick={() => setEmployment(e.id)}>
                    <Icon name={e.iconName} size={32} color={employment===e.id?"var(--teal-dk)":"var(--text3)"} />
                    <span className="lbl">{e.label}</span>
                  </button>
                ))}
              </div>
            </>}
            <div className="quiz-nav">
              {quizStep>0 && <button className="btn-s" onClick={() => setQuizStep(q=>q-1)}><Icon name="arrow" size={16} color="var(--text2)" style={{transform:"rotate(180deg)"}} /> Go back</button>}
              <button className="btn-p" onClick={nextQuiz} disabled={!quizValid} style={{flex:1}}>
                {quizStep<2 ? <><span>Continue</span><Icon name="arrow" size={18} color="white" /></> : <><span>See my matches</span><Icon name="arrow" size={18} color="white" /></>}
              </button>
            </div>
            <div className="step-ctr">Step {quizStep+1} of 3</div>
          </div>
        )}

        {/* ── MATCH ── */}
        {screen==="match" && (
          <div className="match-wrap">
            <div className="pill" style={{display:"inline-flex",marginBottom:"16px"}}>
              <Icon name="handshake" size={16} color="var(--teal-dk)" />
              Your matches are in
            </div>
            <div className="match-title">Here's who we think you'll click with</div>
            <p style={{fontSize:"16px",color:"var(--text2)",marginTop:"8px"}}>
              Submit a quick enquiry and we'll make the introduction. You take it from there.
            </p>
            {recallText() && (
              <div style={{background:"var(--teal-lt)",borderRadius:"10px",padding:"10px 16px",display:"inline-flex",marginTop:"14px",fontSize:"14px",alignItems:"center",gap:"8px"}}>
                <Icon name="check" size={16} color="var(--teal-dk)" />
                <span style={{color:"var(--teal-dk)",fontWeight:600}}>{recallText()}</span>
              </div>
            )}
            <div className="profile-grid">
              {matched.map((p,i) => (
                <div key={p.id} className={`pcard${i===0?" top":""}`}>
                  {i===0 && (
                    <div className="top-badge">
                      <Icon name="star" size={12} color="white" />
                      Your best match
                    </div>
                  )}
                  <div className="p-icon-wrap" style={{background:p.avatarBg}}>
                    <Icon name={p.iconName} size={28} color={p.avatarColor} />
                  </div>
                  <div className="p-title" style={{color:p.avatarColor}}>{p.title}</div>
                  <div className="p-tagline" style={{color:"var(--text2)"}}>"{p.tagline}"</div>
                  <p className="p-bio">{p.bio}</p>
                  <div className="trait-list">
                    {p.traits.map(t => (
                      <div key={t} className="trait">
                        <Icon name="check" size={16} color="var(--teal)" />
                        {t}
                      </div>
                    ))}
                  </div>
                  <div className="stat-row">
                    <div className="sc"><div className="sv">{p.experience}</div><div className="sl">Experience</div></div>
                    <div className="sc"><div className="sv">{p.loans}</div><div className="sl">Settled</div></div>
                    <div className="sc"><StarRating rating={p.rating} /><div className="sl">({p.reviews})</div></div>
                  </div>
                  <button className="btn-p" onClick={() => openEnquiry(p)}>
                    <span>Connect me with this broker</span>
                    <Icon name="arrow" size={18} color="white" />
                  </button>
                </div>
              ))}
            </div>
            <div style={{textAlign:"center"}}>
              <button className="btn-s" onClick={() => { setScreen("quiz"); setQuizStep(0); }}>
                <Icon name="arrow" size={16} color="var(--text2)" style={{transform:"rotate(180deg)"}} />
                Change my answers
              </button>
            </div>
          </div>
        )}

        {/* ── MODAL ── */}
        {showModal && selProfile && (
          <div className="overlay" onClick={e => e.target===e.currentTarget && setShowModal(false)}>
            <div className="modal">
              <div className="modal-steps">
                {[0,1,2].map(i => <div key={i} className="mseg" style={{background:i<=mStep?"var(--teal)":"var(--border)"}} />)}
              </div>
              <div style={{display:"flex",gap:"12px",alignItems:"center",marginBottom:"20px",background:"var(--bg)",borderRadius:"12px",padding:"12px"}}>
                <div style={{width:"44px",height:"44px",borderRadius:"12px",background:selProfile.avatarBg,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0}}>
                  <Icon name={selProfile.iconName} size={24} color={selProfile.avatarColor} />
                </div>
                <div>
                  <div style={{fontFamily:"var(--font-head)",fontWeight:800,fontSize:"15px",color:selProfile.avatarColor}}>{selProfile.title}</div>
                  <div style={{display:"flex",alignItems:"center",gap:"6px",marginTop:"3px"}}>
                    <StarRating rating={selProfile.rating} />
                    <span style={{fontSize:"12px",color:"var(--text3)",fontWeight:600}}>· {selProfile.experience} · {selProfile.loans} settled</span>
                  </div>
                </div>
              </div>

              {mStep===0 && <>
                <div className="mtitle">Before we introduce you</div>
                <div className="msub">Just confirm your situation so we can make sure this is the right match for you.</div>
                <div className="mfield">
                  <label className="flbl">What you're looking for</label>
                  <div className="confirmed-val">
                    <Icon name={loanPurposes.find(p=>p.id===purpose)?.iconName||"search"} size={18} color="var(--teal-dk)" />
                    {loanPurposes.find(p=>p.id===purpose)?.label}
                  </div>
                </div>
                <div className="mfield">
                  <label className="flbl">Select your approximate loan amount</label>
                  <select className="inp-plain" value={loanRange} onChange={e => setLoanRange(e.target.value)}>
                    <option value="" disabled>Choose a range...</option>
                    <option>Under $500k</option><option>$500k – $750k</option>
                    <option>$750k – $1M</option><option>$1M – $1.5M</option><option>$1.5M+</option>
                  </select>
                </div>
                <div className="mfield">
                  <label className="flbl">Your timeline</label>
                  <div className="confirmed-val">
                    <Icon name={timelines.find(t=>t.id===timeline)?.iconName||"calendar"} size={18} color="var(--teal-dk)" />
                    {timelines.find(t=>t.id===timeline)?.label}
                  </div>
                </div>
                <button className="btn-p" onClick={() => setMStep(1)}>
                  <span>Looks good — continue</span>
                  <Icon name="arrow" size={18} color="white" />
                </button>
              </>}

              {mStep===1 && <>
                <div className="mtitle">Where should we send the introduction?</div>
                <div className="msub">We'll reach out personally to connect you. Usually within 2 hours — no awkward cold calls, just a warm intro.</div>
                <div className="frow" style={{marginBottom:"14px"}}>
                  <div>
                    <label className="flbl">Your first name</label>
                    <input className="inp-plain" placeholder="Jane" value={form.name} onChange={e => setForm({...form,name:e.target.value})} />
                  </div>
                  <div>
                    <label className="flbl">Your mobile</label>
                    <input className="inp-plain" placeholder="04XX XXX XXX" value={form.phone} onChange={e => setForm({...form,phone:e.target.value})} />
                  </div>
                </div>
                <div className="mfield">
                  <label className="flbl">Your email address</label>
                  <input className="inp-plain" placeholder="jane@example.com" value={form.email} onChange={e => setForm({...form,email:e.target.value})} />
                </div>
                <div className="mfield">
                  <label className="flbl">Anything we should know? (optional)</label>
                  <textarea className="inp-plain" rows={3} placeholder="e.g. Buying with a partner, tricky income situation, need to move fast..." value={form.message} onChange={e => setForm({...form,message:e.target.value})} style={{resize:"none"}} />
                </div>
                <div className="mbtns">
                  <button className="btn-s" onClick={() => setMStep(0)} style={{width:"100px"}}>
                    <Icon name="arrow" size={14} color="var(--text2)" style={{transform:"rotate(180deg)"}} /> Back
                  </button>
                  <button className="btn-p" style={{flex:1}} onClick={submitLead} disabled={!form.name||!form.phone||!form.email}>
                    <span>Make the introduction</span>
                    <Icon name="arrow" size={18} color="white" />
                  </button>
                </div>
                <p className="legal">We review every enquiry before connecting you. Your details stay between us.</p>
              </>}

              {mStep===2 && (
                <div style={{textAlign:"center"}}>
                  <div className="sico">
                    <Icon name="check" size={36} color="var(--teal)" />
                  </div>
                  <div className="mtitle">We'll take it from here.</div>
                  <p style={{fontSize:"15px",color:"var(--text2)",margin:"8px 0 4px",lineHeight:"1.7"}}>
                    We'll review your profile and personally introduce you to the right broker. Expect to hear from us within 2 business hours.
                  </p>
                  <div className="next-box">
                    <div style={{fontFamily:"var(--font-head)",fontWeight:800,fontSize:"13px",marginBottom:"14px",color:"#6D4C00"}}>Here's what happens next</div>
                    {[
                      ["We review your profile","Our team checks your situation and confirms the right broker for you."],
                      ["We make the introduction","We'll reach out to connect you — warm intro, not a cold call."],
                      ["Your broker gets in touch","Free consultation, no obligation, no awkward small talk."],
                    ].map(([title,desc],i) => (
                      <div key={i} className="next-step">
                        <div className="next-num">{i+1}</div>
                        <div><div style={{fontWeight:700,marginBottom:"2px"}}>{title}</div><div style={{color:"var(--text2)",fontSize:"13px"}}>{desc}</div></div>
                      </div>
                    ))}
                  </div>
                  <div className="sum-box">
                    <div className="sum-title">Your match summary</div>
                    {[
                      ["Name",form.name],["Phone",form.phone],["Email",form.email],
                      ["Looking for",loanPurposes.find(p=>p.id===purpose)?.label],
                      ["Timeline",timelines.find(t=>t.id===timeline)?.label],
                      ...(loanRange?[["Loan Range",loanRange]]:[]),
                      ...(calcResults.borrowing?[["Borrowing Power",fmt(calcResults.borrowing)]]:[]),
                      ...(calcResults.creditScore?[["Credit Score",`${calcResults.creditScore} (${calcResults.creditBand})`]]:[]),
                      ...(calcResults.propertyValue?[["Property Value",fmt(calcResults.propertyValue)]]:[]),
                    ].map(([k,v]) => (
                      <div key={k} className="sum-row">
                        <span style={{color:"var(--text3)",fontWeight:600}}>{k}</span>
                        <span style={{fontWeight:700}}>{v||"—"}</span>
                      </div>
                    ))}
                  </div>
                  <button className="btn-s" style={{width:"100%",justifyContent:"center"}} onClick={() => setShowModal(false)}>Close</button>
                </div>
              )}
            </div>
          </div>
        )}

        <footer className="footer">
          <div className="flogo">
            <div style={{
              background:"#2D2D2D",
              borderRadius:"8px",
              padding:"5px 8px",
              lineHeight:1.1,
              letterSpacing:"-0.3px",
              fontFamily:"var(--font-head)",
              fontWeight:900,
              fontSize:"10px",
              color:"white",
              flexShrink:0,
            }}>
              <div>Loc<span style={{color:"#00897B"}}>A</span>l</div>
              <div style={{color:"#00897B"}}>broke</div>
              <div><span style={{color:"#00897B"}}>R</span>find</div>
              <div>er.<span style={{color:"#00897B"}}>Au</span></div>
            </div>
          </div>
          <div className="flegal">© 2026 LocalBrokerFinder · Credit licence info applies · Privacy · Terms</div>
        </footer>
      </div>
    </>
  );
}
