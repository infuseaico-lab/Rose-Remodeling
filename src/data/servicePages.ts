import { services } from './site';

// One page per service at /services/<slug>/. Copy is general on purpose: no prices or timelines
// we can't stand behind. Add project-specific details here as Rose provides them.
type Extra = { slug: string; title: string; intro: string; includes: string[]; gallery?: string; head: string };

const extra: Record<string, Extra> = {
  'Kitchen Remodeling': {
    slug: 'kitchen-remodeling',
    head: '/img/portfolio/kitchen/kitchen-01',
    title: 'Kitchen Remodeling in Sunnyvale & the Bay Area',
    intro: 'A kitchen that fits how your family cooks, gathers and stores things. We plan the layout with you, show it in 3D, handle permits and build it with one crew and one project manager.',
    includes: ['Layout design and 3D renderings', 'Custom and semi-custom cabinetry', 'Quartz, stone and solid-surface counters', 'Islands, pantries and built-in storage', 'Plumbing, electrical and lighting upgrades', 'Appliance planning and installation', 'Flooring, backsplash and finishes', 'City permits and inspections'],
    gallery: 'kitchen',
  },
  'Bathroom Remodeling': {
    slug: 'bathroom-remodeling',
    head: '/img/hero-bath',
    title: 'Bathroom Remodeling in Sunnyvale & the Bay Area',
    intro: 'From a hall bath refresh to a spa-like primary suite. We waterproof, re-plumb and vent to code before the first tile goes up, so the bathroom looks good and lasts.',
    includes: ['Walk-in and curbless showers', 'Tub-to-shower conversions', 'Floating and custom vanities', 'Tile floors, walls and niches', 'Waterproofing and ventilation', 'Plumbing fixtures and lighting', 'Accessibility upgrades', 'City permits and inspections'],
    gallery: 'bathroom',
  },
  'Full Home Remodeling': {
    slug: 'full-home-remodeling',
    head: '/img/hero-living',
    title: 'Full Home Remodeling in Sunnyvale & the Bay Area',
    intro: 'Kitchen, baths, floors and systems in one project, on one schedule, with one project manager. Ideal for homes that need more than a single room.',
    includes: ['Open floor plans and new layouts', 'Kitchens and bathrooms', 'Electrical, plumbing and HVAC upgrades', 'Windows, doors and flooring', 'Interior finishes and paint', 'Structural changes with engineering', 'Design, permits and inspections', 'One schedule and one contract'],
    gallery: 'full-house-remodel',
  },
  'ADU Construction': {
    slug: 'adu-construction',
    head: '/img/head-adu',
    title: 'ADU Construction in Sunnyvale & the Bay Area',
    intro: 'A backyard unit or garage conversion with its own kitchen, bath and entrance: room for family or rental income, designed and permitted under California ADU rules.',
    includes: ['Detached backyard ADUs', 'Attached ADUs', 'Garage conversions and junior ADUs', 'Site planning and design', 'Utility connections', 'Kitchens and bathrooms', 'Permits, plans and inspections', 'Landscaping and access paths'],
  },
  'Room Additions': {
    slug: 'room-additions',
    head: '/img/head-addition',
    title: 'Room Additions in Sunnyvale & the Bay Area',
    intro: 'More room without moving: a primary suite, a bigger family room or a second story, built to match the house you already have.',
    includes: ['Ground-floor additions', 'Second-story additions', 'Primary suites and family rooms', 'Foundations, framing and roofing', 'Structural engineering', 'Matching exterior finishes', 'Electrical, plumbing and HVAC', 'City permits and inspections'],
    gallery: 'addition-exterior',
  },
  'New Home Construction': {
    slug: 'new-home-construction',
    head: '/img/head-new-home',
    title: 'New Home Construction in Sunnyvale & the Bay Area',
    intro: 'Ground-up homes, designed, permitted and built by one team, from the first sketch to the final walkthrough.',
    includes: ['Design and 3D renderings', 'Plans, engineering and permits', 'Site work and foundations', 'Framing, roofing and exteriors', 'Mechanical, electrical and plumbing', 'Kitchens, baths and finishes', 'Full construction management', 'Final inspections and walkthrough'],
  },
};

export const servicePages = services.map((s) => ({ ...s, ...extra[s.name] }));
export type ServicePage = (typeof servicePages)[number];
export const serviceHref = (name: string) => `/services/${extra[name].slug}/`;
