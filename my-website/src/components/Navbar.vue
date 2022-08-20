<template>
  <v-app-bar fixed height="88px" color="white" hide-on-scroll class="px-8">
    <v-btn icon>
      <v-icon x-large color="#66C047">fa-solid fa-j</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <nav>
      <v-btn plain tile class="items" text @click="scroll('home')">ACCUEIL</v-btn>
      <v-btn plain tile class="items" text @click="scroll('services')">SERVICES</v-btn>
      <v-btn plain tile class="items" text @click="scroll('prices')">TARIFS</v-btn>
      <v-btn plain tile class="items" text @click="scroll('contact')">CONTACT</v-btn>
    </nav>
  </v-app-bar>
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

.items{
  font-weight: 600;
  margin-right: 24px;
  color: #383434;
  font-size: 16px;
}
.items:hover{
  border-bottom: 3px #66C047 solid ;
}

</style>