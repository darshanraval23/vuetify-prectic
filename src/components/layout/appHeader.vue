<script setup>
import { ref, onMounted } from "vue"
// import { mdiAccount } from '@mdi/js'

let name= ref('')

function changename(){
    name.value = 'darshan'
    }
onMounted(()=>{
    name.value= 'hallo'
})
</script>

<template>
<v-app>
    <!-- navigation bar -->
    <v-navigation-drawer app>
{{name}}
    </v-navigation-drawer>
    <!-- slider -->
    <v-app-bar app>
         <v-icon>mdi-menu</v-icon>
       <v-icon>mdi-home</v-icon>
        <v-btn
        color="error"
        @click="changename">
            add
        </v-btn>
    </v-app-bar>

    <v-main app>
        <v-container>
            <v-container>
                <v-col>
                    
                </v-col>
            </v-container>

        </v-container>
    </v-main>

    <v-footer app>
    </v-footer>
</v-app>
</template>

