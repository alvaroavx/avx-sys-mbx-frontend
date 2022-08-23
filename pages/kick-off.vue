<template>
  <div
    :style="{
      background: $vuetify.theme.isDark ? undefined : 'rgb(243,243,240)',
    }"
    @click="close = true"
  >
    <div v-if="showMessagebox" class="box-container">
      <div class="bluebox">
        <div class="text-right">
          <v-icon
            v-if="$route.query.back"
            style="position: absolute; margin-top: -10px; font-size: 10px"
            @click="closeCommentMessage"
          >
            mdi-close
          </v-icon>
        </div>
        <div class="font-weight-bold">Project</div>
        <div class="caption mt-3">
          {{ lastMessageComment }}
        </div>
      </div>
    </div>
    <Video :url="currentURL" @click="close = true">
      <div>
        <v-layout
          v-if="$route.query.back"
          style="height: 60px"
          justify-space-around
          align-center
        >
          <v-icon
            style="
              color: #d1d1d1;
              background: white;
              border-radius: 100%;
              height: 20px;
              width: 20px;
              box-shadow: 0 0 0 6px white inset;
            "
            @click="close = true"
          >
            mdi-information
          </v-icon>

          <BotonDiseno v-if="$route.query.back" @click.native="activate(3)">
            Ir a la presentación
          </BotonDiseno>
          <v-icon style="color: inherit" :disabled="n === 0" @click="n = 0">
            mdi-chevron-left
          </v-icon>
          <v-sheet color="transparent">
            <BotonDiseno
              v-if="n % 3 == 0"
              style="width: 160px"
              class="mx-1 no-border"
              :style="{ color: active === 0 ? '#fff' : '#ccc' }"
              @click.native="activate(0)"
            >
              <div :class="{ 'font-weight-light': active !== 0 }">
                Ejercicio Research
              </div>
            </BotonDiseno>
            <BotonDiseno
              v-if="n % 3 == 1"
              style="width: 160px"
              class="mx-1 no-border"
              :style="{ color: active === 1 ? '#fff' : '#ccc' }"
              @click.native="activate(1)"
            >
              <div :class="{ 'font-weight-light': active !== 1 }">
                Business Model Canvas
              </div>
            </BotonDiseno>

            <BotonDiseno
              v-if="n % 3 == 2"
              style="width: 160px"
              class="mx-1 no-border"
              :style="{ color: active === 2 ? '#fff' : '#ccc' }"
              @click.native="activate(2)"
            >
              <div :class="{ 'font-weight-light': active !== 2 }">
                Espacio en blanco
              </div>
            </BotonDiseno>
          </v-sheet>
          <v-icon
            v-if="$route.query.back"
            style="color: inherit"
            :disabled="n === 2"
            @click="n++"
          >
            mdi-chevron-right
          </v-icon>

          <div style="width: 100px">
            <BotonDiseno
              :style="{
                borderTop: introduced
                  ? '1px solid rgb(215,79,68)'
                  : '1px solid #02bddc',
                borderBottom: introduced
                  ? '1px solid rgb(215,79,68)'
                  : '1px solid #02bddc',
              }"
              class="mx-1 no-border"
              @click="introduce()"
            >
              {{ introduced ? "Finalizar" : "Iniciar" }}
            </BotonDiseno>
          </div>

          <BotonDiseno
            style="border-bottom: 1px solid gray"
            class="mx-0 px-0 pr-8 no-border"
            @click="showComments = true"
          >
            <div class="text-left font-weight-light">Comentario</div>
          </BotonDiseno>

          <div
            v-if="showComments"
            class="px-3"
            style="
              background: rgb(2, 189, 220) none repeat scroll 0% 0%;
              position: fixed;
              width: 300px;
              height: 290px;
              top: auto;
              z-index: 52222;
              bottom: 0;
              right: 300px;
            "
          >
            <div class="text-right">
              <v-icon style="color: white" @click="showComments = false">
                mdi-chevron-down
              </v-icon>
            </div>
            <v-text-field v-model="comment" @keypress.enter="sendComment">
            </v-text-field>
            <div style="height: 140px" class="overflow-auto">
              <div v-for="(comment, index) in comments" :key="index">
                <div class="">
                  {{ comment.comment }}
                </div>
              </div>
            </div>
            <div class="text-right">
              <BotonDiseno
                style="
                  border-top: 1px solid white;
                  border-bottom: 1px solid white;
                "
                class="mx-1 no-border"
                @click="sendComment"
              >
                Enviar
              </BotonDiseno>
            </div>
          </div>
          <BotonDiseno
            v-if="$route.query.back"
            class="mx-1"
            @click="validateClient"
          >
            Validación Cliente
          </BotonDiseno>

          <BotonDiseno
            v-if="$route.query.back"
            style="border-color: red; color: red"
            class="mx-1"
            @click="validateClient"
          >
            Fin
          </BotonDiseno>
        </v-layout>
        <v-layout
          v-if="!$route.query.back"
          style="height: 60px"
          justify-space-around
          align-center
        >
          <img
            v-if="close && showClientFin === false"
            src="https://i.imgur.com/ZauReoN.png"
            style="
              width: 300px;
              left: 47px;
              position: absolute;
              margin-top: -120px;
            "
            @click="$event.target.remove()"
          />
          <v-icon
            style="
              color: #d1d1d1;
              background: white;
              border-radius: 100%;
              height: 20px;
              width: 20px;
              box-shadow: 0 0 0 6px white inset;
            "
            @click="close = true"
          >
            mdi-information
          </v-icon>
          <v-spacer></v-spacer>
          <BotonDiseno
            v-if="close && showClientFin === false"
            class="mx-1"
            @click="showClientFin = true"
          >
            Aceptar
          </BotonDiseno>
          <v-spacer></v-spacer>

          <BotonDiseno
            v-if="showClientFin"
            style="border-color: red; color: red"
            class="mx-1"
            @click="$router.push({ path: '/control-panel' })"
          >
            Fin
          </BotonDiseno>
        </v-layout>
      </div>
    </Video>
  </div>
