import { Icons } from "@/components/icons";
import { HomeIcon, Languages, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Anurag Parashar",
  initials: "AP",
  url: "https://anuragparashar.tech/",
  location: "Bengaluru, India",
  locationLink: "https://www.google.com/maps/place/bengaluru",
  description:
    "Full Stack AI Developer. Actively involved in Open Source, Cybersecurity, DevOps, and Design.",
  summary:
    "I build software that blends AI, design, and the web.",
  avatarUrl: "/me.png",
  skills: {
    Frontend: ["ReactJs", "NextJs","Tailwind", "JavaScript", "Typescript"],
    Backend: ["NodeJs", "ExpressJs"],
    Languages: ["Java", "Python"],
    Database: ["PostgreSQL", "MongoDB"],
    Tools: ["AWS", "Figma", "Docker"],
  },
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "https://blog.anuragparashar.tech/", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "anuragp5025@gmail.com",
    tel: "+917870645478",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/anuragparashar26",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/anuragparashar26",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/zeroShotDev",
        icon: Icons.x,
        navbar: true,
      },
      LeetCode: {
        name: "LeetCode",
        url: "https://leetcode.com/anuragparashar",
        icon: Icons.leetcode,
        navbar: false,
      },
      Peerlist: {
        name: "Peerlist",
        url: "https://peerlist.io/anuragparashar",
        icon: Icons.peerlist,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  // work: [  
  //   {
  //     company: "Mitre Media",
  //     href: "https://mitremedia.com/",
  //     badges: [],
  //     location: "Toronto, ON",
  //     title: "Software Engineer",
  //     logoUrl: "/mitremedia.png",
  //     start: "May 2017",
  //     end: "August 2017",
  //     description:
  //       "Designed and implemented a robust password encryption and browser cookie storage system in Ruby on Rails. Leveraged the Yahoo finance API to develop the dividend.com equity screener",
  //   },
  // ],
    
  // education: [
  //   {
  //     school: "JSSATE, Bengaluru",
  //     href: "https://jssateb.ac.in/",
  //     degree: "Bachelor of Engineering in Information Science and Engineering",
  //     logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4rqjvB0pbMwXVAg6qaFy67iz2xoO3N_qT7g&s",
  //     start: "2022",
  //     end: "2026",
  //   }
  // ],
  projects: [
    {
      title: "Tarea - Organize Smarter",
      href: "https://tarea.anuragparashar.tech/",
      dates: "August 2025 - Present",
      active: true,
      description:
        "Tarea is a productivity web app integrating note-taking and task management. Includes secure auth, responsive design, and smooth animations for streamlined workflows.",
      technologies: [
        "Next.js",
        "NextAuth.js",
        "Typescript",
        "TailwindCSS",
        "PostgreSQL with Prisma ORM",
        "TanStack Query",
        "Framer Motion"
      ],
      links: [
        {
          type: "Website",
          href: "https://tarea.anuragparashar.tech/",
          icon: <Icons.globe className="size-4" />, 
        },
        {
          type: "Source",
          href: "https://github.com/anuragparashar26/tarea",
          icon: <Icons.github className="size-4" />, 
        },
      ],
      image: "/tarea.png",
      video: "",
      category: "Web Apps",
      status: "ongoing" as const,
    },
        {
      title: "AI-Based Traffic Management & Accident Prevention System",
      href: "https://github.com/anuragparashar26/traffic-management",
      dates: "March-August 2025",
      active: true,
      description:
          "This computer vision project optimizes traffic signal timings with a genetic algorithm to reduce congestion and detects safety violations through helmet detection and license plate recognition.",
      technologies: [
        "React.js",
        "YOLOv4/v8",
        "Pytorch/Ultralytics",
        "Flask",
        "OpenCV",
        "Paddle OCR",
        "Supabase"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anuragparashar26/traffic-management/",
          icon: <Icons.github className="size-4" />, 
        },
      ],
      image: "/traffic.png",
      video: "",
      category: "Web Apps",
      status: "live" as const,
    },
        {
      title: "DevJournal - Blog for Everyone",
      href: "https://blog.anuragparashar.tech/",
      dates: "August 2025",
      active: true,
      description:
        "A modern, responsive personal blog built with Next.js, TypeScript, and Tailwind CSS. Features a clean design with email subscription and cloud image uploads functionality for blog posts.",
      technologies: [
        "Next.js",
        "Typescript",
        "Node.js",
        "TailwindCSS",
        "MongoDB",
      ],
      links: [
        {
          type: "Website",
          href: "https://blog.anuragparashar.tech/",
          icon: <Icons.globe className="size-4" />, 
        },
        {
          type: "Source",
          href: "https://github.com/anuragparashar26/devjournal/",
          icon: <Icons.github className="size-4" />, 
        },
      ],
      image: "/blog.png",
      video: "",
      category: "Web Apps",
      status: "live" as const,
    },
    {
      title: "SkillScreen - Resume Screening Agent",
      href: "https://blog.anuragparashar.tech/",
      dates: "December 2025",
      active: true,
      description:
        "SkillScreen is a single-page Streamlit app that helps recruiters evaluate and rank resumes against a Job Description (JD) using Google Gemini, LangChain, and ChromaDB.",
      technologies: [
        "Streamlit",
        "Langchain",
        "Gemini API",
        "ChromaDB",
        "Supabase",
      ],
      links: [
        {
          type: "Website",
          href: "https://skillscreen.streamlit.app/",
          icon: <Icons.globe className="size-4" />, 
        },
        {
          type: "Source",
          href: "https://github.com/anuragparashar26/skillscreen/",
          icon: <Icons.github className="size-4" />, 
        },
      ],
      image: "/skillscreen.png",
      video: "",
      category: "Web Apps",
      status: "live" as const,
    },
    {
      title: "CyberTron",
      href: "https://cybertron-uvmm.onrender.com/",
      dates: "July 2025-August 2025",
      active: true,
      description:
        "A gamified cybersecurity learning platform with interactive terminal commands, VirusTotal integration, and simulated security tools. Note: Not yet optimized for mobile devices.",
      technologies: [
        "React.js",
        "Node.js",
        "TailwindCSS",
        "Virus Total API",
        "Supabase",
        "Render",
      ],
      links: [
        {
          type: "Website",
          href: "https://cybertron-uvmm.onrender.com/",
          icon: <Icons.globe className="size-4" />, 
        },
        {
          type: "Source",
          href: "https://github.com/anuragparashar26/CyberTron",
          icon: <Icons.github className="size-4" />, 
        },
      ],
      image: "/cyber.png",
      video: "",
      category: "Web Apps",
      status: "live" as const,
    },
    {
      title: "ShowDevKit - A Portfolio for Developers",
      href: "https://showdevkit.netlify.app/",
      dates: "January 2025",
      active: true,
      description:
        "A modern, customizable personal portfolio website template to showcase your projects, skills, and experience. Built with clean HTML, CSS, and JavaScript.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "AOS",
        "Formspree",
      ],
      links: [
        {
          type: "Website",
          href: "https://showdevkit.netlify.app/",
          icon: <Icons.globe className="size-4" />,
        },
        {
          type: "Source",
          href: "https://github.com/anuragparashar26/showdevkit/",
          icon: <Icons.github className="size-4" />, 
        },
      ],
      image: "/showdevkit.png",
      video: "",
      category: "Web Apps",
      status: "live" as const,
    },
    {
      title: "Lendwise",
      href: "https://loan-web-app-frontend-ew3f.onrender.com/",
      dates: "January 2025 - July 2025",
      active: true,
      description:
        "A multilingual loan advisor app that helps users explore, calculate, and apply for loans, featuring an AI-powered chatbot for instant loan advice and financial tips.",
      technologies: [
        "React.js",
        "Node.js",
        "Gemini API",
        "Express",
        "Render",
      ],
      links: [
        {
          type: "Website",
          href: "https://loan-web-app-frontend-ew3f.onrender.com/",
          icon: <Icons.globe className="size-4" />, 
        },
        {
          type: "Source",
          href: "https://github.com/anuragparashar26/loan-web-app",
          icon: <Icons.github className="size-4" />, 
        },
      ],
      image: "/loan.png",
      video: "",
      category: "Web Apps",      status: "live" as const,    },
    {
      title: "Lost and Found Platform",
      href: "https://lostandfoundmini.netlify.app/",
      dates: "August 2024 - May 2025",
      active: true,
      description:
        "A seamless digital platform that reconnects people with lost belongings through intuitive matching, real-time updates, and user-friendly tools.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Supabase",
        "Netlify",
      ],
      links: [
        {
          type: "Website",
          href: "https://lostandfoundmini.netlify.app/",
          icon: <Icons.globe className="size-4" />, 
        },
        {
          type: "Source",
          href: "https://github.com/anuragparashar26/LostandFound",
          icon: <Icons.github className="size-4" />, 
        },
      ],
      image: "/lostfound.png",
      video:
        "",
      category: "Web Apps",
      status: "live" as const,
    },
    {
      title: "txt2chat",
      href: "https://github.com/anuragparashar26/txt2chat",
      dates: "March 2025 - May 2025",
      active: true,
      description:
        "A react app to convert WhatsApp .txt exports into an interactive, chat-style viewer with media support and full-text search.",
      technologies: [
        "React.js",
        "CSS",
        "JavaScript",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anuragparashar26/txt2chat",
          icon: <Icons.github className="size-4" />, 
        },
      ],
      image: "/txt2chat.png",
      video:
        "",
      category: "Web Apps",
      status: "live" as const,
    },
    {
      title: "Focus Flick",
      href: "https://github.com/anuragparashar26/focus-flick",
      dates: "July 2025",
      active: true,
      description:
        "A chrome extension that automatically pauses YouTube videos when you switch tabs or windows, and resumes playback when you return.",
      technologies: [
        "JavaScript",
        "Chrome Extension",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anuragparashar26/focus-flick",
          icon: <Icons.github className="size-4" />, 
        },
      ],
      image: "/focus.png",
      video:
        "",
      category: "Developer Tools",
      status: "live" as const,
    },
    {
      title: "Github Repo Tree Generator",
      href: "https://github-repo-tree-generator.vercel.app/",
      dates: "June 2025",
      active: true,
      description:
        "An app that generates a markdown-style directory tree of any public or private GitHub repository. Also available as a chromium-based extension.",
      technologies: [
        "React.js",
        "JavaScript",
        "Typescript",
        "Tailwind CSS",
        "Chrome Extension",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "https://github-repo-tree-generator.vercel.app/",
          icon: <Icons.globe className="size-4" />, 
        },
        {
          type: "Source",
          href: "https://github.com/anuragparashar26/github-repo-tree-generator",
          icon: <Icons.github className="size-4" />, 
        },
        {
          type: "Get Extension",
          href: "https://github.com/anuragparashar26/repotree-extension",
          icon: <Icons.github className="size-4" />, 
        },
      ],
      image: "/repo.png",
      video:
        "",
      category: "Developer Tools",
      status: "live" as const,
    },
    {
      title: "WhatsBlur",
      href: "https://github.com/anuragparashar26/whatsblur-chrome-extension",
      dates: "May 2025",
      active: true,
      description:
        "A Chrome extension that blurs the message previews on WhatsApp Web.",
      technologies: [
        "JavaScript",
        "Chrome Extension",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anuragparashar26/whatsblur-chrome-extension",
          icon: <Icons.github className="size-4" />, 
        },
      ],
      image: "/whatsblur.png",
      video:
        "",
      category: "Developer Tools",
      status: "live" as const,
    },
    {
      title: "Hostel Management System",
      href: "https://github.com/anuragparashar26/java-swing-jdbc",
      dates: "March - 2025",
      active: true,
      description:
        "A Java-based Hostel Management System with a MongoDB backend, offering secure login, student record management, and a user-friendly GUI for efficient categorization and seamless data handling.",
      technologies: [
        "Java",
        "Swing",
        "MongoDB",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/anuragparashar26/java-jdbc-swing",
          icon: <Icons.github className="size-4" />, 
        },
      ],
      image: "/swing.png",
      video:
        "",
      category: "Desktop Apps",
      status: "live" as const,
    },
  ],
  certifications: [
    {
      title: "Google Cybersecurity Specialization",
      issuer: "Google and Coursera",
      date: "October 2024",
      description: "Credential ID: RJO9Y8VL6CWF",
      link: "https://coursera.org/share/906663465d385b6dad931ae9c3115ea4",
      image: "/google.png",
    },
   {
      title: "AI Essentials",
      issuer: "Google and Coursera",
      date: "June 2024",
      description: "Credential ID: QGY95GSDNG2C",
      link: "https://coursera.org/share/1b36fa8c44299b051803be4f67673ead",
      image: "/google.png",
    },
    {
      title: "Digital Skills: User Experience",
      issuer: "Accenture and Future Learn",
      date: "February 2024",
      description: "Credential ID: 0wzqu2l",
      link: "https://www.futurelearn.com/certificates/0wzqu2l",
      image: "/acc.png",
    },
    {
      title: "Elements of AI",
      issuer: "University of Helsinki",
      date: "August 2025",
      description: "Credential ID: eub730k69nl",
      link: "https://certificates.mooc.fi/validate/eub730k69nl",
      image: "/helsinki.jpg",
    },
  ],
} as const;

