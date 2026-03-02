export const profile = {
  name: "Mostafa Soliman",
  role: "Flutter Developer",
  location: "Abu Dhabi, UAE",
  email: "devmostafasoliman@gmail.com",
  phone: "0554663783",
  photo: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/b07be15c0_1764270459438.jpeg",
  links: {
    codewars: "",
    linkedin: "https://www.linkedin.com/in/mostafa-elsayed-690148195/",
    github: "https://github.com/engmostafasoliman/engmostafasoliman"
  }
};

export const projects = [
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
    technologies: ["Flutter", "Riverpod", "CustomPainter", "GestureDetector", "Hive", "MVVM", "Android Intent"],
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
      pdf: "https://drive.google.com/file/d/1oCkCAsF7uV3RaIO5t96FcD2J0d850Ig8/view?usp=sharing"
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
      pdf: ""
    },
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6968a73708cd577f8038bda8/46ce8667b_BlueModernMobileApplicationPresentation-2.jpg"
  }
];

export const experience = [
  {
    role: "Mid-Level Mobile App Developer",
    company: "Al Manarah Holding Group",
    location: "Abu Dhabi, UAE",
    period: "Jan 2025 – Present",
    bullets: [
      "Custom Graphics Engine: Engineered a high-performance freehand drawing module using CustomPainter and Canvas API, achieving 60 FPS rendering through optimized path-simplification algorithms.",
      "Advanced Gesture Processing: Implemented ultra-responsive gesture detection and smoothing logic to eliminate input lag, managed via Riverpod for efficient state rebuilding.",
      "Persistent Canvas Data: Integrated Hive NoSQL to serialize and store complex vector paths locally, allowing users to save and resume large-scale drawings with near-instant load times.",
      "Embedded Android Deployment: Led development of a Flutter-based interface for 20+ EV charging stations, ensuring 24/7 reliability on custom hardware.",
      "Secure Transactions: Integrated Payment Gateways and webhooks to handle real-time session billing and hardware-triggered payments.",
      "Spatial & Smart Systems: Built station-discovery features using Google Maps SDK and incorporated AI-powered predictive modeling to analyze station usage and suggest optimal charging times."
    ]
  },
  {
    role: "Mobile Application Developer",
    company: "Esmos Tech",
    location: "Cairo, Egypt",
    period: "Feb 2022 – Dec 2024",
    bullets: [
      "Scalable Architecture: Developed high-performance Flutter applications utilizing Clean Architecture (MVVM/MVC) to ensure modularity and testability.",
      "Data Management: Architected robust local-first experiences by integrating Hive for high-speed NoSQL caching alongside GetStorage and SQLite for complex relational data.",
      "Advanced UI/UX: Built interactive mapping interfaces with Google Maps (custom markers, polylines) and enhanced user engagement with AI-driven personalization.",
      "Monetization & Security: Managed end-to-end payment integration and secure API communication, supporting multiple currencies and localized payment methods."
    ]
  },
  {
    role: "Head PR Volunteer",
    company: "Google Developer Student Club",
    location: "",
    period: "Sep 2022 – Sep 2023",
    bullets: [
      "Led PR and outreach activities for student tech initiatives, growing community engagement across developer events and workshops."
    ]
  }
];

export const skills = [
  { category: "Languages & Frameworks", items: ["Dart", "Flutter"] },
  { category: "Architecture & State Mgmt", items: ["MVVM", "MVC", "GetX", "Riverpod", "Bloc", "Cubit", "Clean Architecture"] },
  { category: "APIs & Networking", items: ["REST", "Dio", "HTTP", "Retrofit", "WebSocket"] },
  { category: "Storage", items: ["Hive", "SQLite", "GetStorage", "Shared Preferences"] },
  { category: "Testing", items: ["Unit Testing", "flutter_test", "bloc_test", "Mockito", "TDD"] },
  { category: "Tools & Services", items: ["Git", "GitHub", "Firebase", "Android Intents", "CI/CD", "Fastlane"] },
  { category: "Integrations", items: ["Payment Integration", "Maps Integration", "Socket.IO"] },
  { category: "Other", items: ["Clean Code", "OOP", "Localization", "Design Patterns", "Real-Time Systems"] }
];

export const softSkills = [
  "Problem-Solving & Decision Making",
  "Teamwork & Communication",
  "Time Management & Adaptability",
  "Fast Learner & Self-Motivated"
];

export const education = {
  degree: "Bachelor of Computer Science",
  school: "Misr Higher Institute",
  period: "2019 – 2023"
};

export const certifications = [
  { title: "The Complete Flutter Development Guide (IT Share)", url: "https://drive.google.com/file/d/1gUb_IDYUgKqZ-e6DFYrJxMLyyaNytBhc/view?usp=sharing" },
  { title: "Flutter Course E-commerce Full App Getx & Firebase MVC (Waled Asroo)", url: "https://drive.google.com/file/d/1MFWV-wTgN6rhZGzP6e18JG2I3atZagFX/view?usp=sharing" },
  { title: "Flutter Advanced Course Bloc and MVVM Pattern [Arabic] (Tharwat Samy)", url: "https://drive.google.com/file/d/1mO8VWhCqptORhAaYDIwQ12yzuBtyOeKx/view?usp=sharing" },
  { title: "Flutter Advanced Course Payment [Arabic] (Tharwat Samy)", url: "" },
  { title: "Flutter Advanced Course CI/CD & Retrofit [Arabic] (Omar Ahmed)", url: "" }
];
