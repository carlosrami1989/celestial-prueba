<template>
    <section id="slider-home">
           <v-banner dark
             elevation="23"
              width="100%">

            <v-carousel
             cycle
             
                height="550"
                hide-delimiter-background
                    show-arrows-on-hover
                    >
                    <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                   
                     :src="item.src"
                    >
                    
                    </v-carousel-item>
            </v-carousel>
            </v-banner>
    </section>
</template>

<script>
export default {
    name: "SectionHero",
        data () {
            return {
                 items: [
                        {
                            src:require('../../assets/bannerok5-02.jpg'),
                            slides:"LA MEJOR RADIO",
                            //src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
                        },
                        {
                             src:require('../../assets/bannerok4-02.jpg'),
                              slides:"LA MEJOR RADIO",
                        },
                        {
                             src:require('../../assets/bannerok6-02.jpg'),
                             slides:"LA MEJOR RADIO",
                        },
                        
                        ],
                colors: [
                'indigo',
                'warning',
                'pink darken-2',
                'red lighten-1',
                'deep-purple accent-4',
                ],
                slides: [
                'First',
                'Second',
                'Third',
                'Fourth',
                'Fifth',
                ],
            }
            },
    provide: {
        theme: { isDark: true }
    },

    computed: {
        minHeight() {
            const height = this.$vuetify.breakpoint.mdAndUp ? "100vh" : "50vh";

            return `calc(${height} - ${this.$vuetify.application.top}px)`;
        }
    }
};
</script>
