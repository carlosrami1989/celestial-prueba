<template>
    
    
    <base-section
    id="home-video"
  >
    
    <base-section-heading title="YouTube">

    </base-section-heading>

    <v-container>     
       
      <v-row dense>
        <v-col
          cols="12"
          md="4"
        >
         <!-- la primera card -->
                            
             
                    <v-card
                      
                        color="indigo lighten-5"
                        class="mx-auto"
                        max-width="344"
                    >
                         <iframe width="344" height="auto" src="https://www.youtube.com/embed/B-5No4NQqgY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                       
                        <v-card-title class="black--text" >
                        Mosaico de alabanzas
                        </v-card-title>

                        <v-card-subtitle  class="black--text">
                        Radio - Celestial Omega
                        </v-card-subtitle>

                        
                         <v-card-text class="black--text">
                        
                           
                            <v-icon 
                           color="red darken-2"
                            size="80px">
                              mdi-youtube
                            </v-icon>
                             Celestial Omega Radiotv
                        </v-card-text>
                        <v-spacer></v-spacer>

                        
                       

                       
                    </v-card>
 
 
         <!-- fin -->
        </v-col>

        <v-col
          cols="12"
          md="4"
        > <!-- la primera card -->
                            
             
                    <v-card
                     color="indigo lighten-5"
                        class="mx-auto"
                        max-width="344"
                    >
                         <iframe width="344" height="250" src="https://www.youtube.com/embed/p2_TOB6d6DE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                       
                        <v-card-title class="black--text">
                       Somos una amenaza .... 
                        </v-card-title>

                        <v-card-subtitle class="black--text">
                        Radio - Celestial Omega
                        </v-card-subtitle>

                        <v-card-text class="black--text">
                         
                            <v-icon 
                           color="red darken-2"
                            size="80px">
                              mdi-youtube
                            </v-icon>
                             Celestial Omega Radiotv
                        </v-card-text>
                        <v-spacer></v-spacer>
                       
                    </v-card>
 
 
         <!-- fin -->
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <!-- la primera card -->
                            
             
                    <v-card
                    color="indigo lighten-5"
                        class="mx-auto"
                        max-width="344"
                    >
                        <iframe width="344" height="250"
                         src="https://www.youtube.com/embed/AijQVlLX4bQ"
                          title="YouTube video player" frameborder="0" 
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                         allowfullscreen></iframe>
                       
                        <v-card-title class="black--text">
                      El Espíritu Santo - Ps. Verónica
                        </v-card-title>

                        <v-card-subtitle class="black--text">
                        Radio - Celestial Omega
                        </v-card-subtitle>
                    <v-card-text class="black--text">
                         
                            <v-icon 
                           color="red darken-2"
                            size="80px">
                              mdi-youtube
                            </v-icon>
                             Celestial Omega Radiotv
                        </v-card-text>
                        <v-spacer></v-spacer>

                       
                    </v-card>
 
 
         <!-- fin -->
        </v-col>
      </v-row>
    </v-container>
  </base-section>

      
</template>

<script>
export default {
    name: "SectionHomeVideo",
        data () {
            return {
                 youtubeURL: 'https://www.youtube.com/watch?v=AijQVlLX4bQ',
                 result: '',
               
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
                             src:require('../../assets/bannerok-02.jpg'),
                             slides:"LA MEJOR RADIO",
                        },
                        
                        ],
                 
            }
            },
    provide: {
        // theme: { isDark: true }
    },
        methods: {
            
        
        },
    computed: {
        
    }
};
</script>
