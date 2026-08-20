/**
 * Project data sourced from Rahmat Ullah's CV.
 * All information reflects real projects and technologies.
 */

export const projects = [
  {
    slug: "careerbooster-ai",
    title: "CareerBooster AI",
    shortDescription:
      "AI-powered resume and career platform with OpenAI integration, Stripe payments, and NextAuth authentication.",
    overview:
      "CareerBooster AI is a full-stack SaaS platform that leverages OpenAI's API to generate tailored resume content, cover letters, and career advice. Users can create, store, and customize multiple resumes, manage their subscription via Stripe, and download polished PDFs.",
    problem:
      "Job seekers struggle to write impactful resumes tailored to specific job descriptions. The manual process is time-consuming and results in generic, low-converting applications.",
    solution:
      "A web application that uses AI to generate contextually relevant resume content based on the user's experience and the target job role. Stripe handles subscription tiers, and NextAuth manages secure authentication with multiple providers.",
    role: "Full Stack Developer — designed and built the entire application end to end, from database schema to AI prompt engineering and payment integration.",
    technologies: [
      "Next.js",
      "React",
      "MongoDB",
      "Redux Toolkit",
      "Stripe",
      "OpenAI API",
      "NextAuth.js",
      "Tailwind CSS",
      "Node.js",
    ],
    category: "AI / SaaS",
    features: [
      "AI-generated resume content using OpenAI GPT",
      "Multi-step resume builder with live preview",
      "Stripe subscription with free/pro/premium tiers",
      "NextAuth.js authentication (Google, GitHub, credentials)",
      "MongoDB resume storage with versioning",
      "PDF export and download",
      "Cover letter generation",
      "ATS optimization scoring",
    ],
    architecture:
      "Next.js App Router with Server Components for SEO and performance. MongoDB Atlas for document storage. Redux Toolkit for client state. Stripe webhooks for subscription lifecycle management. OpenAI API calls routed through Next.js API routes to protect credentials.",
    challenges: [
      "Engineering OpenAI prompts to produce consistently structured, ATS-friendly content",
      "Managing Stripe webhook reliability and subscription state synchronization with MongoDB",
      "Implementing resume versioning without bloating the document size",
    ],
    performance: [
      "Server-side rendering for the marketing pages ensures fast LCP",
      "API route caching reduces redundant OpenAI calls for repeated operations",
      "MongoDB indexing on userId for sub-10ms resume retrieval",
    ],
    liveUrl: null,
    githubUrl: null,
    image: "/projects/careerbooster-ai.jpg",
    featured: true,
    order: 1,
  },
  {
    slug: "mcare",
    title: "MCare — Hospital Management System",
    shortDescription:
      "Comprehensive hospital management platform with Zoom SDK integration for online consultations, appointment scheduling, and patient/doctor dashboards.",
    overview:
      "MCare is a full-featured hospital management system built with Next.js. It enables patients to book appointments, consult with doctors via video call (Zoom SDK), view medical records, and manage prescriptions. Doctors manage their schedules, view patient histories, and conduct online consultations.",
    problem:
      "Healthcare facilities need digital infrastructure to manage appointments, patient records, and remote consultations efficiently — especially in regions where in-person visits are difficult.",
    solution:
      "A role-based web platform with separate patient and doctor dashboards. Zoom SDK powers secure video consultations. Redux Toolkit manages complex application state across the multi-dashboard architecture.",
    role: "Full Stack Developer — architected the database schema, built the API layer, implemented the Zoom SDK integration, and developed both patient and doctor dashboard UIs.",
    technologies: [
      "Next.js",
      "React",
      "Redux Toolkit",
      "Zoom SDK",
      "MongoDB",
      "NextAuth.js",
      "Tailwind CSS",
      "Node.js",
    ],
    category: "Healthcare / FullStack",
    features: [
      "Patient registration and profile management",
      "Doctor directory with specialization filtering",
      "Appointment booking and calendar management",
      "Zoom SDK video consultation integration",
      "Electronic medical records (EMR)",
      "Prescription management",
      "Role-based dashboards (Patient, Doctor, Admin)",
      "Notification system for appointments",
    ],
    architecture:
      "Next.js App Router with role-based layouts using Next.js middleware for route protection. MongoDB stores patient records, appointments, and prescriptions with proper indexing. Zoom SDK JWT integration for secure meeting creation and joining.",
    challenges: [
      "Implementing secure, role-based access control across three user types",
      "Integrating Zoom SDK reliably across different browsers and network conditions",
      "Designing a flexible EMR schema accommodating different specializations",
    ],
    performance: [
      "Next.js SSR for dashboard pages ensures authenticated content loads instantly",
      "MongoDB aggregation pipelines for doctor availability calculations",
      "Lazy loading for medical record attachments",
    ],
    liveUrl: null,
    githubUrl: null,
    image: "/projects/mcare.jpg",
    featured: true,
    order: 2,
  },
  {
    slug: "oferta",
    title: "Oferta — Marketplace & Live Streaming Platform",
    shortDescription:
      "Multi-vendor marketplace with real-time messaging (Socket.IO), live streaming (Agora), payment integration, and a comprehensive admin panel.",
    overview:
      "Oferta is a feature-rich marketplace platform combining e-commerce with live streaming capabilities powered by Agora. Vendors can list products, go live to showcase items, and accept payments. Buyers can browse, message sellers, watch live streams, and purchase directly during broadcasts.",
    problem:
      "Traditional e-commerce misses the engagement of live shopping experiences. Sellers need a platform that combines marketplace features with real-time interaction tools to drive conversions.",
    solution:
      "A React frontend with a Node.js/Express REST API backend. Socket.IO handles real-time messaging between buyers and sellers. Agora powers low-latency live video streaming. SQL database manages product, order, and user data.",
    role: "Full Stack Developer — built the React frontend, designed the Express API, implemented Socket.IO real-time features, integrated Agora streaming, and developed the admin panel.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "SQL",
      "Socket.IO",
      "Agora",
      "Redux Toolkit",
      "Material UI",
      "Stripe",
    ],
    category: "Marketplace / Real-Time",
    features: [
      "Multi-vendor product listings with search and filtering",
      "Real-time buyer-seller messaging via Socket.IO",
      "Agora-powered live product streaming",
      "In-stream purchasing during live broadcasts",
      "Stripe payment processing",
      "Vendor dashboard with sales analytics",
      "Comprehensive admin panel",
      "Review and rating system",
      "Order management and tracking",
    ],
    architecture:
      "Decoupled React SPA communicating with an Express REST API. Socket.IO server for bidirectional real-time messaging. Agora RTC SDK integrated on the frontend for video streaming. SQL database with normalized schema for products, orders, users, and messages.",
    challenges: [
      "Synchronizing live stream state (viewers, products) with Socket.IO events",
      "Handling concurrent real-time connections at scale with Socket.IO rooms",
      "Designing the SQL schema to support multi-vendor inventory efficiently",
    ],
    performance: [
      "Socket.IO connection pooling for efficient real-time message handling",
      "Agora's adaptive bitrate streaming ensures smooth video across network conditions",
      "SQL query optimization with proper indexing on product search fields",
    ],
    liveUrl: null,
    githubUrl: null,
    image: "/projects/oferta.jpg",
    featured: true,
    order: 3,
  },
  {
    slug: "hantidhowre-fms",
    title: "Hantidhowre FMS — Fleet Management System",
    shortDescription:
      "Fleet management system for tracking vehicles, managing drivers, scheduling maintenance, and monitoring operational costs.",
    overview:
      "Hantidhowre FMS is a fleet management solution that helps businesses track and manage their vehicle fleets. The system handles vehicle registration, driver assignment, trip logging, maintenance scheduling, fuel tracking, and operational cost reporting.",
    problem:
      "Fleet operators lack visibility into vehicle utilization, maintenance schedules, and driver performance, leading to increased operational costs and unplanned downtime.",
    solution:
      "A web-based fleet management platform with real-time vehicle status updates, automated maintenance reminders, and detailed reporting dashboards for fleet managers.",
    role: "Full Stack Developer — designed and implemented the full system including database schema, REST API, and frontend dashboard.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Redux Toolkit",
    ],
    category: "Enterprise / Management",
    features: [
      "Vehicle registration and lifecycle management",
      "Driver profile and assignment management",
      "Trip logging with route and mileage tracking",
      "Scheduled and preventive maintenance tracking",
      "Fuel consumption logging and cost analysis",
      "Operational cost reporting and analytics",
      "Alert system for maintenance due dates",
      "Role-based access (Admin, Manager, Driver)",
    ],
    architecture:
      "Next.js frontend with Server Components for dashboard pages. MongoDB stores vehicle, driver, trip, and maintenance records. REST API built with Next.js API routes handles all fleet operations.",
    challenges: [
      "Designing a flexible maintenance schedule system that handles different vehicle types",
      "Building cost aggregation reports across multiple dimensions (vehicle, driver, period)",
    ],
    performance: [
      "MongoDB aggregation for real-time cost and utilization reports",
      "Server-side rendering for dashboard pages ensures fast initial load",
    ],
    liveUrl: null,
    githubUrl: null,
    image: "/projects/hantidhowre-fms.jpg",
    featured: false,
    order: 4,
  },
  {
    slug: "iyaloja-ims",
    title: "Iyaloja IMS — Inventory Management System",
    shortDescription:
      "Inventory management system for tracking stock, managing suppliers, processing orders, and generating inventory reports.",
    overview:
      "Iyaloja IMS is a comprehensive inventory management system designed for businesses that need to manage stock levels, suppliers, purchase orders, and sales. The system provides real-time inventory tracking, low-stock alerts, and detailed reporting.",
    problem:
      "Small to medium businesses often manage inventory using spreadsheets, leading to stockouts, overstocking, and inaccurate reporting that impacts business decisions.",
    solution:
      "A web-based IMS with real-time stock tracking, automated reorder alerts, supplier management, and detailed analytics to give business owners complete inventory visibility.",
    role: "Full Stack Developer — built the complete application including inventory tracking logic, supplier management, and reporting features.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    category: "Enterprise / Management",
    features: [
      "Product catalog with categories and SKU management",
      "Real-time stock level tracking",
      "Supplier and purchase order management",
      "Low-stock alerts and reorder notifications",
      "Sales order processing",
      "Inventory valuation and cost tracking",
      "Stock movement history",
      "CSV import/export for bulk operations",
    ],
    architecture:
      "React SPA with Express.js REST API and PostgreSQL database. Redux Toolkit manages frontend state for inventory operations. PostgreSQL chosen for its strong relational capabilities for inventory relationships.",
    challenges: [
      "Implementing accurate stock calculations across multiple warehouses",
      "Building efficient PostgreSQL queries for inventory valuation reports",
    ],
    performance: [
      "PostgreSQL indexing on product SKU and category for fast search",
      "Pagination on inventory listings to handle large catalogs",
    ],
    liveUrl: null,
    githubUrl: null,
    image: "/projects/iyaloja-ims.jpg",
    featured: false,
    order: 5,
  },
  {
    slug: "epos-stack-management",
    title: "EPOS Stack Management",
    shortDescription:
      "Electronic Point of Sale system with product management, transaction processing, and sales analytics for retail businesses.",
    overview:
      "EPOS Stack Management is a point-of-sale system built for retail and hospitality businesses. It handles product management, transaction processing, receipt generation, employee management, and provides real-time sales analytics.",
    problem:
      "Retail businesses need reliable POS software that handles high-frequency transactions, manages inventory automatically, and provides actionable sales insights.",
    solution:
      "A web-based EPOS system with an intuitive cashier interface, real-time inventory deduction on sale, and a management dashboard with sales analytics.",
    role: "Full Stack Developer — built the cashier interface, transaction engine, inventory integration, and analytics dashboard.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Redux Toolkit",
      "Ant Design",
    ],
    category: "Retail / Enterprise",
    features: [
      "Fast product search and barcode support",
      "Multi-item transaction processing",
      "Automatic inventory deduction on sale",
      "Receipt generation and printing",
      "Employee management with shift tracking",
      "End-of-day reconciliation reports",
      "Sales analytics and revenue dashboards",
      "Discount and promotion management",
    ],
    architecture:
      "React frontend with Ant Design for the professional UI. Express.js REST API with PostgreSQL for transactional data integrity. Redux Toolkit for cashier session state management.",
    challenges: [
      "Ensuring transaction atomicity — inventory deduction and sale recording must succeed or fail together",
      "Building a UI fast enough for high-frequency cashier use",
    ],
    performance: [
      "PostgreSQL transactions ensure data consistency during concurrent sales",
      "Ant Design's optimized components ensure a responsive cashier UI",
    ],
    liveUrl: null,
    githubUrl: null,
    image: "/projects/epos.jpg",
    featured: false,
    order: 6,
  },
  {
    slug: "jaaidad",
    title: "Jaaidad — Real Estate Platform",
    shortDescription:
      "Real estate marketplace with property listings, advanced search/filtering, agent profiles, and inquiry management.",
    overview:
      "Jaaidad is a real estate platform that connects property buyers, sellers, and renters. The platform features comprehensive property listings with photos, advanced search and filtering, agent profiles, saved properties, and an inquiry system.",
    problem:
      "The real estate market lacks transparent, user-friendly digital platforms where buyers can find verified listings, connect with agents, and manage inquiries efficiently.",
    solution:
      "A full-featured real estate web application with an advanced search engine, property detail pages optimized for SEO, agent dashboard, and an inquiry management system.",
    role: "Full Stack Developer — designed the property listing schema, built the search/filter system, developed agent dashboards, and implemented SEO-optimized property pages.",
    technologies: [
      "Next.js",
      "React",
      "Node.js",
      "MongoDB",
      "Redux Toolkit",
      "Tailwind CSS",
    ],
    category: "Real Estate / Marketplace",
    features: [
      "Property listings with photo galleries",
      "Advanced search with location, price, type, and feature filters",
      "Agent profiles and contact system",
      "Save and compare properties",
      "Inquiry and messaging system",
      "SEO-optimized property detail pages",
      "Property map view",
      "Admin panel for listing moderation",
    ],
    architecture:
      "Next.js with SSR for property detail pages to enable SEO indexing. MongoDB for flexible property schema with geospatial indexing for location-based search. API routes for inquiry handling.",
    challenges: [
      "Building a performant property search with multiple simultaneous filters",
      "Generating SEO-optimized pages for thousands of property listings at scale",
    ],
    performance: [
      "MongoDB geospatial indexing for location-based property search",
      "Next.js ISR (Incremental Static Regeneration) for property pages",
    ],
    liveUrl: null,
    githubUrl: null,
    image: "/projects/jaaidad.jpg",
    featured: false,
    order: 7,
  },
  {
    slug: "ecommerce",
    title: "E-Commerce Platform",
    shortDescription:
      "Full-featured e-commerce platform with product management, cart, checkout, Stripe payments, and order tracking.",
    overview:
      "A complete e-commerce platform built with the MERN stack. The platform supports multi-category product listings, a shopping cart, checkout flow, Stripe payment processing, order management, and an admin panel for product and order management.",
    problem:
      "Businesses need a customizable e-commerce solution that they can own and extend, rather than depending on third-party platforms with high fees and limited customization.",
    solution:
      "A full-stack e-commerce application with React frontend, Node.js/Express API, MongoDB for product and order data, and Stripe for secure payment processing.",
    role: "Full Stack Developer — built the complete platform including the product catalog, cart/checkout flow, payment integration, and admin panel.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Redux Toolkit",
      "Stripe",
      "Tailwind CSS",
      "JWT",
    ],
    category: "E-Commerce",
    features: [
      "Multi-category product catalog with search and filters",
      "Shopping cart with persistent state",
      "Stripe checkout with payment intent",
      "Order management and tracking",
      "User authentication with JWT",
      "Product reviews and ratings",
      "Admin dashboard for product/order management",
      "Inventory tracking",
    ],
    architecture:
      "React SPA with Redux Toolkit for cart/session state. Express.js REST API with MongoDB. JWT-based authentication with refresh token rotation. Stripe Payment Intents API for secure checkout.",
    challenges: [
      "Implementing secure JWT refresh token rotation without UX friction",
      "Managing cart state consistency between client and server",
    ],
    performance: [
      "MongoDB indexing on product categories and search fields",
      "Redux persist for cart state across browser sessions",
    ],
    liveUrl: null,
    githubUrl: null,
    image: "/projects/ecommerce.jpg",
    featured: false,
    order: 8,
  },
  {
    slug: "iot-smart-irrigation",
    title: "IoT Smart Irrigation System",
    shortDescription:
      "IoT-based smart irrigation system with real-time sensor monitoring, automated watering schedules, and a web dashboard.",
    overview:
      "An IoT-based smart irrigation system that monitors soil moisture, temperature, and humidity sensors in real time. The web dashboard allows farmers to monitor field conditions, set automated irrigation schedules, and control irrigation remotely.",
    problem:
      "Traditional irrigation wastes water by following fixed schedules regardless of actual soil conditions, leading to over-watering, crop stress, and increased operational costs.",
    solution:
      "A real-time sensor monitoring platform that integrates with IoT devices. The web dashboard displays live sensor data, triggers automated irrigation based on configurable thresholds, and logs historical data for analysis.",
    role: "Full Stack Developer — built the web dashboard, REST API for sensor data ingestion, real-time data display, and the automated scheduling engine.",
    technologies: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Tailwind CSS",
    ],
    category: "IoT / Agriculture",
    features: [
      "Real-time sensor data dashboard (moisture, temperature, humidity)",
      "Automated irrigation triggers based on sensor thresholds",
      "Manual remote irrigation control",
      "Historical data logging and charts",
      "Configurable irrigation schedules",
      "Alert system for critical sensor readings",
      "Multi-field support",
    ],
    architecture:
      "React dashboard with Socket.IO for real-time sensor data updates. Node.js/Express API ingests data from IoT devices. MongoDB stores time-series sensor readings. Automated threshold-based irrigation logic runs server-side.",
    challenges: [
      "Handling high-frequency sensor data ingestion without overwhelming the database",
      "Building reliable automation that triggers irrigation even when the dashboard is not open",
    ],
    performance: [
      "Socket.IO throttling to prevent overwhelming the client with high-frequency sensor updates",
      "MongoDB TTL indexes to automatically expire old sensor data",
    ],
    liveUrl: null,
    githubUrl: null,
    image: "/projects/iot-irrigation.jpg",
    featured: false,
    order: 9,
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug) || null;
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);
}

export function getAllProjectSlugs() {
  return projects.map((p) => p.slug);
}
