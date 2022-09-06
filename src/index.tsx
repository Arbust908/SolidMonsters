/* @refresh reload */
import { render } from 'solid-js/web';
import { lazy } from 'solid-js';
import { Router } from '@solidjs/router';
import { I18nContext, createI18nContext } from '@solid-primitives/i18n';

import './_reset.css';
import './index.css';
import 'uno.css';

const App = lazy(() => import('./App'));

const dict = {
  en: {
    hello: 'Hello',
  },
  es: {
    hello: 'Hola',
  },
};

const value = createI18nContext(dict, 'en');

const documentHeight = () => {
  const doc = document.documentElement;
  doc.style.setProperty('--doc-height', `${window.innerHeight}px`);
};
if (document) {
  documentHeight();
}
if (window) {
  window.addEventListener('resize', documentHeight);
}
render(
  () => (
    <I18nContext.Provider value={value}>
      <Router>
        <App />
      </Router>
    </I18nContext.Provider>
  ),
  document.getElementById('root') as HTMLElement
);
