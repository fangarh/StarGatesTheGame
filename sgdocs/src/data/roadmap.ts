import type { RoadmapData } from '../types';

// ----------------------------------------------------------------------------
// Roadmap StarGatesTheGame
// ----------------------------------------------------------------------------
//
// Реалистичный план разработки (1 разработчик + LLM для генерации контента)
//
// Текущая дата: март 2026
//
// ----------------------------------------------------------------------------

export const roadmapData: RoadmapData = {
  phases: [
    {
      id: 'phase-preproduction',
      name: 'Pre-Production',
      description: 'Проработка концепции, дизайн-документ, прототип',
      milestones: [
        {
          id: 'milestone-concept',
          title: 'Концепт и дизайн',
          description: 'Создание основного концепта игры, GDD',
          status: 'in_progress',
          startDate: '2026-03-01',
          endDate: '2026-05-31',
          tasks: [
            // TODO: Задачи
          ],
        },
        {
          id: 'milestone-prototype',
          title: 'Прототипирование',
          description: 'Создание играбельного прототипа',
          status: 'planned',
          startDate: '2026-06-01',
          endDate: '2026-08-31',
          tasks: [
            // TODO: Задачи
          ],
        },
      ],
    },
    {
      id: 'phase-alpha',
      name: 'Production — Alpha',
      description: 'Разработка core-систем и базового контента',
      milestones: [
        {
          id: 'milestone-core',
          title: 'Ядро игры',
          description: 'Реализация основных игровых систем',
          status: 'planned',
          startDate: '2026-09-01',
          endDate: '2026-11-30',
          tasks: [
            // TODO: Задачи
          ],
        },
        {
          id: 'milestone-hero-system',
          title: 'Система героев',
          description: 'Найм, способности, прокачка героев',
          status: 'planned',
          startDate: '2026-12-01',
          endDate: '2027-02-28',
          tasks: [
            // TODO: Задачи
          ],
        },
        {
          id: 'milestone-portal-network',
          title: 'Portal Network',
          description: 'Система порталов, исследование, колонизация',
          status: 'planned',
          startDate: '2027-01-01',
          endDate: '2027-03-31',
          tasks: [
            // TODO: Задачи
          ],
        },
        {
          id: 'milestone-tech-tree',
          title: 'Древо технологий',
          description: 'Развитие от мечей к огнестрелу',
          status: 'planned',
          startDate: '2027-02-01',
          endDate: '2027-04-30',
          tasks: [
            // TODO: Задачи
          ],
        },
      ],
    },
    {
      id: 'phase-beta',
      name: 'Production — Beta',
      description: 'Создание контента, балансировка, полировка',
      milestones: [
        {
          id: 'milestone-content',
          title: 'Контент',
          description: 'Локации, фракции, сюжет',
          status: 'planned',
          startDate: '2027-05-01',
          endDate: '2027-10-31',
          tasks: [
            // TODO: Задачи
          ],
        },
        {
          id: 'milestone-balance',
          title: 'Баланс и полировка',
          description: 'Балансировка механик, оптимизация',
          status: 'planned',
          startDate: '2027-11-01',
          endDate: '2028-01-31',
          tasks: [
            // TODO: Задачи
          ],
        },
      ],
    },
    {
      id: 'phase-ea',
      name: 'Early Access',
      description: 'Запуск в Early Access, сбор обратной связи',
      milestones: [
        {
          id: 'milestone-ea-launch',
          title: 'Запуск Early Access',
          description: 'Публичный запуск в Steam',
          status: 'planned',
          startDate: '2028-02-01',
          endDate: '2028-03-31',
          tasks: [
            // TODO: Задачи
          ],
        },
        {
          id: 'milestone-ea-feedback',
          title: 'Сбор обратной связи',
          description: 'Итерации на основе отзывов игроков',
          status: 'planned',
          startDate: '2028-04-01',
          endDate: '2028-08-31',
          tasks: [
            // TODO: Задачи
          ],
        },
      ],
    },
    {
      id: 'phase-release',
      name: 'Release',
      description: 'Финальный релиз 1.0',
      milestones: [
        {
          id: 'milestone-release',
          title: 'Релиз 1.0',
          description: 'Финальная версия игры',
          status: 'planned',
          startDate: '2028-09-01',
          endDate: '2028-10-31',
          tasks: [
            // TODO: Задачи
          ],
        },
      ],
    },
    {
      id: 'phase-postrelease',
      name: 'Post-Release',
      description: 'Поддержка, патчи, DLC',
      milestones: [
        {
          id: 'milestone-support',
          title: 'Поддержка',
          description: 'Патчи и исправления',
          status: 'planned',
          startDate: '2028-11-01',
          endDate: '2029-12-31',
          tasks: [
            // TODO: Задачи
          ],
        },
        {
          id: 'milestone-dlc',
          title: 'DLC',
          description: 'Дополнительный контент',
          status: 'planned',
          startDate: '2029-01-01',
          endDate: '2029-12-31',
          tasks: [
            // TODO: Задачи
          ],
        },
      ],
    },
  ],
};
