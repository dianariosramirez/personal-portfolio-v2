export interface Project {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
  repo: string;
  technologies: string[];
}
