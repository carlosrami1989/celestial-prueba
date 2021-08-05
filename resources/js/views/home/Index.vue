
<script>
  // Extensions
  import View from '../../views/View'

  // Mixins
  //import LoadSections from 'mixins/load-sections'
  import LoadSections from '../../mixins/load-sections'

  export default {
    name: 'Home',

    metaInfo: { title: 'Home' },

    extends: View,

    mixins: [
      LoadSections([
        'slider-home',
        'home-parallax',
         'home-video-face',
        'home-video',
        'affiliates',
        'social-media',
       
      ]),
    ],

    props: {
      id: {
        type: String,
        default: 'home',
      },
    },
  }
</script>
