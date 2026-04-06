export const profile = {
  name: "Mostafa Soliman",
  role: "Flutter Developer",
  location: "Abu Dhabi, UAE",
  email: "devmostafasoliman@gmail.com",
  phone: "+971554663783",
  photo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/b07be15c0_1764270459438.jpeg",
  links: {
    codewars: "https://www.codewars.com/users/mostafaelsayed2262001",
    linkedin: "https://www.linkedin.com/in/mostafa-elsayed-690148195/",
    github: "https://github.com/engmostafasoliman/engmostafasoliman",
    youtube: "https://www.youtube.com/@Code-Mind-Official",
    whatsapp: "https://wa.me/message/D4GWZCFLDX4TE1"
  }
};

export const projects = [
  {
    id: "future-gulf-carpets",
    title: "Future Gulf Carpets",
    summary: "Blazing-fast bilingual website (AR/EN) with RTL support, interactive gallery, and full SEO for a 25+ year UAE flooring brand.",
    description: "The official digital home of Future Gulf Carpets — a leading UAE flooring solutions provider with over 25 years of craftsmanship. Built as a blazing-fast static site using Next.js 15 App Router with full Arabic/English bilingual support, RTL layout, and an interactive project gallery showcasing Mosques, Schools, Commercial, and Custom flooring projects. Deployed on cPanel via static export.",
    problem: "Future Gulf Carpets lacked an online presence that matched their 25+ years of legacy and premium craftsmanship — losing potential clients who expect a professional digital experience.",
    solution: "A fully static Next.js 15 site with Arabic/English i18n, RTL support, and structured SEO (JSON-LD LocalBusiness schema, hreflang, sitemap, canonical URLs) — giving the brand a fast, discoverable, and professional web presence serving the entire UAE.",
    challenges: [
      "Implementing seamless RTL/LTR layout switching for full Arabic/English bilingual experience",
      "Optimizing performance for a fully static export deployed on cPanel (no Node.js server)",
      "Building an interactive project gallery across multiple categories (Mosques, Schools, Commercial, Custom)",
      "Implementing complete SEO stack: JSON-LD LocalBusiness schema, hreflang, sitemap, and canonical URLs"
    ],
    achievements: [
      "Live at futuregulf.ae — fully static Next.js 15 site with App Router",
      "Full Arabic/English bilingual experience with RTL support",
      "Interactive multi-category project gallery (Mosques, Schools, Commercial, Custom)",
      "Production-grade SEO: JSON-LD schema, hreflang, sitemap, canonical URLs",
      "Fully responsive across mobile, tablet, and desktop"
    ],
    technologies: ["Next.js 15", "React", "SEO", "Tailwind CSS", "Claude Code"],
    links: {
      appStore: "",
      playStore: "",
      github: "",
      website: "https://futuregulf.ae/en/"
    },
    image: "/Portfolio/images/fgc.jpg"
  },
  {
    id: "quarak-qr",
    title: "Quarak — QR Code App",
    summary: "A full redesign and rebuild of a QR code app using Vibe Coding — from outdated MVP to AI-crafted production release on Google Play.",
    description: "Quarak started as a basic QR code utility on the Play Store — functional but visually outdated. I rebuilt it from scratch using Vibe Coding: brainstorming UI concepts with ChatGPT, generating designs in Figma Make from AI prompts, then feeding screenshots and URLs into the Antigravity AI agent (Claude Sonnet). By 'explaining' the full concept to the agent and setting strict rules and architecture guidelines upfront, the agent transformed silent Figma designs into a real, working Flutter app at remarkable speed. The result replaced the original store listing entirely.",
    problem: "The original QR app was outdated, lifeless, and lacked the features and polish expected of a modern utility app — needing a full redesign and rebuild.",
    solution: "Used a structured Vibe Coding workflow: ChatGPT for concept brainstorming → Figma Make for AI-generated UI → Antigravity (Claude Sonnet) for full app generation with enforced architecture rules to keep the output maintainable and production-ready.",
    challenges: [
      "Crafting effective AI prompts that produced usable, consistent Figma designs",
      "Communicating the full app concept to an AI agent in a structured, programmer-like way",
      "Setting up rules and architecture constraints so the generated code remained maintainable",
      "Validating and refining AI-generated code to match design intent exactly"
    ],
    achievements: [
      "Rebuilt and shipped a production app to Google Play entirely via Vibe Coding",
      "Replaced the original store listing with a modern, polished redesign",
      "Demonstrated a full AI-assisted workflow: ChatGPT → Figma Make → Antigravity → Play Store",
      "Proved that structured AI prompting with clear rules produces maintainable, extendable code"
    ],
    technologies: ["Flutter", "Figma", "Antigravity", "Claude Code"],
    links: {
      appStore: "",
      playStore: "https://play.google.com/store/apps/details?id=com.qrapp.qrapp",
      github: ""
    },
    image: "/Portfolio/images/quarak.jpg"
  },
  {
    id: "easy-touch-ev",
    title: "Easy Touch EV Charger",
    summary: "Locate, manage, and pay for EV charging sessions with real-time map integration and availability.",
    description: "A production-grade mobile app that lets EV drivers discover chargers on a live map, start/stop sessions, and pay securely while tracking costs and history. Deployed on both App Store and Google Play, serving real users across EV charging networks.",
    problem: "EV drivers struggle to find available, working chargers and to manage sessions and payments seamlessly across hardware vendors.",
    solution: "Unified experience with real-time availability via WebSocket/OCPP, map-based discovery, in-app session lifecycle, and integrated payments with receipts.",
    challenges: [
      "Real-time socket synchronization and session state recovery",
      "Secure payment handoff and receipt generation",
      "Robust OCPP message handling and error recovery",
      "Offline-friendly retries and optimistic UI",
      "Unit testing Cubit state transitions and OCPP message handlers in isolation using Mockito and bloc_test"
    ],
    achievements: [
      "Launched on both App Store and Google Play with active user base",
      "User-centric interface with real-time charger availability",
      "Streamlined end-to-end charging and payment flow",
      "Unit test coverage on core charging session logic, payment flows, and socket state recovery — catching regressions before release"
    ],
    technologies: ["Flutter", "Cubit", "Dio", "MVVM", "Payment", "Maps", "WebSocket", "OCPP", "Real-time", "Unit Testing", "Mockito", "bloc_test"],
    links: {
      appStore: "https://apps.apple.com/us/app/easy-touch/id6754902919",
      playStore: "https://play.google.com/store/apps/details?id=com.easytouch.app&pli=1",
      github: ""
    },
    image: "/Portfolio/images/ev-charger-BG.png"
  },
  {
    id: "whiteboard-app",
    title: "WhiteBoard App",
    summary: "Freehand drawing with smooth gestures using CustomPainter and Riverpod in a clean MVVM setup.",
    description: "A high-performance digital whiteboard app built from scratch using Flutter's CustomPainter and Canvas API. Designed for artists, students, and professionals who need a fluid, responsive drawing experience on mobile — with full persistence so work is never lost.",
    problem: "Most drawing apps suffer from noticeable input lag and jittery strokes, breaking the natural flow of handwriting and illustration on touch screens.",
    solution: "Custom rendering pipeline with optimized path-simplification algorithms achieving 60 FPS. Riverpod manages state with minimal rebuilds, while Hive serializes and persists complex vector paths locally for near-instant save and load.",
    challenges: [
      "Achieving 60 FPS rendering on complex multi-path canvases",
      "Smoothing touch input to eliminate jitter without introducing perceptible delay",
      "Efficiently serializing and deserializing complex vector path data with Hive",
      "Integrating Android Intents for external file and image sharing"
    ],
    achievements: [
      "Low-latency path rendering with optimized gesture detection",
      "Highly responsive and smooth drawing experience at 60 FPS",
      "Persistent canvas — drawings survive app restarts with near-instant load times"
    ],
    technologies: ["Flutter", "Riverpod", "CustomPainter", "Hive", "MVVM", "Android Intent"],
    links: {
      appStore: "",
      playStore: "",
      github: ""
    },
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/22512d00c_image.png"
  },
  {
    id: "innvii-rent",
    title: "Innvii Rent",
    summary: "Browse and book rental cars with clean architecture and efficient local caching.",
    description: "A full-featured car rental marketplace app enabling users to browse available vehicles, view detailed listings, book rentals, and manage reservations — live on Google Play with a clean, responsive interface.",
    problem: "Traditional car rental processes rely on phone calls and in-person visits, creating friction for users who expect instant, transparent digital booking.",
    solution: "Mobile-first rental experience with local-first caching via GetStorage for fast offline browsing, GetX for reactive state and navigation, and a clean MVC architecture ensuring maintainability and testability.",
    challenges: [
      "Implementing a reliable caching strategy for vehicle listings with GetStorage",
      "Managing booking state and availability synchronization with the backend",
      "Building a responsive UI that works across a wide range of screen sizes",
      "Handling complex navigation flows cleanly with GetX routing"
    ],
    achievements: [
      "Published on Google Play with live users",
      "Robust rental platform with reusable MVC components",
      "Responsive UX with seamless local caching via GetStorage"
    ],
    technologies: ["Flutter", "GetX", "GetStorage", "HTTP", "MVC"],
    links: {
      appStore: "",
      playStore: "https://play.google.com/store/apps/details?id=com.Innvii.rent&hl=en",
      github: ""
    },
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/e867e30b1_image.png"
  },
  {
    id: "ai-fitness-nutrition",
    title: "AI-Integrated Fitness & Nutrition Platform",
    summary: "Bridges workouts with intelligent nutrition via an AI engine that detects the optimal diet for each user.",
    description: "A production-ready health and wellness application that bridges the gap between physical training and intelligent nutrition through an AI-driven engine that detects and recommends the optimal diet for user-specific goals.",
    problem: "Users struggle with the disconnect between their workouts and nutrition, finding it difficult to determine what to eat based on their unique biometrics and evolving fitness levels.",
    solution: "A unified ecosystem combining personalized workout tracks with an AI Nutrition Engine. The app uses biometric data to automatically detect caloric needs and macronutrient profiles, providing real-time diet recommendations alongside a multi-tier fitness journey from beginner to advanced.",
    challenges: [
      "AI Diet Logic: Developing a recommendation engine that dynamically adjusts meal plans based on fluctuating biometric data and workout intensity",
      "Secure Biometric Storage: Implementing an encrypted user profiling system to safely manage sensitive health metrics using Hive",
      "Authentication & Verification: Engineering a robust 4-digit email OTP verification flow with secure session management",
      "Subscription State Management: Handling complex UI states for premium Gold Package access and promotional conversion funnels",
      "Unit Testing AI Logic: Writing isolated unit tests for the nutrition engine's caloric calculation and macro-distribution algorithms to ensure correctness across edge-case biometric inputs"
    ],
    achievements: [
      "Intelligent onboarding wizard that maps user biometrics to specific fitness and nutrition outcomes",
      "AI-driven dietary detection system that suggests personalized meal plans based on real-time input",
      "Modern interactive UI with vibrant gradients and high-quality iconography to drive engagement",
      "Unit test suite covering the AI nutrition engine, OTP verification flow, and Cubit state transitions — ensuring reliability of all critical business logic"
    ],
    technologies: ["Flutter", "Node.js", "MVVM", "Cubit", "Dio", "Hive", "Payment", "MongoDB", "Unit Testing", "flutter_test", "Mockito"],
    links: {
      pdf: "https://drive.google.com/file/d/1GH3Hf8CCFoOUW2VhKk7-b-0oAOt4WXEr/view?usp=sharing",
      github: ""
    },
    images: ["https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/08c7a77a3_Screenshot2026-01-16at123029PM.png"],
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/08c7a77a3_Screenshot2026-01-16at123029PM.png"
  },
  {
    id: "smart-green-house",
    title: "Smart Green House",
    summary: "IoT app to monitor and control greenhouse conditions with real-time synchronization.",
    description: "A real-time IoT monitoring and control application for smart greenhouse management. Farmers can track critical environmental conditions — temperature, humidity, and soil moisture — and trigger actuators remotely from their phone, reducing crop loss from delayed interventions.",
    problem: "Greenhouse operators lack real-time visibility and remote control over environmental conditions, leading to crop damage from manual, delayed responses to temperature or humidity changes.",
    solution: "Bidirectional real-time communication via Socket.IO delivers live sensor readings and accepts remote control commands instantly. Bloc state management ensures predictable, testable data flow, and a clean MVVM structure separates UI from business logic.",
    challenges: [
      "Maintaining stable Socket.IO connections with automatic reconnection on network drops",
      "Handling high-frequency sensor data streams without causing UI jank",
      "Designing an intuitive control dashboard for non-technical farming users",
      "Graceful offline degradation with clear status indicators when connectivity is lost"
    ],
    achievements: [
      "Real-time data sync using Socket.IO with sub-second latency",
      "Instant remote control of greenhouse actuators with minimal latency",
      "Scalable sensor dashboard supporting multiple zones and device types"
    ],
    technologies: ["Flutter", "Bloc", "HTTP", "MVVM", "Socket.IO", "Real-time"],
    links: {
      appStore: "",
      playStore: "",
      github: "",
      pdf: "https://drive.google.com/file/d/1Z97AaYgC5hwAyPkYjgzIahvFfXNLPTEs/view?usp=sharing"
    },
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/4aabe7a06_WhiteGreenMobileMockupPhotoCollageBeautyPinterestPin1.png"
  },
  {
    id: "barber-app",
    title: "Barber App",
    summary: "Schedule appointments, view slots, and pay through a clean MVC architecture.",
    description: "A modern barbershop appointment booking app that lets customers browse available time slots, book sessions, and complete payments — replacing phone-based scheduling with a seamless digital flow for both customers and shop owners.",
    problem: "Barbershops rely on phone calls and manual registers for bookings, causing scheduling conflicts, no-shows, and lost revenue from poor calendar visibility.",
    solution: "Digital booking system with real-time slot visualization and GetX-powered reactive UI. Integrated payment flow handles transactions in-app, while GetStorage persists booking history and user preferences locally.",
    challenges: [
      "Managing time slot availability with optimistic UI updates and conflict prevention",
      "Integrating payment flow seamlessly with booking confirmation logic",
      "Building a reliable and user-friendly calendar and slot picker component",
      "Handling edge cases such as cancellations, rebooking, and expired slots",
      "Unit testing booking logic and payment state in isolation using flutter_test and Mockito to mock HTTP responses and validate slot conflict detection"
    ],
    achievements: [
      "Seamless end-to-end booking and payment flow",
      "Reliable UX with GetX state management and local data persistence",
      "Reduced scheduling friction with a clean visual slot picker",
      "Unit test coverage on slot availability logic, booking lifecycle, and payment confirmation — ensuring zero double-booking regressions"
    ],
    technologies: ["Flutter", "GetX", "GetStorage", "HTTP", "Payment", "MVC", "Unit Testing", "flutter_test", "Mockito"],
    links: {
      appStore: "",
      playStore: "",
      github: "",
      pdf: "https://drive.google.com/file/d/1oCkCAsF7uV3RaIO5t96FcD2J0d850Ig8/view?usp=drive_link"
    },
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/4a0203744_BlueModernMobileApplicationPresentation.jpg",
    images: [
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/4a0203744_BlueModernMobileApplicationPresentation.jpg"
    ]
  },
  {
    id: "asroo-ecommerce",
    title: "Asroo E-commerce",
    summary: "E-commerce app for browsing products, creating orders, and viewing totals with GetX.",
    description: "A production-quality e-commerce mobile app featuring product browsing, cart management, order creation, and total calculation. Built as a real-world reference project demonstrating clean MVC architecture with GetX and efficient local state persistence.",
    problem: "Building a scalable, maintainable e-commerce app with consistent state across cart, orders, and user sessions is a common but architecturally challenging task for mobile developers.",
    solution: "Clean MVC architecture with GetX for reactive state management and navigation, GetStorage for persistent cart and session data across app restarts, and HTTP for clean REST API integration with well-separated model layers.",
    challenges: [
      "Maintaining cart state consistency across app restarts using GetStorage",
      "Managing the full order lifecycle from cart to confirmation",
      "Implementing reactive product filtering and search with GetX observables",
      "Structuring API responses with clean model separation for testability"
    ],
    achievements: [
      "Applied real-world e-commerce logic with clean, scalable MVC",
      "Persistent cart and session management with GetStorage and GetX",
      "Demonstrates production-ready architecture patterns for Flutter apps"
    ],
    technologies: ["Flutter", "GetX", "GetStorage", "HTTP", "MVC"],
    links: {
      appStore: "",
      playStore: "",
      github: "",
      pdf: "https://drive.google.com/file/d/1VEQxDdtY6F90oiD2ly9A65AK4_YZouAt/view?usp=drive_link"
    },
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/46ce8667b_BlueModernMobileApplicationPresentation-2.jpg"
  }
];

