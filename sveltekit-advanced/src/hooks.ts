import type {Reroute} from '@sveltejs/kit'
import {matchUrl} from './locales/single.url.js'

export const reroute: Reroute = ({url}) => {
    const {path} = matchUrl(url)
    if (path == null) {
        return url.pathname
    }
    return path
}
