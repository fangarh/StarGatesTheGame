import type { ConceptArt, HomePageData } from '../types';

// ============================================================================
// Концепт-арты
// ============================================================================
// TODO: Добавить концепт-арты после создания визуального стиля игры

export const conceptArts: ConceptArt[] = [
  // TODO: Добавить концепт-арты
  // {
  //   id: '...',
  //   title: '...',
  //   description: '...',
  //   imageUrl: '/assets/concepts/...',
  //   category: 'characters' | 'environments' | 'vehicles' | 'weapons' | 'ui' | 'other',
  //   tags: ['...'],
  // },
];

// ============================================================================
// Данные для главной страницы
// ============================================================================

export const homePageData: HomePageData = {
  hero: {
    title: 'StarGatesTheGame',
    tagline: 'Стройте империю. Нанимайте героев. Исследуйте галактику.',
    ctaPrimary: {
      label: 'Об игре',
      path: '/overview',
    },
    ctaSecondary: {
      label: 'Wishlist в Steam',
      path: '#',
    },
  },
  gameInfo: {
    title: 'StarGatesTheGame',
    tagline: 'Стройте империю. Нанимайте героев. Исследуйте галактику.',
    description: `
      Классическая 4X-стратегия с элементами RPG.

      Молодые расы галактики обнаружили Portal Network — сеть древних порталов,
      оставленных цивилизацией Architects. Исследуйте галактику, нанимайте героев,
      развивайте технологии и определяйте судьбу цивилизаций.
    `,
    genre: ['4X Strategy', 'Turn-Based Strategy', 'RPG', 'Sci-Fi'],
    platforms: ['PC (Windows)'],
    targetAudience: 'Любители стратегий и RPG',
    features: [
      {
        id: 'feat-heroes',
        title: 'Герои с уникальными способностями',
        description: 'Нанимайте и прокачивайте героев с уникальными навыками',
      },
      {
        id: 'feat-portals',
        title: 'Portal Network',
        description: 'Исследуйте галактику через сеть древних порталов',
      },
      {
        id: 'feat-tech',
        title: 'Технологическое развитие',
        description: 'Развивайте технологии от мечей к огнестрельному оружию',
      },
      {
        id: 'feat-factions',
        title: 'Фракции и дипломатия',
        description: 'Взаимодействуйте с разными фракциями',
      },
    ],
    steamUrl: undefined,
    trailerUrl: undefined,
  },
  featuredConcepts: conceptArts.slice(0, 6),
};
