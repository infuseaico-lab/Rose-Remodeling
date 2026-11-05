// Video portfolio, titles and cities as provided by Rose. Order here is the order on the page.
export type Video = { platform: 'vimeo' | 'youtube'; id: string; title: string; place?: string };

const raw: [Video['platform'], string, string, string?][] = [
  ['vimeo', '1147816134', 'Rose Remodeling & Design'],
  ['vimeo', '1012134954', '2 Bathroom Remodel', 'Burlingame, CA'],
  ['vimeo', '1009985487', 'Closet & Bathroom', 'Newark, CA'],
  ['vimeo', '1012129446', '2 Glass Doors & Front Door', 'Pleasanton, CA'],
  ['vimeo', '1012136222', 'Bathroom Remodel', 'Union City, CA'],
  ['vimeo', '1012136946', 'Bathroom Remodel', 'San Jose, CA'],
  ['vimeo', '1012129687', '2 Bathrooms Remodel', 'San Jose, CA'],
  ['vimeo', '1012129916', 'Kitchen, Floors & Bathroom', 'San Jose, CA'],
  ['vimeo', '1018378583', 'Kitchen Remodel', 'Fremont, CA'],
  ['vimeo', '1038298627', '2 Bathroom Remodel', 'Cupertino, CA'],
  ['vimeo', '1058406182', '2 Bathrooms Remodel', 'Mountain View, CA'],
  ['vimeo', '1075114490', 'Kitchen Remodel', 'San Jose, CA'],
  ['vimeo', '1097618337', 'Kitchen Remodel', 'Foster City, CA'],
  ['youtube', 'zckL2Q6Gmwc', 'Full Condo Remodel', 'Redwood City, CA'],
  ['youtube', 'Z3DiFeHC1ts', 'Kitchen Addition + Landscaping', 'Castro Valley, CA'],
  ['youtube', 'lO2Y9B1ZmKE', 'Master Bathroom Remodel', 'Mountain House, CA'],
  ['vimeo', '1175096030', 'Full House Remodel', 'Fremont, CA'],
];

export const videoPortfolio: Video[] = raw.map(([platform, id, title, place]) => ({ platform, id, title, place }));

export const embedUrl = (v: Video) =>
  v.platform === 'vimeo'
    ? `https://player.vimeo.com/video/${v.id}?badge=0&autopause=0&player_id=0&app_id=58479`
    : `https://www.youtube-nocookie.com/embed/${v.id}?rel=0`;
export const watchUrl = (v: Video) => (v.platform === 'vimeo' ? `https://vimeo.com/${v.id}` : `https://www.youtube.com/watch?v=${v.id}`);
