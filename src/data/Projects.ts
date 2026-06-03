import { Github, Linkedin, Mail } from "lucide-react";
import { Project } from "../types";
import { JourneyItem } from "../types";

export const HIGHLIGHTS = [
  { emoji: "⚡", label: "Performance First" },
  { emoji: "♿", label: "A11y Focused" },
  { emoji: "📱", label: "Responsive Design" },
  { emoji: "🔧", label: "Modern Tooling" },
];

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const PROJECTS: Project[] = [
  {
    title: "CineRich",
    description:
      "A full-featured movie discovery platform with real-time search, autocomplete, genre filtering, and detailed movie pages. Built on the TMDB API with React Query for smart data fetching and caching.",
    tags: ["React", "TypeScript", "React Query", "Tailwind CSS", "TMDB API"],
    liveUrl: "https://cinerich.vercel.app",
    imageUrl:
      "https://github.com/RichieErnie/Cinerich/blob/main/screenshots/Home.png?raw=true",
    githubUrl: "https://github.com/RichieErnie/cinerich",

    isLive: true,
    isFeatured: true,
  },
  {
    title: "Shopmia",
    description:
      "E-commerce storefront migrated from vanilla HTML/CSS/JS to a fully modern React application. Features product listing, cart management, and a clean, responsive checkout flow.",
    tags: ["React", "CSS", "React Context"],
    liveUrl: "https://shopmia.vercel.app",
    imageUrl: "/images/shopmia.png",
    githubUrl: "https://github.com/RichieErnie/Shopmia",

    isLive: true,
    isFeatured: true,
  },
  {
    title: "Expense Tracker",
    description:
      "Personal finance tracker with expense categories, visual charts, and full localStorage persistence. Built with React Context for global state management and Recharts for data visualisation.",
    tags: ["React", "TypeScript", "useContext", "Recharts", "localStorage"],
    liveUrl: "https://expense-tracker-phi-inky.vercel.app/",
    imageUrl: "/images/expense-tracker.png",
    githubUrl: "https://github.com/RichieErnie/expense-tracker",
    isLive: true,
    isFeatured: true,
  },
  {
    title: "Smart Waste Collection System",
    description:
      "IoT final year project — a computerised recycling system that uses ESP32 and HC-SR04 ultrasonic sensors to monitor bin fill levels in real time, with a React Native mobile dashboard powered by Firebase.",
    tags: ["ESP32", "React Native", "Firebase", "Arduino IDE", "IoT"],
    imageUrl: "/images/smart-bin.jpg",

    isLive: false,
  },
];

export const FRONTEND_SKILLS = [
  "React.js",
  "TypeScript",
  "JavaScript",
  "HTML / CSS",
  "Tailwind CSS",
  "React Query",
  "React Router",
];

export const TOOLS_SKILLS = [
  "Git / GitHub",
  "Vite",
  "Firebase",
  "Vercel",
  "REST APIs",
];

export const JOURNEY: JourneyItem[] = [
  {
    title: "B.Tech Information Technology",
    place: "Federal University of Technology Akure (FUTA)",
    period: "2021 — Present",
    highlights: [
      "Final-year student specialising in Information Technology at one of Nigeria's leading technical universities.",
      "Final Year Project: Computerised Recycling System — an IoT smart bin using ESP32, HC-SR04 sensors, Firebase, and a React Native mobile dashboard.",
      "Coursework covering Artificial Intelligence, Fault-Tolerant Computing, System Administration, Research Methodology, and Computer Networks.",
      "Built and deployed multiple production-grade web applications as independent side projects alongside academics.",
    ],
  },
  {
    title: "Self-Directed Frontend Development",
    place: "Independent — Remote",
    period: "2022 — Present",
    highlights: [
      "Progressed from HTML/CSS/JS to a professional React + TypeScript + Tailwind CSS stack through self-directed learning.",
      "Built and deployed 5 web applications: Todo App, Notes App, Expense Tracker, CineRich (TMDB API), and Shopmia (e-commerce).",
      "Mastered React hooks, React Query, React Router v6, custom hooks, Recharts, Axios, and Vite deployment workflows.",
      "Practising professional Git habits: feature branching, conventional commits, pull requests, and GitHub project management.",
    ],
  },
  {
    title: "IT Support Intern",
    place: "Keystone Bank - Internship",
    period: "June 2025 — November 2025",
    highlights: [
      "Provided technical support and troubleshooting for staff across hardware and software issues.",
      "Assisted in maintaining IT infrastructure and network systems to ensure smooth daily operations.",
      "Supported end users with system configurations and software installations.",
      "Gained hands on experience in a fast-paced corporate banking IT environment.",
    ],
  },
];

export const CONTACT_LINKS = [
  {
    icon: Mail,
    label: "Email Me",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=richiernie04@gmail.com&su=Portfolio%20Inquiry",
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/richardogazi",
    external: true,
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/RichieErnie",
    external: true,
  },
];
