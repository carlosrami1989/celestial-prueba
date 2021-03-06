// Utilities
import { camelCase, upperFirst } from "lodash";

export default function(sections = []) {
    return {
        name: "LoadSectionsGaleria",

        // Iterates the provide list of components
        // and returns a function that returns a
        // Promise.
        components: sections.reduce((acc, cur) => {
            const name = upperFirst(camelCase(cur));

            acc[`Section${name}`] = () =>
                import(`../views/sections/galeria/${name}.vue`);

            return acc;
        }, {}),

        data: () => ({ sections })
    };
}
