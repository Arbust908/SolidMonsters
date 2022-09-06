import MonsterCard from '@/components/MonsterCard';
import MonsterForm from '@/components/MonsterForm';
import { Monster } from '@/types/Monster';
import type { Component } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';

import styles from './User.module.scss';

const User: Component = () => {
  const monster: Monster = {
    name: 'Goblin',
    level: 1,
    role: 'Controller',
    traits: [],
    powers: [],
    type: 'Minion',
    size: 'Small',
    alignment: 'Neutral',
    armor_class: 13,
    hit_points: 7,
    hit_dice: '1d6',
    speed: 30,
    stats: [
      { name: 'Strength', symbol: 'STR', value: 8, modifier: -1 },
      { name: 'Dexterity', symbol: 'DEX', value: 14, modifier: 2 },
      { name: 'Constitution', symbol: 'CON', value: 10, modifier: 0 },
      { name: 'Intelligence', symbol: 'INT', value: 10, modifier: 0 },
      { name: 'Wisdom', symbol: 'WIS', value: 8, modifier: -1 },
      { name: 'Charisma', symbol: 'CHA', value: 8, modifier: -1 },
    ],
    saving_throws: [
      { name: 'Dexterity', symbol: 'DEX', modifier: 2 },
      { name: 'Constitution', symbol: 'CON', modifier: 0 },
    ],
    skills: [
      { name: 'Acrobatics', symbol: 'DEX', is_proficient: true, modifier: 2 },
      { name: 'Stealth', symbol: 'DEX', is_proficient: true, modifier: 2 },
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: ['Passive Perception 9'],
    languages: ['Common'],
    challenge_rating: 0.25,
    actions: [
      {
        name: 'Scimitar',
        description: 'Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6 + 2) slashing damage.',
      },
    ],
    legendary_actions: [],
    lore: '',
    source: '',
    page: -1,
    is_legendary: false,
    is_unique: false,
    has_lair: false,
  };

  return (
    <section>
      <div class={styles.wrapper}>
        <MonsterForm />
        <MonsterCard {...monster} />
      </div>
    </section>
  );
};

export default User;
