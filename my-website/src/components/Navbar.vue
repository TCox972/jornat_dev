<template>
<v-container>
  <v-app-bar fixed height="88px" color="white" hide-on-scroll class="px-8">
    <v-img src="../../public/images/Capture d’écran 2022-08-20 à 10.54.46.png" max-height="88" max-width="88"></v-img>
    <v-spacer></v-spacer>
    <nav id="nav-desktop">
      <v-btn plain tile class="items" text @click="scroll('home')">ACCUEIL</v-btn>
      <v-btn plain tile class="items" text @click="scroll('services')">SERVICES</v-btn>
      <v-btn plain tile class="items" text @click="scroll('prices')">TARIFS</v-btn>
      <v-btn plain tile class="items" text @click="scroll('contact')">CONTACT</v-btn>
    </nav>
    <v-app-bar-nav-icon class="toggle" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
  </v-app-bar>
</v-container>

</template>

<script>
export default {
  name: "NavbarComp",
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth"});
    },
  },
};
</script>

<style scoped>

.toggle{
  display: none;
}

.items{
  font-weight: 600;
  margin-right: 24px;
  color: #383434;
  font-size: 16px;
}
.items:hover{
  border-bottom: 3px #66C047 solid ;
}

@media screen and (max-width: 420px) {
  .toggle{
    display: inline;
  }
  #nav-desktop {
    display: none;
  }
}

</style>