<template>
  <div>
    <div class="home-page">
      <v-container>
        <div class="text-right">
          <v-menu offset-y>
            <template #activator="{ on, attrs }">
              <a v-bind="attrs" class="btn-bordered" v-on="on">
                <i class="fas fa-user"></i> Acceso
              </a>
            </template>
            <v-list>
              <v-list-item to="client-view-registration-2">
                <v-list-item-title>Acceder</v-list-item-title>
              </v-list-item>
              <v-list-item to="client-view-registration">
                <v-list-item-title>Registro</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </div>

        <div class="home-option-blk">
          <div class="row">
            <div class="col-12">
              <div class="home-option-item">
                <a href="" class="common-field"
                  >Conoce como MBX ha transformado nuestros clientes</a
                >
              </div>
            </div>
            <div class="col-12">
              <div class="home-option-item">
                <a href="" class="common-field">MBX detalle productos</a>
              </div>
            </div>
            <div class="col-12">
              <div class="home-option-item">
                <a href="" class="common-field"
                  >Evalúa la convivencia de MBX para pymes</a
                >
              </div>
            </div>
            <div class="col-12">
              <div class="home-option-item">
                <a href="" class="common-field"
                  >Nuestro equipo de estrategas y diseñadores</a
                >
              </div>
            </div>
            <div class="col-5">
              <div class="home-option-item">
                <a href="" class="common-field">Chatbot</a>
              </div>
            </div>
            <div class="col-7">
              <div class="home-option-item">
                <a href="" class="common-field">Agenda tu reunión virtual</a>
              </div>
            </div>

            <div class="col-12">
              <div class="common-btn-blk text-center mt-3">
                <a href="" class="sub-btn">Compra tu MBX</a>
              </div>
            </div>
          </div>
        </div>
      </v-container>
    </div>

    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/js/bootstrap.min.js"></script>
    <script src="assets/js/main.js"></script>
  </div>
</template>
