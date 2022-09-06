export type Role = 'Controller' | 'Defender' | 'Lurker' | 'Scout' | 'Sniper' | 'Striker' | 'Support';
export type Type = 'Standard' | 'Minion' | 'Elite' | 'Solo';
export type Size = 'Tiny' | 'Small' | 'Medium' | 'Large' | 'Huge' | 'Gargantuan';
export type Order = 'Chaotic' | 'Neutral' | 'Lawful';
export type Morality = 'Evil' | 'Neutral' | 'Good';
export type Alignment = `${Order} ${Morality}` | 'Unaligned' | 'Neutral';
export type Dice = `${number}d${number}`;
export interface Trait extends Action {}
export interface Power extends Action {}
export interface Stat {
  name: string;
  value: number;
  symbol: string;
  modifier: number;
}
export interface Save {
  name: string;
  symbol: string;
  modifier: number;
}
export interface Skill extends Save {
  is_proficient: boolean;
}
export interface Action {
  name: string;
  description: string;
  is_legendary?: boolean;
  is_recharge?: boolean;
  is_multi_attack?: boolean;
  is_reaction?: boolean;
  is_lair?: boolean;
  is_regional?: boolean;
  is_class?: boolean;
  lore?: string;
}

export interface LegendaryAction extends Action {
  cost: number;
  is_legendary: true;
}

export interface Monster {
  name: string;
  level: number;
  role: Role;
  traits: Trait[];
  powers: Power[];
  type: Type;
  size: Size;
  alignment: Alignment;
  armor_class: number;
  hit_points: number;
  hit_dice: Dice;
  speed: number;
  stats: Stat[];
  saving_throws: Save[];
  skills: Skill[];
  damage_vulnerabilities: string[];
  damage_resistances: string[];
  damage_immunities: string[];
  condition_immunities: string[];
  senses: string[];
  languages: string[];
  challenge_rating: number;
  actions: Action[];
  legendary_actions: LegendaryAction[];
  lore: string;
  source: string;
  page: number;
  is_legendary: boolean;
  is_unique: boolean;
  has_lair: boolean;
}