</template>

<script>
export default {
  components: {},
  layout: "full",
  data() {
    return {
      showClientFin: false,
      lastMessageComment: "",
      showMessagebox: false,
      comments: [],
      showComments: false,
      n: 0,
      introduced: false,
      comment: "",
      close: false,
      active: -1,
      currentURL: "",
    };
  },
  mounted() {
    this.show();
    this.$nextTick(() => {
      if (this.$route.query.back) {
        this.$vuetify.theme.dark = true;
      }
    });
    this.$fevu.configureSocket(this).then((socket) => {
      socket.service("events").on("created", (a) => {
        window.console.warn(a);
        if (a.action === "close") {
          this.close = true;
        }
        if (a.action === "introduce") {
          this.active = Number(a.active);
          this.currentURL = a.currentURL;
        }
        if (a.action === "commentMessage") {
          // a.message
          this.showMessagebox = true;

          this.lastMessageComment = a.message;
        }

        if (a.action === "closeCommentMessage") {
          // a.message
          this.showMessagebox = false;
        }
      });
    });
  },
  methods: {
    closeCommentMessage() {
      this.$fevu.configureSocket(this).then((socket) => {
        socket.service("events").create({
          action: "closeCommentMessage",
        });
      });
    },
    sendComment() {
      this.showComments = false;
      this.comments.push({ comment: this.comment });

      this.$fevu.configureSocket(this).then((socket) => {
        socket.service("events").create({
          action: "commentMessage",
          message: this.comment,
        });
        this.comment = "";
      });
    },
    introduce() {
      if (this.introduced) {
        this.active = -1;
        this.show();
        this.$axios.$post("/events", {
          action: "introduce",
          active: this.active,
          currentURL: this.currentURL,
        });
        this.introduced = false;
      } else {
        this.$axios.$post("/events", {
          action: "introduce",
          active: this.active,
          currentURL: this.currentURL,
        });
        this.introduced = true;
      }
    },
    show() {
      let url;
      if (this.active === -1) {
        url = `/waitpage.html`;
      }
      if (this.active === 0) {
        url = "https://liquidlatam.typeform.com/to/KBncGv6I"; // research
      }
      if (this.active === 1) {
        url = "https://miro.com/app/live-embed/o9J_l5uPpgo=/"; // research
      }

      if (this.active === 2) {
        url = "https://miro.com/app/live-embed/o9J_l5uEaMQ=/"; // research
      }

      if (this.active === 3) {
        url =
          "https://www.icloud.com/keynote/0fWdA1DOOH3czAMwYkO3cDPsw?embed=true";
      }
      this.currentURL = url;
    },
    activate(n) {
      if (this.active === n) {
        this.active = -1;
      } else {
        this.active = n;
      }
      this.show();
    },
    validateClient() {
      this.$axios.$post("/events", { action: "close" });
    },
  },
};
</script>
<style>
.bluebox {
  color: white;
  width: 300px;
  background: rgb(76, 109, 208);
  margin: 0 auto;
  margin-top: 250px;
  padding: 20px;
}
.box-container {
  position: absolute;
  z-index: 3333;
  height: 630px;
  width: 100%;
  background: #cccccc78;
}

.theme--dark.v-application {
  background: rgb(36, 38, 42) !important;
}
</style>
