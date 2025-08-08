
import type { Project, SkillCategory, CareerMaterial } from './types';
import { GithubIcon, LinkedinIcon, DocumentTextIcon } from './components/icons/Icons';

export const PERSONAL_INFO = {
  name: "Andani Mapholi",
  title: "IT Graduate | Network Management | Aspiring IT Support & Cloud Professional | Eager to Learn & Grow in Tech",
  bio: "Dedicated and detail-oriented IT graduate specializing in Network Management with a strong foundation in network administration, system support, and troubleshooting. Skilled in configuring, managing, and maintaining network infrastructure, as well as operating systems (Windows & Linux), open-source systems, and database administration. Passionate about problem-solving and optimizing IT operations.",
  brandingStatement: "Building robust and secure IT infrastructures for the future."
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AI Concept Chatbot (Edu AI)",
    description: "An interactive educational chatbot designed as a knowledge assistant for AI fundamentals. Built with HTML, CSS, and JavaScript, and powered by the Google Gemini API, it provides conversational learning experiences.",
    imageUrl: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?q=80&w=2070&auto=format&fit=crop",
    tags: ["Chatbot", "Google Gemini API", "NLP", "HTML/CSS", "JavaScript", "Education Tech"],
    liveDemoUrl: "https://landbot.online/v3/H-2938620-22HMKMT4CPH71QZT/index.html",
    githubUrl: "https://github.com/AndaniMapholi/Edu-AI",
  },
  {
    id: 2,
    title: "Custom Content Generator (Grade 7 content generator)",
    description: "A specialized tool that leverages the Google Gemini API to produce high-quality educational materials like lesson plans and study guides. It features an intuitive UI built with React, with customizable parameters for content generation.",
    imageUrl: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2127&auto=format&fit=crop",
    tags: ["Generative AI", "Content Generation", "Google Gemini API", "React", "Prompt Engineering", "EdTech"],
    liveDemoUrl: "https://github.com/AndaniMapholi/Educational-Content-Generator",
    githubUrl: "https://github.com/AndaniMapholi/Educational-Content-Generator",
  },
  {
    id: 3,
    title: "Safe Space AI",
    description: "Your safety, amplified. Instantly report incidents using your voice, get live video analysis, and connect with a supportive AI chatbot for guidance and a safe space to talk.",
    imageUrl: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    tags: ["Voice Reporting", "Live Video Analysis", "AI Chatbot", "Google Gemini API", "React", "Node.js", "Personal Safety"],
    liveDemoUrl: "https://github.com/AndaniMapholi/Safe-Space-AI",
    githubUrl: "https://github.com/AndaniMapholi/Safe-Space-AI",
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 1,
    name: "Networking & Infrastructure",
    skills: [
        "Network Administration",
        "Network Architecture",
        "Web Server Management",
        "Virtualization",
        "Cloud Computing",
    ],
  },
  {
    id: 2,
    name: "Systems & Security",
    skills: [
        "Operating Systems (Windows, Linux)",
        "Database Administration",
        "SQL Fundamentals",
        "Cybersecurity Basics",
        "IT Support & Troubleshooting",
    ],
  },
  {
    id: 3,
    name: "Development & Management",
    skills: [
        "Web Development (HTML, CSS, JS)",
        "IT Project Management",
        "Microsoft 365 Suite",
        "Critical thinking & Problem-Solving",
        "Teamwork & Adaptability",
    ],
  },
];

export const CAREER_MATERIALS: CareerMaterial[] = [
    {
        id: 1,
        title: "Download Resume",
        description: "A detailed summary of my skills and qualifications available for you to download.",
        linkUrl: "https://capeitinitiative-my.sharepoint.com/:b:/g/personal/andani_mapholi_capaciti_org_za/EeV0TL6QU3BPkSqUskcs_AgBTObgHaiZwUZbsOpkHN31uA?e=QcScC2",
        linkText: "Download PDF",
        icon: DocumentTextIcon,
    },
    {
        id: 2,
        title: "LinkedIn Profile",
        description: "My professional network, where I share insights and connect with fellow professionals in the IT industry.",
        linkUrl: "https://www.linkedin.com/in/andani-mapholi-6b4101282",
        linkText: "View LinkedIn Profile",
        icon: LinkedinIcon,
    },
     {
        id: 3,
        title: "GitHub Profile",
        description: "A showcase of my technical projects, code experiments, and contributions.",
        linkUrl: "https://github.com/AndaniMapholi",
        linkText: "Explore GitHub",
        icon: GithubIcon,
    }
];

export const SOCIAL_LINKS = {
    github: "https://github.com/AndaniMapholi",
    linkedin: "https://www.linkedin.com/in/andani-mapholi-6b4101282",
    email: "andanimapholi08@gmail.com"
};

export const CONTEXT_FOR_AI = `
You are a friendly, professional, and helpful AI assistant for Andani Mapholi.
Your goal is to answer questions from potential recruiters, hiring managers, and collaborators based on the information provided below.
You must answer exclusively from this context. If a question is outside this context, politely state that you can only answer questions about Andani's professional profile. For questions about work experience or education, please refer the user to Andani's resume, which can be downloaded from the site.
Do not invent information. Be concise and helpful.

Here is the information about Andani Mapholi:

**Personal Information:**
- Name: ${PERSONAL_INFO.name}
- Title: ${PERSONAL_INFO.title}
- Bio: ${PERSONAL_INFO.bio}
- Branding Statement: "${PERSONAL_INFO.brandingStatement}"
- Contact Email: ${SOCIAL_LINKS.email}
- LinkedIn: ${SOCIAL_LINKS.linkedin}
- GitHub: ${SOCIAL_LINKS.github}

**Skills:**
${SKILL_CATEGORIES.map(category => `
- ${category.name}:
  - ${category.skills.join('\n  - ')}
`).join('')}

**Projects:**
${PROJECTS.map(project => `
- Project: ${project.title}
  - Description: ${project.description}
  - Technologies: ${project.tags.join(', ')}
  - Live Demo: ${project.liveDemoUrl || 'Not available'}
  - Source Code: ${project.githubUrl || 'Not available'}
`).join('')}

**Career & Downloads:**
- A downloadable PDF of the resume is available.
- LinkedIn Profile: ${SOCIAL_LINKS.linkedin}
- GitHub Profile: ${SOCIAL_LINKS.github}
`;
