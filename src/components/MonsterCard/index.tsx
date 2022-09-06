import { Monster } from '@/types/Monster';
import type { Component } from 'solid-js';
import { For, Show } from 'solid-js';
import Action from '../Action';
import ActionSection from '../ActionSection';

import styles from './MonsterCard.module.scss';

const MonsterCard: Component<Monster> = (props: Monster) => {
  const {
    name,
    level,
    role,
    traits,
    powers,
    type,
    size,
    alignment,
    armor_class,
    hit_points,
    hit_dice,
    speed,
    stats,
    saving_throws,
    skills,
    damage_vulnerabilities,
    damage_resistances,
    damage_immunities,
    condition_immunities,
    senses,
    languages,
    challenge_rating,
    actions,
    legendary_actions,
    lore,
    source,
    page,
    is_legendary,
    is_unique,
    has_lair,
  } = props;

  return (
    <div class={`${styles.card_wrapper} monster-preview`}>
      <div class={`monster theme-giffyglyph columns-1 quickstart rank-${type}`}>
        <div class="monster-contents">
          <div class="monster-contents-header">Pancho</div>
          <div class="monster-contents-body">
            <div class="monster-header">
              <div>
                <h4>{name}</h4>
                <p class="monster-description">
                  {size} humanoid, {alignment}
                </p>
              </div>
              <div class="monster-quickstart">
                <p>
                  Level {level} {role}
                  <br /> {type} <span class="solo-only">vs 4 </span>(50 XP)
                </p>
              </div>
            </div>
            <hr />
            <ul>
              <li class="monster-ac">
                <p>
                  <span class="label">Armor Class</span>
                  <span> {armor_class} </span>
                </p>
              </li>
              <li class="monster-hp">
                <p>
                  <span class="label">Hit Points</span>
                  <span>
                    {' '}
                    {hit_points} ({hit_dice}){' '}
                  </span>
                </p>
              </li>
              <li class="monster-speed">
                <p>
                  <span class="label">Speed</span>
                  <span>{speed} ft.</span>
                </p>
              </li>
            </ul>
            <hr />
            <div class="monster-abilities">
              <For each={stats}>
                {({ symbol, name, value, modifier: mod }) => {
                  const formatted_mod = mod > 0 ? `+${mod}` : mod;

                  return (
                    <div class="monster-ability">
                      <span class="label">{symbol}</span>
                      <span>
                        {value} <span class="modifier">({formatted_mod})</span>
                      </span>
                    </div>
                  );
                }}
              </For>
            </div>
            <hr />
            <ul class="monster-stats">
              <li class="monster-saves">
                <p>
                  <span class="label">Saving Throws</span>
                  <span>Str +3, Dex/Con +1, Int/Wis/Cha -2</span>
                </p>
              </li>
              <li class="monster-skills">
                <p>
                  <span class="label">Skills</span>
                  <span>
                    <For each={skills}>
                      {({ name, modifier: mod }, i) => {
                        const formatted_mod = mod > 0 ? `+${mod}` : mod;
                        const is_last = i() === skills.length - 1;

                        return (
                          <>
                            {name} {formatted_mod} {is_last ? '' : ', '}
                          </>
                        );
                      }}
                    </For>
                  </span>
                </p>
              </li>
              <li class="monster-senses">
                <p>
                  <span class="label">Senses</span>
                  <For each={senses}>{(sense) => <span> {sense} </span>}</For>
                </p>
              </li>
              <li class="monster-languages">
                <p>
                  <span class="label">Languages</span>
                  <span>{languages.join(', ')}</span>
                </p>
              </li>
              <li class="monster-challenge">
                <p>
                  <span class="label">Challenge</span>
                  <span>{challenge_rating}</span>
                </p>
              </li>
            </ul>
            <hr />
            <ul class="quickstart-helpers">
              <li>
                <p>
                  <span class="label">Attacks</span>
                  <span>
                    +5 to hit. <i>Hit:</i> 3 damage
                  </span>
                </p>
              </li>
              <li>
                <p>
                  <span class="label">Attack DCs</span>
                  <span>Primary DC 13, Secondary DC 10</span>
                </p>
              </li>
            </ul>
            <hr />
						<Show when={traits.length > 0}>
							<ActionSection title='Traits'>
								<For each={traits}>
									{(trait) => <Action {...trait} />}
								</For>
							</ActionSection>
            </Show>
						<Show when={actions.length > 0}>
							<ActionSection title='Actions'>
								<For each={actions}>
									{(action) => <Action {...action} />}
								</For>
							</ActionSection>
            </Show>
            <p class="monster-footer">Made with Love by GatoBuho</p>
          </div>
          <div class="monster-contents-footer">
            <p class="monster-footer">Based on Giffyglyph's Monster Maker</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MonsterCard;
