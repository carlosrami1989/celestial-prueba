<script>
// Extensions
import View from "../../views/View";

// Mixins
import LoadSectionsPrograma from "../../mixins/load-sections-Programa";

export default {
    name: "programa",

    metaInfo: { title: "Lista de Programa" },

    extends: View,

    mixins: [LoadSectionsPrograma(["NewUpdatePrograma", "ListaPrograma"])],

    props: {
        id: {
            type: String,
            default: "Programa"
        }
    }
};
</script>
