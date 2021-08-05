<template>
  <div>
    <v-app-bar
      id="home-app-bar"
      app
      
      :class="base"
      elevation="1"
      elevate-on-scroll
      height="80"
      :color='bg'
            
    >
    
      <base-img
        :src="require('../../../../../resources/js/assets/logo-01.png')"
        class="mr-3 hidden-xs-only"
        contain
        max-width="100"
        width="100%"
      />

      

            <v-spacer />

      <div>
        <v-tabs
          class="hidden-sm-and-down"
          optional
          background-color="transparent"
        >
          <v-tab
            v-for="(name, i) in items"
            :key="i"
            :to="{ name }"
            :exact="name === 'Home'"
            :ripple="false"
            :class="text"
             
            min-width="96"
            text
          >
            {{ name }}
          </v-tab>
        </v-tabs>
      </div>

            <v-app-bar-nav-icon
            color="white"
               
                @click="pantalla()"
            ></v-app-bar-nav-icon>
            <!-- aqui empieza -->
          

            <!-- aqui trmina -->
              </v-app-bar>
                <v-navigation-drawer
                         app
                          
                  v-model="drawer"
                    
             temporary
                >
                  <v-list
                    nav
                    dense
                  >
                    <v-list-item-group
                      v-model="group"
                      active-class="deep-purple--text text--accent-4"
                    >
                      <v-list-item
                        v-for="(name, i) in items"
                        :key="i"
                        :to="{ name }"
                        :exact="name === 'Home'"
                        :ripple="false"
                        :class="text"
                        
                        min-width="96"
                        text>
                        <v-list-item-title> {{ name }}</v-list-item-title>
                      </v-list-item>
 
                    </v-list-item-group>
                  </v-list>
                  
                </v-navigation-drawer>        

<!-- fin  -->
    </div>
</template>

<script>
import auth from "../../../mixins/auth";
export default {
    name: "HomeAppBar",
    
    mixins: [auth],

    mounted: function() {
        if (this.isAuthenticated) {
            this.items = [
                "Inicio",
                "Galería",
                "Evento",
                "Programa",
                "Reproductor Musical",
                "Salir"
            ];
        } else {
            this.items = [
                "Inicio",
                "Galería",
                "Evento",
                "Programa",
                "Reproductor Musical",
                "Login"
            ];
        }
    },

    data: () => ({
      drawer: false,
      group: null,
      //drawer: null,
      text:"white--text lighten-1--text",
      bg:"secondary",
      base:"video",
      items: [
        'Inicio',
        'Galería',
        'Evento',
        'Programa',
        'Reproductor Musical',
      ],
    }),
    mounted() {
      window.onscroll = () => {
      this.changeColor();
    };
    },
    methods: {
      pantalla(){
  if (screen.width < 1024) 
         
        this.drawer = true;
          
        else 
          if (screen.width < 1280) 
              this.drawer = true;
          else 
               this.drawer = false;
              //this.drawer = false
      },
      changeColor() {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        this.bg = 'secondary';
       this.text="white--text lighten-1--text"
       this.base="transparent"

      } else {
        this.bg = 'secondary';
        this.text="white--text lighten-1--text"
         this.base="video"
      }
    },
    },
    watch: {
      group () {
      
              },
    },
  }
</script>

<style lang="sass">
#home-app-bar
  .v-tabs-slider
    max-width: 24px
    margin: 0 auto

  .v-tab
    &::before
      display: none
</style>
<style >
  .transparent {
   
   opacity: 0.65;
   
 }
 .video{
    
   opacity: 100;
   
 }
 
</style>
