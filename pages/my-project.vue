<template>
  <div>
    <div>
      <!-- back btn start-->

      <!-- back btn end-->

      <!-- My project area start-->

      <div class="mbx-page">
        <div class="container h-100 position-relative">
          <div class="mbx-main-blk">
            <v-row no-gutters>
              <v-col cols="4">
                <p
                  class="text-left text-uppercase mb-12 pt-4"
                  style="font-weight: 700; font-size: 50px"
                >
                  Mi Project
                </p>
              </v-col>
              <v-col>
                <v-row no-gutters="">
                  <v-col cols="4">
                    <img
                      style="width: 100%"
                      src="https://i.imgur.com/ntmPFeU.png"
                      alt=""
                    />
                    <div class="">
                      <div class="font-weight-bold my-3">Nombre Apellido</div>
                      <div class="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Repellendus tempore vero quod officia aliquam, numquam
                        cum nihil excepturi
                      </div>

                      <div class="mt-12">
                        <v-icon> mdi-email </v-icon>
                        <v-icon> mdi-whatsapp </v-icon>
                      </div>
                    </div>
                  </v-col>
                  <v-col>
                    <v-sheet color="#f5f5f3" class="pa-3">
                      Mensajes
                      <v-sheet color="transparent" height="400"></v-sheet>
                      <div class="ma-2">
                        <v-layout>
                          <v-text-field
                            :show-details="false"
                            placeholder="Mensaje"
                            style="width: 300px"
                          ></v-text-field>
                          <v-spacer></v-spacer>
                          <button
                            type="submit"
                            style="border-bottom: 1px solid #000; height: 49px"
                          >
                            Entrar
                          </button>
                        </v-layout>
                      </div>
                    </v-sheet>
                  </v-col>
                </v-row>
              </v-col>
            </v-row>
          </div>
        </div>
      </div>

      <!-- My project area end-->

      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/main.js"></script>
    </div>
  </div>
</template>
