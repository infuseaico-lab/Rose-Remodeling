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

// The six promises from the current site.
export const promises = [
  { title: 'Honest Communication', text: 'No hidden costs or silent treatments. A dedicated project manager keeps you informed every single day.' },
  { title: 'Structural Integrity', text: 'We don’t cover up problems; we fix them. Our “strong foundation” approach keeps your remodel safe, compliant and durable.' },
  { title: 'Licensed Experts', text: 'Fully licensed, insured and bonded, with a team that knows local building codes in Sunnyvale and the Bay Area.' },
  { title: 'Timely Delivery', text: 'We respect your time and your schedule. Our workflow is built to get you back into your home on time.' },
  { title: 'Clean Job Sites', text: 'Tidy crews and protective barriers that keep dust and disruption to a minimum.' },
  { title: 'Design-Build Harmony', text: 'No friction between designers and builders. One team handles everything from 3D renderings to construction.' },
];

// Vimeo project videos from the current site.
export const videos = [
  { id: '1147816134', title: 'Meet Rose Remodeling & Design', place: 'Bay Area', length: '1:07' },
  { id: '1012134954', title: 'Two-bathroom remodel', place: 'Burlingame', length: '0:52' },
  { id: '1009985487', title: 'Closet & bathroom', place: 'Newark', length: '0:39' },
  { id: '1012129446', title: 'Two glass doors & front door', place: 'Pleasanton', length: '0:50' },
];

export const projects = [
  { title: 'Two-bathroom remodel', place: 'Burlingame' },
  { title: 'Closet & bathroom', place: 'Newark' },
  { title: 'Glass & front doors', place: 'Pleasanton' },
];

// Review platforms and excerpts, transcribed from the widgets on the current site.
export const platforms = [
  { key: 'google', name: 'Google', label: 'Excellent', count: 50 },
  { key: 'yelp', name: 'Yelp', label: 'Excellent', count: 17 },
  { key: 'thumbtack', name: 'Thumbtack', label: 'Excellent', count: 39 },
  { key: 'homeadvisor', name: 'HomeAdvisor', label: '5.0 rating', count: 0 },
];

export const reviews = [
  { platform: 'google', who: 'Terrance Jackson', when: '1 year ago', quote: 'We love how our home renovation turned out. Adir was easy to work with, very responsive, and always kept things moving smoothly.' },
  { platform: 'thumbtack', who: 'Darrell B.', when: '12 months ago', quote: 'We were lucky to have Adir guide us through our remodeling project. His design sense, patience, and dedication made all the difference.' },
  { platform: 'yelp', who: 'Saurabh M.', when: '2 years ago', quote: 'We contacted Rose Remodeling for our bathroom remodel. Adir was very prompt and he provided us with some great designs.' },
  { platform: 'google', who: 'Shirish Gajera', when: '1 year ago', quote: 'Highly recommend Rose Remodeling and Adir! We converted one full bathroom into two…' },
  { platform: 'thumbtack', who: 'Martinez', when: '12 months ago', quote: 'We worked with Adir to remodel our kitchen and dining area, and we’re thrilled with the transformation. He provided expert advice on layout and materials.' },
  { platform: 'yelp', who: 'Ritika B.', when: '2 years ago', quote: 'We finalized Rose Remodeling after talking to four other contractors…' },
  { platform: 'google', who: 'Tracy Kim', when: '1 year ago', quote: 'The project turned out beautifully… the execution was flawless.' },
  { platform: 'thumbtack', who: 'Lehou J.', when: '12 months ago', quote: 'I can’t say enough good things about Rose Remodeling & Design. They remodeled our master bathroom, and the results are stunning.' },
  { platform: 'yelp', who: 'Saurabh S.', when: '1 year ago', quote: 'Highly recommended!! Adir and his team did a great job in remodeling our master and guest…' },
];

export const faqs = [
  { q: 'What areas do you serve?', a: `Sunnyvale and the greater Bay Area, including ${site.areaServed.slice(1).join(', ')}.` },
  { q: 'Are you licensed and insured?', a: `Yes. Rose Remodeling & Design Inc. is licensed (${site.license}), insured and bonded.` },
  { q: 'Do you handle HOAs and city permits?', a: 'Yes. We prepare plans, submit to the city and attend inspections.' },
  { q: 'Will I have a dedicated project manager?', a: 'Yes, with daily updates from start to finish.' },
  // TODO: replace with the owner's actual change-order policy.
  { q: 'How do you handle unexpected costs?', a: 'If we find something hidden behind the walls, we show you, explain the options and get your written approval before any change in price.' },
];
