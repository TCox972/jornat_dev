<template>
  <v-app>
    <NavbarComp></NavbarComp>
    <HomeComp></HomeComp>
    <ServicesComp></ServicesComp>
  </v-app>
  
</template>

<script>

  import HomeComp from '../components/HomeComp.vue'
  import NavbarComp from '../components/Navbar.vue'
  import ServicesComp from '../components/ServicesComp.vue'

  export default {
    name: 'HomeView',

    components: {
      HomeComp, NavbarComp, ServicesComp
    },
  }
</script> 
