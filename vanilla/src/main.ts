
import './style.css'
import { setupCounter } from './counter.ts'
import './locales/loader.ts'
import { loadLocale } from 'wuchale/load-utils'

let locale = 'en'

const setHTML = async () => {
    await loadLocale(locale)
    document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
      <div>
        <h1>Vite + TypeScript</h1>
        <div class="card">
          <button id="locale" type="button">${locale}</button>
        </div>
        <div class="card">
          <button id="counter" type="button"></button>
        </div>
        <p>${'Click on the Vite and TypeScript logos to learn more'}</p>
      </div>
    `
    setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
    const lbtn = document.querySelector<HTMLButtonElement>('#locale')!
    lbtn.addEventListener('click', () => {
        locale = locale == 'en' ? 'es' : 'en'
        setHTML()
    })
}

await setHTML()

