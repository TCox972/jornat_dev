<template>
  <v-container id="contact" fluid>
    <div class="my-12 title d-flex flex-column align-center">
      <h2 class="name mb-6">CONTACT</h2>
      <p class="mb-8 text-center">
        Pour toute demande d'informations,<br />utilisez le formulaire ou les
        coordonnées ci-dessous.
      </p>
      <div class="sous"></div>
    </div>
    <v-container class="contact-container d-flex justify-space-around">
      <div class="form">
        <v-form v-model="valid">
          <v-container>
            <v-text-field
              v-model="firstname"
              :rules="fieldRules"
              label="Prénom"
              filled
              color="#66c047"
              required
            ></v-text-field>
            <v-text-field
              v-model="lastname"
              :rules="fieldRules"
              label="Nom"
              filled
              color="#66c047"
              required
            ></v-text-field>
            <v-text-field
              v-model="society"
              label="Entreprise"
              filled
              color="#66c047"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              filled
              color="#66c047"
              required
            ></v-text-field>
            <v-textarea
              v-model="message"
              :rules="fieldRules"
              label="Message"
              filled
              color="#66c047"
              required
            >
            </v-textarea>
          </v-container>
        </v-form>
      </div>
      <div class="infos py-3">
        <div v-for="info in infos" :key="info.name" class="infos_card d-flex">
          <v-icon class="align-self-start mr-8" color="#66c047">{{
            info.icon
          }}</v-icon>
          <div class="mb-6">
            <h4>{{ info.name }}</h4>
            <p>{{ info.text }}</p>
            <v-divider></v-divider>
          </div>
        </div>
        <div class="cta">
          <v-btn
            text
            width="216px"
            height="64px"
            color="white"
            elevation="4"
            class="cta__devis body-1 font-weight-bold mt-12 mb-12"
          >
            OBTENEZ UN DEVIS
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "ContactComp",
  data: () => ({
    valid: false,
    firstname: "",
    lastname: "",
    society: "",
    fieldRules: [(v) => !!v || "Ce champ est requis"],
    email: "",
    emailRules: [
      (v) => !!v || "L'email est requis",
      (v) => /.+@.+/.test(v) || "Saisissez une adresse mail valide",
    ],
    infos: [
      {
        icon: "fa-solid fa-location-dot",
        name: "ADRESSE",
        text: "Schoelcher, Martinique",
      },

      {
        icon: "fa-solid fa-phone",
        name: "TELEPHONE",
        text: "+596 (0)6 96 30 19 33",
      },
      {
        icon: "fa-solid fa-envelope",
        name: "EMAIL",
        text: "jornat.jerome@gmail.com",
      },
      {
        icon: "fa-solid fa-file-invoice",
        name: "SIREN",
        text: "912 416 831",
      },
    ],
  }),
};
</script>

<style scoped>
input {
  border: solid #66c047 1px;
}
#contact {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form{
    width: 40%;
  }

.infos{
  width: 40%;
}

.name {
  font-size: 36px;
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

.cta__devis {
  background-color: #66c047;
}

@media screen and (max-width:420px) {
  .contact-container{
    flex-direction: column;
  }

  .form{
    width: 100%;
  }

  .infos{
    width: 70%;
    align-self: center;
    padding-left: 0px;
  }

  .cta{
    text-align: center;
  }
}
</style>