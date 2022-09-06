import type { Component } from 'solid-js';

interface ActionProps {
  name: string;
  description: any;
}

const Action: Component<ActionProps> = (props: ActionProps) => {
  const { name, description } = props;

  return (
    <div class="monster-action">
      <p>
        <span class="name">{name}.</span> <span class="detail">{description}</span>
      </p>
    </div>
  );
};

export default Action;
