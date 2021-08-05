<template>
<base-section
    id="home-video-face"
  >
    
    <base-section-heading title="Facebook video">

    </base-section-heading>

    <v-container>
      <v-row
       dense
      >
        

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
                    <iframe :src="src2" 
                   width="344" height="250" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" 
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                        
                       
                      
                         <v-card-text class="black--text">
                        
                           
                            <v-icon 
                           color="blue darken-2"
                            size="80px">
                              mdi-facebook
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
                   <iframe :src="src3" 
                   width="344" height="250" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                 

                        
                         <v-card-text class="black--text">
                        
                           
                            <v-icon 
                           color="blue darken-2"
                            size="80px">
                              mdi-facebook
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
                         <iframe :src="src1" 
                         width="344" height="250" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" allowFullScreen="true"></iframe>
                       
                        
                        
                         <v-card-text class="black--text">
                        
                           
                            <v-icon 
                           color="blue darken-2"
                            size="80px">
                              mdi-facebook
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
  data() {
    return {
      src1:'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F368227596923313%2Fvideos%2F175610434615005%2F&show_text=true&width=560&t=0',
       src2:'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F368227596923313%2Fvideos%2F361531322067801%2F&show_text=true&width=560&t=0',
        src3:'https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FStvpidpage%2Fvideos%2F1802599603143969%2F&show_text=true&width=560&t=0',

    }
  },
  
}
</script>