<template>
  <v-app>
    <NavbarComp></NavbarComp>
    <HomeComp v-intersect="onIntersect" ></HomeComp>
    <ServicesComp></ServicesComp>
    <PriceComp></PriceComp>
    <ContactComp></ContactComp>
    <FooterComp></FooterComp>
    <div v-show="isIntersecting ? false : true " id="scrollUp">
      <v-btn
        elevation="5"
        large
        color="#66C047"
        class="items"
        icon
        @click="scroll('home')"
        ><v-icon>fa-solid fa-angle-up</v-icon></v-btn
      >
    </div>
  </v-app>
</template>

<script>
import HomeComp from "../components/HomeComp.vue";
import NavbarComp from "../components/Navbar.vue";
import ServicesComp from "../components/ServicesComp.vue";
import PriceComp from "../components/PriceComp.vue";
import ContactComp from "../components/ContactComp.vue";
import FooterComp from "../components/footerComp.vue";

export default {
  name: "HomeView",

  components: {
    HomeComp,
    NavbarComp,
    ServicesComp,
    PriceComp,
    ContactComp,
    FooterComp,
  },

  data: () => ({
    isIntersecting: false,
  }),

  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },

    onIntersect(entries) {
      this.isIntersecting = entries[0].isIntersecting;
    },
  },
};
</script> 

<style scoped>
#scrollUp {
  position: fixed;
  bottom: 75px;
  right: 75px;
}
</style>
