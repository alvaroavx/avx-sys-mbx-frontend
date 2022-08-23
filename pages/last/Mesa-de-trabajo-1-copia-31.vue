<template>
  <div>
    <Video style="margin-top: -64px" conference :url="undefined">
      <div>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <link
          rel="stylesheet"
          href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css"
        />
        <link rel="stylesheet" href="/assets3/style.css" />
      </div>
      <div
        style="
          position: fixed;
          top: 40px;
          left: 0;
          height: 590px;
          overflow: auto;
          width: calc(100% - 300px);
        "
      >
        <!-- main-wrapper -->
        <div class="main-wrapper">
          <!-- header-area -->
          <div
            class="header-area d-flex align-items-center justify-content-between"
          >
            <!-- logo-area -->
            <div class="logo">
              <a href=""><img class="img" src="img/logo.svg" alt="" /></a>
            </div>
            <!-- logo-area -->

            <!-- nav-bar-area -->
            <!-- <div class="menu-bar">
              <span class="bar"><i class="fas fa-bars"></i></span>
            </div> -->
            <!-- nav-bar-area -->
          </div>
          <!-- header-area -->

          <!-- banner-title -->
          <div class="banner-area">
            <div class="container">
              <div class="banner-title border-1">
                <p>CLIENTE - PROYECTO 01</p>
                <h1>RESEARCH</h1>
              </div>
            </div>
          </div>
          <!-- banner-title_End -->

          <!-- page-right -slider_End -->

          <!-- =================================page-header-end==================================== -->

          <!-- datos-area -->
          <div class="datos-area">
            <div class="container">
              <div class="datos-area-wrapper border-2">
                <h5>01. Datos</h5>

                <div class="datos-items-wrapper d-flex">
                  <!-- single-datos- -->
                  <div class="single-datos">
                    <h6>Nombre</h6>
                    <p>Jorge O´Ryan</p>
                  </div>
                  <!-- single-datos-_End -->

                  <!-- single-datos- -->
                  <div class="single-datos">
                    <h6>Nombre</h6>
                    <p>Jorge O´Ryan</p>
                  </div>
                  <!-- single-datos-_End -->

                  <!-- single-datos- -->
                  <div class="single-datos"></div>
                  <!-- single-datos-_End -->

                  <!-- single-datos- -->
                  <div class="single-datos"></div>
                  <!-- single-datos-_End -->
                </div>
              </div>
            </div>
          </div>
          <!-- datos-area_Wns -->

          <!-- datos-text-area -->
          <div class="datos-text-area">
            <div class="container">
              <div class="datos-text-wrapper">
                <!-- single-datos-text-wrap -->
                <div
                  v-for="(question, index) in questions"
                  :key="index"
                  class="single-datos-text-wrap"
                >
                  <div v-if="question.reply">
                    <h5>{{ question.question }}</h5>
                    <p>
                      {{ question.reply }}
                    </p>
                  </div>
                </div>
                <!-- single-datos-text-wrap -->

                <!--============ button--area============ -->
                <div class="page-2 btn-area">
                  <a class="btn" href="">Finalizar</a>
                </div>
                <!-- buttonarea_End -->
              </div>
            </div>
          </div>
          <!-- datos-text-area_end -->
        </div>
        <!-- main-wrapper -->
      </div>

      <div>
        <v-layout
          v-if="$route.query.back"
          style="height: 60px"
          justify-space-between
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
          justify-space-between
          align-center
        >
          <v-icon
            style="
              color: #aaa;
              background: white;
              border-radius: 100%;
              height: 20px;
              width: 20px;
              box-shadow: 0 0 0 6px white inset;
            "
            class="mr-6"
            @click="close = true"
          >
            mdi-information
          </v-icon>

          <BotonDiseno
            style="width: 160px"
            class="mx-1 no-border"
            :style="{ color: active === 0 ? '#fff' : '#fff' }"
            @click.native="activate(0)"
          >
            <div :class="{ 'font-weight-light': active !== 0 }">
              Ejercicio Research
            </div>
          </BotonDiseno>
          <BotonDiseno
            style="width: 160px"
            class="mx-1 no-border"
            :style="{ color: active === 1 ? '#fff' : '#fff' }"
            @click.native="activate(1)"
          >
            <div :class="{ 'font-weight-light': active !== 1 }">
              Business Model Canvas
            </div>
          </BotonDiseno>

          <BotonDiseno
            style="width: 160px"
            class="mx-1 no-border"
            :style="{ color: active === 2 ? '#fff' : '#fff' }"
            @click.native="activate(2)"
          >
            <div :class="{ 'font-weight-light': active !== 2 }">
              Espacio en blanco
            </div>
          </BotonDiseno>

          <v-spacer></v-spacer>
          <BotonDiseno
            style="border-top: 0"
            class="mx-1 pr-12"
            @click="$router.push({ path: '/control-panel' })"
          >
            Notas
          </BotonDiseno>
          <v-spacer />
          <BotonDiseno
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
  data() {
    return { questions: [] };
  },
  mounted() {
    this.$axios.$get("/typeform").then((a) => {
      this.questions = a;
    });
  },
};
</script>
