<template>
  <div id="app">
    <v-app>
    <HeaderComponent :istorggle="drawer" />
    <SidebarComponent @open="open"/>
    <router-view/>
    <footer-component/>
    </v-app>
  </div>
</template>
<script>
import HeaderComponent from './components/layout/Header.vue'
import SidebarComponent from './components/layout/Slider.vue'
import FooterComponent from './components/layout/Footer.vue'
export default {
    components:{
      HeaderComponent,
      SidebarComponent,
      FooterComponent
    },
    data(){
      return {
          drawer: true
      }
    },
    methods:{
      open(item){
          this.drawer = item
          console.log(item)
      }
    } 
}
</script>