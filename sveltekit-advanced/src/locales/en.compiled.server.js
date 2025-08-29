
            export let c = ["Hello from the server!","Single","Granular","Granular bundle","Server","Welcome to SvelteKit",["Visit ",[0,"svelte.dev/docs/kit"]," to read the documentation"],"Get message from the server","This is a sub path"]
            let latestVersion = -1
            export function update({ version, data }) {
                if (latestVersion >= version) {
                    return
                }
                for (const [ index, item ] of data['en'] ?? []) {
                    c[index] = item
                }
                latestVersion = version
            }
        