<template>
  <v-theme-provider dark>
    <base-section
      id="social"
      class="accent text-center"
      space="56"
    >
      <base-icon class="mb-8">
 mdi-church 
      </base-icon>

      <base-section-heading
        color="transparent"
        title="Radio Celestial Omega"
      >
       
      </base-section-heading>
     <v-container>
       <v-carousel :show-arrows="false"
       width="50%">
          <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"
          ></v-carousel-item>
        </v-carousel>
    </v-container>
      <div class="py-4" />

      <v-btn
        class="font-weight-bold"
        color="white"
        href=""
        light
        min-width="168"
        target="_blank"
        x-large
      >
        Vér más en Galería

        <v-icon right>
          mdi-open-in-new
        </v-icon>
      </v-btn>
    </base-section>
  </v-theme-provider>
</template>

<script>
  export default {
    name: 'SectionNews',
      data() {
        return {
           items: [
          {
             src:require('../../assets/b001.jpeg'),
          },
          {
            src:require('../../assets/b002.jpeg'),
          },
          {
             src:require('../../assets/b003.jpeg'),
          },
          {
             src:require('../../assets/b004.jpeg'),
          },
        ],
        }
      },
    provide: {
      heading: { align: 'center' },
    },
  }
</script>
