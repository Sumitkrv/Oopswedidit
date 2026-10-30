export interface Project {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: "Websites" | "Branding" | "Marketing" | "Software" | "Automation";
  categoryLabel: string;
  year: string;
  isConcept: boolean;
  liveUrl?: string;
  featured: boolean;
  summary: string;
  challenge: string;
  approach: string;
  solution: string;
  deliverables: string[];
  clientIndustry: string;
  accentColor: string;
  image: string;
  galleryImages: {
    title: string;
    caption: string;
    aspectRatio?: string;
  }[];
  testimonialPlaceholder?: string;
  metricsPlaceholder?: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  positioning: string;
  shortDescription: string;
  fullDescription: string;
  deliverables: string[];
  accentColor: string;
  ctaText: string;
  highlightWords: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  headline: string;
  description: string;
  deliverables: string[];
}

export const siteConfig = {
  name: "oopswedidit",
  legalName: "oopswedidit Studio",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://oopswedidit.com",
  description:
    "Independent creative & digital studio. We build bold brands, beautiful websites, and digital experiences that turn attention into action.",
  tagline: "Good ideas make noise. Great ideas make things happen. Oops, we did it.",
  colors: {
    coffee: "#532510",
    terracotta: "#C46F39",
    cream: "#FDF9EF",
    peach: "#E8B79A",
  },
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "thakursumi498@gmail.com",
    phones: [
      { display: "+91 92679 70341", raw: "+919267970341" },
      { display: "+91 98712 86617", raw: "+919871286617" },
    ],
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+919267970341",
    whatsappMessage: "Hi oopswedidit team! I'd love to discuss a new project.",
    instagramUrl: process.env.NEXT_PUBLIC_INSTAGRAM_URL || "https://instagram.com/oopswedidit",
    linkedinUrl: process.env.NEXT_PUBLIC_LINKEDIN_URL || "https://linkedin.com/company/oopswedidit",
    location: "Global / Remote Creative Studio",
    responseCommitment: "We typically respond within 24 business hours.",
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Our Work", href: "/work" },
    { label: "Contact", href: "/contact" },
  ],
  services: [
    {
      id: "website-design-dev",
      slug: "website-design-development",
      number: "01",
      title: "Website Design & Development",
      positioning: "Websites worth stopping for.",
      shortDescription:
        "Custom, responsive, high-performance websites designed to impress and convert visitors into loyal clients.",
      fullDescription:
        "We craft bespoke web experiences that merge editorial art direction with relentless performance engineering. Every interaction is considered, every micro-moment feels alive, and the underlying architecture is built to drive commercial results.",
      deliverables: [
        "Custom Creative Web Design",
        "Modern Responsive Development (Next.js/React)",
        "E-Commerce & Shopify Architectures",
        "Landing Pages & Campaign Sites",
        "Speed & Core Web Vitals Optimization",
        "SEO-Ready Architecture & Semantics",
        "CMS Integration (Sanity, Strapi, WordPress)",
        "Conversion-Focused UX Architecture",
      ],
      accentColor: "#C46F39",
      ctaText: "Start a Website Project",
      highlightWords: ["stopping", "bespoke", "conversion"],
    },
    {
      id: "software-digital-products",
      slug: "software-digital-products",
      number: "02",
      title: "Software & Digital Products",
      positioning: "Smart technology. Seamless experiences.",
      shortDescription:
        "Smart web applications, client dashboards, SaaS platforms, and custom digital software solutions.",
      fullDescription:
        "When off-the-shelf software holds you back, we build custom web platforms that solve real operational bottlenecks. From investor-grade SaaS MVPs to bespoke enterprise dashboards, we turn complex business logic into intuitive user interfaces.",
      deliverables: [
        "Custom Web Applications & SaaS MVPs",
        "Client Portals & Admin Dashboards",
        "Bespoke CRM & Internal Tools",
        "API Architecture & Microservices",
        "Authentication & Role-Based Access",
        "Cloud Deployment & Database Architecture",
        "Real-time Data Visualizations",
        "Product Discovery & Interactive Prototypes",
      ],
      accentColor: "#532510",
      ctaText: "Build Your Digital Product",
      highlightWords: ["seamless", "intuitive", "operational"],
    },
    {
      id: "branding-graphic-design",
      slug: "branding-graphic-design",
      number: "03",
      title: "Branding & Graphic Design",
      positioning: "Make them look. Make them remember.",
      shortDescription:
        "Memorable brand identities, comprehensive visual systems, campaign visuals, and purposeful creative direction.",
      fullDescription:
        "Your brand is not just a logo; it is the feeling people have when they encounter your business. We build cohesive visual languages, typography rules, color worlds, and art-directed collateral that make your business instantly recognizable in crowded markets.",
      deliverables: [
        "Brand Identity & Logo Suite",
        "Comprehensive Brand Guidelines",
        "Visual Language & Color Systems",
        "Typography Pairings & Custom Lettering",
        "Packaging & Physical Print Collateral",
        "Social Media Creative Toolkits",
        "Pitch Decks & Presentation Systems",
        "Motion Brand Guidelines & Assets",
      ],
      accentColor: "#E8B79A",
      ctaText: "Reimagine Your Brand",
      highlightWords: ["remember", "visual", "unmistakable"],
    },
    {
      id: "social-media-marketing",
      slug: "social-media-marketing",
      number: "04",
      title: "Social Media & Digital Marketing",
      positioning: "Content with character. Marketing with purpose.",
      shortDescription:
        "Content strategies, engaging digital campaigns, paid performance support, and growth-focused digital presence.",
      fullDescription:
        "Noise is cheap; resonance is rare. We build digital campaigns and social strategies that respect your audience's intelligence while delivering measurable pipeline growth, engagement, and lasting community affinity.",
      deliverables: [
        "Social Media Content Strategy",
        "Creative Campaign Direction & Execution",
        "Organic Audience Growth Roadmaps",
        "Performance Ad Creatives & Copywriting",
        "Editorial Copywriting & Tone of Voice",
        "Digital Launch Strategies",
        "Email Marketing Flows & Newsletters",
        "Analytics, Attribution & Monthly Reporting",
      ],
      accentColor: "#C46F39",
      ctaText: "Amplify Your Reach",
      highlightWords: ["character", "purpose", "growth"],
    },
    {
      id: "automation-ai-solutions",
      slug: "automation-ai-solutions",
      number: "05",
      title: "Automation & AI Solutions",
      positioning: "Less busywork. More brilliant work.",
      shortDescription:
        "Streamlined operational workflows, intelligent automations, smart AI assistants, and technology that saves time.",
      fullDescription:
        "We eliminate repetitive manual tasks and connect disconnected tools into unified, self-running systems. By deploying custom AI assistants and resilient automations, your team spends less time on administrative drag and more time growing the business.",
      deliverables: [
        "Bespoke Business Workflow Automation",
        "Custom AI Assistants & Agent Integrations",
        "CRM & Pipeline Lead Routing Automation",
        "Automated Invoicing & Contract Workflows",
        "Customer Support Chatbot Implementations",
        "Automated Data Extraction & Syncing",
        "Third-Party API & Webhook Pipelines",
        "System Architecture Audits & Tool Stacking",
      ],
      accentColor: "#532510",
      ctaText: "Automate Your Workflows",
      highlightWords: ["brilliant", "automated", "streamlined"],
    },
  ] as ServiceItem[],

  projects: [
    {
      id: "miet-life",
      slug: "miet-life",
      title: "MIET Life",
      tagline: "Dynamic campus life portal & student community platform connecting 10,000+ engineers.",
      category: "Websites",
      categoryLabel: "Website Design & Development",
      year: "2025",
      isConcept: false,
      liveUrl: "https://miet.life/en",
      featured: true,
      summary:
        "A vibrant digital campus ecosystem developed for the Meerut Institute of Engineering and Technology. Serving over 10,000 students with real-time fest schedules, collegiate society hubs, and academic announcements.",
      challenge:
        "Campus communication was fragmented across disparate chat groups, paper notices, and outdated bulletin boards, resulting in low event participation and disconnected student bodies.",
      approach:
        "We engineered a modern multilingual Next.js web application built with responsive mobile ergonomics, high-energy festival countdowns, automated registration portals, and departmental society showcases.",
      solution:
        "Delivered an ultra-responsive campus hub that centralized student initiatives, increased collegiate festival sign-ups, and established a modern digital identity for the university.",
      deliverables: [
        "Custom Next.js App Router Web Platform",
        "Multilingual Architecture (English / Hindi)",
        "Festival & Event Registration Engine",
        "Student Society & Club Directory",
      ],
      clientIndustry: "Higher Education & Campus Community",
      accentColor: "#C46F39",
      image: "/projects/miet-life.svg",
      galleryImages: [
        {
          title: "Collegiate Event Hub",
          caption: "Live interactive event schedule featuring real-time venue maps and registration triggers.",
        },
        {
          title: "Student Society Directory",
          caption: "Categorized community profiles highlighting IEEE, ACM, cultural, and sports clubs.",
        },
        {
          title: "Mobile-First Festival Portal",
          caption: "Blazing fast on mobile viewports with smooth gestures and dark-mode student vibes.",
        },
      ],
      testimonialPlaceholder: "A modern digital home celebrating student energy, collegiate sports, and academic innovation.",
      metricsPlaceholder: "Serving thousands of active daily campus sessions with sub-second page loads.",
    },
    {
      id: "ai-vidya",
      slug: "ai-vidya",
      title: "AI Vidya",
      tagline: "Premium online learning platform featuring 1,000+ expert tech & AI courses.",
      category: "Software",
      categoryLabel: "Software & Digital Products",
      year: "2025",
      isConcept: false,
      liveUrl: "https://aividya-eight.vercel.app/",
      featured: true,
      summary:
        "A next-generation EdTech platform built to democratize modern technology skills. Powered by adaptive curriculum paths, AI tutor modules, progress analytics, and expert-led video lectures.",
      challenge:
        "Traditional course portals feel like stagnant video dumps. AI Vidya needed an interactive, lightning-fast platform that keeps learners engaged through gamified milestones and clear career trajectories.",
      approach:
        "We designed a modern web application with high-contrast editorial typography, interactive module tracking, search filtering across 1,000+ course catalogs, and friction-free enrollment onboarding.",
      solution:
        "Engineered on Next.js and deployed on Vercel with instant client-side search, video streaming integration, responsive lecture drawers, and automated completion certificates.",
      deliverables: [
        "Full-Stack Web Application",
        "Course Catalog & Faceted Search",
        "Interactive Student Learning Dashboard",
        "Responsive Video Curriculum Interface",
      ],
      clientIndustry: "EdTech & Online Learning",
      accentColor: "#532510",
      image: "/projects/ai-vidya.svg",
      galleryImages: [
        {
          title: "Interactive Course Discovery",
          caption: "Faceted search allowing instant filtering across AI, web dev, cloud, and data science.",
        },
        {
          title: "Distraction-Free Classroom",
          caption: "Curriculum drawer with synchronized lecture playback and note-taking panels.",
        },
        {
          title: "Skill Mastery Dashboard",
          caption: "Visual milestone tracking encouraging sustained daily study habits.",
        },
      ],
      testimonialPlaceholder: "Empowering curious minds to transition into modern software and AI careers.",
      metricsPlaceholder: "Built to handle thousands of concurrent learners with instant sub-second search.",
    },
    {
      id: "vibhu-kitchen",
      slug: "vibhu-kitchen",
      title: "Vibhu Kitchen",
      tagline: "Heavy-duty commercial culinary equipment & turnkey hospitality solutions.",
      category: "Websites",
      categoryLabel: "Website Design & Development",
      year: "2025",
      isConcept: false,
      liveUrl: "https://www.vibhukitchen.in/",
      featured: true,
      summary:
        "A high-impact digital flagship for an industrial culinary fabrication leader. Supplying 5-star hotel chains, restaurant franchises, and industrial bakeries with bespoke stainless steel kitchen hardware.",
      challenge:
        "Industrial manufacturing websites are often clunky and uninspiring. Vibhu Kitchen needed a digital presence that radiated engineering precision, build quality, and turnkey installation capabilities.",
      approach:
        "We designed a bold industrial-editorial web showcase highlighting product specifications, 304 food-grade stainless steel fabrication standards, and direct commercial quotation inquiry flows.",
      solution:
        "A blazing fast, mobile-friendly commercial catalog with categorized product specs, downloadable CAD blueprints, and high-conversion RFQ (Request for Quotation) mechanisms.",
      deliverables: [
        "Commercial Equipment Catalog",
        "B2B Quotation Engine",
        "Responsive Mobile Architecture",
        "SEO-Optimized Product Pages",
      ],
      clientIndustry: "Commercial Kitchens & Hospitality Fabrication",
      accentColor: "#C46F39",
      image: "/projects/vibhu-kitchen.svg",
      galleryImages: [
        {
          title: "Heavy-Duty Equipment Specs",
          caption: "Clear technical breakdowns for industrial induction ranges, burners, and exhaust hoods.",
        },
        {
          title: "Turnkey Project Gallery",
          caption: "Photo case studies demonstrating custom restaurant and hotel kitchen installations.",
        },
        {
          title: "Direct B2B Inquiry Drawer",
          caption: "Frictionless form allowing chefs and project managers to submit custom dimensions.",
        },
      ],
      testimonialPlaceholder: "Precision engineering crafted for high-volume commercial kitchens.",
      metricsPlaceholder: "Designed to drive high-ticket commercial inquiries from leading hotel chains.",
    },
    {
      id: "pr-sparkz",
      slug: "pr-sparkz",
      title: "PR Sparkz",
      tagline: "Strategic PR agency & growth marketing firm commanding media authority.",
      category: "Marketing",
      categoryLabel: "Social Media & Digital Marketing",
      year: "2025",
      isConcept: false,
      liveUrl: "https://www.prsparkz.com/",
      featured: false,
      summary:
        "A sleek, authoritative digital presence for a fast-rising public relations and brand growth agency. Specializing in Tier-1 media placements, founder profiling, and crisis communications.",
      challenge:
        "In the crowded PR market, agencies must prove they understand prestige and cultural resonance. PR Sparkz needed an arresting web presence that immediately established elite credibility.",
      approach:
        "We orchestrated bold typography, high-impact press metrics, sleek hover animations, and curated case studies showcasing media features across Forbes, Bloomberg, and TechCrunch.",
      solution:
        "A contemporary agency flagship built with high-conversion consultation scheduling, interactive media impact counters, and polished case study monographs.",
      deliverables: [
        "Agency Brand Art Direction",
        "Responsive Next.js Web Experience",
        "Interactive Media Placement Showcase",
        "Lead Capture & Discovery Booking Integration",
      ],
      clientIndustry: "Public Relations & Strategic Communications",
      accentColor: "#C46F39",
      image: "/projects/pr-sparkz.svg",
      galleryImages: [
        {
          title: "Tier-1 Media Wall",
          caption: "Dynamic press ticker highlighting placements across global editorial publications.",
        },
        {
          title: "Client Case Monographs",
          caption: "Editorial breakdowns showing quantifiable impression spikes and earned media value.",
        },
        {
          title: "VIP Discovery Booking",
          caption: "Streamlined consultation scheduler routing qualified founder leads directly to partners.",
        },
      ],
      testimonialPlaceholder: "Turning visionary founders into household industry names.",
      metricsPlaceholder: "Crafted to command premium agency retainers and build immediate client trust.",
    },
    {
      id: "cd-hydro",
      slug: "cd-hydro",
      title: "CD Hydro",
      tagline: "Industrial renewable energy engineering, hydroelectric plants & green hydrogen.",
      category: "Automation",
      categoryLabel: "Automation & AI Solutions",
      year: "2025",
      isConcept: false,
      liveUrl: "https://cd-hydro.vercel.app/",
      featured: false,
      summary:
        "An enterprise engineering platform for a green energy pioneer. CD Hydro designs and deploys megawatt-scale hydroelectric turbine systems, green hydrogen electrolyzers, and automated telemetry networks.",
      challenge:
        "Complex industrial energy technology requires clear communication that appeals both to government regulatory bodies and private utility investors without oversimplifying engineering rigor.",
      approach:
        "We built an architectural blueprint-inspired interface combining schematic animations, hydrogen flow diagrams, telemetry metrics, and sustainability validation data.",
      solution:
        "A crisp, responsive technical showcase that demonstrates deep industrial capability while presenting renewable infrastructure investment opportunities with clarity.",
      deliverables: [
        "Industrial Web Platform",
        "Interactive Green Hydrogen Schematics",
        "Plant Telemetry UI Prototypes",
        "Technical Document Repository",
      ],
      clientIndustry: "Clean Technology & Renewable Energy",
      accentColor: "#532510",
      image: "/projects/cd-hydro.svg",
      galleryImages: [
        {
          title: "Hydrogen Electrolyzer Blueprint",
          caption: "Interactive visual explaining PEM stack efficiency and pure H2 production metrics.",
        },
        {
          title: "Hydroelectric Turbine Portfolio",
          caption: "Technical comparison of Francis, Kaplan, and Pelton turbine implementations.",
        },
        {
          title: "SCADA & Telemetry System",
          caption: "Preview of cloud-based plant monitoring for automated fault prevention.",
        },
      ],
      testimonialPlaceholder: "Powering the zero-emission industrial transition through relentless engineering.",
      metricsPlaceholder: "Engineered to support institutional investors and global utility tenders.",
    },
    {
      id: "bk-sikha",
      slug: "bk-sikha",
      title: "BK Shikha",
      tagline: "Yogic lifestyle, mindful transformation & holistic wellness mentorship.",
      category: "Branding",
      categoryLabel: "Brand Identity & Graphic Design",
      year: "2025",
      isConcept: false,
      liveUrl: "https://bk-sikha.vercel.app/",
      featured: false,
      summary:
        "A serene digital sanctuary crafted for a renowned yogic lifestyle and meditation mentor. Centered on breathwork immersions, 1:1 spiritual guidance, and Himalayan wellness retreat bookings.",
      challenge:
        "Spiritual wellness websites often suffer from visual cliché. BK Shikha needed a refined, calming digital presence that felt deeply authentic, sacred, and grounded.",
      approach:
        "We selected warm botanical tones, gentle radial sunburst motifs, classical serif typography, and unhurried whitespace to create a tranquil online atmosphere that soothes visitors.",
      solution:
        "A peaceful, mobile-first mentorship platform integrating private session bookings, guided audio meditation teasers, and upcoming residential retreat itineraries.",
      deliverables: [
        "Spiritual Brand Identity & Color System",
        "Tranquil Responsive Web Experience",
        "Private 1:1 Booking Flow",
        "Retreat Itinerary Presentation",
      ],
      clientIndustry: "Holistic Wellness & Mindful Living",
      accentColor: "#C46F39",
      image: "/projects/bk-sikha.svg",
      galleryImages: [
        {
          title: "Mindful Hero Sanctuary",
          caption: "Calming visual composition blending ancient yoga emblems with warm minimalism.",
        },
        {
          title: "Meditation Audio Teasers",
          caption: "Embedded audio players offering sample breathwork sessions.",
        },
        {
          title: "Himalayan Retreat Calendar",
          caption: "Transparent itinerary breakdowns for upcoming residential sanctuary retreats.",
        },
      ],
      testimonialPlaceholder: "Guiding souls toward stillness, clarity, and embodied joy.",
      metricsPlaceholder: "Designed for frictionless private session bookings across time zones.",
    },
    {
      id: "cdev-ev",
      slug: "cdev-ev",
      title: "CDEV EV",
      tagline: "High-performance smart electric scooters for sustainable urban mobility.",
      category: "Software",
      categoryLabel: "Software & Digital Products",
      year: "2025",
      isConcept: false,
      liveUrl: "https://cdevnew.vercel.app/",
      featured: false,
      summary:
        "A futuristic digital showroom for an emerging electric vehicle innovator. Featuring smart IoT-connected electric scooters with fast-swap batteries and companion smartphone telemetry.",
      challenge:
        "Electric two-wheelers are competitive. CDEV needed a digital presence that highlighted raw performance, torque, battery safety, and cost savings compared to fossil fuels.",
      approach:
        "We engineered a high-octane dark-mode aesthetic with kinetic typography, 3D scooter angles, interactive battery range calculators, and seamless test-ride pre-orders.",
      solution:
        "A dynamic, responsive EV portal that showcases scooter specifications, interactive color customizers, dealer network locator, and online reservation deposits.",
      deliverables: [
        "Dynamic EV Product Showroom",
        "Interactive Battery Savings Calculator",
        "Dealer Network Map & Test Ride Booking",
        "Mobile Companion App Mockups",
      ],
      clientIndustry: "Electric Vehicles & Clean Mobility",
      accentColor: "#C46F39",
      image: "/projects/cdev-ev.svg",
      galleryImages: [
        {
          title: "Digital Vehicle Showroom",
          caption: "High-resolution angle views showcasing LED lighting, alloy wheels, and chassis.",
        },
        {
          title: "Fuel Savings Calculator",
          caption: "Interactive slider comparing petrol expense vs. CDEV electric charging costs.",
        },
        {
          title: "Smart Telemetry App Preview",
          caption: "Smartphone dashboard showing real-time battery status and anti-theft GPS tracking.",
        },
      ],
      testimonialPlaceholder: "Accelerating the urban transition to clean, thrilling electric mobility.",
      metricsPlaceholder: "Built to drive online test-ride bookings and pre-order deposit conversions.",
    },
    {
      id: "cd-it",
      slug: "cd-it",
      title: "CD IT Solutions",
      tagline: "Enterprise cloud architecture, cybersecurity & digital transformation.",
      category: "Automation",
      categoryLabel: "Automation & AI Solutions",
      year: "2025",
      isConcept: false,
      liveUrl: "https://cd-it-ten.vercel.app/",
      featured: false,
      summary:
        "A mission-critical enterprise IT services platform serving mid-market and enterprise organizations. Specializing in cloud migrations, zero-trust security audits, and automated DevOps infrastructure.",
      challenge:
        "Enterprise technology decision-makers need reassurance on compliance, uptime SLAs, and technical depth before engaging in multi-year service contracts.",
      approach:
        "We designed a structured, authoritative platform showcasing technical competencies across AWS, Azure, Kubernetes, and enterprise database modernizations.",
      solution:
        "A responsive IT portal with clear service pillars, cloud architecture audit tools, compliance case studies, and rapid consultative intake forms.",
      deliverables: [
        "Enterprise IT Web Architecture",
        "Cloud Migration Strategy Blueprint",
        "Interactive Infrastructure Audit Form",
        "Service Level Agreement (SLA) Visualizations",
      ],
      clientIndustry: "Enterprise IT & Cloud Engineering",
      accentColor: "#532510",
      image: "/projects/cd-it.svg",
      galleryImages: [
        {
          title: "Cloud Migration Architecture",
          caption: "Clear visual breakdown of multi-cloud Kubernetes orchestration and failover protocols.",
        },
        {
          title: "Zero-Trust Security Matrix",
          caption: "Compliance standards map detailing SOC2, ISO27001, and HIPAA safeguards.",
        },
        {
          title: "Consultative Intake Pipeline",
          caption: "Structured technical questionnaire capturing server footprint and migration timelines.",
        },
      ],
      testimonialPlaceholder: "Reliable, resilient cloud systems engineered for zero unplanned downtime.",
      metricsPlaceholder: "Engineered to convert enterprise CTOs and IT directors into long-term retainers.",
    },
    {
      id: "hackathon-telemed",
      slug: "hackathon-telemed",
      title: "TeleMed Innovation",
      tagline: "Award-winning telemedicine platform connecting rural clinics with specialist doctors.",
      category: "Software",
      categoryLabel: "Software & Digital Products",
      year: "2024",
      isConcept: false,
      liveUrl: "https://brilliant-cascaron-c57211.netlify.app/",
      featured: false,
      summary:
        "An award-winning hackathon prototype engineered into a fully functioning virtual consultation platform. Connecting patients in remote areas to specialist doctors via ultra-low-bandwidth WebRTC video.",
      challenge:
        "Rural clinics often have intermittent, poor internet bandwidth. Video consultation tools fail when networks drop, stranding patients needing urgent specialist opinions.",
      approach:
        "We optimized audio-first fallback protocols, adaptive WebRTC video codecs, streamlined digital prescription generation, and automated patient queue prioritization.",
      solution:
        "A resilient, mobile-optimized telemedicine web application featuring instant doctor-patient video links, secure medical file sharing, and prescription dispatch.",
      deliverables: [
        "Adaptive WebRTC Video Architecture",
        "Doctor & Patient Consultation Dashboards",
        "E-Prescription Generator",
        "Low-Bandwidth Optimization Protocols",
      ],
      clientIndustry: "Digital Health & Telemedicine",
      accentColor: "#C46F39",
      image: "/projects/hackathon-telemed.svg",
      galleryImages: [
        {
          title: "Virtual Consultation Room",
          caption: "Lightweight video window with patient health vitals and live chat side-by-side.",
        },
        {
          title: "AI Triage Queue",
          caption: "Automated symptom intake prioritizing urgent patient cases for the on-call doctor.",
        },
        {
          title: "Digital Prescription Generator",
          caption: "One-click digital Rx generator dispatching tamper-evident PDFs to local pharmacies.",
        },
      ],
      testimonialPlaceholder: "Bridging the urban-rural healthcare divide through smart web engineering.",
      metricsPlaceholder: "Operates reliably even on 3G and congested rural mobile connections.",
    },
    {
      id: "healthcare-mamagiggles",
      slug: "healthcare-mamagiggles",
      title: "MamaGiggles",
      tagline: "Compassionate maternal, neonatal & pediatric healthcare digital clinic.",
      category: "Websites",
      categoryLabel: "Website Design & Development",
      year: "2024",
      isConcept: false,
      liveUrl: "https://incandescent-sopapillas-507acc.netlify.app/",
      featured: false,
      summary:
        "A nurturing, family-centered healthcare website for a specialized maternal and child clinic. Offering gentle guidance through pregnancy, newborn care, postpartum recovery, and pediatric milestones.",
      challenge:
        "New parents often feel overwhelmed by clinical medical jargon. MamaGiggles needed a welcoming, reassuring web experience that felt like a warm hug while maintaining medical excellence.",
      approach:
        "We incorporated warm peach and ivory color palettes, friendly typography, reassuring practitioner bios, and an intuitive online appointment scheduling workflow.",
      solution:
        "An accessible digital home that demystifies pediatric appointments, features helpful parenting resource libraries, and provides friction-free doctor booking.",
      deliverables: [
        "Maternal Clinic Web Architecture",
        "Pediatric Appointment Booking System",
        "Parenting Wellness Resource Library",
        "Accessible Mobile-First Interface",
      ],
      clientIndustry: "Maternal Health & Pediatrics",
      accentColor: "#E8B79A",
      image: "/projects/healthcare-mamagiggles.svg",
      galleryImages: [
        {
          title: "Welcoming Clinical Hero",
          caption: "Soft, comforting design system reassuring anxious new mothers and families.",
        },
        {
          title: "Pediatric Milestone Tracker",
          caption: "Interactive immunization and growth schedule guide for parents.",
        },
        {
          title: "Direct Specialist Booking",
          caption: "Transparent doctor profiles with verified credentials and simple booking steps.",
        },
      ],
      testimonialPlaceholder: "Every baby giggles. Every mother is supported.",
      metricsPlaceholder: "Designed for immediate parent reassurance and effortless mobile appointments.",
    },
    {
      id: "safar-hamara",
      slug: "safar-hamara",
      title: "Safar Hamara",
      tagline: "Experiential expeditions, uncharted Himalayan trails & Incredible India travel agency.",
      category: "Websites",
      categoryLabel: "Website Design & Development",
      year: "2024",
      isConcept: false,
      liveUrl: "https://www.safarhamara.com/",
      featured: false,
      summary:
        "A visual storytelling travel platform for an adventurous Indian tour operator. Curating off-the-beaten-path expeditions to Ladakh, Spiti Valley, Meghalaya, and the desert frontiers of Rajasthan.",
      challenge:
        "Mass-market travel websites feel cookie-cutter and transactional. Safar Hamara needed an awe-inspiring editorial experience that captured the spiritual magic and raw grandeur of India.",
      approach:
        "We crafted cinematic landscape compositions, rich route maps, detailed day-by-day itineraries, packing guides, and an inquiry system that connects travelers with local Sherpa guides.",
      solution:
        "A captivating digital portal featuring interactive expedition catalogs, customer travel journals, transparent group pricing, and private custom tour builder modules.",
      deliverables: [
        "Editorial Travel Platform",
        "Interactive Expedition Route Maps",
        "Custom Tour Itinerary Builder",
        "Booking & Lead Qualification Pipeline",
      ],
      clientIndustry: "Experiential Tourism & Adventure Travel",
      accentColor: "#C46F39",
      image: "/projects/safar-hamara.svg",
      galleryImages: [
        {
          title: "Cinematic Expedition View",
          caption: "High-resolution photo spreads showcasing remote high-altitude monasteries and passes.",
        },
        {
          title: "Day-by-Day Expedition Itinerary",
          caption: "Clear altitude acclimatization schedules, meal inclusions, and camp locations.",
        },
        {
          title: "Custom Journey Consultation",
          caption: "Tailored inquiry form capturing fitness levels and private vehicle requirements.",
        },
      ],
      testimonialPlaceholder: "Because the journey matters as much as the destination.",
      metricsPlaceholder: "Curated to drive high-margin expedition bookings from travelers worldwide.",
    },
    {
      id: "sahyog-care",
      slug: "sahyog-care",
      title: "Sahyog Care For You",
      tagline: "Leading nationwide grassroots social change, healthcare & child empowerment.",
      category: "Websites",
      categoryLabel: "Website Design & Development",
      year: "2024",
      isConcept: false,
      liveUrl: "https://www.sahyogcare4u.org/",
      featured: false,
      summary:
        "A high-transparency digital home for a leading Indian non-governmental organization. Driving grassroots impact across rural mobile health vans, child malnutrition elimination, and women's self-help groups.",
      challenge:
        "Non-profits must establish unquestionable financial transparency, donor trust, and measurable on-ground impact to secure institutional grants and individual philanthropy.",
      approach:
        "We architected an honest, narrative-driven digital platform featuring verified annual impact reports, tax-exempt donation workflows (80G / FCRA), and vivid grassroots field stories.",
      solution:
        "An inspiring, fast-loading NGO flagship with secure donation gateways, program tracking dashboards, and volunteer enrollment mechanisms.",
      deliverables: [
        "NGO Digital Brand & Web Architecture",
        "Audited Annual Impact Reporting UI",
        "Secure Online Donation Portal (80G Verified)",
        "Grassroots Storytelling & Volunteer Hub",
      ],
      clientIndustry: "Social Impact, Healthcare NGO & Non-Profit",
      accentColor: "#532510",
      image: "/projects/sahyog-care.svg",
      galleryImages: [
        {
          title: "Verified Impact Counters",
          caption: "Live counters tracking free clinic visits, meals served, and students enrolled.",
        },
        {
          title: "Mobile Health Clinic Tracker",
          caption: "District map displaying weekly schedules for mobile hospital vans.",
        },
        {
          title: "Friction-Free Donor Portal",
          caption: "Instant tax receipt generation with transparent fund allocation breakdowns.",
        },
      ],
      testimonialPlaceholder: "Leading change across the nation, one empowered family at a time.",
      metricsPlaceholder: "Designed for absolute transparency and donor trust with 80G tax verification.",
    },
  ] as Project[],

  process: [
    {
      step: "01",
      title: "Discover",
      headline: "We ask the uncomfortable, necessary questions.",
      description:
        "Before touching a canvas or writing a line of code, we dig into your business model, customer psychology, competitive landscape, and unexpressed potential. We identify the friction points holding your brand back.",
      deliverables: ["Brand & Market Audit", "Audience Persona Insights", "Strategic Opportunity Map"],
    },
    {
      step: "02",
      title: "Imagine",
      headline: "The 'what if' phase where wild ideas get structured.",
      description:
        "We explore conceptual directions, typography treatments, interactive wireframes, and architectural diagrams. We push boundaries until we hit the concept that makes both of us lean in with genuine excitement.",
      deliverables: ["Creative Direction Options", "Interactive Wireframes", "Visual Moodboards & Prototypes"],
    },
    {
      step: "03",
      title: "Create",
      headline: "Meticulous craftsmanship down to the last pixel and pixel.",
      description:
        "Design and engineering move in tandem. We build with modern web frameworks, write purposeful copy, polish micro-interactions, and test every viewport for seamless tactile performance.",
      deliverables: ["Production Design Systems", "Clean Next.js / React Code", "Asset Preparation & Optimizations"],
    },
    {
      step: "04",
      title: "Launch & Grow",
      headline: "We pop the confetti, then we optimize for momentum.",
      description:
        "A launch is not the finish line; it is day one. We conduct thorough pre-launch QA, deploy on high-performance cloud networks, monitor initial interactions, and equip your team with tools to keep growing.",
      deliverables: ["Production Deployment", "Core Web Vitals Verification", "Team Walkthrough & Handover Guides"],
    },
  ] as ProcessStage[],

  faqs: [
    {
      question: "What types of businesses do you work with?",
      answer:
        "We partner with ambitious startups, established businesses, founders, luxury & lifestyle labels, SaaS companies, and independent brands who understand that premium design and robust technology directly influence customer trust and revenue.",
    },
    {
      question: "Can I hire oopswedidit for just one service?",
      answer:
        "Yes, absolutely. While many clients partner with us for end-to-end brand + web transformations, we regularly execute focused engagements such as a website redesign, a custom web app MVP, brand identity design, or workflow automations.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Yes! We work with clients across North America, Europe, Australia, the Middle East, and Asia. Our asynchronous communication flows, clear sprint milestones, and flexible meeting cadences make collaboration seamless across time zones.",
    },
    {
      question: "Can you redesign or elevate an existing website?",
      answer:
        "Yes. We frequently audit and rebuild existing websites that have outgrown their original architecture or look dated. We preserve your existing SEO equity while delivering a modern, high-converting digital experience.",
    },
    {
      question: "Do you provide post-launch support and maintenance?",
      answer:
        "We ensure you are never left stranded. Every project includes post-launch warranty support, recorded video handovers, and optional ongoing retainer partnerships for continuous creative direction, feature expansions, and technical maintenance.",
    },
    {
      question: "How do we get started?",
      answer:
        "Fill out our project inquiry form on the Contact page or email us directly at thakursumi498@gmail.com or call +91 92679 70341 / +91 98712 86617. We'll review your project details, ask any clarifying questions, and schedule a 30-minute discovery call within 24 business hours.",
    },
  ] as FaqItem[],
};
