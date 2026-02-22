import {URLMatcher, getLocaleDefault} from "wuchale/url"
import {locales} from "./data.js"
import manifest from "./.wuchale/single.urls.js"
export const getLocale = (/** @type {URL} */ url) => getLocaleDefault(url, locales) ?? 'en'
export const matchUrl = URLMatcher(manifest, locales)