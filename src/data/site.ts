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
  { name: 'Kitchens', blurb: 'Layouts that make sense for your family.', tone: 'green' },
  { name: 'Bathrooms', blurb: 'From refresh to spa-like primary bath.', tone: 'blush' },
  { name: 'Whole home', blurb: 'Open up and modernize every room.', tone: 'green' },
  { name: 'ADUs', blurb: 'Backyard units, permits included.', tone: 'blush' },
  { name: 'Additions', blurb: 'More room that feels original.', tone: 'green' },
  { name: 'New homes', blurb: 'Ground-up construction.', tone: 'blush' },
];

export const steps = [
  { title: 'Free consultation', text: 'We visit, listen and send a clear written proposal.' },
  { title: 'Design & permits', text: 'See it in 3D, choose materials, and we get city approvals.' },
  { title: 'Build & move in', text: 'Tidy crews, daily updates, finished on schedule.' },
];

export const projects = [
  { title: 'Two-bathroom remodel', place: 'Burlingame, CA', after: 'green' },
  { title: 'Closet & bathroom', place: 'Newark, CA', after: 'blush' },
  { title: 'Glass & front doors', place: 'Pleasanton, CA', after: 'green' },
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
