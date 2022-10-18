<template>
     <!-- header -->
    <v-app-bar app>
        <v-btn icon @click="open">
            <v-icon>mdi-menu</v-icon>
        </v-btn>
    </v-app-bar>
</template>
<script>
export default {
    name: 'SidebarComponent',
    data(){
        return{
            drawer: true
        }
    },
    methods : {
        open(){
            this.drawer = !this.drawer
            this.$emit('open', this.drawer)
        }
    }
}
</script>