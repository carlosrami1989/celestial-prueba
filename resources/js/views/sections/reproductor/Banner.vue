<template>
<section
    id="banner"
  >
    
    <v-banner
    color="teal lighten-1"
    elevation="10"
   
        >
         <v-img
            
           
            
            :src="require('../../../assets/bannerradio222-03.jpg')"
            ></v-img>
        </v-banner>
   
  </section>
</template>
<script>
  export default {
    components: {
        VuetifyAudio: () => import('vuetify-audio'),
    },
    data: () => ({
      msgs:[],
       
      file: 'https://mus8.about-in.tk/skm/4e25df2d-1cf9-49e2-a10b-8991ea4ec99d.mp3',
	  color: null,
			btnText: 'Set Color to "Success" (Green)',
       rating: 4,
      items: [
       
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
    }),
    methods: {
      audioFinish () {
				this.msgs.push('The audio finished.')
			},
			setColor () {
				if (this.color) {
					this.color = null
					this.btnText = 'Set Color to "Success" (Green)'
				} else {
					this.color = 'success'
					this.btnText = 'Set Color to Default (Follow the Theme)'
				}
			},
    },
  }
</script>
<style >
  .transparent {
   
   opacity: 0.65;
   
 }
 .video{
    
   opacity: 100;
   
 }
</style>