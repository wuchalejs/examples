// $cd .. && npm run serve
import express from 'express'
import { runWithLocale } from 'wuchale/load-utils/server'

const app = express()
const port = 5173

/**
 * @param {import("express-serve-static-core").Response<any, Record<string, any>, number>} res
 */
function respond(res) {
    const msg = 'Hello World!'
    res.send(`<p><a href="/">${'Home'}</a></p><p>${msg}</p>`)
}

const locales = ['en', 'es', 'fr']
const displayName = (/** @type {string} */ locale) => new Intl.DisplayNames([locale], {type: 'language'}).of(locale)
const list = locales.map(loc => `<div><a href="${loc}">${displayName(loc)}</a></div>`).join('\n')
const home = `
    <p>Greetings in:</p>
    ${list}
`

app.get('/', (_, res) => res.send(home))

app.get('/:locale', (req, res) => {
    runWithLocale(req.params.locale, () => respond(res))
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
