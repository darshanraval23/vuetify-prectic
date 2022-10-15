<script>
import {
    ref,
    onMounted
} from "vue"
// import { mdiAccount } from '@mdi/js'

let name = ref('')
// let navTroggle = ref('false')

// function changename(){
//     name.value = 'darshan'
//     }
onMounted(() => {
    name.value = 'hallo'
})
</script>
<template>
<v-app>
    <!-- vartical navigation bar -->
    <v-card>
        <v-layout>
            <v-navigation-drawer app v-model="drawer">
                <!-- item -->
                <v-list-item title="darshan" link>
                    <v-list-tite>Vuetify</v-list-tite>
                </v-list-item>
                <!-- delimiter -->
                <v-divider></v-divider>

                <v-list dense>
                    <v-list-item v-for="item in items" :key="item.title" link>
                        <v-list-item-icon>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ item.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>

            </v-navigation-drawer>
        </v-layout>
    </v-card>
    <!-- vartical navigation bar -->

    <!-- header -->
    <v-app-bar app>
        <v-btn icon @click="drawer= !drawer">
            <v-icon>mdi-menu</v-icon>
        </v-btn>
    </v-app-bar>
    <!-- end header -->

    <!-- main content -->
    <v-main app>
        <v-container>
            <v-container>
                <v-col>

                </v-col>
            </v-container>

        </v-container>
    </v-main>
    <!-- end main content -->

    <!-- footer -->
    <v-footer app>
    </v-footer>
    <!--end footer -->
</v-app>
</template>

<script>
export default {
    setup() {

    },
    data() {
        return {
            drawer: true,
             items: [
        { title: 'Home', icon: 'mdi-view-dashboard' },
        { title: 'About', icon: 'mdi-forum' },
      ],
        }
    },
}
</script>
