import { page } from '$app/state'

export default () => page.data.locale ?? 'en'
