import type { Component } from 'solid-js';
import { lazy } from 'solid-js';
import { Routes, Route } from '@solidjs/router';
import { useI18n } from '@solid-primitives/i18n';

import styles from './App.module.scss';
import NavBar from './components/NavBar';

const Home = lazy(() => import('@/pages/Home'));
const User = lazy(() => import('@/pages/User'));

const App: Component = () => {
  const [t, { locale }] = useI18n();
  return (
    <div class={styles.app}>
      <NavBar />
      <main class={styles.main}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
        </Routes>
      </main>
      <footer class={styles.footer}>
        <p class="text-center text-gray-500 text-xs">© 2021 - {t('hello')}</p>
        <nav>
          <button
            class={`${styles.footer__btn} ${locale() === 'en' ? styles.selected : ''}`}
            onClick={() => locale('en')}
          >
            En
          </button>
          <button
            class={`${styles.footer__btn} ${locale() === 'es' ? styles.selected : ''}`}
            onClick={() => locale('es')}
          >
            Es
          </button>
        </nav>
      </footer>
    </div>
  );
};

export default App;
