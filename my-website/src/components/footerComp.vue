<template>
  <v-footer dark padless>
    <v-card
      flat
      tile
      width="100%"
      color="tertiary"
      class="white--text text-center"
    >
      <v-card-text>
        <v-btn v-for="el in links" :key="el.icon" class="mx-4 white--text" :href=el.link target="_blank" icon>
          <v-icon size="24px">
            {{ el.icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        Développeur web freelance basé en Martinique, je réalise des sites
        vitrines, e-commerce et des applications web.
        <br />
        Discutons de vos projets !
      </v-card-text>
      <div class="legal d-flex justify-center">
        <div>
          <v-dialog v-model="dialogMl" width="600">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" text v-bind="attrs" v-on="on">
                Mention légales
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="text-h5 primary">
                Mentions Légales
              </v-card-title>

              <v-card-text>
                <br />
                <h2>Site Internet</h2>
                <br />
                Nom du site : Jean-Jerome Jornat - Développeur Freelance <br />
                URL complète : https://www.jeanjrm-jornat.com <br />
                <br />
                <h2>Editeur du site</h2>
                <br />

                M. Jean-Jérôme Jornat <br />
                Numéro du SIRET : 91241683100010 <br />
                Code NAF : Programmation informatique (6201Z) <br />
                Responsable éditorial : Jean-Jérôme Jornat <br />
                Non inscrit au Registre du Commerce et des Sociétés <br />
                Siège social : 32 B rue Vincent Placoly, 97233 Schoecher<br />
                Email : contact@jeanjrm-jornat.com<br />
                <br />
                <h2>Hébergement</h2>
                <br />

                Hébergeur : HOSTINGER <br />
                Adresse :  Hostinger International Ltd. 61 rue Lordou Vironos, 6023<br />
                Site web : https://www.hostinger.fr/
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialogMl = false"> OK </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <div>
          <v-dialog v-model="dialogU" width="1000">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" text v-bind="attrs" v-on="on">
                C.G.U.
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="text-h5 primary">
                Conditions générales d’utilisation
              </v-card-title>

              <v-card-text>
                <br />
                <h2>Limitation contractuelle sur les données</h2>
                <br />
                Les informations contenues sur ce site sont aussi précises que
                possible et le site remis à jour à différentes périodes de
                l’année, mais peut toutefois contenir des inexactitudes ou des
                omissions. Si vous constatez une lacune, erreur ou ce qui parait
                être un dysfonctionnement, merci de bien vouloir le signaler par
                email, à l’adresse contact@jeanjrm-jornat.com, en décrivant le
                problème de la manière la plus précise possible (page posant
                problème, type d’ordinateur et de navigateur utilisé, …). Tout
                contenu téléchargé se fait aux risques et périls de
                l'utilisateur et sous sa seule responsabilité. En conséquence,
                ne saurait être tenu responsable d'un quelconque dommage subi
                par l'ordinateur de l'utilisateur ou d'une quelconque perte de
                données consécutives au téléchargement. De plus, l’utilisateur
                du site s’engage à accéder au site en utilisant un matériel
                récent, ne contenant pas de virus et avec un navigateur de
                dernière génération mis-à-jour Les liens hypertextes mis en
                place dans le cadre du présent site internet en direction
                d'autres ressources présentes sur le réseau Internet ne
                sauraient engager la responsabilité de Jean-Jérôme Jornat.<br />
                <br />
                <h2>Propriété intellectuelle</h2>
                <br />
                Tout le contenu du présent sur le site www.jeanjrm-jornat.com,
                incluant, de façon non limitative, les graphismes, images,
                textes, vidéos, animations, sons, logos, gifs et icônes ainsi
                que leur mise en forme sont la propriété exclusive de la société
                à l'exception des marques, logos ou contenus appartenant à
                d'autres sociétés partenaires ou auteurs. Toute reproduction,
                distribution, modification, adaptation, retransmission ou
                publication, même partielle, de ces différents éléments est
                strictement interdite sans l'accord exprès par écrit de Jean-Jerome Jornat.
                Cette représentation ou reproduction, par quelque
                procédé que ce soit, constitue une contrefaçon sanctionnée par
                les articles L.335-2 et suivants du Code de la propriété
                intellectuelle. Le non-respect de cette interdiction constitue
                une contrefaçon pouvant engager la responsabilité civile et
                pénale du contrefacteur. En outre, les propriétaires des
                Contenus copiés pourraient intenter une action en justice à
                votre encontre.<br />
                <br />
                <h2>Déclaration à la CNIL</h2>
                <br />
                Conformément à la loi 78-17 du 6 janvier 1978 (modifié par la
                loi 2004-801 du 6 août 2004 relative à la protection des
                personnes physiques à l’égard des traitements de données à
                caractère personnel) relative à l’informatique, aux fichiers et
                aux libertés, ce site a fait l’objet d’une déclaration auprès de
                la Commission nationale de l’informatique et des libertés
                (www.cnil.fr)<br />
                <br />
                <h2>Litiges</h2>
                <br />
                Les présentes conditions d’utilisation du site
                www.jeanjrm-jornat.com sont régies par les lois françaises et toute
                contestation ou litiges qui pourraient naitre de
                l’interprétation ou de l’exécution de celles-ci seront de la
                compétence exclusive des tribunaux dont dépend le siège sociale
                de la société. La langue de référence, pour le règlement de
                contentieux éventuels, est le français.<br />
                <br />
                <h2>Données personnelles</h2>
                <br />
                De manière générale, vous n’êtes pas tenu de nous communiquer
                vos données personnelles lorsque vous visitez notre site
                Internet. Cependant, ce principe comporte certaines exceptions.
                En effet, pour certains services proposés par notre site, vous
                pouvez être amenés à nous communiquer certaines données telles
                que : votre nom, votre fonction, le nom de votre société, votre
                adresse électronique, et votre numéro de téléphone. Tel est le
                cas lorsque vous remplissez le formulaire qui vous est proposé
                en ligne, dans la rubrique « contact ». Dans tous les cas, vous
                pouvez refuser de fournir vos données personnelles. Dans ce cas,
                vous ne pourrez pas utiliser les services du site, notamment
                celui de solliciter des renseignements sur notre société, ou de
                recevoir les lettres d’information. Enfin, nous pouvons
                collecter de manière automatique certaines informations vous
                concernant lors d’une simple navigation sur notre site Internet,
                notamment : des informations concernant l’utilisation de notre
                site, comme les zones que vous visitez et les services auxquels
                vous accédez, votre adresse IP, le type de votre navigateur, vos
                temps d'accès. De telles informations sont utilisées
                exclusivement à des fins de statistiques internes, de manière à
                améliorer la qualité des services qui vous sont proposés. Les
                bases de données sont protégées par les dispositions de la loi
                du 1er juillet 1998 transposant la directive 96/9 du 11 mars
                1996 relative à la protection juridique des bases de données.<br />
                <br />
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="dialogU = false"> OK </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
      </div>

      <v-divider></v-divider>

      <v-card-text class="white--text"> COPYRIGHT ©
        {{ new Date().getFullYear() }} — <strong>JEAN-JEROME JORNAT</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "FooterComp",
  data: () => ({
    links: [
      {
        icon:"mdi-linkedin",
        link:'https://www.linkedin.com/in/jean-jérôme-jornat-57215658/'
      },
      {
        icon:"mdi-instagram",
        link:"https://www.instagram.com/iam_jeanjrm/"
      },
      {
        icon:"mdi-github",
        link:"https://github.com/TCox972"
      }
      ],
    dialogMl: false,
    dialogU: false
  }),
};
</script>