export type LinkType = 'web' | 'github' | 'download';

export interface ProjectLink {
  label: string;
  url: string;
  type: LinkType;
}

export interface Project {
  title: string;
  description?: string;
  screenshot?: string;
  techStack: string[];
  links: ProjectLink[];
}

const projects: Project[] = [
  // {
  //   title: 'My App',
  //   description: 'A short description of what it does.',
  //   screenshot: '/projects/my-app.png',
  //   techStack: ['Go', 'React', 'PostgreSQL'],
  //   links: [
  //     { label: 'Website', url: 'https://example.com', type: 'web' },
  //     { label: 'GitHub', url: 'https://github.com/smyrkh/my-app', type: 'github' },
  //   ],
  // },
];

export default projects;
