export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
}

export interface Statistic {
  id: number;
  value: string;
  label: string;
}