import { Role, Type } from '@/types/Monster';
import { Component } from 'solid-js';

import styles from './MonsterForm.module.scss';

interface MonsterOptions {
  name: string;
  level: number;
  roles: string;
  traits: string[];
  powers: string[];
  type: string;
}

interface MonsterFormProps {
  options: MonsterOptions;
  onChange: (options: MonsterOptions) => void;
  onSubmit: (options: MonsterOptions) => void;
}

const MonsterForm: Component<Partial<MonsterFormProps>> = (props: Partial<MonsterFormProps>) => {
  const min_monster_level = -5;
  const max_monster_level = 35;

  const monster_levels = Array.from(
    { length: max_monster_level - min_monster_level + 1 },
    (_, i) => i + min_monster_level
  );

  const roles: Role[] = ['Controller', 'Defender', 'Lurker', 'Scout', 'Sniper', 'Striker', 'Support'];

  const traits = ['Adhesive'];

  const powers = ['Berserk'];

  const types: Type[] = ['Minion', 'Elite', 'Standard', 'Solo'];

  const handleChange = (event: Event) => {
    console.log(event);
  };

  const handleSubmit = (event: Event) => {
    console.log(event);
  };

  return (
    <section>
      <h2>Monster Form</h2>
      <form class={styles.form} action="" onSubmit={handleSubmit}>
        <select name="level" id="level">
          <option value="">Select monster level</option>
          {monster_levels && monster_levels.map((level) => <option value={level}>{level}</option>)}
        </select>
        <select name="role" id="role">
          <option value="">Select role</option>
          {roles && roles.map((role) => <option value={role}>{role}</option>)}
        </select>
        <select name="trait" id="trait">
          <option value="">Select trait</option>
          {traits && traits.map((trait) => <option value={trait}>{trait}</option>)}
        </select>
        <select name="power" id="power">
          <option value="">Select power</option>
          {powers && powers.map((power) => <option value={power}>{power}</option>)}
        </select>
        <select name="type" id="type">
          <option value="">Select type</option>
          {types && types.map((type) => <option value={type}>{type}</option>)}
        </select>
      </form>
    </section>
  );
};

export default MonsterForm;
