import { services } from './site';

export const slug = (t: string) => 'svc-' + t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-$/, '');

type Link = { href: string; label: string; icon?: string };
type Item = Link | { label: string; id: string; items: Link[] };

// Links use "/#section" so they work from every page.
export const mainNav: Item[] = [
  {
    label: 'Services',
    id: 'nav-services',
    items: [
      ...services.map((s) => ({ href: `/#${slug(s.name)}`, label: s.name, icon: s.icon })),
      { href: '/#services', label: 'All Services', icon: 'grid' },
    ],
  },
  { href: '/#process', label: 'Process' },
  { href: '/#promise', label: 'Our Promise' },
  {
    label: 'Portfolio',
    id: 'nav-portfolio',
    items: [
      { href: '/portfolio/', label: 'Portfolio Overview', icon: 'layers' },
      { href: '/portfolio/photo-galleries/', label: 'Photo Galleries', icon: 'image' },
      { href: '/#work', label: 'Project Videos', icon: 'play' },
    ],
  },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/#faq', label: 'FAQ' },
];
