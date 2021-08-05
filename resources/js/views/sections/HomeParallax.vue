<template>
<base-section
    id="home-parallax"
  >
    
    <base-section-heading title="LIVE-FACEBOOK">

    </base-section-heading>

   
            <v-parallax
            dark
           :src="require('../../assets/wepik-2021630-155832.jpg')"
           
           
        >
           <br>
        <br>
         
            
                    

 
                   
                    <v-row  dense
                     >
                       

                        <v-col
                          align="center"
                        v-for="(item, i) in items"
                        :key="i"
                        cols="12"
                           
                        >
                        <v-card
                        width="50%"
                         height="100%"
                            :color="item.color"
                            dark
                          
                        >
                            <div class="d-flex flex-no-wrap justify-space-between">
                            <div>
                                <v-card-title
                                 
                                class="black--text -h5"
                                v-text="item.title"
                                ></v-card-title>

                                <v-card-subtitle 
                                class="black--text "
                                v-text="item.artist"></v-card-subtitle>
 
                                <v-card-actions>
                                <v-btn
                                    v-if="item.artist === 'Ellie Goulding'"
                                    class="ml-2 mt-3 black--text "
                                    fab
                                    icon
                                    height="40px"
                                    right
                                    width="40px"
                                >
                                   
                                </v-btn>
                                    
                                
                                </v-card-actions>
                            </div>

                            
                            </div>
                            <iframe width="80%"
                         height="auto" src="https://www.youtube.com/embed/B-5No4NQqgY" 
                         title="YouTube video player" 
                         frameborder="0" 
                         allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                         allowfullscreen
                          ></iframe>
                        </v-card>
                        </v-col>
                    </v-row>

                    <br>
               
       
        </v-parallax>
    
  </base-section>
</template>
<script>
  export default {
    data: () => ({
      items: [
       
        {
          color: 'blue lighten-3',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Live - Radio Celestial Omega',
          artist: 'Radio - Live',
        },
      ],
    }),
  }
</script>
<style >
  .transparent {
   background-color: white!important;
   opacity: 0.65;
   border-color: transparent!important;
 }
 .video{
    
   opacity: 100;
   
 }
</style>