import { createEffect, createSignal, Show, type Component } from 'solid-js';
import { loadLocale } from 'wuchale/load-utils'
import './locales/loader.js' // so that the loader is registered
import Counter from './Counter.jsx'

import styles from './App.module.css';

const App: Component = () => {
    const [locale, setLocale] = createSignal('en')
    const [loaded, setLoaded] = createSignal(false)
    createEffect(() => {
        setLoaded(false)
        loadLocale(locale()).then(() => setLoaded(true))
    })
    return (
        <div class={styles.App}>
            <Show when={loaded()} fallback={/* @wc-ignore */ 'Loading catalog...'}>
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
            </Show>
        </div>
    );
};

export default App;
