import { services } from './site';

// One page per service at /services/<slug>/. Copy is general on purpose: no prices or timelines
// we can't stand behind. Add project-specific details here as Rose provides them.
type Extra = { slug: string; title: string; intro: string; includes: string[]; gallery?: string; head: string; quoteBg?: string };

const extra: Record<string, Extra> = {
  'Kitchen Remodeling': {
    slug: 'kitchen-remodeling',
    head: '/img/portfolio/kitchen/kitchen-remodel-white-quartz-island-oak-cabinets-01',
    title: 'Kitchen Remodeling in Sunnyvale & the Bay Area',
    intro: 'A kitchen that fits how your family cooks, gathers and stores things. We plan the layout with you, show it in 3D, handle permits and build it with one crew and one project manager.',
    includes: ['Layout & 3D design', 'Custom cabinetry', 'Quartz & stone counters', 'Islands & pantries', 'Plumbing & electrical', 'Lighting & appliances', 'Flooring & backsplash', 'Permits & inspections'],
    gallery: 'kitchen',
  },
  'Bathroom Remodeling': {
    slug: 'bathroom-remodeling',
    head: '/img/hero-bath',
    title: 'Bathroom Remodeling in Sunnyvale & the Bay Area',
    intro: 'From a hall bath refresh to a spa-like primary suite. We waterproof, re-plumb and vent to code before the first tile goes up, so the bathroom looks good and lasts.',
    includes: ['Walk-in & curbless showers', 'Tub-to-shower conversions', 'Floating & custom vanities', 'Tile floors, walls & niches', 'Waterproofing & ventilation', 'Fixtures & lighting', 'Accessibility upgrades', 'Permits & inspections'],
    gallery: 'bathroom',
  },
  'Full Home Remodeling': {
    slug: 'full-home-remodeling',
    head: '/img/hero-living',
    title: 'Full Home Remodeling in Sunnyvale & the Bay Area',
    intro: 'Kitchen, baths, floors and systems in one project, on one schedule, with one project manager. Ideal for homes that need more than a single room.',
    includes: ['Open floor plans', 'Kitchens & bathrooms', 'Electrical, plumbing & HVAC', 'Windows, doors & flooring', 'Interior finishes & paint', 'Structural changes', 'Design & permits', 'One schedule, one contract'],
    gallery: 'full-house-remodel',
  },
  'ADU Construction': {
    slug: 'adu-construction',
    head: '/img/head-adu',
    title: 'ADU Construction in Sunnyvale & the Bay Area',
    intro: 'A backyard unit or garage conversion with its own kitchen, bath and entrance: room for family or rental income, designed and permitted under California ADU rules.',
    includes: ['Detached backyard ADUs', 'Attached ADUs', 'Garage conversions & JADUs', 'Site planning & design', 'Utility connections', 'Kitchens & bathrooms', 'Plans, permits & inspections', 'Landscaping & paths'],
  },
  'Room Additions': {
    slug: 'room-additions',
    head: '/img/head-addition',
    title: 'Room Additions in Sunnyvale & the Bay Area',
    intro: 'More room without moving: a primary suite, a bigger family room or a second story, built to match the house you already have.',
    includes: ['Ground-floor additions', 'Second-story additions', 'Suites & family rooms', 'Foundations & framing', 'Structural engineering', 'Matching exterior finishes', 'Electrical, plumbing & HVAC', 'Permits & inspections'],
    gallery: 'addition-exterior',
  },
  'New Home Construction': {
    slug: 'new-home-construction',
    quoteBg: '/img/new-home-modern-house-dusk',
    head: '/img/head-new-home',
    title: 'New Home Construction in Sunnyvale & the Bay Area',
    intro: 'Ground-up homes, designed, permitted and built by one team, from the first sketch to the final walkthrough.',
    includes: ['Design & 3D renderings', 'Plans, engineering & permits', 'Site work & foundations', 'Framing, roofing & exteriors', 'Electrical, plumbing & HVAC', 'Kitchens, baths & finishes', 'Construction management', 'Final walkthrough'],
  },
};

export const servicePages = services.map((s) => ({ ...s, ...extra[s.name] }));
export type ServicePage = (typeof servicePages)[number];
export const serviceHref = (name: string) => `/services/${extra[name].slug}/`;
