import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  salema,
  loccitane,
  resumind,
  finora,
  quickgpt,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];



const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  }
];

const experiences = [
  {
    title: "Junior Fullstack Developer Intern",
    company_name: "Mansalema Enterprises",
    icon: salema,
    iconBg: "#383E56",
    date: "Nov 2024 - Oct 2025",
    points: [
      "Contributed to the development, testing, and deployment of responsive web and mobile applications.",
      "Deployed applications on Render and Afrihost, ensuring stable and accessible hosting environments.",
      "Collaborated with team members to design and implement features using JavaScript, React, Node.js, Express, and MongoDB.",
      "Integrated Payfast payment solutions to enable secure online transactions.",
      "Led the development of two major projects: the official company website and an e-commerce platform with an admin dashboard."

    ],
  },
  {
    title: "Sales Associate",
    company_name: "L'Occitane South Africa",
    icon: loccitane,
    iconBg: "#E6DEDD",
    date: "Mar 2023 - Nov 2024",
    points: [
      "Processed and prepared online orders via Shopify, ensuring accurate and timely daily dispatch.",
      "Liaised with customers to resolve complaints, delivery delays, and product issues, coordinating with courier services for damaged stock.",
      "Conducted weekly stock audits in Cegid to remove expired items, ensuring compliance and product quality.",
      "Managed product availability by activating and deactivating stock in Shopify.",
      "Supported management with administrative tasks and customer service queries."

    ],
  },
];



const projects = [
  {
    name: "Resumind",
    description:
      "A web application built with React, React Router, and Puter.js that streamlines the hiring process by leveraging AI for smarter candidate evaluation. Recruiters can create job listings, upload candidate resumes, and automatically analyze and match them against job requirements. The AI identifies key skills, experience, and qualifications, providing instant assessments of candidate suitability. This project demonstrates expertise in frontend development, AI integration, and workflow automation, showing how technology can optimize recruitment efficiency",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "react-router",
        color: "green-text-gradient",
      },
      {
        name: "puterjs",
        color: "pink-text-gradient",
      },
    ],
    image: resumind,
    source_code_link: "https://ai-resume-analyzer-ats-lusf-dikeledis-projects.vercel.app/",
  },
  {
    name: "Finora",
    description:
      "A full-stack MERN SaaS application designed to simplify personal and business finance management. Built with Node.js, Express, React, MongoDB, and Gemini AI, the platform allows users to track income and expenses, upload CSV files, and scan receipts with AI for automated data extraction. Using MongoDB aggregation, users can filter transactions by date, generate insights, and view interactive data visualizations. The system also generates AI-powered monthly reports with personalized financial insights, highlighting expertise in full-stack development, AI integration, and data analyticsA full-stack MERN SaaS application designed to help individuals take control of their personal finances. Built with Node.js, Express, React, MongoDB, and Gemini AI, the platform enables users to track income and expenses, upload CSV files, and scan receipts with AI for automated data entry. Using MongoDB aggregation, users can filter transactions by date, gain insights, and explore interactive data visualizations. The system also generates AI-powered monthly reports with personalized financial recommendations, showcasing expertise in full-stack development, AI integration, and data analytics while addressing real-world personal finance needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
    ],
    image: finora,
    source_code_link: "https://github.com/",
  },
  {
    name: "QuickGpt",
    description:
      "A full-stack AI-powered chatbot built with the MERN stack (MongoDB, Express, React, Node.js), the OpenAI API, and ImageKit. Inspired by modern conversational AI systems such as ChatGPT and Google Gemini, the platform enables users to interact with an intelligent chatbot capable of generating text, answering queries, and managing media content. It also integrates Stripe payments, allowing users to purchase credits for chatbot usage. This project demonstrates expertise in AI integration, payment processing, full-stack development, and scalable architecture, while also highlighting skills in real-time interaction and secure API usage.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "stripe",
        color: "green-text-gradient",
      },
      {
        name: "mongodb",
        color: "pink-text-gradient",
      },
    ],
    image: quickgpt,
    source_code_link: "https://quick-gpt-dikeledis-projects.vercel.app/",
  },
];

export {  technologies, experiences,  projects };