export const experience = [
  {
    role: "Flutter Engineer — Mid-Level",
    company: "Al Manarah Holding Group",
    location: "Abu Dhabi, UAE",
    period: "Jan 2025 – Present",
    bullets: [
      "EV Charging Platform (Easy Touch): Shipped production app on App Store & Play Store — EV drivers locate chargers via Google Maps, manage live sessions over WebSocket/OCPP, and pay securely. Covered Cubit state transitions and OCPP handlers with unit tests using Mockito and bloc_test.",
      "Embedded Android Deployment: Led Flutter interface development for 20+ EV charging kiosks across Abu Dhabi, ensuring 24/7 reliability on custom hardware with real-time payment webhooks.",
      "WhiteBoard App: Built high-performance digital whiteboard using CustomPainter and Canvas API at 60 FPS, with Riverpod state management and Hive-powered persistent vector path storage for near-instant save and load.",
      "Quarak QR Code App: Rebuilt legacy QR app from scratch using AI-assisted Vibe Coding pipeline (Figma Make + Antigravity/Claude Code), replacing outdated Play Store listing with a modern, polished experience.",
      "Web Development: Delivered futuregulf.ae — bilingual AR/EN Next.js 15 website with RTL support, full SEO setup, and Google Search Console integration, deployed to UAE-based server.",
      "Team & Process Leadership: Initiated and structured the company's social media operations — defined content pipeline, set technical requirements for tools used, and managed delivery using agile-style workflows."
    ]
  },
  {
    role: "Mobile Application Developer",
    company: "Esmos Tech",
    location: "Cairo, Egypt",
    period: "Feb 2022 – Dec 2024",
    bullets: [
      "Scalable Architecture: Developed high-performance Flutter applications using Clean Architecture (MVVM/MVC) ensuring modularity and testability across e-commerce, IoT, healthcare, and rental domains.",
      "Data Management: Architected local-first experiences integrating Hive for high-speed NoSQL caching alongside GetStorage and SQLite for complex relational data.",
      "Advanced UI/UX: Built interactive mapping interfaces with Google Maps (custom markers, polylines) and AI-driven personalization features.",
      "Monetization & Security: Managed end-to-end payment integration and secure API communication supporting multiple currencies and localized payment methods.",
      "AI Fitness & Nutrition Platform: Developed a Flutter + Node.js app with AI engine detecting optimal diet per user, integrating MongoDB backend and real-time data sync."
    ]
  },
  {
    role: "Social Media Marketing Specialist",
    company: "Artedge",
    location: "Egypt",
    period: "Jan 2021 – Jan 2022",
    bullets: [
      "Managed social media presence and content strategy for a creative agency, growing audience engagement across platforms.",
      "Produced and scheduled content, analyzed performance metrics, and optimized campaigns for reach and engagement."
    ]
  },
  {
    role: "Marketing Intern",
    company: "Blue Business",
    location: "Egypt",
    period: "Jul 2020 – Sep 2020",
    bullets: [
      "Completed a 3-month marketing internship supporting campaign planning, content creation, and brand communication activities."
    ]
  },
  {
    role: "Head of PR",
    company: "Google Developer Student Club",
    location: "",
    period: "Sep 2022 – Sep 2023",
    bullets: [
      "Led PR and outreach for student tech initiatives, growing community engagement across developer events and workshops."
    ]
  }
];

