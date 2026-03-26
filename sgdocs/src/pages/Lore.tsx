import { useState } from 'react';
import { loreData, conceptArts } from '../data';
import { Section, SectionHeader, Card, CardBody, CardTitle, CardDescription, Gallery } from '../components/ui';
import type { Faction } from '../types';
import './Lore.css';

type LoreTab = 'worlds' | 'history' | 'factions' | 'characters';

const tabLabels: Record<LoreTab, string> = {
  worlds: 'Миры',
  history: 'История',
  factions: 'Фракции',
  characters: 'Персонажи',
};

function getFactionColor(alignment: Faction['alignment']): string {
  switch (alignment) {
    case 'good':
      return '#3a86ff';
    case 'neutral':
      return '#ffb703';
    case 'evil':
      return '#d00000';
    case 'unknown':
      return '#7b2cbf';
    default:
      return '#8b8ba7';
  }
}

export function LorePage() {
  const [activeTab, setActiveTab] = useState<LoreTab>('worlds');

  const renderContent = () => {
    switch (activeTab) {
      case 'worlds':
        return (
          <div className="worlds-grid">
            {loreData.worlds.map((world) => (
              <Card key={world.name} className="world-card" hoverable>
                {world.imageUrl && (
                  <img src={world.imageUrl} alt={world.name} className="world-image" />
                )}
                <CardBody>
                  <CardTitle>{world.name}</CardTitle>
                  <CardDescription>{world.description}</CardDescription>
                </CardBody>
              </Card>
            ))}
          </div>
        );

      case 'history':
        return (
          <div className="timeline">
            {loreData.history.map((event) => (
              <div key={event.id} className="timeline-item">
                <div className="timeline-marker"></div>
                <div className="timeline-content">
                  <span className="timeline-year">{event.year}</span>
                  <span className="timeline-era">{event.era}</span>
                  <h3 className="timeline-title">{event.title}</h3>
                  <p className="timeline-description">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case 'factions':
        return (
          <div className="factions-grid">
            {loreData.factions.map((faction) => (
              <Card key={faction.id} className="faction-card">
                <div
                  className="faction-header"
                  style={{ borderColor: getFactionColor(faction.alignment) }}
                >
                  <div className="faction-colors">
                    {faction.colors.map((color, i) => (
                      <span
                        key={i}
                        className="faction-color"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                  <span
                    className="faction-alignment"
                    style={{ color: getFactionColor(faction.alignment) }}
                  >
                    {faction.alignment === 'good' && 'Добро'}
                    {faction.alignment === 'neutral' && 'Нейтрал'}
                    {faction.alignment === 'evil' && 'Зло'}
                    {faction.alignment === 'unknown' && 'Неизвестно'}
                  </span>
                </div>
                <CardBody>
                  <CardTitle>{faction.name}</CardTitle>
                  <CardDescription>{faction.description}</CardDescription>
                </CardBody>
              </Card>
            ))}
          </div>
        );

      case 'characters':
        return (
          <div className="characters-grid">
            {loreData.characters.map((char) => (
              <Card key={char.id} className="character-card" hoverable>
                {char.imageUrl && (
                  <img src={char.imageUrl} alt={char.name} className="character-image" />
                )}
                <CardBody>
                  <CardTitle>{char.name}</CardTitle>
                  <span className="character-role">{char.role}</span>
                  <CardDescription>{char.description}</CardDescription>
                  {char.abilities && char.abilities.length > 0 && (
                    <div className="character-abilities">
                      <span className="abilities-label">Способности:</span>
                      <div className="abilities-list">
                        {char.abilities.map((ability) => (
                          <span key={ability} className="ability-tag">{ability}</span>
                        ))}
                      </div>
                    </div>
                  )}
                </CardBody>
              </Card>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="lore-page">
      {/* Hero */}
      <section className="lore-hero">
        <div className="lore-hero-content">
          <h1 className="lore-title">Лор и Мир</h1>
          <p className="lore-tagline">
            Погрузитесь в историю вселенной Star Gates
          </p>
        </div>
      </section>

      {/* Tabs */}
      <Section padding="sm">
        <div className="lore-tabs">
          {(Object.keys(tabLabels) as LoreTab[]).map((tab) => (
            <button
              key={tab}
              className={`lore-tab ${activeTab === tab ? 'lore-tab-active' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tabLabels[tab]}
            </button>
          ))}
        </div>
      </Section>

      {/* Content */}
      <Section padding="lg">
        {renderContent()}
      </Section>

      {/* Concept Arts */}
      <Section variant="alt" padding="lg">
        <div id="concepts"></div>
        <SectionHeader
          title="Концепт-арты"
          subtitle="Визуальное воплощение мира"
        />
        <Gallery items={conceptArts} />
      </Section>
    </div>
  );
}
