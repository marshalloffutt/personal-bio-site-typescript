export interface ProjectDetails {
  id: number;
  name: string;
  description: string;
  technologies: string;
  isActive: boolean;
  githubUrl: string;
  url: string;
  imageUrl: string;
}

export interface ProjectsCollection {
  projects: ProjectDetails[];
}

export interface TechnologyDetails {
  id: number;
  name: string;
  class: string;
}
