// Photo galleries. Each gallery gets its own page at /portfolio/photo-galleries/<slug>/.
// To add photos: drop WebP files in public/img/portfolio/<slug>/ and list them in `photos`.
// Covers: the current site's gallery tiles, AI-upscaled (OpenAI gpt-image-2 edit) for sharpness. Swap in the original photos when available.
export type Photo = { src: string; alt: string; width: number; height: number; thumb?: string };
export type Gallery = { slug: string; title: string; label: string; blurb: string; cover: Photo; photos: Photo[] };

const cover = (slug: string, alt: string): Photo => ({ src: `/img/portfolio/${slug}.webp`, alt, width: 1200, height: 800 });


// Kitchen photos from Rose projects (stock photos in the upload were left out). Each has a 1600px file and an -800 thumbnail.
const kitchenFiles: [string, number, number][] = [
  ['kitchen-01', 1600, 1067],
  ['kitchen-02', 1600, 1067],
  ['kitchen-03', 1600, 1067],
  ['kitchen-04', 1600, 1067],
  ['kitchen-05', 1600, 1067],
  ['kitchen-06', 1600, 1068],
  ['kitchen-07', 1600, 1068],
  ['kitchen-08', 1600, 1066],
  ['kitchen-09', 1280, 672],
  ['kitchen-10', 819, 640],
  ['kitchen-11', 1600, 1067],
  ['kitchen-12', 1067, 1600],
  ['kitchen-13', 511, 384],
  ['kitchen-14', 1067, 1600],
  ['kitchen-15', 1067, 1600],
  ['kitchen-16', 1600, 1067],
  ['kitchen-17', 1200, 799],
  ['kitchen-18', 1600, 1067],
  ['kitchen-19', 1600, 1067],
  ['kitchen-20', 1600, 1067],
  ['kitchen-21', 1600, 1067],
  ['kitchen-22', 1067, 1600],
  ['kitchen-23', 819, 819],
  ['kitchen-24', 1600, 1067],
  ['kitchen-25', 1067, 1600],
  ['kitchen-26', 1600, 1067],
  ['kitchen-27', 1600, 1067],
  ['kitchen-28', 800, 600],
  ['kitchen-29', 1600, 1067],
  ['kitchen-30', 1068, 1600],
  ['kitchen-31', 1366, 1024],
  ['kitchen-32', 1068, 1600],
  ['kitchen-33', 1600, 1597],
  ['kitchen-34', 1068, 1600],
  ['kitchen-35', 1068, 1600],
  ['kitchen-36', 1068, 1600],
  ['kitchen-37', 1067, 1600],
  ['kitchen-38', 1600, 1068],
  ['kitchen-39', 1600, 1068],
  ['kitchen-40', 1600, 1068],
  ['kitchen-41', 1600, 1068],
  ['kitchen-42', 1600, 1068],
  ['kitchen-43', 1024, 800],
  ['kitchen-44', 1024, 800],
  ['kitchen-45', 1600, 1068],
  ['kitchen-46', 1600, 1068],
  ['kitchen-47', 1600, 1067],
  ['kitchen-48', 1600, 1068],
];
const kitchenPhotos: Photo[] = kitchenFiles.map(([n, w, h], i) => ({
  src: `/img/portfolio/kitchen/${n}.webp`, thumb: `/img/portfolio/kitchen/${n}-800.webp`, width: w, height: h,
  alt: `Kitchen remodel by Rose Remodeling & Design, photo ${i + 1}`,
}));

export const galleries: Gallery[] = [
  {
    slug: 'kitchen',
    title: 'Kitchen Remodels',
    label: 'Kitchen',
    blurb: 'Islands, custom cabinetry, stone counters and better light.',
    cover: { ...kitchenPhotos[0], alt: 'Remodeled kitchen with a white waterfall island, oak cabinets and black pendant lights' },
    photos: kitchenPhotos.slice(1),
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
