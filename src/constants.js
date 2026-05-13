// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';
import designtoneLogo from './assets/company_logo/designtone.png';
import sundujaLogo from './assets/company_logo/sunduja.png';

// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.webp';
import vpsLogo from './assets/education_logo/vps_logo.png';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';
import taskremLogo from './assets/work_logo/task_rem.png';
import npmLogo from './assets/work_logo/npm.png';
import webverLogo from './assets/work_logo/web_dig.png';
import cmLogo from './assets/work_logo/cm.png';
import imagesearchLogo from './assets/work_logo/image_search.png';
import removebgLogo from './assets/work_logo/remove_bg.png';
import leafDiseaseLogo from './assets/work_logo/leaf_disease.png';
import devsyncLogo from './assets/work_logo/devsync.png';
import financeLogo from './assets/work_logo/finance.png';

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Java", logo: javaLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];

export const experiences = [
    {
      id: 0,
      img: designtoneLogo,
      role: "Full-stack Developer (Freelance)",
      company: "DesignTone (Client: Gaurav Singh)",
      date: "Jan 2026 - March 2026",
      desc: "Developed a premium end-to-end interior design platform specializing in modular kitchens and wardrobes. Independently built the entire application including a custom Admin Panel for content management, 2D technical layout integration, and Vastu-optimized space planning features. Engineered high-performance frontend with React and a robust Node.js/MongoDB backend.",
      skills: [
        "React",
        "Node.js",
        "MongoDB",
        "Tailwind CSS",
        "Admin Panel",
        "REST API"
      ],
      webapp: "https://designtonedummy.vercel.app/",
    },
    {
      id: 1,
      img: sundujaLogo,
      role: "Full-stack MERN Developer (Freelance)",
      company: "Sunduja Property (Client: Satyam Goswami)",
      date: "April 2026 - June 2026",
      desc: "Architected and developed a full-featured real estate platform with the MERN stack. Implemented a complex property listing system with dynamic filters, real-time lead tracking, and a powerful admin dashboard for property management and user analytics. Focused on high-performance property searches and secure data handling.",
      skills: [
        "React",
        "Node.js",
        "MongoDB",
        "Express",
        "Redux",
        "Cloudinary",
        "REST API"
      ],
      webapp: "https://sunduja.com/",
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "Lovely Professional University",
      date: "Aug 2022 - July 2026",
      grade: "7.1 CGPA",
      desc: "I am currently pursuing my B.Tech in Computer Science Engineering from Lovely Professional University, Phagwara. Throughout my time at LPU, I have built a strong foundation in programming, software development, and computer science concepts.",
      degree: "Bachelor of Technology - B-tech",
    },
    {
      id: 2,
      img: vpsLogo,
      school: "Shri Vinayak Academy International School, Kanpur",
      date: "Apr 2021 - March 2022",
      grade: "81.6%",
      desc: "I completed my class 12 education from Shri Vinayak Academy School, Kanpur, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM ",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "DevSync AI",
      description:
        "AI-powered collaborative coding platform with real-time workspaces, browser-based runtime, and an integrated AI pair programmer for seamless team development.",
      image: devsyncLogo,
      tags: ["React", "Node.js", "AI", "Real-time"],
      github: "https://github.com/astikgupta/devsync.ai",
      webapp: "https://devsync-ai-6wki.vercel.app",
    },
    {
      id: 1,
      title: "Plant Leaf Disease Detection",
      description:
        "A Machine Learning framework for detecting plant leaf diseases and providing agricultural treatment recommendations. Built with Python and Streamlit, it offers real-time analysis and actionable insights for farmers to improve crop yield.",
      image: leafDiseaseLogo,
      tags: ["Python", "Machine Learning", "Streamlit", "Agriculture"],
      github: "https://github.com/astikgupta/leaf-disease-framework",
      webapp: "https://leaf-disease-by-astik.streamlit.app/",
    },
    {
      id: 2,
      title: "FinanceDash",
      description:
        "A robust financial management system with tiered Role-Based Access Control (RBAC). Features real-time analytics dashboards, secure JWT authentication, and automated income/expense trend tracking for professional data management.",
      image: financeLogo,
      tags: ["Node.js", "Express", "MongoDB", "JWT", "React"],
      github: "https://github.com/astikgupta/finance-dashboard-backend",
      webapp: "https://finance-dashboard-backend-8ncb.onrender.com/",
    },
    {
      id: 3,
      title: "Binkeyit",
      description:
        "A full-stack e-commerce web application inspired by Blinkit, designed for rapid grocery delivery. Built with modern technologies like Node.js, Express, and MongoDB, it features user authentication, real-time product updates, and admin-side inventory management.",
      image: csprepLogo,
      tags: ["Node.js", "MongoDB", "Express", "Full-Stack"],
      github: "#",
      webapp: "",
    },
    {
      id: 4,
      title: "Movie Recommendation App",
      description:
        "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
      image: movierecLogo,
      tags: ["React JS", "API", "MovieDB", "UI/UX"],
      github: "#",
      webapp: "",
    },
    {
      id: 5,
      title: "Image search Engine",
      description:
        "A visually engaging web application built using HTML, CSS, and JavaScript. It allows users to search for high-quality images via the Unsplash API. Ideal for designers or anyone in need of quick curated visual content.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "API"],
      github: "https://github.com/astikgupta/image-search-Website",
      webapp: "https://astik-searchengine.netlify.app/",
    },
  ];  

  export const certificates = [
    {
      id: 0,
      title: "Data Structures and Algorithms",
      issuer: "Coursera",
      issueDate: "Nov 2023",
      certificateUrl: "https://www.coursera.org/account/accomplishments/specialization/W85RH37PZM5R",
      image: "/certificates/dsa.png",
    },
    {
      id: 1,
      title: "Become a Full-Stack Web Developer",
      issuer: "LinkedIn",
      issueDate: "Feb 2023",
      certificateUrl: "",
      image: "/certificates/webdeveloper.png",
    },
    {
      id: 3,
      title: "Full Interview Preparation",
      issuer: "Geeks of Geeks",
      issueDate: "August 2024",
      certificateUrl: "https://media.geeksforgeeks.org/courses/certificates/0dd551179058021691911decfc75205a.pdf",
      image: "/certificates/gfg.png",
    },
  ];
