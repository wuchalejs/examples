
            export let c = ["¡Hola desde el servidor!","Individual","Granular","Paquete granular","Servidor","Bienvenido a SvelteKit",["Visita ",[0,"svelte.dev/docs/kit"]," para leer la documentación"],"Obtener mensaje del servidor","Esta es una subruta"]
            let latestVersion = -1
            export function update({ version, data }) {
                if (latestVersion >= version) {
                    return
                }
                for (const [ index, item ] of data['es-es'] ?? []) {
                    c[index] = item
                }
                latestVersion = version
            }
        