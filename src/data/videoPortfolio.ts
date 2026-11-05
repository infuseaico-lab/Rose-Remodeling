// Video portfolio. The first four have known titles; the rest use numbered titles until real ones are provided.
export type Video = { platform: 'vimeo' | 'youtube'; id: string; title: string; place?: string };

const raw: [Video['platform'], string, string?, string?][] = [
  ['vimeo', '1147816134', 'Home remodel walkthrough with Adir', 'Fremont'],
  ['vimeo', '1012134954', 'Two-bathroom remodel', 'Burlingame'],
  ['vimeo', '1009985487', 'Closet & bathroom', 'Newark'],
  ['vimeo', '1012129446', 'Two glass doors & front door', 'Pleasanton'],
  ['vimeo', '1012136222'], ['vimeo', '1012136946'], ['vimeo', '1012129687'], ['vimeo', '1012129916'],
  ['vimeo', '1018378583'], ['vimeo', '1038298627'], ['vimeo', '1058406182'], ['vimeo', '1075114490'],
  ['vimeo', '1097618337'], ['vimeo', '1175096030'],
  ['youtube', 'zckL2Q6Gmwc'], ['youtube', 'Z3DiFeHC1ts'], ['youtube', 'lO2Y9B1ZmKE'],
];

export const videoPortfolio: Video[] = raw.map(([platform, id, title, place], i) => ({ platform, id, title: title ?? `Project video ${i + 1}`, place }));

export const embedUrl = (v: Video) =>
  v.platform === 'vimeo'
    ? `https://player.vimeo.com/video/${v.id}?badge=0&autopause=0&player_id=0&app_id=58479`
    : `https://www.youtube-nocookie.com/embed/${v.id}?rel=0`;
export const watchUrl = (v: Video) => (v.platform === 'vimeo' ? `https://vimeo.com/${v.id}` : `https://www.youtube.com/watch?v=${v.id}`);
