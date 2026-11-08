import type { Category } from './data/objects';

export type Lang = 'en' | 'ru' | 'zh';

/** "раз" / "раза" agreement for a formatted Russian number. */
function raz(x: string) {
  if (/[а-я·]/.test(x)) return 'раз';
  if (/[,.]/.test(x)) return 'раза';
  const n = parseInt(x.replace(/\D/g, '').slice(-2), 10);
  const d = n % 10;
  return d >= 2 && d <= 4 && (n < 12 || n > 14) ? 'раза' : 'раз';
}

export const STRINGS = {
  en: {
    title: 'Size of Space',
    tagline: 'From a tiny asteroid to the observable universe',
    start: 'Scroll, swipe or press → to travel',
    diameter: 'Diameter',
    compared: 'Compared to Earth',
    distance: 'Distance from Earth',
    prevRatio: (x: string, name: string) => `${x}× larger than ${name.replace(/^The /, 'the ')}`,
    tipAu: 'Astronomical unit (AU): the average Earth–Sun distance, about 150 million km.',
    tipLy: 'Light-year: the distance light travels in a year, about 9.46 trillion km (63,000 AU).',
    compare: 'Compare',
    compareTitle: 'Compare any two objects',
    swap: 'Swap',
    cmpWider: (big: string, x: string, small: string) => `${big} is ${x}× wider than ${small.replace(/^The /, 'the ')}`,
    cmpSame: 'Pick two different objects to compare',
    cmpVolume: (n: string, small: string) => `By volume: ≈ ${n} × ${small.replace(/^The /, 'the ')}`,
    cmpZoom: (z: string) => `Magnified ×${z}`,
    youAreHere: 'You are here',
    readMore: 'Read more on Wikipedia',
    clickHint: 'Click for details',
    endTitle: 'The edge of everything we can see',
    endText: 'You just zoomed across 24 orders of magnitude, from an asteroid smaller than a city block to the whole observable universe.',
    restart: 'Back to the start',
    star: 'Star on GitHub',
    sound: 'Sound',
    scale: 'Scale',
    close: 'Close',
    times: '×',
    earths: (x: string) => `${x} Earths across`,
    smallerThanEarth: (x: string) => `${x} of Earth's diameter`,
    units: {
      m: 'm', km: 'km', mkm: 'million km', bkm: 'billion km', au: 'AU', ly: 'light-years',
      mly: 'million light-years', bly: 'billion light-years',
    },
    cat: {
      asteroid: 'Asteroid', comet: 'Comet', moon: 'Moon', dwarf: 'Dwarf planet', planet: 'Planet',
      remnant: 'Stellar remnant', star: 'Star', blackhole: 'Black hole', system: 'Solar System',
      nebula: 'Nebula', cluster: 'Star cluster', region: 'Galactic region', galaxy: 'Galaxy',
      galaxyGroup: 'Galaxy group', structure: 'Large-scale structure', universe: 'Universe',
    } satisfies Record<Category, string>,
  },
  ru: {
    title: 'Размеры космоса',
    tagline: 'От крошечного астероида до наблюдаемой Вселенной',
    start: 'Листайте, свайпайте или нажмите →',
    diameter: 'Диаметр',
    compared: 'В сравнении с Землёй',
    distance: 'Расстояние от Земли',
    prevRatio: (x: string, name: string) => `В ${x} ${raz(x)} больше, чем ${name}`,
    tipAu: 'Астрономическая единица (а. е.): среднее расстояние от Земли до Солнца, около 150 млн км.',
    tipLy: 'Световой год: расстояние, которое свет проходит за год, около 9,46 трлн км (63 000 а. е.).',
    compare: 'Сравнить',
    compareTitle: 'Сравните любые два объекта',
    swap: 'Поменять местами',
    cmpWider: (big: string, x: string, small: string) => `${big} больше, чем ${small}, в ${x} ${raz(x)} по диаметру`,
    cmpSame: 'Выберите два разных объекта',
    cmpVolume: (n: string, small: string) => `По объёму: ≈ ${n} × ${small}`,
    cmpZoom: (z: string) => `Увеличено ×${z}`,
    youAreHere: 'Вы здесь',
    readMore: 'Подробнее в Википедии (англ.)',
    clickHint: 'Нажмите, чтобы узнать больше',
    endTitle: 'Граница всего, что мы можем увидеть',
    endText: 'Вы только что пролетели 24 порядка величины: от астероида меньше городского квартала до всей наблюдаемой Вселенной.',
    restart: 'Вернуться к началу',
    star: 'Звезда на GitHub',
    sound: 'Звук',
    scale: 'Масштаб',
    close: 'Закрыть',
    times: '×',
    earths: (x: string) => `${x} диаметров Земли`,
    smallerThanEarth: (x: string) => `${x} диаметра Земли`,
    units: {
      m: 'м', km: 'км', mkm: 'млн км', bkm: 'млрд км', au: 'а. е.', ly: 'св. лет',
      mly: 'млн св. лет', bly: 'млрд св. лет',
    },
    cat: {
      asteroid: 'Астероид', comet: 'Комета', moon: 'Спутник', dwarf: 'Карликовая планета', planet: 'Планета',
      remnant: 'Остаток звезды', star: 'Звезда', blackhole: 'Чёрная дыра', system: 'Солнечная система',
      nebula: 'Туманность', cluster: 'Звёздное скопление', region: 'Область Галактики', galaxy: 'Галактика',
      galaxyGroup: 'Группа галактик', structure: 'Крупномасштабная структура', universe: 'Вселенная',
    } satisfies Record<Category, string>,
  },
  zh: {
    title: '宇宙的尺度',
    tagline: '从一颗小行星到可观测宇宙',
    start: '滚动、滑动或按 → 开始旅程',
    diameter: '直径',
    compared: '与地球相比',
    distance: '距地球的距离',
    prevRatio: (x: string, name: string) => `${name} 的 ${x} 倍`,
    tipAu: '天文单位（AU）：地球到太阳的平均距离，约 1.5 亿公里。',
    tipLy: '光年：光在一年内走过的距离，约 9.46 万亿公里（6.3 万 AU）。',
    compare: '对比',
    compareTitle: '对比任意两个天体',
    swap: '交换',
    cmpWider: (big: string, x: string, small: string) => `${big} 是 ${small} 的 ${x} 倍宽`,
    cmpSame: '请选择两个不同的天体进行对比',
    cmpVolume: (n: string, small: string) => `体积约为 ${small} 的 ${n} 倍`,
    cmpZoom: (z: string) => `放大 ×${z}`,
    youAreHere: '你在这里',
    readMore: '在维基百科上了解更多',
    clickHint: '点击查看详情',
    endTitle: '我们能看见的一切的边界',
    endText: '你刚刚跨越了 24 个数量级：从一颗比街区还小的小行星，直到整个可观测宇宙。',
    restart: '回到起点',
    star: '在 GitHub 上点星',
    sound: '声音',
    scale: '比例尺',
    close: '关闭',
    times: '×',
    earths: (x: string) => `${x} 个地球并排`,
    smallerThanEarth: (x: string) => `地球直径的 ${x}`,
    units: {
      m: '米', km: '公里', mkm: '百万公里', bkm: '十亿公里', au: 'AU', ly: '光年',
      mly: '百万光年', bly: '十亿光年',
    },
    cat: {
      asteroid: '小行星', comet: '彗星', moon: '卫星', dwarf: '矮行星', planet: '行星',
      remnant: '恒星残骸', star: '恒星', blackhole: '黑洞', system: '太阳系',
      nebula: '星云', cluster: '星团', region: '星系区域', galaxy: '星系',
      galaxyGroup: '星系群', structure: '大尺度结构', universe: '宇宙',
    } satisfies Record<Category, string>,
  },
};

export type Strings = (typeof STRINGS)['en'];

export function detectLang(): Lang {
  const q = new URLSearchParams(location.search).get('lang');
  if (q === 'en' || q === 'ru' || q === 'zh') return q;
  try {
    const saved = localStorage.getItem('sos-lang');
    if (saved === 'en' || saved === 'ru' || saved === 'zh') return saved;
  } catch { /* storage unavailable */ }
  const nav = (navigator.languages?.[0] ?? navigator.language ?? 'en').toLowerCase();
  if (/^(ru|uk|be|kk)/.test(nav)) return 'ru';
  if (/^zh/.test(nav)) return 'zh';
  return 'en';
}
