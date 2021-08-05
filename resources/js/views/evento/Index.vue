<script>
// Extensions
import View from "../../views/View";

// Mixins
import LoadSectionsEvento from "../../mixins/load-sections-evento";

export default {
    name: "Evento",

    metaInfo: { title: "Lista de Evento" },

    extends: View,

    mixins: [LoadSectionsEvento(["NewUpdateEvento", "ListaEvento"])],

    props: {
        id: {
            type: String,
            default: "Evento"
        }
    }
};
</script>
