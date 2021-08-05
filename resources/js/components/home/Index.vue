<template>
    <v-app>
      <home-app-bar />

        <home-view ref="vista"/>

        <home-footer />
    
    </v-app>
</template>

<script>
export default {
    name: "HomeLayout",
data() {
      return {
         drawer: true,
          group: null,
      }
    },
    watch: {
      group () {
        this.drawer = false
      },
    },
    components: {
        HomeAppBar: () => import("./components/AppBar"),

        HomeView: () => import("./components/View"),

        HomeFooter: () => import("./components/Footer"),

        /* ,
        HomeSettings: () => import("@/layouts/home/Settings"),
         */
    }
};
</script>
