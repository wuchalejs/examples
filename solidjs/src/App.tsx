import { createEffect, createSignal, type Component } from 'solid-js';
import { loadLocale } from 'wuchale/load-utils'
import './locales/loader.js' // so that the loader is registered
import Counter from './Counter.jsx'

import styles from './App.module.css';

const App: Component = () => {
    const [locale, setLocale] = createSignal('en')
    createEffect(() => {
        loadLocale(locale())
    })
    return (
        <div class={styles.App}>
            <header class={styles.header}>
                <button onClick={() => setLocale(locale() === 'en' ? 'es' : 'en')}>{locale()}</button>
                <Counter />
                <p>
                    Edit 18 <code>src/App.tsx</code> and save to reload.
                </p>
                <a
                    class={styles.link}
                    href="https://github.com/solidjs/solid"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn Solid
                </a>
            </header>
        </div>
    );
};

export default App;
