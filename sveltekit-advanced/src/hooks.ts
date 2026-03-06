import type {Reroute} from '@sveltejs/kit'
import {matchUrl} from './locales/single.url.js'
import { deLocalizeDefault } from 'wuchale/url'
import { locales } from './locales/data.js'

export const reroute: Reroute = ({url}) => {
    const [upath, locale] = deLocalizeDefault(url.pathname, locales)
    const {path} = matchUrl(upath, locale)
    return path ?? url.pathname
}
