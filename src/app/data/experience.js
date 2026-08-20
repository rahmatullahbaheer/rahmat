// Work history transcribed from Rahmat Ullah's CV.
export const experiences = [
  {
    id: "must-services",
    company: "Must Services",
    position: "Full Stack Developer",
    type: "Full-time",
    startDate: "06/2025",
    endDate: "Present",
    isCurrent: true,
    location: "Islamabad, Pakistan",
    description:
      "Developing modern, responsive web applications with Next.js and React, with a focus on scalable interfaces, video conferencing, and high-quality user experiences.",
    responsibilities: [
      "Develop responsive web applications using Next.js and React.js",
      "Build modern user interfaces with Ant Design and shadcn/ui",
      "Integrate Zoom Video SDK/API for video calling and meeting features",
      "Implement AI-powered features to improve user experience and productivity",
      "Consume REST APIs and collaborate with back-end developers",
      "Optimize application performance, responsiveness, and SEO",
      "Write clean, reusable, maintainable code using Git and Agile practices",
    ],
    technologies: ["Next.js", "React.js", "Ant Design", "shadcn/ui", "Zoom Video SDK/API", "Git"],
  },
  {
    id: "m-techub",
    company: "M TECHUB LLC",
    position: "MERN Stack Developer",
    type: "Full-time",
    startDate: "01/2025",
    endDate: "06/2025",
    isCurrent: false,
    location: "Punjab, Pakistan",
    description:
      "Developed scalable MERN applications focused on back-end development, real-time communication, and responsive React-based dashboards.",
    responsibilities: [
      "Develop RESTful APIs using Node.js and Express.js",
      "Implement real-time features with Socket.IO",
      "Integrate Agora SDK for live audio and video streaming",
      "Manage and optimize PostgreSQL and MySQL databases",
      "Build responsive dashboards using React.js",
      "Implement secure authentication using JWT",
      "Integrate third-party APIs and optimize application performance",
      "Collaborate with cross-functional teams using Git and Agile methodologies",
      "Write clean, maintainable, and well-documented code",
    ],
    technologies: ["Node.js", "Express.js", "Socket.IO", "Agora", "PostgreSQL", "MySQL", "React.js", "JWT", "Git"],
  },
  {
    id: "alphinex-solutions",
    company: "ALPHINEX SOLUTIONS",
    position: "Full Stack Developer",
    type: "Full-time",
    startDate: "06/2024",
    endDate: "12/2024",
    isCurrent: false,
    location: "Rawalpindi, Pakistan",
    description:
      "Designed responsive Vue.js interfaces and maintained Node.js and Express.js back-end services with API and database integrations.",
    responsibilities: [
      "Design and develop dynamic user interfaces using Vue.js",
      "Build and maintain Node.js and Express.js back-end services",
      "Use Vuex for state management in large-scale applications",
      "Deploy secure, scalable applications on cloud platforms",
      "Collaborate with UI/UX designers and QA teams",
      "Write clean, modular, and well-documented code",
      "Use Git workflows for collaboration and project management",
      "Conduct code reviews and mentoring sessions",
      "Apply Agile methodologies to deliver project milestones",
    ],
    technologies: ["Vue.js", "Vuex", "Node.js", "Express.js", "Git"],
  },
  {
    id: "wq-softwares",
    company: "WQ SOFTWARES",
    position: "React Native / Expo Developer",
    type: "Full-time",
    startDate: "01/2024",
    endDate: "03/2025",
    isCurrent: false,
    location: "Peshawar, Pakistan",
    description:
      "Built and maintained high-performance mobile applications for iOS and Android using React Native, Expo SDK, and modern deployment practices.",
    responsibilities: [
      "Build and maintain high-performance mobile applications for iOS and Android",
      "Use React Native and Expo SDK with modern development practices",
      "Support mobile application deployment processes",
    ],
    technologies: ["React Native", "Expo SDK"],
  },
  {
    id: "nausaltech",
    company: "NAUSALTECH",
    position: "MERN Stack Developer",
    type: "Full-time",
    startDate: "06/2023",
    endDate: "06/2024",
    isCurrent: false,
    location: "Islamabad, Pakistan",
    description:
      "Built server-side rendered and static Next.js applications, secure APIs, and modular React interfaces with a focus on performance and SEO.",
    responsibilities: [
      "Build server-side rendered and static web applications using Next.js",
      "Design and develop RESTful APIs for front-end and back-end communication",
      "Implement reusable, modular React.js UI components",
      "Manage MongoDB schema design, indexing, and efficient queries",
      "Integrate authentication and authorization using NextAuth.js and JWT",
      "Deploy applications on Vercel using CI/CD pipelines",
      "Use API routes, dynamic routing, and middleware to improve architecture",
      "Collaborate in Agile teams through sprint planning, code reviews, and stand-ups",
      "Implement testing with Jest and React Testing Library",
      "Optimize performance with lazy loading, code splitting, and caching",
    ],
    technologies: ["Next.js", "React.js", "MongoDB", "NextAuth.js", "JWT", "Vercel", "Jest", "React Testing Library"],
  },
  {
    id: "kpitb",
    company: "KPITB",
    position: "MERN Stack Developer",
    type: "Full-time",
    startDate: "12/2022",
    endDate: "03/2023",
    isCurrent: false,
    location: "Peshawar, Pakistan",
    description:
      "Developed a complaint-registration system with complaint tracking, notifications, administrative workflows, analytics, secure access, and multi-language support.",
    responsibilities: [
      "Enable online complaint submission with detailed information and supporting documents",
      "Provide real-time complaint status updates and notifications",
      "Build an admin dashboard for complaint review, assignment, and resolution tracking",
      "Integrate reporting and analytics to identify service-delivery trends",
      "Implement secure login and role-based access for citizens and administrators",
      "Support regional languages for an inclusive user experience",
    ],
    technologies: ["MERN Stack"],
  },
];

export function getAllExperiences() {
  return experiences;
}

export function getCurrentExperience() {
  return experiences.find((experience) => experience.isCurrent);
}
