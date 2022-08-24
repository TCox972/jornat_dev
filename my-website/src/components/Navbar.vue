<template>
  <v-container>
    <v-app-bar fixed height="88px" color="white" hide-on-scroll class="px-8">
      <v-img
        src="../../public/images/Capture d’écran 2022-08-20 à 10.54.46.png"
        max-height="88"
        max-width="88"
        @click="scroll('home')"
      ></v-img>
      <v-spacer></v-spacer>
      <nav id="nav-desktop">
        <v-btn plain tile class="items" text @click="scroll('home')"
          >ACCUEIL</v-btn
        >
        <v-btn plain tile class="items" text @click="scroll('services')"
          >SERVICES</v-btn
        >
        <v-btn plain tile class="items" text @click="scroll('prices')"
          >TARIFS</v-btn
        >
        <v-btn plain tile class="items" text @click="scroll('contact')"
          >CONTACT</v-btn
        >
      </nav>

      <div class="text-center">
        <v-menu close-on-click tile nudge-bottom="20" nudge-width="120" offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-app-bar-nav-icon v-bind="attrs" v-on="on" class="toggle" @click.stop="drawer = !drawer">
            </v-app-bar-nav-icon>
          </template>
          <v-list>
            <v-list-item class="burger-item" v-for="(item, index) in items" :key="index">
              <v-list-item-title @click="scroll(item.ref)" >{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-app-bar>
  </v-container>
</template>

<script>
export default {
  name: "NavbarComp",
  data: () => ({
      items: [
        { title: 'ACCUEIL', ref:'home' },
        { title: 'SERVICES', ref:'services' },
        { title: 'TARIFS', ref:'prices' },
        { title: 'CONTACT', ref:'contact' },
      ],
    }),
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
.toggle {
  display: none;
}

.items {
  font-weight: 600;
  margin-right: 24px;
  color: #383434;
  font-size: 16px;
}
.items:hover {
  border-bottom: 3px #66c047 solid;
}

@media screen and (max-width: 420px) {
  .toggle {
    display: block;
  }
  #nav-desktop {
    display: none;
  }

  .burger-item{
    text-align: center;
  }

  .burger-item:hover{
    border-top: 2px #66c047 solid;
    border-bottom: 2px #66c047 solid;
    
  }
}
</style>