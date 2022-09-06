import type { Component } from 'solid-js';

interface SectionProps {
  title: string;
  children: any;
}

const ActionSection: Component<SectionProps> = (props: SectionProps) => {
  const { title, children } = props;

  return (
    <>
      <h5 class="h5-traits">{title}</h5>
      <div class="h5-border"></div>
      {children}
    </>
  );
};

export default ActionSection;
