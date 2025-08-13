'use client'
import { useEffect, useState } from 'react'
import './App.css'
import { loadLocale } from 'wuchale/load-utils'

function App() {
    const [locale, setLocale] = useState('en')
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        setLoaded(false)
        loadLocale(locale).then(() => setLoaded(true))
    }, [locale])

    const [count, setCount] = useState(0)

    if (!loaded) {
        // @wc-ignore
        return 'Loading locale...'
    }

    return (
        <>
            <button onClick={() => setLocale(locale => locale === 'en' ? 'es' : 'en')}>{locale}</button>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
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
