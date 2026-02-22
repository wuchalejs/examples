import type { Actions } from "./$types"

export const actions: Actions = {
    default: async () => {
        return {
            message: 'Hello from the server!',
        }
    }
}
