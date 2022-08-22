<template>
  <v-container fluid id="home" class="home">
    <div class="welcome">
      <h1>DEVELOPPEUR WEB</h1>
      <p id="subtitle">Le site à l'image de votre entreprise</p>
      <v-btn
        text
        width="216px"
        height="64px"
        color="white"
        elevation="4"
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
};
</script>

<style scoped>


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
  color: white;
  font-size: 88px;
  text-align: center;
}

#subtitle {
  color: white;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
}

.cta__contact {
  background-color: #66C047;
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
    min-height: 844px;
  }

  .welcome{
    width: auto;
  }

  h1{
    font-size: 48px;
  }
}
</style>