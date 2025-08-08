export interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveDemoUrl?: string;
  githubUrl?: string;
}

export interface SkillCategory {
  id: number;
  name: string;
  skills: string[];
}

export interface CareerMaterial {
    id: number;
    title:string;
    description: string;
    linkUrl?: string;
    linkText: string;
    icon: React.FC<{className?: string}>;
    isDownloadable?: boolean;
}
