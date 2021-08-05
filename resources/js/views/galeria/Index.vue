<script>
// Extensions
import View from "../../views/View";

// Mixins
import LoadSectionsGaleria from "../../mixins/load-sections-galeria";

export default {
    name: "Galeria",

    metaInfo: { title: "Lista de Galeria" },

    extends: View,

    mixins: [
        LoadSectionsGaleria(
            ["NewUpdateGaleria", 
            "ListaGaleria"]
            )],

    props: {
        id: {
            type: String,
            default: "galeria"
        }
    }
};
</script>
