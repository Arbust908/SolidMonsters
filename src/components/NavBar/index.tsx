import type { Component } from 'solid-js';
import { NavLink } from '@solidjs/router';

import logo from '../../logo.svg';
import styles from './NavBar.module.scss';

const NavBar: Component = () => {
  return (
    <header class={styles.navbar}>
      <img src={logo} class="w-8 h-8" alt="logo" />
      <nav>
        <NavLink class="rounded px-4 text-indigo-500" activeClass="bg-indigo-500 text-slate-100" href="/" end>
          Home
        </NavLink>
        <NavLink class="rounded px-4 text-indigo-500" activeClass="bg-indigo-500 text-slate-100" href="/user">
          User
        </NavLink>
      </nav>
    </header>
  );
};

export default NavBar;
