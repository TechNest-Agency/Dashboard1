export const projects = [
  {
    name: "RDC eCommerce App",
    type: "Web App",
    leader: "Claire",
    team: ["👤", "👤", "👤"],
    progress: 78,
  },
  {
    name: "Falcon Logo Design",
    type: "Graphic Design",
    leader: "Wayne",
    team: ["👤", "👤"],
    progress: 18,
  },
  {
    name: "Dashboard Design",
    type: "Web Design",
    leader: "Rachel",
    team: ["👤"],
    progress: 62,
  },
  {
    name: "Foodista mobile app",
    type: "Mobile App",
    leader: "Marlene",
    team: ["👤", "👤", "👤", "👤"],
    progress: 8,
  },
  {
    name: "BAE Landing Page",
    type: "Web Design",
    leader: "Harmonic",
    team: ["👤", "👤", "👤"],
    progress: 52,
  },
];

export const activities = [
  {
    type: "file",
    text: "12 Invoices have been paid",
    subtext: "Invoices have been paid to the company",
    time: "12 min ago",
  },
  {
    type: "upload",
    text: "Client Meeting",
    subtext: "Project meeting with team",
    time: "45 min ago",
  },
  {
    type: "create",
    text: "Create a new project for client",
    subtext: "New project",
    time: "2 days ago",
  },
];

export const invoices = [
  { id: "#3066", total: "$4770", date: "2023-04-17", status: "paid" },
  { id: "#3065", total: "$2040", date: "2023-04-16", status: "pending" },
  { id: "#3064", total: "$4770", date: "2023-04-17", status: "paid" },
  { id: "#3063", total: "$4770", date: "2023-04-17", status: "overdue" },
  { id: "#3062", total: "$2040", date: "2023-04-16", status: "paid" },
  { id: "#3061", total: "$4770", date: "2023-04-17", status: "paid" },
];

export const paymentMethods = [
  { type: "mastercard", number: "**** **** **** 3456", expires: "09/24" },
  { type: "visa", number: "**** **** **** 5678", expires: "12/25" },
  { type: "amex", number: "**** **** **** 9012", expires: "06/26" },
];

export const connectedServices = [
  { name: "Google", desc: "Calendar and contacts", connected: true },
  { name: "Slack", desc: "Communication", connected: false },
  { name: "GitHub", desc: "Manage your Git repositories", connected: true },
  { name: "Mailchimp", desc: "Email marketing service", connected: false },
  { name: "Asana", desc: "Team collaboration", connected: false },
];

export const socialAccounts = [
  { name: "Facebook", connected: false },
  { name: "Twitter", connected: false },
  { name: "LinkedIn", connected: false },
  { name: "Dribbble", connected: false },
  { name: "Behance", connected: false },
];

export const tabs = [
  { name: "Account", icon: "User" },
  { name: "Security", icon: "Shield" },
  { name: "Billing & Plan", icon: "CreditCard" },
  { name: "Notifications", icon: "Bell" },
  { name: "Connections", icon: "Users" },
];

export const recentDevices = [
  {
    device: "Chrome on Windows",
    location: "Switzerland",
    date: "10, July 2021 20:07",
  },
  {
    device: "Chrome on iPhone",
    location: "Los Angeles",
    date: "10, July 2021 20:07",
  },
  {
    device: "Chrome on macOS",
    location: "India",
    date: "10, July 2021 16:17",
  },
  {
    device: "Chrome on iPhone",
    location: "Australia",
    date: "10, July 2021 16:17",
  },
];

export const notificationSettings = [
  { name: "New for you", email: true, browser: false, app: false },
  { name: "Account activity", email: true, browser: true, app: true },
  {
    name: "A new browser used to sign in",
    email: false,
    browser: true,
    app: false,
  },
  {
    name: "A new device is linked",
    email: false,
    browser: true,
    app: false,
  },
];
