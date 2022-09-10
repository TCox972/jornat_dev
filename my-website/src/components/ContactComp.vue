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
        <v-form ref="form" v-model="valid">
          <v-container>
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              filled
              color="primary"
              required
            ></v-text-field>
            <v-text-field
              v-model="society"
              label="Entreprise"
              filled
              color="primary"
            ></v-text-field>
            <v-select
              v-model="subject"
              :items="items"
              :rules="fieldRules"
              label="Sujet"
              filled
              color="primary"
              required
            ></v-select>
            <v-textarea
              v-model="message"
              :rules="fieldRules"
              label="Message"
              filled
              color="primary"
              required
            >
            </v-textarea>
          </v-container>
        </v-form>
      </div>
      <div class="infos py-3">
        <div v-for="info in infos" :key="info.name" class="infos_card d-flex">
          <v-icon class="align-self-start mr-8" color="primary">{{
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
            width="216px"
            height="64px"
            color="primary"
            elevation="4"
            class="cta__devis body-1 font-weight-bold mt-12 mb-12"
            @click="sendEmail(), reset()"
          >
            ENVOYER
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-container>
</template>
<script src="https://smtpjs.com/v3/smtp.js"></script>
<script>
import Swal from "sweetalert2";

export default {
  name: "ContactComp",

  data: () => ({
    valid: false,
    email: "",
    society: "",
    subject: null,
    items: [
      "Site vitrine",
      "Site e-commerce",
      "Refonte de site",
      "Maintenance",
      "Autres",
    ],
    message: "",
    fieldRules: [(v) => !!v || "Ce champ est requis"],
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
        text: "contact@jeanjrm-jornat.com",
      },
      {
        icon: "fa-solid fa-file-invoice",
        name: "SIREN",
        text: "912 416 831",
      },
    ],
  }),
  methods: {
    sendEmail() {
      Email.send({
        SecureToken: "66f7968f-970d-4e4d-a957-0867485c9388",
        To: "contact@jeanjrm-jornat.com",
        From: "jornat.jerome@gmail.com",
        Subject: "Demande d'infos pour : " + this.subject,
        Body:
          "Vous avez une nouvelle demande de contact pour : " +
          this.subject +
          "." +
          "<br> Société : " +
          this.society +
          "<br> Email : " +
          this.email +
          "<br> Message : " +
          this.message,
      }).then(() =>
        Swal.fire({
          icon: "success",
          title: "A Bientot",
          text: "Message envoyé avec succès",
          showConfirmButton: false,
          timer: 1500
        })
      );
    },
    reset() {
      this.$refs.form.reset()
    }
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/variables.scss";

#contact {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.form {
  width: 40%;
}

.infos {
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
  background-color: $primary;
}

@media screen and (max-width: 710px) {
  .contact-container {
    flex-direction: column;
  }

  .form {
    width: 100%;
  }

  .infos {
    width: 70%;
    align-self: center;
    padding-left: 0px;
  }

  .cta {
    text-align: center;
  }
}
</style>