// The chain of cosmic objects, ordered from smallest to largest.
// `d` is the diameter in metres (for black holes: the event horizon, for
// orbits: the orbit's diameter). `dist` is an approximate distance from Earth
// in metres, or null when it doesn't apply.

export type Kind =
  | 'asteroid'
  | 'textured'
  | 'rocky'
  | 'earth'
  | 'gas'
  | 'star'
  | 'neutron'
  | 'blackhole'
  | 'orbit'
  | 'bubble'
  | 'shell'
  | 'nebula'
  | 'cluster'
  | 'galaxy'
  | 'group'
  | 'web'
  | 'cmb';

export type Category =
  | 'asteroid'
  | 'comet'
  | 'moon'
  | 'dwarf'
  | 'planet'
  | 'remnant'
  | 'star'
  | 'blackhole'
  | 'system'
  | 'nebula'
  | 'cluster'
  | 'region'
  | 'galaxy'
  | 'galaxyGroup'
  | 'structure'
  | 'universe';

export interface Look {
  /** palette, hex strings */
  c: [string, string, string, string?];
  /** kind-specific parameters */
  p?: [number, number, number, number];
  q?: [number, number, number, number];
  /** normalised orbit radii (kind 'orbit') */
  orbits?: number[];
  /** how far the drawing extends beyond the body, in radii */
  ext?: number;
  seed?: number;
  /** texture files in public/textures (name without .jpg) */
  tex?: string[];
}

export interface L10n {
  en: string;
  ru: string;
  zh: string;
}

export interface SpaceObject {
  id: string;
  d: number;
  kind: Kind;
  cat: Category;
  look: Look;
  name: L10n;
  fact: L10n;
  dist: number | null;
  wiki: string;
}

const KM = 1e3;
const AU = 1.496e11;
const LY = 9.4607e15;
const RSUN = 6.957e8; // solar radius
const sunD = (r: number) => 2 * r * RSUN;

