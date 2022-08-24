<template>
  <v-container fluid id="services">
    <h2 class="services">SERVICES</h2>
    <div class="task">
      <div class="task_col">
        <div
          v-for="service in servicesLeft"
          :key="service.name"
          class="task_left"
        >
          <p>{{ service.name }}</p>
          <v-icon x-large color="primary" class="ml-16">{{
            service.icon
          }}</v-icon>
        </div>
      </div>
      <div class="task_col">
        <div
          v-for="service in servicesRight"
          :key="service.name"
          class="task_right"
        >
          <v-icon x-large color="primary" class="mr-16">{{
            service.icon
          }}</v-icon>
          <p>{{ service.name }}</p>
        </div>
      </div>
    </div>
    <v-btn
      width="216px"
      height="64px"
      color="primary"
      elevation="4"
      @click="scroll('contact')"
      class="cta__devis body-1 font-weight-bold mt-12 mb-12"
    >
      OBTENEZ UN DEVIS
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "ServicesComp",

  data: () => ({
    servicesLeft: [
      {
        name: "Création de site vitrine",
        icon: "fa-solid fa-display",
      },
      {
        name: "Refonte de site existant",
        icon: "fa-solid fa-paint-roller",
      },
      {
        name: "Hébergement et e-mail",
        icon: "fa-solid fa-globe",
      },
    ],
    servicesRight: [
      {
        name: "Création de site e-commerce",
        icon: "fa-solid fa-cart-arrow-down",
      },
      {
        name: "Maintenance",
        icon: "fa-solid fa-toolbox",
      },
      {
        name: "Référencement naturel",
        icon: "fa-solid fa-arrow-trend-up",
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

<style lang="scss" scoped>

@import '../scss/variables.scss';

#services {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-image: url("../../public/images/map-background.jpg");
  background-clip: border-box;
  background-position: center;
  background-size: auto;
}

.services {
  font-size: 36px;
  text-align: center;
  margin: 48px 0px 48px 0px;
}

.task {
  display: flex;
  justify-content: space-around;
}

.task p {
  margin-bottom: 0;
  color: $darkcolor;
  font-size: 28px;
  font-weight: bold;
}

.task_left {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 144px;
}

.task_right {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 144px;
}

.task_col {
  width: 35%;
}

.cta__devis {
  align-self: center;
}

@media screen and (max-width:420px) {
  .task{
    flex-direction: column;
    align-items: center;
  }

  .task_col{
    width: 90%;
  }
}
</style>