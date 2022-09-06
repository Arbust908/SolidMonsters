import { Component, createMemo } from 'solid-js';
import { createSignal, createEffect } from 'solid-js';

import styles from './Counter.module.scss';

const Counter: Component = () => {
  const [counter, setCounter] = createSignal(0);

  createEffect(() => {
    console.log(counter());
  });
  setCounter(counter() + 1);
  const squared = createMemo(() => counter() ** 2);

  const increment = () => setCounter(counter() + 1);
  const decrement = () => setCounter(counter() - 1);

  return (
    <section class={styles.counter}>
      <h2>Counter</h2>
      <button onClick={increment}>+</button>
      <p> {counter()} </p>
      <p> {squared()} </p>
      <button onClick={decrement}>-</button>
    </section>
  );
};

export default Counter;
