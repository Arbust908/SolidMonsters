import Counter from '@/components/Counter';
import type { Component } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';

// import styles from "./Home.module.scss";

const Home: Component = () => {
  return (
    <section>
      <h2>Home</h2>
      <Counter />
    </section>
  );
};

export default Home;
