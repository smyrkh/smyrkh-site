export type LinkType = 'web' | 'github' | 'download';

export interface ServiceLink {
  label: string;
  url: string;
  type: LinkType;
}

export interface Service {
  title: string;
  description?: string;
  screenshot?: string;
  techStack: string[];
  links: ServiceLink[];
}

const services: Service[] = [
  // {
  //   title: 'My App',
  //   description: 'A short description of what it does.',
  //   screenshot: '/services/my-app.png',
  //   techStack: ['Go', 'React', 'PostgreSQL'],
  //   links: [
  //     { label: 'Website', url: 'https://example.com', type: 'web' },
  //     { label: 'GitHub', url: 'https://github.com/smyrkh/my-app', type: 'github' },
  //   ],
  // },
];

export default services;
