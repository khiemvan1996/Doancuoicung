export const COLOR_VAR_KEYS = [
  { key: '--primary-color', label: 'Primary' },
  { key: '--secondary-color', label: 'Secondary' },
  { key: '--accent-color', label: 'Accent' },
  { key: '--bg-color-main', label: 'Background primary' },
  { key: '--bg-color-sec', label: 'Background secondary' },
  { key: '--bg-color-accent', label: 'Background accent' },
  { key: '--hover-color', label: 'Hover color' },
  { key: '--title-color', label: 'Title' },
  { key: '--text-color', label: 'Text' },
  { key: '--phonetic-color', label: 'Phonetic' },
];

export const COINS = {
  CORRECT_GAME_PER_QUES: 10,
};

export const DEFAULTS = {
  VOICE_URI: 'Google US English',
  VOICE_SPEED: 1,
  VOICE_VOLUME: 1,
  IMAGE_SRC:
    'https://res.cloudinary.com/dynonary/image/upload/v1625136714/dynonary/default-image.png',
};

export const LINKS = {
  FB: 'https://fb.com/khiemvan1996',
  WEBSITE: 'https://fb.com/khiemvan1996',
};

export const MAX = {
  EMAIL_LEN: 100,
  PASSWORD_LEN: 40,
  NAME_LEN: 50,
  USERNAME_LEN: 110,
  SEARCH_LEN: 50,
  WORD_LEN: 50,
  PHONETIC_LEN: 50,
  MEAN_WORD_LEN: 100,
  EXAMPLE_WORD_LEN: 250,
  SYNONYMS_WORD_LEN: 100,
  NOTE_WORD_LEN: 100,
  IMG_SIZE: 2, // 2 MB
  SENTENCE_LEN: 200,
  SENTENCE_MEAN_LEN: 300,
  SENTENCE_NOTE_LEN: 100,
  USER_COIN: 99999,
  VERIFY_CODE: 6,
};

export const MIN = {
  PASSWORD_LEN: 6,
};

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  FORGOT_PASSWORD: '/forgot-password',
  LOGOUT: '/logout',
  IPA: '/IPA',
  CONTRIBUTION: '/contribution',
  FLASHCARD: '/flashcard',
  DYNO_DICTIONARY: '/dyno-dictionary',
  TOEIC_DICTIONARY: '/imagetotext',
  COMMUNICATION_PHRASE: '/1000-communication-phrase',
  GRAMMAR: '/grammar',
  FAVORITE: '/favorite-vocab',
  IRREGULAR: '/irregular-verbs',
  USER_ACCOUNT: '/profile',
  LEADERBOARD: '/leaderboard',
  IMAGETOTEXT: '/imagetotext',
  GAMES: {
    HOME: '/games',
    CORRECT_WORD: '/games/correct-word',
    CORRECT_WORD_ADV: '/games/correct-word-advance',
    MILLIONAIRE: '/games/who-is-a-millionaire',
    JIGSAW: '/games/jigsaw-puzzle',
    FAST_GAME: '/games/fast-game',
    WORD_MATCHING: '/games/word-match',
    GRAMMARLY: '/games/grammarly',
    VIP: '/games/vip',
  },
  RECOMMEND: '/recommend',
  ADMIN:'/admin',
  DASHBOARD:'/dashboard',
};

export const REGEX = {
  NAME: /^[^\d~`!@#$%^&*\(\)\\\|\.,\?\/\-\+\=\_]+$/gi,
};

export const THEME_KEYS = {
  ROOT_KEY: 'data-theme',
  LS_KEY: 'theme',
  PALETTE_KEY: 'palettes',
  LIGHT: 'light',
  DARK: 'dark',
  CUSTOM: 'custom',
};

export const UX = {
  DELAY_TIME: 1500,
  DELAY_ANSWER: 3000,
};

export const VOICE_KEYS = {
  LS_KEY: 'voice',
};

export const WORD_TYPES = [
  {
    value: 'n',
    label: 'Noun - Danh t???',
  },
  {
    value: 'adj',
    label: 'Adjective - T??nh t???',
  },
  {
    value: 'adv',
    label: 'Adverb - Tr???ng t???',
  },
  {
    value: 'v',
    label: 'Verb - ?????ng t???',
  },
  {
    value: 'pro',
    label: 'Pronoun - ?????i t???',
  },
  {
    value: 'con',
    label: 'Conjunction - Li??n t???',
  },
  {
    value: 'pre',
    label: 'Preposition - Gi???i t???',
  },
  {
    value: 'det',
    label: 'Determiners - H???n ?????nh t???',
  },
];

export const WORD_LEVELS = [
  {
    value: '0',
    label: 'Ch??a x??c ?????nh',
  },
  {
    value: 'A1',
    label: 'A1',
  },
  {
    value: 'A2',
    label: 'A2',
  },
  {
    value: 'B1',
    label: 'B1',
  },
  {
    value: 'B2',
    label: 'B2',
  },
  {
    value: 'C1',
    label: 'C1',
  },
  {
    value: 'C2',
    label: 'C2',
  },
];

export const WORD_SPECIALTY = [
  { value: '0', label: 'Kh??ng' },
  { value: '1', label: 'C??ng ngh??? sinh h???c (Biotechnology)' },
  { value: '6', label: 'C??ng ngh??? th??ng tin (Information Technology)' },
  { value: '14', label: 'C??ng ngh??? th???c ph???m (Food Technology)' },
  { value: '20', label: 'Gi???i tr?? (Entertainment)' },
  { value: '3', label: 'Kinh t??? h???c (Economics)' },
  { value: '2', label: 'K??? to??n (Accounting)' },
  { value: '8', label: 'K??? thu???t ho?? h???c (Chemical Engineering)' },
  { value: '19', label: 'M??? thu???t (Fine Arts Industry)' },
  { value: '12', label: 'Ng??nh Marketing' },
  { value: '18', label: 'Qu???n tr??? kh??ch s???n (Hotel Management)' },
  { value: '7', label: 'Qu???n tr??? kinh doanh (Business Adminstration)' },
  { value: '5', label: 'Qu???n tr??? nh??n l???c (Human Resource Management)' },
  { value: '13', label: 'Thi???t k??? (Design UI/UX)' },
  { value: '4', label: 'Th????ng m???i qu???c t??? (International Trade)' },
  { value: '10', label: 'Th????ng m???i ??i???n t??? (E-Commerce)' },
  { value: '9', label: 'Ti???ng Anh th????ng m???i (Business English)' },
  { value: '11', label: 'T??i ch??nh ng??n h??ng (Finance & Banking)' },
  { value: '16', label: 'V??n ho?? h???c (Culturology)' },
  { value: '17', label: 'X??y d???ng (Construction Industry)' },
  { value: '15', label: 'X?? h???i h???c (Sociology)' },
];