export const skills = [
  { category: "Mobile", items: ["Flutter", "Dart", "App Store Publishing", "Play Store Publishing", "CI/CD", "Fastlane", "Codemagic", "GitHub Actions"] },
  { category: "Architecture & State Mgmt", items: ["Clean Architecture", "MVVM", "MVC", "Bloc", "Cubit", "Riverpod", "GetX"] },
  { category: "APIs & Real-Time", items: ["RESTful APIs", "Dio", "Retrofit", "WebSocket", "Socket.IO", "OCPP"] },
  { category: "Storage", items: ["Hive", "SQLite", "GetStorage", "Shared Preferences", "Firebase"] },
  { category: "Testing", items: ["flutter_test", "bloc_test", "Mockito", "TDD", "Unit Testing"] },
  { category: "Web & Backend", items: ["Next.js 15", "React", "Tailwind CSS", "Node.js", "MongoDB"] },
  { category: "Tools", items: ["Git", "GitHub", "Firebase", "Figma", "Android Studio", "Xcode", "Fastlane"] },
  { category: "AI-Assisted Dev", items: ["Claude Code", "Cursor", "Antigravity", "Base44"] }
];

export const softSkills = [
  "Problem-Solving & Decision Making",
  "Teamwork & Communication",
  "Time Management & Adaptability",
  "Fast Learner & Self-Motivated"
];

export const education = {
  degree: "Bachelor of Computer Science",
  school: "Misr Higher Institute for Commerce and Computers",
  period: "2019 – 2023"
};

export const certifications = [
  { title: "The Complete Flutter Development Guide (IT Share)", url: "https://drive.google.com/file/d/1gUb_IDYUgKqZ-e6DFYrJxMLyyaNytBhc/view?usp=sharing" },
  { title: "Flutter Course E-commerce Full App Getx & Firebase MVC (Waled Asroo)", url: "https://drive.google.com/file/d/1MFWV-wTgN6rhZGzP6e18JG2I3atZagFX/view?usp=sharing" },
  { title: "Flutter Advanced Course Bloc and MVVM Pattern [Arabic] (Tharwat Samy)", url: "https://drive.google.com/file/d/1mO8VWhCqptORhAaYDIwQ12yzuBtyOeKx/view?usp=sharing" },
  { title: "Flutter Advanced Course Payment [Arabic] (Tharwat Samy)", url: "" },
  { title: "Flutter Advanced Course CI/CD & Retrofit [Arabic] (Omar Ahmed)", url: "" }
];
