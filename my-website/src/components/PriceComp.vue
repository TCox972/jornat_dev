<template>
  <v-container id="prices" fluid>
    <div class="title">
      <h2 class="price mb-6">TARIFS</h2>
      <p class="mb-8">Un tarif adapté pour chaque besoin</p>
      <div class="sous"></div>
    </div>
    <v-container class="price-container d-flex">
      <v-card
        v-for="item in site"
        :key="item.name"
        width="100%"
        class="price-item mx-auto my-12"
        max-width="366"
      >
        <v-card-title
          class="
            justify-center
            text-center text-h5
            font-weight-bold
            d-flex
            flex-column
            ma-6
          "
        >
          {{ item.name }} <br />
          {{ item.name2 }}
          <div class="sous mt-2"></div>
        </v-card-title>

        <v-card-subtitle class="text-center text-body-1">
          A PARTIR DE
        </v-card-subtitle>

        <v-card-text class="d-flex justify-center align-center">
          <p
            style="font-size: 80px; color: black"
            class="text-center font-weight-bold mt-4"
          >
            {{ item.tarif }}
          </p>
          <p
            style="font-size: 24px; color: black"
            class="font-weight-bold ml-1"
          >
            {{ item.tarification }}
          </p>
        </v-card-text>

        <div class="d-flex align-center justify-start ml-4 prestations">
          <v-icon small color="#66c047">fa-solid fa-play</v-icon>
          <v-card-text style="font-size: 20px" class="text-center">{{
            item.el1
          }}</v-card-text>
        </div>
        <v-divider class="mx-4"></v-divider>

        <div class="d-flex align-center justify-start ml-4 prestations">
          <v-icon small color="#66c047">fa-solid fa-play</v-icon>
          <v-card-text style="font-size: 20px" class="text-center">{{
            item.el2
          }}</v-card-text>
        </div>
        <v-divider class="mx-4"></v-divider>
        <div class="d-flex align-center justify-start ml-4 prestations">
          <v-icon small color="#66c047">fa-solid fa-play</v-icon>
          <v-card-text style="font-size: 20px" class="text-center">{{
            item.el3
          }}</v-card-text>
        </div>
        <v-divider class="mx-4"></v-divider>
        <div class="d-flex align-center justify-start ml-4 prestations">
          <v-icon small color="#66c047">fa-solid fa-play</v-icon>
          <v-card-text style="font-size: 20px" class="text-center">{{
            item.el4
          }}</v-card-text>
        </div>
        <v-divider class="mx-4"></v-divider>
        <div class="d-flex align-center justify-start ml-4 prestations">
          <v-icon small color="#66c047">fa-solid fa-play</v-icon>
          <v-card-text style="font-size: 20px" class="text-center">{{
            item.el5
          }}</v-card-text>
        </div>
        <v-divider class="mx-4"></v-divider>
        <div class="d-flex align-center justify-start ml-4 prestations">
          <v-icon small color="#66c047">fa-solid fa-play</v-icon>
          <v-card-text style="font-size: 20px" class="text-center">{{
            item.el6
          }}</v-card-text>
        </div>
        <v-divider class="mx-4"></v-divider>
        <div class="d-flex align-center justify-start ml-4 prestations">
          <v-icon small color="#66c047">fa-solid fa-play</v-icon>
          <v-card-text style="font-size: 20px" class="text-center">{{
            item.el7
          }}</v-card-text>
        </div>
        <v-divider class="mx-4"></v-divider>
        <v-card-actions class="justify-center">
          <v-btn
            text
            width="216px"
            height="64px"
            color="white"
            elevation="4"
            @click="scroll('contact')"
            class="cta__devis body-1 font-weight-bold mt-12 mb-12"
          >
            DEMANDEZ UN DEVIS
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "PriceComp",

  data: () => ({
    site: [
      {
        name: "SITE VITRINE",
        name2: "PERSONNALISÉ",
        tarif: "750",
        tarification: "€*",
        el1: "Développé sur mesure",
        el2: "Charte graphique personnalisée",
        el3: "Domaine + hébergement + email",
        el4: "Responsive design",
        el5: "Mise en place de contenu",
        el6: "Optimisation SEO",
        el7: "Mise en ligne du site",
      },
      {
        name: "SITE E-COMMERCE",
        name2: "PERSONNALISÉ",
        tarif: "1800",
        tarification: "€*",
        el1: "Développé sur mesure",
        el2: "Charte graphique personnalisée",
        el3: "Domaine + hébergement + email",
        el4: "Responsive design",
        el5: "Mise en place de contenu",
        el6: "Optimisation SEO",
        el7: "Mise en ligne du site",
      },
      {
        name: "FORFAIT",
        name2: "A LA CARTE",
        tarif: "180",
        tarification: "€*/JOUR",
        el1: "Refonte site internet",
        el2: "Modification contenu",
        el3: "Optimisation de performance",
        el4: "Site responsive",
        el5: "Mise en place de contenu",
        el6: "Optimisation SEO",
        el7: "Mise en ligne du site",
      },
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
#prices {
  background-color: #f3f3f3;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  text-align: center;
  width: fit-content;
}

.title p {
  font-size: 24px;
  font-weight: 400;
}

.sous {
  height: 5px;
  width: 80px;
  margin: auto;
  background-color: #66c047;
}

.price {
  font-size: 36px;
  margin: 48px 0px 48px 0px;
}

.prestations {
  color: black;
}

.cta__devis {
  align-self: center;
  background-color: #66c047;
}

@media screen and (max-width: 420px) {
  .price-container {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
}
</style>