export const OBJECTS: SpaceObject[] = [
  {
    id: 'bennu', d: 490, kind: 'asteroid', cat: 'asteroid', dist: 1.5 * AU, wiki: '101955_Bennu',
    look: { c: ['#3a3633', '#6b645c', '#8d857a'], p: [0.22, 0.6, 0, 0], seed: 3 },
    name: { en: 'Bennu', ru: 'Бенну', zh: '贝努' },
    fact: {
      en: 'A rubble pile shaped like a spinning top. NASA\'s OSIRIS-REx scooped a sample from its surface and brought it back to Earth in 2023.',
      ru: 'Груда обломков в форме юлы. Зонд NASA OSIRIS-REx взял образец грунта с её поверхности и в 2023 году доставил его на Землю.',
      zh: '一颗形如陀螺的碎石堆。NASA 的 OSIRIS-REx 探测器从其表面采集了样本，并于 2023 年带回地球。',
    },
  },
  {
    id: 'ryugu', d: 900, kind: 'asteroid', cat: 'asteroid', dist: 1.2 * AU, wiki: '162173_Ryugu',
    look: { c: ['#2c2a28', '#55504a', '#7a7268'], p: [0.18, 0.9, 0, 0], seed: 11 },
    name: { en: 'Ryugu', ru: 'Рюгу', zh: '龙宫' },
    fact: {
      en: 'One of the darkest objects in the Solar System. Japan\'s Hayabusa2 fired a copper bullet into it to dig up fresh material.',
      ru: 'Один из самых тёмных объектов Солнечной системы. Японский зонд «Хаябуса-2» выстрелил в него медным снарядом, чтобы добыть свежее вещество.',
      zh: '太阳系中最暗的天体之一。日本的“隼鸟 2 号”向它发射了一枚铜弹，以挖取新鲜物质。',
    },
  },
  {
    id: '67p', d: 4.1 * KM, kind: 'asteroid', cat: 'comet', dist: 3 * AU, wiki: '67P/Churyumov–Gerasimenko',
    look: { c: ['#2a2826', '#5e5953', '#9a948b', '#bcd4ff'], p: [0.12, 1.2, 1, 0.6], seed: 27, ext: 1.6 },
    name: { en: 'Comet 67P', ru: 'Комета Чурюмова — Герасименко', zh: '67P彗星' },
    fact: {
      en: 'A "rubber duck" made of two lobes. The Rosetta mission orbited it for two years and landed the Philae probe on it in 2014.',
      ru: '«Резиновая уточка» из двух частей. Миссия «Розетта» два года летала вокруг неё, а в 2014 году посадила на неё модуль «Филы».',
      zh: '一颗由两瓣组成的“橡皮鸭”状彗星。罗塞塔号探测器绕其飞行了两年，并于 2014 年让菲莱着陆器降落其上。',
    },
  },
  {
    id: 'halley', d: 11 * KM, kind: 'asteroid', cat: 'comet', dist: 35 * AU, wiki: 'Halley%27s_Comet',
    look: { c: ['#211f1e', '#4b4640', '#837b70', '#cfe0ff'], p: [0.25, 0.8, 0.8, 1], seed: 41, ext: 1.8 },
    name: { en: 'Halley\'s Comet', ru: 'Комета Галлея', zh: '哈雷彗星' },
    fact: {
      en: 'Visible from Earth every 75–76 years. Its icy nucleus is darker than coal; next return: 2061.',
      ru: 'Видна с Земли раз в 75–76 лет. Её ледяное ядро темнее угля. Следующее возвращение в 2061 году.',
      zh: '每 75–76 年从地球可见一次。其冰核比煤还黑；下一次回归：2061 年。',
    },
  },
  {
    id: 'deimos', d: 12.4 * KM, kind: 'asteroid', cat: 'moon', dist: 1.5 * AU, wiki: 'Deimos_(moon)',
    look: { c: ['#5a4d42', '#8a7a6a', '#b0a08c'], p: [0.12, 0.5, 0, 0], seed: 52 },
    name: { en: 'Deimos', ru: 'Деймос', zh: '火卫二' },
    fact: {
      en: 'The smaller moon of Mars. From the Martian surface it looks like a bright star rather than a moon.',
      ru: 'Меньший спутник Марса. С поверхности Марса он выглядит скорее как яркая звезда, чем как луна.',
      zh: '火星较小的卫星。从火星表面看，它更像一颗亮星而非月亮。',
    },
  },
  {
    id: 'neutron', d: 20 * KM, kind: 'neutron', cat: 'remnant', dist: 1000 * LY, wiki: 'Neutron_star',
    look: { c: ['#cfe3ff', '#ffffff', '#6fa8ff'], p: [1, 0, 0, 1], ext: 4 },
    name: { en: 'Neutron star', ru: 'Нейтронная звезда', zh: '中子星' },
    fact: {
      en: 'More mass than the Sun crushed into a ball the size of a city. A teaspoon of it would weigh about a billion tonnes.',
      ru: 'Масса больше солнечной, сжатая в шар размером с город. Чайная ложка её вещества весила бы около миллиарда тонн.',
      zh: '质量超过太阳，却被压缩成一座城市大小的球体。一茶匙中子星物质约重十亿吨。',
    },
  },
  {
    id: 'phobos', d: 22.5 * KM, kind: 'asteroid', cat: 'moon', dist: 1.5 * AU, wiki: 'Phobos_(moon)',
    look: { c: ['#4a3f37', '#7a6b5d', '#a39484'], p: [0.16, 0.7, 0, 0], seed: 64 },
    name: { en: 'Phobos', ru: 'Фобос', zh: '火卫一' },
    fact: {
      en: 'Mars\'s larger moon is slowly spiralling inward. In ~50 million years it will crash into Mars or break into a ring.',
      ru: 'Больший спутник Марса медленно приближается к планете. Примерно через 50 млн лет он врежется в Марс или распадётся на кольцо.',
      zh: '火星较大的卫星正缓慢向内螺旋。约 5000 万年后，它将撞上火星或碎裂成环。',
    },
  },
  {
    id: 'mathilde', d: 53 * KM, kind: 'asteroid', cat: 'asteroid', dist: 2.6 * AU, wiki: '253_Mathilde',
    look: { c: ['#25221f', '#46413b', '#6e675e'], p: [0.2, 1.4, 0, 0], seed: 77 },
    name: { en: '253 Mathilde', ru: '253 Матильда', zh: '253号小行星梅西尔德' },
    fact: {
      en: 'Covered in giant craters, some almost as wide as the asteroid itself. It rotates once every 17.4 days.',
      ru: 'Покрыта гигантскими кратерами, некоторые почти с сам астероид. Один оборот вокруг оси делает за 17,4 суток.',
      zh: '表面布满巨大的陨石坑，有些几乎和这颗小行星本身一样宽。它每 17.4 天自转一圈。',
    },
  },
  {
    id: 'hyperion', d: 270 * KM, kind: 'asteroid', cat: 'moon', dist: 9.5 * AU, wiki: 'Hyperion_(moon)',
    look: { c: ['#5c5040', '#9a8a70', '#cbbba0'], p: [0.18, 2.4, 0, 0], seed: 88 },
    name: { en: 'Hyperion', ru: 'Гиперион', zh: '土卫七' },
    fact: {
      en: 'A moon of Saturn that looks like a sponge and tumbles chaotically: its rotation is unpredictable.',
      ru: 'Спутник Сатурна, похожий на губку. Он хаотично кувыркается, и его вращение невозможно предсказать.',
      zh: '土星的一颗海绵状卫星，翻滚运动混乱：其自转不可预测。',
    },
  },
  {
    id: 'enceladus', d: 504 * KM, kind: 'textured', cat: 'moon', dist: 9.5 * AU, wiki: 'Enceladus',
    look: { c: ['#ffffff', '#cfe6ff', '#ffffff'], p: [0.6, 0.6, 0, 0], q: [0.03, 0, 0, 0], tex: ['enceladus'] },
    name: { en: 'Enceladus', ru: 'Энцелад', zh: '土卫二' },
    fact: {
      en: 'The most reflective body in the Solar System. Geysers at its south pole spray water from a hidden ocean into space.',
      ru: 'Самое отражающее тело Солнечной системы. Гейзеры на южном полюсе выбрасывают в космос воду из скрытого подлёдного океана.',
      zh: '太阳系中反光最强的天体。其南极的间歇泉将隐藏海洋中的水喷向太空。',
    },
  },
  {
    id: 'vesta', d: 525 * KM, kind: 'textured', cat: 'asteroid', dist: 2.4 * AU, wiki: '4_Vesta',
    look: { c: ['#d2c8bb', '#ffffff', '#ffffff'], p: [1.2, 0.8, 0, 0], q: [0.04, 0, 0, 0], tex: ['vesta'] },
    name: { en: 'Vesta', ru: 'Веста', zh: '灶神星' },
    fact: {
      en: 'The brightest asteroid seen from Earth. A huge crater at its south pole has a central peak twice as tall as Everest.',
      ru: 'Самый яркий астероид на небе Земли. Центральная горка огромного кратера на южном полюсе вдвое выше Эвереста.',
      zh: '从地球看最亮的小行星。其南极巨大陨石坑的中央峰，高度是珠峰的两倍。',
    },
  },
  {
    id: 'ceres', d: 939 * KM, kind: 'rocky', cat: 'dwarf', dist: 2.8 * AU, wiki: 'Ceres_(dwarf_planet)',
    look: { c: ['#4e4b47', '#7e7a74', '#d8d8d4'], p: [0.6, 2.5, 0, 0] },
    name: { en: 'Ceres', ru: 'Церера', zh: '谷神星' },
    fact: {
      en: 'The largest object in the asteroid belt and a dwarf planet. Its bright spots are salt deposits left by briny water.',
      ru: 'Крупнейший объект пояса астероидов и карликовая планета. Её яркие пятна — отложения соли, оставленные солёной водой.',
      zh: '小行星带中最大的天体，也是一颗矮行星。它明亮的斑点是咸水留下的盐沉积。',
    },
  },
  {
    id: 'charon', d: 1212 * KM, kind: 'textured', cat: 'moon', dist: 34 * AU, wiki: 'Charon_(moon)',
    look: { c: ['#dcd2ca', '#ffffff', '#ffffff'], p: [0.8, 0.8, 0, 0], q: [0.02, 0, 0, 0], tex: ['charon'] },
    name: { en: 'Charon', ru: 'Харон', zh: '冥卫一' },
    fact: {
      en: 'Pluto\'s moon is so large that the two orbit a point in empty space between them. Its north pole is stained red.',
      ru: 'Спутник Плутона настолько велик, что оба тела вращаются вокруг точки в пустоте между ними. Северный полюс Харона окрашен в красный.',
      zh: '冥王星的卫星极大，二者绕它们之间的虚空中的一点旋转。它的北极被染成红色。',
    },
  },
  {
    id: 'pluto', d: 2377 * KM, kind: 'textured', cat: 'dwarf', dist: 34 * AU, wiki: 'Pluto',
    look: { c: ['#ffffff', '#8fb0ff', '#ffffff'], p: [0.5, 0.5, 0.35, 0], q: [0.02, 0, 0, 0], ext: 1.04, tex: ['pluto'] },
    name: { en: 'Pluto', ru: 'Плутон', zh: '冥王星' },
    fact: {
      en: 'Home to a heart-shaped plain of nitrogen ice. A year on Pluto lasts 248 Earth years.',
      ru: 'Здесь есть равнина из азотного льда в форме сердца. Год на Плутоне длится 248 земных лет.',
      zh: '拥有由氮冰构成的心形平原。冥王星上的一年相当于 248 个地球年。',
    },
  },
  {
    id: 'europa', d: 3122 * KM, kind: 'textured', cat: 'moon', dist: 5.2 * AU, wiki: 'Europa_(moon)',
    look: { c: ['#eadfcd', '#ffffff', '#ffffff'], p: [0.6, 0.5, 0, 0], q: [0.025, 0, 0, 0], tex: ['europa'] },
    name: { en: 'Europa', ru: 'Европа', zh: '木卫二' },
    fact: {
      en: 'Beneath its cracked ice shell lies an ocean with about twice as much water as all of Earth\'s oceans.',
      ru: 'Под её растрескавшимся ледяным панцирем находится океан, в котором примерно вдвое больше воды, чем во всех океанах Земли.',
      zh: '其破裂的冰壳之下，藏着一片水量约为地球所有海洋两倍的海洋。',
    },
  },
  {
    id: 'moon', d: 3474 * KM, kind: 'textured', cat: 'moon', dist: 384400 * KM, wiki: 'Moon',
    look: { c: ['#ffffff', '#ffffff', '#ffffff'], p: [1.0, 1.0, 0, 0], q: [0.004, 0, 0, 0], seed: 0.0001, tex: ['moon'] },
    name: { en: 'The Moon', ru: 'Луна', zh: '月球' },
    fact: {
      en: 'Drifting away from Earth by 3.8 cm per year. Twelve people have walked on it, the last in 1972.',
      ru: 'Удаляется от Земли на 3,8 см в год. По ней прошли двенадцать человек, последний — в 1972 году.',
      zh: '以每年 3.8 厘米的速度远离地球。已有 12 人在其上行走，最后一位在 1972 年。',
    },
  },
  {
    id: 'io', d: 3643 * KM, kind: 'textured', cat: 'moon', dist: 5.2 * AU, wiki: 'Io_(moon)',
    look: { c: ['#ffffff', '#ffffff', '#ffffff'], p: [0.5, 0.6, 0, 0], q: [0.03, 0, 0, 0], tex: ['io'] },
    name: { en: 'Io', ru: 'Ио', zh: '木卫一' },
    fact: {
      en: 'The most volcanically active world we know, with over 400 active volcanoes heated by Jupiter\'s tides.',
      ru: 'Самый вулканически активный из известных миров: более 400 действующих вулканов, разогретых приливами Юпитера.',
      zh: '我们已知火山活动最剧烈的世界，有 400 多座活火山，由木星的潮汐加热。',
    },
  },
  {
    id: 'mercury', d: 4879 * KM, kind: 'textured', cat: 'planet', dist: 1 * AU, wiki: 'Mercury_(planet)',
    look: { c: ['#ffffff', '#ffffff', '#ffffff'], p: [1.0, 1.0, 0, 0], q: [0.02, 0, 0, 0], tex: ['mercury'] },
    name: { en: 'Mercury', ru: 'Меркурий', zh: '水星' },
    fact: {
      en: 'The smallest planet. Days reach 430 °C and nights drop to −180 °C, yet there is water ice in its polar craters.',
      ru: 'Самая маленькая планета. Днём до 430 °C, ночью до −180 °C, но в полярных кратерах лежит водяной лёд.',
      zh: '最小的行星。白天气温可达 430°C，夜晚降至 −180°C，但极地陨石坑中却有水冰。',
    },
  },
  {
    id: 'titan', d: 5150 * KM, kind: 'gas', cat: 'moon', dist: 9.5 * AU, wiki: 'Titan_(moon)',
    look: { c: ['#c98a3a', '#e0a855', '#a86a2a', '#e8b060'], p: [3, 0.15, 0, 0], q: [0.6, 0, 0, 0], ext: 1.12 },
    name: { en: 'Titan', ru: 'Титан', zh: '土卫六' },
    fact: {
      en: 'Saturn\'s moon with a thick orange atmosphere and lakes of liquid methane. NASA\'s Dragonfly drone is heading there.',
      ru: 'Спутник Сатурна с плотной оранжевой атмосферой и озёрами жидкого метана. Туда летит дрон NASA Dragonfly.',
      zh: '土星的卫星，拥有浓厚的橙色大气和液态甲烷湖泊。NASA 的“蜻蜓”无人机正飞往那里。',
    },
  },
  {
    id: 'ganymede', d: 5268 * KM, kind: 'rocky', cat: 'moon', dist: 5.2 * AU, wiki: 'Ganymede_(moon)',
    look: { c: ['#5a5048', '#9a9088', '#cfc8bd'], p: [0.5, 1.4, 0.3, 0.4] },
    name: { en: 'Ganymede', ru: 'Ганимед', zh: '木卫三' },
    fact: {
      en: 'The largest moon in the Solar System, bigger than Mercury. It is the only moon with its own magnetic field.',
      ru: 'Крупнейший спутник Солнечной системы, больше Меркурия. Единственная луна с собственным магнитным полем.',
      zh: '太阳系中最大的卫星，比水星还大。它是唯一拥有自身磁场的卫星。',
    },
  },
  {
    id: 'mars', d: 6779 * KM, kind: 'textured', cat: 'planet', dist: 1.5 * AU, wiki: 'Mars',
    look: { c: ['#ffffff', '#e8a878', '#ffffff'], p: [0.8, 0.4, 0.5, 0], q: [0.04, 0, 0, 0], ext: 1.04, tex: ['mars'] },
    name: { en: 'Mars', ru: 'Марс', zh: '火星' },
    fact: {
      en: 'Home to Olympus Mons, a volcano nearly three times taller than Everest. Rovers have been driving there since 1997.',
      ru: 'Здесь находится Олимп — вулкан почти в три раза выше Эвереста. Марсоходы ездят по планете с 1997 года.',
      zh: '这里有奥林匹斯山，一座比珠峰高出近三倍的火山。自 1997 年以来，火星车一直在其上行驶。',
    },
  },
  {
    id: 'siriusb', d: 11700 * KM, kind: 'star', cat: 'remnant', dist: 8.6 * LY, wiki: 'Sirius',
    look: { c: ['#dfe9ff', '#ffffff', '#9ec2ff'], p: [0.2, 0, 0, 0], ext: 2.2, tex: ['sun'] },
    name: { en: 'Sirius B', ru: 'Сириус B', zh: '天狼星B' },
    fact: {
      en: 'A white dwarf: the leftover core of a dead star. It has the Sun\'s mass packed into a ball the size of Earth.',
      ru: 'Белый карлик — остывающее ядро погибшей звезды. Масса Солнца, упакованная в шар размером с Землю.',
      zh: '一颗白矮星：垂死恒星残留的核心。它把太阳的质量压缩进地球大小的球体中。',
    },
  },
  {
    id: 'venus', d: 12104 * KM, kind: 'textured', cat: 'planet', dist: 0.7 * AU, wiki: 'Venus',
    look: { c: ['#ffffff', '#f3d9a8', '#ffffff'], p: [0, 0, 0.8, 0], q: [0.015, 0, 0, 0.3], ext: 1.05, tex: ['venus_atmosphere'] },
    name: { en: 'Venus', ru: 'Венера', zh: '金星' },
    fact: {
      en: 'The hottest planet (465 °C), wrapped in sulfuric acid clouds. A day on Venus is longer than its year.',
      ru: 'Самая горячая планета (465 °C), окутанная облаками серной кислоты. Сутки на Венере длиннее года.',
      zh: '最热的行星（465°C），包裹在硫酸云中。金星上的一天比它的一年还长。',
    },
  },
  {
    id: 'earth', d: 12742 * KM, kind: 'earth', cat: 'planet', dist: 0, wiki: 'Earth',
    look: { c: ['#0b2a5c', '#2f7a3a', '#c9b98a', '#ffffff'], ext: 1.06, tex: ['earth_day', 'earth_nightmap', 'earth_clouds', 'earth_spec'] },
    name: { en: 'Earth', ru: 'Земля', zh: '地球' },
    fact: {
      en: 'The only place known to harbour life. 71% of its surface is covered in water. You are here.',
      ru: 'Единственное известное место, где есть жизнь. 71% поверхности покрыт водой. Вы здесь.',
      zh: '已知唯一孕育生命的所在。其表面 71% 被水覆盖。你在这里。',
    },
  },
  {
    id: 'neptune', d: 49244 * KM, kind: 'textured', cat: 'planet', dist: 30 * AU, wiki: 'Neptune',
    look: { c: ['#ffffff', '#6a9aff', '#ffffff'], p: [0, 0, 0.6, 0], q: [0.06, 0, 0, 0.4], ext: 1.05, tex: ['neptune'] },
    name: { en: 'Neptune', ru: 'Нептун', zh: '海王星' },
    fact: {
      en: 'The windiest planet: storms reach 2,100 km/h. It was found by mathematics before anyone saw it through a telescope.',
      ru: 'Самая ветреная планета: бури до 2100 км/ч. Её открыли «на кончике пера», вычислениями, ещё до наблюдений в телескоп.',
      zh: '风暴最猛烈的行星：风速可达 2100 公里/小时。它在被人用望远镜看到之前，就先由数学推算出来。',
    },
  },
  {
    id: 'uranus', d: 50724 * KM, kind: 'textured', cat: 'planet', dist: 19 * AU, wiki: 'Uranus',
    look: { c: ['#ffffff', '#b8f0f4', '#c8d0d6'], p: [0, 0, 0.5, 2], q: [0.05, 0.9, 0.45, 0.4], ext: 2.15, tex: ['uranus'] },
    name: { en: 'Uranus', ru: 'Уран', zh: '天王星' },
    fact: {
      en: 'Rolls around the Sun on its side, tilted 98°. Each pole gets 42 years of sunlight followed by 42 years of darkness.',
      ru: 'Катится вокруг Солнца «на боку», с наклоном 98°. Каждый полюс 42 года освещён, а затем 42 года погружён во тьму.',
      zh: '以 98° 倾角“躺着”绕太阳公转。每个极点先经历 42 年日照，再经历 42 年黑暗。',
    },
  },
  {
    id: 'saturn', d: 116460 * KM, kind: 'textured', cat: 'planet', dist: 9.5 * AU, wiki: 'Saturn',
    look: { c: ['#ffffff', '#f2e6c4', '#ffffff'], p: [0, 0, 0.3, 1], q: [0.08, 0.32, -0.12, 0.45], ext: 2.35, tex: ['saturn', 'saturn_ring.png'] },
    name: { en: 'Saturn', ru: 'Сатурн', zh: '土星' },
    fact: {
      en: 'Its rings span 280,000 km but are mostly only about 10 m thick. Saturn is less dense than water.',
      ru: 'Кольца в поперечнике 280 000 км, но толщиной в основном всего около 10 м. Плотность Сатурна меньше плотности воды.',
      zh: '它的光环跨度 28 万公里，却大多只有约 10 米厚。土星的平均密度比水还小。',
    },
  },
  {
    id: 'jupiter', d: 139820 * KM, kind: 'textured', cat: 'planet', dist: 5.2 * AU, wiki: 'Jupiter',
    look: { c: ['#ffffff', '#f5ece0', '#ffffff'], p: [0, 0, 0.35, 0], q: [0.08, 0, 0, 0.45], ext: 1.04, tex: ['jupiter'] },
    name: { en: 'Jupiter', ru: 'Юпитер', zh: '木星' },
    fact: {
      en: 'More than twice as massive as all other planets combined. The Great Red Spot is a storm wider than Earth.',
      ru: 'Массивнее всех остальных планет, вместе взятых, более чем вдвое. Большое красное пятно — шторм шире Земли.',
      zh: '质量超过其他所有行星总和的两倍。大红斑是一场比地球还宽的风暴。',
    },
  },
  {
    id: 'trappist1', d: sunD(0.119), kind: 'star', cat: 'star', dist: 40.7 * LY, wiki: 'TRAPPIST-1',
    look: { c: ['#ff5a2a', '#ffb070', '#ff2a10'], p: [0.6, 0.4, 0, 0], ext: 1.9, tex: ['sun'] },
    name: { en: 'TRAPPIST-1', ru: 'TRAPPIST-1', zh: 'TRAPPIST-1' },
    fact: {
      en: 'An ultra-cool red dwarf barely bigger than Jupiter, orbited by seven Earth-sized planets.',
      ru: 'Ультрахолодный красный карлик чуть крупнее Юпитера. Вокруг него вращаются семь планет размером с Землю.',
      zh: '一颗超冷红矮星，仅比木星略大，周围环绕着七颗地球大小的行星。',
    },
  },
  {
    id: 'proxima', d: sunD(0.154), kind: 'star', cat: 'star', dist: 4.24 * LY, wiki: 'Proxima_Centauri',
    look: { c: ['#ff6a3a', '#ffc08a', '#ff3a1a'], p: [0.6, 0.6, 0, 0], ext: 1.9, tex: ['sun'] },
    name: { en: 'Proxima Centauri', ru: 'Проксима Центавра', zh: '比邻星' },
    fact: {
      en: 'The closest star to the Sun. Its light takes 4.24 years to reach us; Voyager 1 would need over 70,000 years.',
      ru: 'Ближайшая к Солнцу звезда. Её свет идёт до нас 4,24 года, а «Вояджеру-1» понадобилось бы больше 70 000 лет.',
      zh: '离太阳最近的恒星。它的光需要 4.24 年才能到达我们；旅行者 1 号则要约 7 万多年。',
    },
  },
  {
    id: 'earthmoon', d: 2 * 384400 * KM, kind: 'orbit', cat: 'system', dist: null, wiki: 'Orbit_of_the_Moon',
    look: { c: ['#4a90ff', '#c8c8c8', '#5a7aa0'], orbits: [1], p: [0, 0.009, 0.0045, 0], ext: 1.05 },
    name: { en: 'Orbit of the Moon', ru: 'Орбита Луны', zh: '月球轨道' },
    fact: {
      en: 'The whole Earth–Moon system would fit inside the Sun with room to spare.',
      ru: 'Вся система Земля — Луна целиком поместилась бы внутри Солнца, и ещё осталось бы место.',
      zh: '整个地月系统都能装进太阳里，还绰绰有余。',
    },
  },
  {
    id: 'sun', d: sunD(1), kind: 'star', cat: 'star', dist: 1 * AU, wiki: 'Sun',
    look: { c: ['#ffc24a', '#fff2c8', '#ff7a10'], p: [1, 1, 0, 0], ext: 1.8, tex: ['sun'] },
    name: { en: 'The Sun', ru: 'Солнце', zh: '太阳' },
    fact: {
      en: '99.86% of the Solar System\'s mass. About 1.3 million Earths would fit inside it.',
      ru: '99,86% массы Солнечной системы. Внутри поместилось бы около 1,3 млн Земель.',
      zh: '占据太阳系 99.86% 的质量。约 130 万个地球能装进它内部。',
    },
  },
  {
    id: 'sirius', d: sunD(1.711), kind: 'star', cat: 'star', dist: 8.6 * LY, wiki: 'Sirius',
    look: { c: ['#cfe0ff', '#ffffff', '#8ab4ff'], p: [1, 0.3, 0, 0], ext: 1.9, tex: ['sun'] },
    name: { en: 'Sirius A', ru: 'Сириус A', zh: '天狼星A' },
    fact: {
      en: 'The brightest star in the night sky, 25 times more luminous than the Sun.',
      ru: 'Самая яркая звезда ночного неба, в 25 раз светимее Солнца.',
      zh: '夜空中最亮的恒星，光度是太阳的 25 倍。',
    },
  },
  {
    id: 'vega', d: sunD(2.36), kind: 'star', cat: 'star', dist: 25 * LY, wiki: 'Vega',
    look: { c: ['#d6e4ff', '#ffffff', '#9abcff'], p: [1, 0.3, 0, 0], ext: 1.9, tex: ['sun'] },
    name: { en: 'Vega', ru: 'Вега', zh: '织女星' },
    fact: {
      en: 'Spins so fast it bulges at the equator. In 12,000 years it will become Earth\'s North Star.',
      ru: 'Вращается так быстро, что сплюснута у полюсов. Через 12 000 лет она станет Полярной звездой Земли.',
      zh: '自转极快，赤道处隆起。再过 1.2 万年，它将成为地球的北极星。',
    },
  },
  {
    id: 'pollux', d: sunD(9.06), kind: 'star', cat: 'star', dist: 34 * LY, wiki: 'Pollux_(star)',
    look: { c: ['#ffb060', '#ffe0b0', '#ff8030'], p: [1.6, 0.6, 0, 0], ext: 1.8, tex: ['sun'] },
    name: { en: 'Pollux', ru: 'Поллукс', zh: '北河三' },
    fact: {
      en: 'The closest giant star to the Sun, and it has a confirmed planet larger than Jupiter.',
      ru: 'Ближайшая к Солнцу звезда-гигант. У неё есть подтверждённая планета крупнее Юпитера.',
      zh: '离太阳最近的巨星，并且拥有一颗比木星还大的已确认行星。',
    },
  },
  {
    id: 'sgra', d: 2.54e10, kind: 'blackhole', cat: 'blackhole', dist: 26700 * LY, wiki: 'Sagittarius_A*',
    look: { c: ['#ff9a3a', '#ffe0a0', '#ff5a1a'], p: [0.28, 0.8, 0, 0], ext: 3.2 },
    name: { en: 'Sagittarius A*', ru: 'Стрелец A*', zh: '人马座A*' },
    fact: {
      en: 'The supermassive black hole at the heart of our galaxy: 4 million solar masses. Photographed in 2022.',
      ru: 'Сверхмассивная чёрная дыра в центре нашей Галактики, 4 млн масс Солнца. Её сфотографировали в 2022 году.',
      zh: '我们银河系中心的超大质量黑洞：400 万个太阳质量。2022 年拍到照片。',
    },
  },
  {
    id: 'arcturus', d: sunD(25.4), kind: 'star', cat: 'star', dist: 36.7 * LY, wiki: 'Arcturus',
    look: { c: ['#ffa850', '#ffdcaa', '#ff7a2a'], p: [1.8, 0.6, 0, 0], ext: 1.8, tex: ['sun'] },
    name: { en: 'Arcturus', ru: 'Арктур', zh: '大角星' },
    fact: {
      en: 'An orange giant and the brightest star of the northern sky. It is what our Sun will look like in about 5 billion years.',
      ru: 'Оранжевый гигант, ярчайшая звезда северного неба. Так будет выглядеть наше Солнце примерно через 5 млрд лет.',
      zh: '一颗橙色巨星，也是北方天空最亮的恒星。约 50 亿年后，我们的太阳看起来就会像它。',
    },
  },
  {
    id: 'aldebaran', d: sunD(45), kind: 'star', cat: 'star', dist: 65 * LY, wiki: 'Aldebaran',
    look: { c: ['#ff9440', '#ffd09a', '#ff6a20'], p: [2, 0.7, 0, 0], ext: 1.8, tex: ['sun'] },
    name: { en: 'Aldebaran', ru: 'Альдебаран', zh: '毕宿五' },
    fact: {
      en: 'The fiery "eye" of Taurus. Pioneer 10 is drifting towards it and will pass nearby in about 2 million years.',
      ru: 'Огненный «глаз» Тельца. К нему дрейфует зонд «Пионер-10», который пролетит неподалёку примерно через 2 млн лет.',
      zh: '金牛座炽热的“眼睛”。先驱者 10 号正朝它漂去，约 200 万年后将从附近经过。',
    },
  },
  {
    id: 'rigel', d: sunD(79), kind: 'star', cat: 'star', dist: 860 * LY, wiki: 'Rigel',
    look: { c: ['#bcd4ff', '#ffffff', '#6a9aff'], p: [1.4, 0.4, 0, 0], ext: 2, tex: ['sun'] },
    name: { en: 'Rigel', ru: 'Ригель', zh: '参宿七' },
    fact: {
      en: 'A blue supergiant in Orion, shining about 120,000 times brighter than the Sun.',
      ru: 'Голубой сверхгигант в Орионе, светит примерно в 120 000 раз ярче Солнца.',
      zh: '猎户座中的一颗蓝色超巨星，亮度约为太阳的 12 万倍。',
    },
  },
  {
    id: 'mercuryorbit', d: 2 * 0.387 * AU, kind: 'orbit', cat: 'system', dist: null, wiki: 'Mercury_(planet)',
    look: { c: ['#ffcf5a', '#b0a89e', '#806a50'], orbits: [1], p: [1, 0.012, 0.004, 0], ext: 1.05 },
    name: { en: 'Orbit of Mercury', ru: 'Орбита Меркурия', zh: '水星轨道' },
    fact: {
      en: 'Mercury circles the Sun in just 88 days at 47 km/s, the fastest of all the planets.',
      ru: 'Меркурий облетает Солнце всего за 88 суток со скоростью 47 км/с — быстрее всех планет.',
      zh: '水星仅用 88 天、以 47 公里/秒的速度绕太阳一圈，是速度最快的行星。',
    },
  },
  {
    id: 'deneb', d: sunD(203), kind: 'star', cat: 'star', dist: 2600 * LY, wiki: 'Deneb',
    look: { c: ['#e8f0ff', '#ffffff', '#b0c8ff'], p: [1.6, 0.3, 0, 0], ext: 1.9, tex: ['sun'] },
    name: { en: 'Deneb', ru: 'Денеб', zh: '天津四' },
    fact: {
      en: 'One of the most luminous stars visible to the naked eye, so bright it shines across 2,600 light-years.',
      ru: 'Одна из самых светимых звёзд, видимых невооружённым глазом: её видно за 2600 световых лет.',
      zh: '肉眼可见的最明亮恒星之一，其光芒跨越 2600 光年依然可见。',
    },
  },
  {
    id: 'earthorbit', d: 2 * AU, kind: 'orbit', cat: 'system', dist: null, wiki: 'Earth%27s_orbit',
    look: { c: ['#ffcf5a', '#4a90ff', '#5a7aa0'], orbits: [0.387, 0.723, 1], p: [1, 0.012, 0.004, 0], ext: 1.05 },
    name: { en: 'Orbit of Earth', ru: 'Орбита Земли', zh: '地球轨道' },
    fact: {
      en: 'We travel 940 million km around the Sun every year, at about 30 km per second.',
      ru: 'Каждый год мы пролетаем вокруг Солнца 940 млн км со скоростью около 30 км/с.',
      zh: '我们每年绕太阳飞行 9.4 亿公里，速度约 30 公里/秒。',
    },
  },
  {
    id: 'antares', d: sunD(680), kind: 'star', cat: 'star', dist: 550 * LY, wiki: 'Antares',
    look: { c: ['#ff4a1a', '#ff9a5a', '#c01a00'], p: [3.5, 1, 0, 0], ext: 1.7, tex: ['sun'] },
    name: { en: 'Antares', ru: 'Антарес', zh: '心宿二' },
    fact: {
      en: 'The red heart of Scorpius. Placed where the Sun is, it would swallow Mars\'s orbit.',
      ru: 'Красное сердце Скорпиона. Окажись он на месте Солнца, поглотил бы орбиту Марса.',
      zh: '天蝎座红色的心。若把它放在太阳的位置，它将吞没火星的轨道。',
    },
  },
  {
    id: 'betelgeuse', d: sunD(764), kind: 'star', cat: 'star', dist: 550 * LY, wiki: 'Betelgeuse',
    look: { c: ['#ff5a20', '#ffa060', '#c02000'], p: [4, 1, 0, 0], ext: 1.7, tex: ['sun'] },
    name: { en: 'Betelgeuse', ru: 'Бетельгейзе', zh: '参宿四' },
    fact: {
      en: 'Orion\'s shoulder is near the end of its life. When it goes supernova it will be visible in daylight for weeks.',
      ru: 'Плечо Ориона доживает свой век. Когда звезда взорвётся сверхновой, её будет видно даже днём несколько недель.',
      zh: '猎户座的肩膀，已接近生命终点。当它爆发为超新星时，将在数周内白昼可见。',
    },
  },
  {
    id: 'uyscuti', d: sunD(909), kind: 'star', cat: 'star', dist: 5900 * LY, wiki: 'UY_Scuti',
    look: { c: ['#ff6a2a', '#ffb070', '#b02a00'], p: [4.5, 1, 0, 0], ext: 1.7, tex: ['sun'] },
    name: { en: 'UY Scuti', ru: 'UY Щита', zh: '盾牌座UY' },
    fact: {
      en: 'Once called the largest known star. Light would need almost 1.5 hours to circle its surface.',
      ru: 'Когда-то считалась крупнейшей известной звездой. Свету понадобилось бы почти полтора часа, чтобы облететь её.',
      zh: '曾被称为已知最大的恒星。光绕其表面一圈几乎需要 1.5 小时。',
    },
  },
  {
    id: 'jupiterorbit', d: 2 * 5.2 * AU, kind: 'orbit', cat: 'system', dist: null, wiki: 'Jupiter',
    look: { c: ['#ffcf5a', '#e0b080', '#5a7aa0'], orbits: [0.074, 0.139, 0.192, 0.293, 1], p: [1, 0.012, 0.004, 1], ext: 1.05 },
    name: { en: 'Orbit of Jupiter', ru: 'Орбита Юпитера', zh: '木星轨道' },
    fact: {
      en: 'Jupiter needs 12 years to complete one lap. Inside its orbit lie all rocky planets and the asteroid belt.',
      ru: 'Юпитеру нужно 12 лет на один оборот. Внутри его орбиты — все каменные планеты и пояс астероидов.',
      zh: '木星绕行一圈需要 12 年。其轨道之内，是所有岩质行星和小行星带。',
    },
  },
  {
    id: 'vycma', d: sunD(1420), kind: 'star', cat: 'star', dist: 3900 * LY, wiki: 'VY_Canis_Majoris',
    look: { c: ['#ff4a1a', '#ff9050', '#a01800'], p: [5, 1.2, 1, 0], ext: 1.9, tex: ['sun'] },
    name: { en: 'VY Canis Majoris', ru: 'VY Большого Пса', zh: '大犬座VY' },
    fact: {
      en: 'A hypergiant shedding its outer layers into a vast dusty cloud. Billions of Suns could fit inside.',
      ru: 'Гипергигант, сбрасывающий внешние слои в огромное пылевое облако. Внутри поместились бы миллиарды Солнц.',
      zh: '一颗正将外层抛入巨大尘埃云的超巨星。其内部能装下数十亿个太阳。',
    },
  },
  {
    id: 'stephenson218', d: sunD(2150), kind: 'star', cat: 'star', dist: 19000 * LY, wiki: 'Stephenson_2-18',
    look: { c: ['#ff3a10', '#ff8040', '#900800'], p: [5.5, 1.2, 1, 0], ext: 1.9, tex: ['sun'] },
    name: { en: 'Stephenson 2-18', ru: 'Стивенсон 2-18', zh: '史蒂芬森2-18' },
    fact: {
      en: 'One of the largest known stars (the estimate is uncertain). At the Sun\'s place it would reach beyond Saturn\'s orbit.',
      ru: 'Одна из крупнейших известных звёзд (оценка неточная). На месте Солнца она вышла бы за орбиту Сатурна.',
      zh: '已知最大的恒星之一（估算尚有不确定性）。若放在太阳的位置，它将延伸到土星轨道之外。',
    },
  },
  {
    id: 'solarsystem', d: 2 * 30.07 * AU, kind: 'orbit', cat: 'system', dist: null, wiki: 'Solar_System',
    look: { c: ['#ffcf5a', '#7ab0ff', '#5a7aa0'], orbits: [0.0129, 0.024, 0.0333, 0.0507, 0.173, 0.318, 0.638, 1], p: [1, 0.01, 0.003, 0], ext: 1.05 },
    name: { en: 'The Solar System', ru: 'Солнечная система', zh: '太阳系' },
    fact: {
      en: 'Out to Neptune\'s orbit. Sunlight takes about 4 hours to reach the outermost planet.',
      ru: 'До орбиты Нептуна. Солнечный свет добирается до самой далёкой планеты примерно за 4 часа.',
      zh: '迄及海王星轨道。阳光到达最外侧的行星约需 4 小时。',
    },
  },
  {
    id: 'heliosphere', d: 2 * 120 * AU, kind: 'bubble', cat: 'system', dist: null, wiki: 'Heliosphere',
    look: { c: ['#3a6aff', '#8ab0ff', '#ffcf5a'], ext: 1.95 },
    name: { en: 'Heliosphere', ru: 'Гелиосфера', zh: '日球层' },
    fact: {
      en: 'The bubble blown by the solar wind. Voyager 1 crossed its edge in 2012, becoming the first object to reach interstellar space.',
      ru: 'Пузырь, раздуваемый солнечным ветром. «Вояджер-1» пересёк его границу в 2012 году и первым вышел в межзвёздное пространство.',
      zh: '由太阳风“吹”出的气泡。旅行者 1 号于 2012 年穿越其边界，成为首个进入星际空间的人造物体。',
    },
  },
  {
    id: 'm87', d: 3.84e13, kind: 'blackhole', cat: 'blackhole', dist: 53.5e6 * LY, wiki: 'Messier_87',
    look: { c: ['#ff8a2a', '#ffe0a0', '#ff4a10'], p: [0.12, 1, 0, 0.6], ext: 3.2 },
    name: { en: 'M87*', ru: 'M87*', zh: 'M87*' },
    fact: {
      en: 'The first black hole ever photographed (2019). It weighs 6.5 billion Suns and launches a jet 5,000 light-years long.',
      ru: 'Первая сфотографированная чёрная дыра (2019). Весит 6,5 млрд Солнц и выбрасывает джет длиной 5000 световых лет.',
      zh: '首颗被拍到照片的黑洞（2019 年）。它重达 65 亿个太阳，并喷出一条长达 5000 光年的喷流。',
    },
  },
  {
    id: 'ton618', d: 2.4e14, kind: 'blackhole', cat: 'blackhole', dist: 10.4e9 * LY, wiki: 'TON_618',
    look: { c: ['#7ab0ff', '#ffffff', '#ff7a3a'], p: [0.2, 1.6, 1, 1], ext: 3.6 },
    name: { en: 'TON 618', ru: 'TON 618', zh: 'TON 618' },
    fact: {
      en: 'One of the most massive black holes known: about 40 billion Suns. Its quasar outshines 100 trillion stars.',
      ru: 'Одна из самых массивных известных чёрных дыр — около 40 млрд Солнц. Её квазар ярче 100 трлн звёзд.',
      zh: '已知质量最大的黑洞之一：约 400 亿个太阳。其类星体的亮度超过 100 万亿颗恒星。',
    },
  },
  {
    id: 'catseye', d: 0.2 * LY, kind: 'nebula', cat: 'nebula', dist: 3300 * LY, wiki: 'Cat%27s_Eye_Nebula',
    look: { c: ['#4ad6c0', '#ff5a8a', '#8a6aff', '#ffffff'], p: [1, 0, 0, 0], q: [0.5, 0, 0, 0], seed: 5 },
    name: { en: 'Cat\'s Eye Nebula', ru: 'Туманность Кошачий Глаз', zh: '猫眼星云' },
    fact: {
      en: 'The glowing shells shed by a dying star. One of the most complex nebulae ever seen.',
      ru: 'Светящиеся оболочки, сброшенные умирающей звездой. Одна из самых сложных по структуре туманностей.',
      zh: '垂死恒星抛出的发光壳层。是人类见过结构最复杂的星云之一。',
    },
  },
  {
    id: 'barnard68', d: 0.5 * LY, kind: 'nebula', cat: 'nebula', dist: 500 * LY, wiki: 'Barnard_68',
    look: { c: ['#050308', '#3a1a10', '#8a4a2a'], p: [4, 0, 0, 0], seed: 9 },
    name: { en: 'Barnard 68', ru: 'Барнард 68', zh: '巴纳德68' },
    fact: {
      en: 'A dark cloud of gas and dust so dense it blocks all starlight behind it. It may collapse into a new star.',
      ru: 'Тёмное облако газа и пыли, настолько плотное, что полностью закрывает звёзды за собой. Может сжаться в новую звезду.',
      zh: '一团如此稠密的气体尘埃暗云，挡住了背后所有的星光。它可能坍缩成一颗新恒星。',
    },
  },
  {
    id: 'ring', d: 1.3 * LY, kind: 'nebula', cat: 'nebula', dist: 2570 * LY, wiki: 'Ring_Nebula',
    look: { c: ['#3a8aff', '#ff6a3a', '#7affb0', '#ffffff'], p: [1, 0, 0, 0], q: [1, 0, 0, 0], seed: 13 },
    name: { en: 'Ring Nebula', ru: 'Туманность Кольцо', zh: '环状星云' },
    fact: {
      en: 'A glowing ring of gas expelled by a dying star 4,000 years ago. Our Sun may end up looking similar.',
      ru: 'Светящееся кольцо газа, сброшенное умирающей звездой 4000 лет назад. Так может закончить и наше Солнце.',
      zh: '4000 年前由一颗垂死恒星抛出的发光气体环。我们的太阳最终可能也会变成这样。',
    },
  },
  {
    id: 'oort', d: 2 * 100000 * AU, kind: 'shell', cat: 'system', dist: null, wiki: 'Oort_cloud',
    look: { c: ['#aac8ff', '#ffcf5a', '#5a7aa0'], ext: 1.05 },
    name: { en: 'Oort Cloud', ru: 'Облако Оорта', zh: '奥尔特云' },
    fact: {
      en: 'A vast sphere of trillions of icy bodies, the true edge of the Solar System. It reaches almost halfway to Proxima Centauri.',
      ru: 'Огромная сфера из триллионов ледяных тел — настоящая граница Солнечной системы. Тянется почти на полпути до Проксимы Центавра.',
      zh: '由数万亿个冰体组成的巨大球壳，是太阳系真正的边界。它几乎延伸到比邻星的一半路程。',
    },
  },
  {
    id: 'pillars', d: 4 * LY, kind: 'nebula', cat: 'nebula', dist: 6500 * LY, wiki: 'Pillars_of_Creation',
    look: { c: ['#4a2a1a', '#c08a50', '#3ac0b0', '#ffe0b0'], p: [2, 0, 0, 0], seed: 17 },
    name: { en: 'Pillars of Creation', ru: 'Столпы Творения', zh: '创生之柱' },
    fact: {
      en: 'Towering columns of gas and dust where new stars are being born inside the Eagle Nebula.',
      ru: 'Гигантские колонны из газа и пыли в туманности Орёл, внутри которых рождаются новые звёзды.',
      zh: '鹰状星云内由气体和尘埃构成的参天巨柱，新的恒星正在其中诞生。',
    },
  },
  {
    id: 'crab', d: 11 * LY, kind: 'nebula', cat: 'nebula', dist: 6500 * LY, wiki: 'Crab_Nebula',
    look: { c: ['#ff5a3a', '#4a8aff', '#ffd08a', '#ffffff'], p: [5, 0, 0, 0], seed: 21 },
    name: { en: 'Crab Nebula', ru: 'Крабовидная туманность', zh: '蟹状星云' },
    fact: {
      en: 'The remains of a supernova recorded by Chinese astronomers in 1054. A pulsar spins 30 times per second at its centre.',
      ru: 'Остаток сверхновой, которую записали китайские астрономы в 1054 году. В центре вращается пульсар — 30 оборотов в секунду.',
      zh: '1054 年中国天文学家记录的一次超新星爆发的遗迹。其中心有一枚每秒自转 30 次的脉冲星。',
    },
  },
  {
    id: 'orion', d: 24 * LY, kind: 'nebula', cat: 'nebula', dist: 1344 * LY, wiki: 'Orion_Nebula',
    look: { c: ['#ff4a7a', '#3a8aff', '#ffb070', '#ffffff'], p: [0, 0, 0, 0], q: [0.7, 0, 0, 0], seed: 33 },
    name: { en: 'Orion Nebula', ru: 'Туманность Ориона', zh: '猎户座星云' },
    fact: {
      en: 'The nearest large stellar nursery, visible to the naked eye as the fuzzy "sword" of Orion.',
      ru: 'Ближайшая большая «звёздная колыбель». Видна невооружённым глазом как размытый «меч» Ориона.',
      zh: '最近的巨大恒星“育婴室”，肉眼可见，宛如猎户座模糊的“剑”。',
    },
  },
  {
    id: 'eagle', d: 70 * LY, kind: 'nebula', cat: 'nebula', dist: 5700 * LY, wiki: 'Eagle_Nebula',
    look: { c: ['#3ab08a', '#ff8a4a', '#2a4aa0', '#ffffff'], p: [0, 0, 0, 0], q: [0.5, 0, 0, 0], seed: 45 },
    name: { en: 'Eagle Nebula', ru: 'Туманность Орёл', zh: '鹰状星云' },
    fact: {
      en: 'The home of the Pillars of Creation, lit by a cluster of young, hot stars about 2 million years old.',
      ru: 'Дом Столпов Творения. Её освещает скопление молодых горячих звёзд возрастом около 2 млн лет.',
      zh: '创生之柱的所在地，由一群约 200 万年的年轻炽热恒星照亮。',
    },
  },
  {
    id: 'omegacen', d: 150 * LY, kind: 'cluster', cat: 'cluster', dist: 17000 * LY, wiki: 'Omega_Centauri',
    look: { c: ['#ffe0b0', '#fff4e0', '#ffb070'], p: [1, 0, 0, 0], ext: 1.2 },
    name: { en: 'Omega Centauri', ru: 'Омега Центавра', zh: '半人马座ω' },
    fact: {
      en: 'About 10 million stars packed into a ball. It may be the stripped core of a small galaxy eaten by the Milky Way.',
      ru: 'Около 10 млн звёзд, собранных в шар. Возможно, это ядро маленькой галактики, поглощённой Млечным Путём.',
      zh: '约 1000 万颗恒星挤在一个球体中。它可能是被银河系吞掉的小星系剥离出的核心。',
    },
  },
  {
    id: 'tarantula', d: 650 * LY, kind: 'nebula', cat: 'nebula', dist: 160000 * LY, wiki: 'Tarantula_Nebula',
    look: { c: ['#ff5a8a', '#4a9aff', '#ffc070', '#ffffff'], p: [0, 0, 0, 0], q: [1, 0, 0, 0], seed: 57 },
    name: { en: 'Tarantula Nebula', ru: 'Туманность Тарантул', zh: '蜘蛛星云' },
    fact: {
      en: 'The most active star-forming region in the Local Group. If it were as close as Orion, it would cast shadows on Earth.',
      ru: 'Самая активная область звездообразования в Местной группе. Будь она так же близко, как Орион, она отбрасывала бы тени на Земле.',
      zh: '本星系群中恒星诞生最活跃的区域。若它离我们和猎户座一样近，将在地球上投下阴影。',
    },
  },
  {
    id: 'gould', d: 3000 * LY, kind: 'cluster', cat: 'region', dist: null, wiki: 'Gould_Belt',
    look: { c: ['#9ac0ff', '#ffffff', '#ff7aa0'], p: [0, 1, 0, 0], ext: 1.15 },
    name: { en: 'Gould Belt', ru: 'Пояс Гулда', zh: '古尔德带' },
    fact: {
      en: 'A ring of bright young stars and star-forming clouds around the Sun, including most of Orion\'s stars.',
      ru: 'Кольцо ярких молодых звёзд и звёздообразующих облаков вокруг Солнца, включая большинство звёзд Ориона.',
      zh: '环绕太阳的一圈明亮年轻恒星与产星云，包括猎户座的大部分恒星。',
    },
  },
  {
    id: 'radcliffe', d: 9000 * LY, kind: 'nebula', cat: 'region', dist: 400 * LY, wiki: 'Radcliffe_wave',
    look: { c: ['#ff6a8a', '#5a4ac0', '#ffb080', '#ffffff'], p: [3, 0, 0, 0], seed: 61 },
    name: { en: 'Radcliffe Wave', ru: 'Волна Рэдклиффа', zh: '拉德克利夫波' },
    fact: {
      en: 'A giant wave of gas clouds discovered in 2020. It oscillates through the galactic disk like a ripple.',
      ru: 'Гигантская волна газовых облаков, открытая в 2020 году. Колеблется сквозь галактический диск, словно рябь на воде.',
      zh: '2020 年发现的一巨大的气体云波。它像涟漪一样在银盘中振荡。',
    },
  },
  {
    id: 'smc', d: 18900 * LY, kind: 'galaxy', cat: 'galaxy', dist: 200000 * LY, wiki: 'Small_Magellanic_Cloud',
    look: { c: ['#cfe0ff', '#ffe8c0', '#ff6a9a'], p: [2, 0, 0, 0.55], q: [0.7, 0.4, 0, 0], seed: 71, ext: 1.1 },
    name: { en: 'Small Magellanic Cloud', ru: 'Малое Магелланово Облако', zh: '小麦哲伦云' },
    fact: {
      en: 'A dwarf galaxy orbiting the Milky Way, visible from the Southern Hemisphere as a detached piece of the Milky Way.',
      ru: 'Карликовая галактика — спутник Млечного Пути. В Южном полушарии видна как оторвавшийся кусочек Млечного Пути.',
      zh: '绕银河系运行的一颗矮星系，在南半球看似从银河脱落的一块碎片。',
    },
  },
  {
    id: 'lmc', d: 32200 * LY, kind: 'galaxy', cat: 'galaxy', dist: 160000 * LY, wiki: 'Large_Magellanic_Cloud',
    look: { c: ['#cfe0ff', '#fff0d0', '#ff5a8a'], p: [2, 1, 0, 0.7], q: [0.8, -0.3, 0, 0], seed: 83, ext: 1.1 },
    name: { en: 'Large Magellanic Cloud', ru: 'Большое Магелланово Облако', zh: '大麦哲伦云' },
    fact: {
      en: 'The Milky Way\'s largest satellite galaxy. In 1987 a supernova exploded there that was visible to the naked eye.',
      ru: 'Крупнейшая галактика-спутник Млечного Пути. В 1987 году там вспыхнула сверхновая, видимая невооружённым глазом.',
      zh: '银河系最大的卫星星系。1987 年那里爆发了一颗肉眼可见的超新星。',
    },
  },
  {
    id: 'milkyway', d: 100000 * LY, kind: 'galaxy', cat: 'galaxy', dist: null, wiki: 'Milky_Way',
    look: { c: ['#bcd0ff', '#ffe8c0', '#ff6a9a', '#2a1a10'], p: [1, 2, 0.3, 1], q: [0.9, 0.35, 1, 0], ext: 1.15 },
    name: { en: 'Milky Way', ru: 'Млечный Путь', zh: '银河系' },
    fact: {
      en: 'Our home galaxy: 100–400 billion stars. The Sun takes 230 million years to orbit its centre once.',
      ru: 'Наша родная галактика: 100–400 млрд звёзд. Солнце делает один оборот вокруг её центра за 230 млн лет.',
      zh: '我们的家园星系：1000 亿至 4000 亿颗恒星。太阳绕其中心一圈需 2.3 亿年。',
    },
  },
  {
    id: 'andromeda', d: 220000 * LY, kind: 'galaxy', cat: 'galaxy', dist: 2.5e6 * LY, wiki: 'Andromeda_Galaxy',
    look: { c: ['#c0d0ff', '#fff0d8', '#ff7aa0', '#2a1a10'], p: [1, 2, 0.4, 1], q: [0.32, 0.45, 0, 0], ext: 1.15 },
    name: { en: 'Andromeda Galaxy', ru: 'Галактика Андромеды', zh: '仙女座星系' },
    fact: {
      en: 'The most distant object you can see with the naked eye. It is on a collision course with the Milky Way.',
      ru: 'Самый далёкий объект, видимый невооружённым глазом. Она движется навстречу Млечному Пути и столкнётся с ним.',
      zh: '肉眼能看到的最遥远天体。它正与银河系迎面相撞。',
    },
  },
  {
    id: 'malin1', d: 650000 * LY, kind: 'galaxy', cat: 'galaxy', dist: 1.19e9 * LY, wiki: 'Malin_1',
    look: { c: ['#8aa8ff', '#fff0d8', '#6a8aff', '#101020'], p: [1, 2, 0.6, 0.35], q: [0.75, 0.25, 0, 0], ext: 1.1 },
    name: { en: 'Malin 1', ru: 'Малин 1', zh: '马林1' },
    fact: {
      en: 'A ghostly giant spiral: its disk is so faint it was only discovered by accident in 1986.',
      ru: 'Призрачная гигантская спираль: её диск настолько тусклый, что галактику открыли случайно, в 1986 году.',
      zh: '一个幽灵般的巨型旋涡星系：其盘面极暗，直到 1986 年才被意外发现。',
    },
  },
  {
    id: 'ic1101', d: 2e6 * LY, kind: 'galaxy', cat: 'galaxy', dist: 1.04e9 * LY, wiki: 'IC_1101',
    look: { c: ['#ffe0b0', '#fff6e8', '#ffb070'], p: [0, 0, 0, 1], q: [0.7, 0.3, 0, 0], ext: 1.2 },
    name: { en: 'IC 1101', ru: 'IC 1101', zh: 'IC 1101' },
    fact: {
      en: 'One of the largest galaxies known, a giant elliptical with around 100 trillion stars (size estimates vary).',
      ru: 'Одна из крупнейших известных галактик, гигантская эллиптическая, около 100 трлн звёзд (оценки размера расходятся).',
      zh: '已知最大的星系之一，一个拥有约 100 万亿颗恒星的巨大椭圆星系（尺寸估算不一）。',
    },
  },
  {
    id: 'localgroup', d: 10e6 * LY, kind: 'group', cat: 'galaxyGroup', dist: null, wiki: 'Local_Group',
    look: { c: ['#bcd0ff', '#ffe8c0', '#8a9aff'], p: [0.25, 1, 0, 0], ext: 1.1 },
    name: { en: 'Local Group', ru: 'Местная группа', zh: '本星系群' },
    fact: {
      en: 'Our galactic neighbourhood: 80+ galaxies, dominated by the Milky Way and Andromeda.',
      ru: 'Наше галактическое соседство: больше 80 галактик, главные из которых — Млечный Путь и Андромеда.',
      zh: '我们的星系邻里：80 多个星系，以银河系和仙女座为主。',
    },
  },
  {
    id: 'virgo', d: 15e6 * LY, kind: 'group', cat: 'galaxyGroup', dist: 54e6 * LY, wiki: 'Virgo_Cluster',
    look: { c: ['#ffe8c0', '#ffffff', '#ffb080'], p: [0.6, 0, 0, 0], ext: 1.1 },
    name: { en: 'Virgo Cluster', ru: 'Скопление Девы', zh: '室女座星系团' },
    fact: {
      en: 'A swarm of 1,300–2,000 galaxies, including M87 and its giant black hole.',
      ru: 'Рой из 1300–2000 галактик, включая M87 с её гигантской чёрной дырой.',
      zh: '由 1300–2000 个星系组成的星系团，包括 M87 及其巨型黑洞。',
    },
  },
  {
    id: 'alcyoneus', d: 16.3e6 * LY, kind: 'group', cat: 'galaxy', dist: 3e9 * LY, wiki: 'Alcyoneus_(galaxy)',
    look: { c: ['#ff7ac0', '#ffe8c0', '#7a6aff'], p: [0, 0, 1, 0], ext: 1.05 },
    name: { en: 'Alcyoneus', ru: 'Алкионей', zh: '阿尔西俄纽斯' },
    fact: {
      en: 'A radio galaxy whose jets stretch 16 million light-years: the largest structure of galactic origin known.',
      ru: 'Радиогалактика, джеты которой тянутся на 16 млн световых лет. Крупнейшая известная структура галактического происхождения.',
      zh: '一个射电星系，其喷流延伸达 1600 万光年：已知星系起源的最大结构。',
    },
  },
  {
    id: 'virgosc', d: 110e6 * LY, kind: 'web', cat: 'structure', dist: null, wiki: 'Virgo_Supercluster',
    look: { c: ['#8a7aff', '#ffd0a0', '#3a2a8a'], p: [3, 0, 0, 0], ext: 1.05, seed: 7 },
    name: { en: 'Virgo Supercluster', ru: 'Сверхскопление Девы', zh: '室女座超星系团' },
    fact: {
      en: 'At least 100 galaxy groups and clusters, with the Local Group on its outskirts.',
      ru: 'Не менее 100 групп и скоплений галактик. Местная группа находится на его окраине.',
      zh: '至少 100 个星系群与星系团，本星系群位于其边缘。',
    },
  },
  {
    id: 'bootes', d: 330e6 * LY, kind: 'web', cat: 'structure', dist: 700e6 * LY, wiki: 'Boötes_Void',
    look: { c: ['#6a5aff', '#ffc0a0', '#1a1040'], p: [4, 1, 0, 0], ext: 1.1, seed: 19 },
    name: { en: 'Boötes Void', ru: 'Войд Волопаса', zh: '牧夫座空洞' },
    fact: {
      en: '"The Great Nothing": a region almost empty of galaxies. Had the Milky Way been at its centre, we\'d have discovered other galaxies only in the 1960s.',
      ru: '«Великое Ничто» — область, почти лишённая галактик. Окажись Млечный Путь в её центре, о других галактиках мы узнали бы только в 1960-х.',
      zh: '“大虚无”：一个几乎空无一星系的区域。若银河系位于其中心，我们直到 1960 年代才会发现其他星系。',
    },
  },
  {
    id: 'laniakea', d: 520e6 * LY, kind: 'web', cat: 'structure', dist: null, wiki: 'Laniakea_Supercluster',
    look: { c: ['#5aa0ff', '#ffd08a', '#1a2a6a'], p: [5, 0, 1, 0], ext: 1.05, seed: 23 },
    name: { en: 'Laniakea Supercluster', ru: 'Сверхскопление Ланиакея', zh: '拉尼亚凯亚超星系团' },
    fact: {
      en: 'Our cosmic home: 100,000 galaxies flowing toward the Great Attractor. The name is Hawaiian for "immeasurable heaven".',
      ru: 'Наш космический дом: 100 000 галактик, «стекающих» к Великому аттрактору. Название по-гавайски значит «необъятные небеса».',
      zh: '我们的宇宙家园：10 万个星系正流向“巨引源”。其名在夏威夷语中意为“无尽的天堂”。',
    },
  },
  {
    id: 'sloanwall', d: 1.38e9 * LY, kind: 'web', cat: 'structure', dist: 1e9 * LY, wiki: 'Sloan_Great_Wall',
    look: { c: ['#b07aff', '#ffe0b0', '#2a1050'], p: [6, 0, 0, 1], ext: 1.05, seed: 31 },
    name: { en: 'Sloan Great Wall', ru: 'Великая стена Слоуна', zh: '斯隆长城' },
    fact: {
      en: 'A gigantic sheet of galaxies 1.4 billion light-years long, found in 2003.',
      ru: 'Гигантская «стена» из галактик длиной 1,4 млрд световых лет, открытая в 2003 году.',
      zh: '一道长达 14 亿光年的巨大星系“幕墙”，于 2003 年发现。',
    },
  },
  {
    id: 'herculeswall', d: 10e9 * LY, kind: 'web', cat: 'structure', dist: 10e9 * LY, wiki: 'Hercules–Corona_Borealis_Great_Wall',
    look: { c: ['#ff7ad0', '#ffe8c0', '#300a40'], p: [8, 0, 0, 1], ext: 1.05, seed: 43 },
    name: { en: 'Hercules–Corona Borealis Great Wall', ru: 'Великая стена Геркулес — Северная Корона', zh: '武仙-北冕座长城' },
    fact: {
      en: 'Possibly the largest structure in the universe: a cluster of gamma-ray bursts about 10 billion light-years across.',
      ru: 'Возможно, крупнейшая структура во Вселенной: скопление гамма-всплесков размером около 10 млрд световых лет.',
      zh: '可能是宇宙中最大的结构：一个横跨约 100 亿光年的伽马射线暴团。',
    },
  },
  {
    id: 'universe', d: 93e9 * LY, kind: 'cmb', cat: 'universe', dist: null, wiki: 'Observable_universe',
    look: { c: ['#1a3aff', '#ff8a2a', '#ffe08a', '#7a1a8a'], ext: 1.1 },
    name: { en: 'Observable Universe', ru: 'Наблюдаемая Вселенная', zh: '可观测宇宙' },
    fact: {
      en: 'Everything we could ever see: 93 billion light-years across, about 2 trillion galaxies. Its edge is the afterglow of the Big Bang.',
      ru: 'Всё, что мы в принципе можем увидеть: 93 млрд световых лет в поперечнике и около 2 трлн галактик. Её граница — остаточное свечение Большого взрыва.',
      zh: '我们所能看到的一切：横跨 930 亿光年，约 2 万亿个星系。它的边界是大爆炸的余晖。',
    },
  },
];

export const UNITS = { KM, AU, LY, RSUN };
