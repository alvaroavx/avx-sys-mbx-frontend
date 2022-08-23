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
                <h1>
                  THE BUSINESS <br />
                  MODEL CANVAS
                </h1>
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

      <div class="text-center">
        <BotonDiseno> Aceptar </BotonDiseno>
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
