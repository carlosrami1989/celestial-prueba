<template>
    <base-section
        id="affiliates"
        :space="isAuthenticated && user.perfil ? 36 : 5"
    >
        <!-- <base-section id="affiliates" space="36"> -->
        <v-app-bar
            v-if="isAuthenticated && user.perfil"
            class="mx-auto"
            height="75"
            max-width="1250"
            color="grey lighten-4"
            dense
            dark
        >
            <v-spacer></v-spacer>

            <div class="text-center">
                <v-btn
                    @click="dialog = true"
                    class="mx-2"
                    fab
                    dark
                    small
                    color="primary"
                >
                    <v-icon dark>
                        mdi-newspaper-plus
                    </v-icon>
                </v-btn>
            </div>
        </v-app-bar>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent max-width="600px">
                <v-card>
                    <v-card-title>
                        <span class="text-h5">Mantenimiento de Evento</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12" sm="6" md="5">
                                    <v-menu
                                        v-model="menu2"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        transition="scale-transition"
                                        offset-y
                                        min-width="auto"
                                    >
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-text-field
                                                v-model="date"
                                                label="Fecha del Evento"
                                                prepend-icon="mdi-calendar"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                            ></v-text-field>
                                        </template>
                                        <v-date-picker
                                            v-model="date"
                                            @input="menu2 = false"
                                        ></v-date-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="12" sm="6" md="5">
                                    <v-menu
                                        ref="menu"
                                        v-model="menu"
                                        :close-on-content-click="false"
                                        :nudge-right="40"
                                        :return-value.sync="time"
                                        transition="scale-transition"
                                        offset-y
                                        max-width="290px"
                                        min-width="290px"
                                    >
                                        <template
                                            v-slot:activator="{ on, attrs }"
                                        >
                                            <v-text-field
                                                v-model="time"
                                                label="Hora del Evento"
                                                prepend-icon="mdi-clock-time-four-outline"
                                                readonly
                                                v-bind="attrs"
                                                v-on="on"
                                            ></v-text-field>
                                        </template>
                                        <v-time-picker
                                            v-if="menu"
                                            v-model="time"
                                            full-width
                                            format="24hr"
                                            @click:minute="
                                                $refs.menu.save(time)
                                            "
                                        ></v-time-picker>
                                    </v-menu>
                                </v-col>
                                <v-col cols="12" sm="6" md="5">
                                    <v-text-field
                                        label="Título*"
                                        required
                                        hint="Es obligatorio tener el título de la galería."
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="7">
                                    <v-text-field
                                        label="Sub Título"
                                        hint="No es obligatorio llevar sub título."
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="6" sm="6" md="8">
                                    <v-select
                                        :items="['4', '5', '6', '12']"
                                        label="Tamaño"
                                        required
                                    ></v-select>
                                </v-col>
                                <v-col cols="6" sm="6" md="4">
                                    <v-switch
                                        v-model="switch1"
                                        label="Estado"
                                    ></v-switch>
                                </v-col>
                                <v-col cols="12" sm="12" md="12">
                                    <v-file-input
                                        v-model="files"
                                        show-size
                                        accept="image/png, image/jpeg, image/bmp"
                                        placeholder="Clic para seleccionar la galería"
                                        prepend-icon="mdi-camera"
                                        label="Galería"
                                        multiple
                                        counter
                                    >
                                        <template v-slot:selection="{ text }">
                                            <v-chip small label color="primary">
                                                {{ text }}
                                            </v-chip>
                                        </template>
                                    </v-file-input>
                                </v-col>
                                <v-col
                                    class="d-flex flex-column align-center"
                                    cols="12"
                                    sm="12"
                                    md="12"
                                >
                                    <v-slide-group>
                                        <template v-for="n in 6">
                                            <v-slide-item
                                                :key="n"
                                                class="align-self-center"
                                            >
                                                <base-img
                                                    :src="
                                                        require(`../../../assets/logo-${n}.jpg`)
                                                    "
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
                                </v-col>
                            </v-row>
                        </v-container>
                        <small class="text-danger"
                            >*indica los campos obligatorio</small
                        >
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                        >
                            Cerrar
                        </v-btn>
                        <v-btn
                            color="blue darken-1"
                            text
                            @click="dialog = false"
                        >
                            Guardar
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-row>
    </base-section>
</template>
<script>
import auth from "../../../mixins/auth";
export default {
    data() {
        return {
            dialog: false,
            files: [],
            switch1: true,
            date: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10),
            menu2: false,
            time: null,
            menu: false
        };
    },
    mixins: [auth]
};
</script>
