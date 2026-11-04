// Single source of truth for business facts. Edit here, not in pages.
export const site = {
  name: 'Rose Remodeling & Design',
  legalName: 'Rose Remodeling & Design Inc.',
  url: 'https://roseremodelinganddesign.com',
  phoneDisplay: '(510) 402-7165',
  phoneTel: '+15104027165',
  email: 'Adir@RoseRemodelingAndDesign.com',
  license: 'CA Lic. #1103851',
  licenseNumber: '1103851',
  city: 'Sunnyvale',
  region: 'CA',
  // TODO: confirm the real service-area list with the owner.
  areaServed: ['Sunnyvale', 'San Jose', 'Santa Clara', 'Mountain View', 'Palo Alto', 'Burlingame', 'Newark', 'Pleasanton'],
  rating: { value: '5.0', count: 50 },
  // Set to a form endpoint (Formspree, Netlify, etc.). Empty = opens the visitor's email app.
  formAction: '',
};

export const services = [
  { name: 'Kitchen Remodeling', icon: 'cabinet', img: '/img/kitchen.svg', pos: '50% 84%', blurb: 'Layouts that work for how your family cooks and gathers, with custom cabinets, stone counters and better light.', bullets: ['Island, L-shaped and galley layouts', 'Cabinets, counters and appliances', 'Plumbing, electrical and permits'] },
  { name: 'Bathroom Remodeling', icon: 'bath', img: '/img/bathroom.svg', pos: '50% 74%', blurb: 'From a quick refresh to a spa-like primary bath, waterproofed and vented to code before the first tile.', bullets: ['Walk-in and curbless showers', 'Vanities, tile and fixtures', 'Waterproofing and ventilation'] },
  { name: 'Full Home Remodeling', icon: 'roller', blurb: 'Open up and modernize every room on one schedule, with one project manager.', bullets: ['Open floor plans', 'Electrical, plumbing and HVAC', 'Floors, windows and finishes'] },
  { name: 'ADU Construction', icon: 'house', img: '/img/backyard.svg', pos: '50% 50%', blurb: 'Backyard units and garage conversions for family or rental income, permits included.', bullets: ['Detached and attached ADUs', 'Garage conversions', 'Plans, permits and utilities'] },
  { name: 'Room Additions', icon: 'house-plus', blurb: 'More space that looks like it was always part of the house.', bullets: ['Ground-floor and second-story', 'Foundations, framing and roofing', 'Structural engineering'] },
  { name: 'New Home Construction', icon: 'layers', blurb: 'Ground-up homes, designed, permitted and built by one team.', bullets: ['Design and 3D renderings', 'Permits and inspections', 'Full construction management'] },
];

export const steps = [
  { title: 'Consult & Strategize', text: 'We visit, measure, listen to what you want and send a clear written proposal.' },
  { title: 'Design & Curate', text: 'See it in 3D renderings, choose materials, and we handle the permits.' },
  { title: 'Build & Manage', text: 'A clean job site, daily updates from your project manager, finished on schedule.' },
];

export const projects = [
  { title: 'Two-bathroom remodel', place: 'Burlingame' },
  { title: 'Closet & bathroom', place: 'Newark' },
  { title: 'Glass & front doors', place: 'Pleasanton' },
];

export const reviews = [
  { quote: 'Finding a dependable contractor isn’t easy, but they made it effortless.', who: 'Rosa V.', job: 'Addition' },
  { quote: 'They fixed rotted wood and plumbing issues with no additional cost.', who: 'Tiffany B.', job: 'Bathroom' },
  { quote: 'Every guest who visits compliments the new design.', who: 'Martinez', job: 'Kitchen & dining' },
];

export const faqs = [
  { q: 'What areas do you serve?', a: `Sunnyvale and the greater Bay Area, including ${site.areaServed.slice(1).join(', ')}.` },
  { q: 'Are you licensed and insured?', a: `Yes. Rose Remodeling & Design Inc. is licensed (${site.license}), insured and bonded.` },
  { q: 'Do you handle HOAs and city permits?', a: 'Yes. We prepare plans, submit to the city and attend inspections.' },
  { q: 'Will I have a dedicated project manager?', a: 'Yes, with daily updates from start to finish.' },
  // TODO: replace with the owner's actual change-order policy.
  { q: 'How do you handle unexpected costs?', a: 'If we find something hidden behind the walls, we show you, explain the options and get your written approval before any change in price.' },
];
