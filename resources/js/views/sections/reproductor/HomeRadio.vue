<template>
<base-section
    id="home-radio"
  >
    
    <base-section-heading title="REPRODUCTOR MUSICAL">

    </base-section-heading>
  <v-container>  
       <v-row dense>
        <v-col
          cols="12"
          md="4"
        >

		<!-- contenedor -->
		<v-card
		 color="light-green accent-4"
		
		  max-width="344">
				<v-card-text  class="black--text">
					Generos Musicales
				</v-card-text>
				 
				 
		 
				<v-data-table
					:headers="headers"
					:items="desserts"
					class="elevation-1"
						:items-per-page=5
				>
					<template v-slot:item.name="{ item }">
					<v-icon
						large
						color="light-green accent-4"
						>
						mdi-folder-music-outline
						</v-icon>
				 
						 
					 
					</template>
					 
				</v-data-table>
			 
			<v-card-text class="black--text"> 
				Elige el Genero a escuchar ♪♫
				</v-card-text>
			</v-card>
		 </v-col>
		<!-- fin de contenedor -->
			 <v-col
			cols="12"
			md="4"
			> 
			<v-card
			 color="yellow accent-2"
			  max-width="344">
				<v-card-text class="black--text">
					Lista de Reproducción
				</v-card-text>
			 
				 
				 <v-data-table
					:headers="musicacabecera"
					:items="musicades"
					class="elevation-1"
					:items-per-page=5
				>
					<template v-slot:item.name="{ item }">
					<v-icon
						@click="setRadio(item)"
						large
						color="yellow accent-2"
						>
						mdi-music
						</v-icon>
				 
						 
					 
					</template>
					 
				</v-data-table>
					<v-card-text class="black--text" > 
				Elige la canción a escuchar ♪♫
				</v-card-text>
			</v-card>

			
		  </v-col>
		    <v-col
          cols="12"
          md="4"
        >

		<!-- contenedor -->
		<v-card
		 color="orange darken-4"
		  max-width="344">
				 
				<v-card-text>
					<vue-radio :file="radio.file"  
					:namemusic="radio.name"
					:auto-play="radio.play"
					:downloadable="true"  ></vue-radio>
				</v-card-text>
			 
			 
			</v-card>
		 </v-col>
		<!-- fin de contenedor -->
      </v-row>
   </v-container>  
  </base-section>
</template>
<script>
  export default {
    components: {
       // VuetifyAudio: () => import('vuetify-audio'),
    },
    data: () => ({
	  msgs:[],
	  radio:{
		   file:'',
		  name:'',
		  play:false,
	  },
		 
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
	   headers: [
          {
            text: '',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Genero Musical', value: 'text' },
          
        ],
        desserts: [
          {
            text: 'Cristianas',
            des: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: '1%',
          },
          {
            text: 'Baladas',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: '1%',
          },
          {
            text: 'Pop',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: '7%',
          },
          {
            text: 'Alabanzas',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: '8%',
          },
         
		],
		
		musicacabecera:[
			{
            text: '',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Lista de reproducción', value: 'text' },

		],
		musicades:[
			  {
            text: 'Jose Luis Reyes - Esta Cayendo',
		 
			src:'https://mus.djcristiano.tk/top/Jose Luis Reyes - Esta Cayendo.mp3',
            
		  },
		  {
            text: 'Barak - Ven Espiritu Santo',
		 
			src:'https://mus.djcristiano.tk/top/Barak - Ven Espiritu Santo.mp3',
             
		  },
		  {
            text: 'Ricardo Rodriguez - Alaba',
			 
			src:'https://mus.djcristiano.tk/top/Ricardo Rodriguez - Alaba.mp3',
            
		  },
		  {
            text: 'Jesus Adrian Romero - Mi Jesus, Mi Amado',
		 
			src:'https://mus.djcristiano.tk/top/Jesus Adrian Romero - Mi Jesus, Mi Amado.mp3',
            
		  },
		  {
            text: 'Jesus Adrian Romero - Abre Los Cielos',
			 
			src:'https://mus.djcristiano.tk/top/Jesus Adrian Romero - Abre Los Cielos.mp3',
            
		  },
		  {
            text: 'Palabra en Accion - Santo Es El Senor',
			 
			src:'https://mus.djcristiano.tk/top/Palabra en Accion - Santo Es El Senor.mp3',
             
		  },
		  {
            text: 'Abel Brito - Toma Mi Corazon',
			 
			src:'https://mus.djcristiano.tk/top/Abel Brito - Toma Mi Corazon.mp3',
            
		  },
		  {
            text: 'Marcela Gandara - Dame Tus Ojos',
			 
			src:'https://mus.djcristiano.tk/top/Marcela Gandara - Dame Tus Ojos.mp3',
             
		  },
		  

		],
	}),
	provide: {
        theme: { isDark: true }
    },
    methods: {
		setRadio(value){

			this.radio.file = value.src;
			this.radio.play = true;
			this.radio.name = value.text;
			
			
		},
		 getColor (calories) {
        if (calories > 400) return 'red'
        else if (calories > 200) return 'orange'
        else return 'green'
      },
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