<script>
// Extensions
import View from "../../views/View";

// Mixins
import LoadSections from "../../mixins/load-sections-reproductor";

export default {
    name: "reproductor",

    metaInfo: { title: "reproductor" },

    extends: View,

    mixins: [
        LoadSections(
            ['banner',
            'home-radio']
            )],

    props: {
        id: {
            type: String,
            default: "reproductor"
        }
    }
};
</script>
