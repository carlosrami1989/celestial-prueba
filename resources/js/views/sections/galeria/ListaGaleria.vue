<template>
    <v-card class="mx-auto" max-width="1250">
        <v-container fluid>
            <v-row dense>
                <v-col
                    v-for="galeria in galerias"
                    :key="galeria.galeria_id"
                    :cols="galeria.flex"
                >
                    <v-card>
                        <v-img
                            :src="galeria.src"
                            class="white--text align-end"
                            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="200px"
                        >
                            <v-card-title v-text="galeria.title"></v-card-title>
                            <div style="margin-bottom: 5px; margin-right: 5px" class="text-right">
                                <v-avatar v-if="isAuthenticated && user.perfil" :color="galeria.status?'green':'red'" size="36">
                                    <span class="white--text text-h5">{{galeria.status?'A':'I'}} </span>
                                </v-avatar>
                            </div>
                        </v-img>

                        <v-card-text>
                            <v-input height="30px">
                                {{ galeria.sub_titulo }}
                            </v-input>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>
<script>

import auth from '../../../mixins/auth';

export default {
    data: () => ({
        galerias: [
            {
                galeria_id:1,
                title: "Pre-fab homes",
                sub_titulo: "casa de 2 pisos, color amarillo",
                src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
                flex: 4,
                status: false,
            },
            {
                galeria_id:2,
                title: "Favorite road trips",
                sub_titulo: "calle con una mira muy espectacular",
                src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
                flex: 12,
                status: true,
            },
            {
                galeria_id:3,
                title: "Best airlines",
                sub_titulo:
                    "avión de primera clase, equipada con las mejores comodidades",
                src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
                flex: 6,
                status: true,
            },
            {
                galeria_id:4,
                title: "Favorite road trips",
                sub_titulo: "calle con una mira muy espectacular",
                src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
                flex: 4,
                status: false,
            },
            {
                galeria_id:5,
                title: "Pre-fab homes",
                sub_titulo: "casa de 2 pisos, color amarillo",
                src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
                flex: 4,
                status: false,
            },
            {
                galeria_id:6,
                title: "Favorite road trips",
                sub_titulo: "calle con una mira muy espectacular",
                src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
                flex: 4,
                status: true,
            },
            {
                galeria_id:7,
                title: "Best airlines",
                sub_titulo:
                    "avión de primera clase, equipada con las mejores comodidades",
                src: "https://cdn.vuetifyjs.com/images/cards/plane.jpg",
                flex: 6,
                status: false,
            },
            {
                galeria_id:8,
                title: "Pre-fab homes",
                sub_titulo: "casa de 2 pisos, color amarillo",
                src: "https://cdn.vuetifyjs.com/images/cards/house.jpg",
                flex: 6,
                status: true,
            },
            {
                galeria_id:9,
                title: "Favorite road trips",
                sub_titulo: "calle con una mira muy espectacular",
                src: "https://cdn.vuetifyjs.com/images/cards/road.jpg",
                flex: 4,
                status: true,
            }
        ]
    }),

    mixins: [auth],

    methods: {}
};
</script>
