'use client'
import { useEffect, useState } from 'react'
import './App.css'
import './locales/main.loader.js'
import { loadLocale } from 'wuchale/load-utils'
import Counter from './Counter'

function App() {
    const [locale, setLocale] = useState('en')
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(false)
        loadLocale(locale).then(() => setLoaded(true))
    }, [locale])

    if (!loaded) {
        // @wc-ignore
        return 'Loading locale...'
    }

    return (
        <>
            <button onClick={() => setLocale(locale => locale === 'en' ? 'es' : 'en')}>{locale}</button>
            <h1>Vite + React</h1>
            <div className="card">
                <Counter />
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </>
    )
}

export default App
