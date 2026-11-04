// Photo galleries. Each gallery gets its own page at /portfolio/photo-galleries/<slug>/.
// To add photos: drop WebP files in public/img/portfolio/<slug>/ and list them in `photos`.
// Covers: the current site's gallery tiles, AI-upscaled (OpenAI gpt-image-2 edit) for sharpness. Swap in the original photos when available.
export type Photo = { src: string; alt: string; width: number; height: number };
export type Gallery = { slug: string; title: string; label: string; blurb: string; cover: Photo; photos: Photo[] };

const cover = (slug: string, alt: string): Photo => ({ src: `/img/portfolio/${slug}.webp`, alt, width: 1200, height: 800 });

export const galleries: Gallery[] = [
  {
    slug: 'kitchen',
    title: 'Kitchen Remodels',
    label: 'Kitchen',
    blurb: 'Islands, custom cabinetry, stone counters and better light.',
    cover: cover('kitchen', 'Remodeled white kitchen with a long island, pendant lights, skylights and stainless built-in refrigerators'),
    photos: [],
  },
  {
    slug: 'bathroom',
    title: 'Bathroom Remodels',
    label: 'Bathroom',
    blurb: 'Walk-in showers, floating vanities and lit mirrors.',
    cover: cover('bathroom', 'Remodeled bathroom with an oak floating vanity, backlit mirror and glass shower door'),
    photos: [],
  },
  {
    slug: 'addition-exterior',
    title: 'Additions & Exteriors',
    label: 'Addition / Exterior',
    blurb: 'Room additions, new facades and outdoor living.',
    cover: cover('addition', 'Modern home with a rear addition, wide glass walls, a wood deck and a lit pool at dusk'),
    photos: [],
  },
  {
    slug: 'full-house-remodel',
    title: 'Full House Remodels',
    label: 'Full House Remodel',
    blurb: 'Whole-home transformations, inside and out.',
    cover: cover('full-home', 'Two-story modern home after a full remodel, with a dark garage door, black windows and a new lawn'),
    photos: [],
  },
];

// Every gallery shows its cover first, then the rest of its photos.
export const allPhotos = (g: Gallery) => [g.cover, ...g.photos];
