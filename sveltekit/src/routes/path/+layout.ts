import type { LayoutLoad } from "./$types";

export const load: LayoutLoad = async ({ parent }) => {
    await parent()
    return {
        nestedLayoutMsg: "Hello from nested layout!",
    };
};
