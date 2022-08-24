<template>
  <v-container fluid id="home" class="home">
    <div class="welcome">
      <h1>DEVELOPPEUR WEB</h1>
      <p id="subtitle">Le site à l'image de votre entreprise <br>par Jean-Jérôme Jornat</p>
      <v-btn
        width="216px"
        height="64px"
        color="primary"
        elevation="4"
        @click="scroll('contact')"
        class="cta__contact body-1 font-weight-bold"
      >
        CONTACTEZ-MOI
      </v-btn>
    </div>

  </v-container>
</template>

<script>
export default {
  name: "HomeComp",
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

.home {
  min-height: 824px;
  width: 100%;
  background-image: url("../../public/images/office.jpg");
  background-clip: border-box;
  background-size: cover;
  background-position: bottom;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.welcome{
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  color: $secondary;
  font-size: 88px;
  text-align: center;
}

#subtitle {
  color: $secondary;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
}

.cta__contact {
  margin: 16px;
}
.up{
  position: absolute;
  bottom: 100;
  right: 10;
  z-index: 1;
}

@media screen and (max-width: 420px) {
  .home {
    min-height: 896px;
  }

  .welcome{
    width: auto;
  }

  h1{
    font-size: 48px;
  }
}
</style>