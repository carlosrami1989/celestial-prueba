<template>
  <base-section
    id="affiliates"
    space="36"
  >
    <v-container>
      <base-section-heading title="Nuestro equipo de trabajo" />

      <v-slide-group>
        <template v-for="n in 6">
          <v-slide-item
            :key="n"
            class="align-self-center"
          >
            <base-img
              :src="require(`../../assets/logo-${n}.jpg`)"
              color="grey"
              contain
              height="150"
              width="100"
            />
          </v-slide-item>

          <v-responsive
            v-if="n < 6"
            :key="`divider-${n}`"
            class="text-center"
            height="56"
            width="48"
          >
            <v-divider vertical />
          </v-responsive>
        </template>
      </v-slide-group>
    </v-container>
  </base-section>
</template>

<script>
  export default {
    name: 'SectionAffiliates',
  }
</script>
