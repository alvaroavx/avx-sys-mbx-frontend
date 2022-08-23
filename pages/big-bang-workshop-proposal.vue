<template>
  <div>
    <div>
      <div>
        <!-- back btn start-->
        <div class="big-bang-proposal-main container">
          <p
            class="bold-title font-weight-bold mt-12"
            style="
              zoom: 1.2;
              line-height: 40px;
              margin-bottom: 30px;
              margin-top: 100px;
            "
            data-v-5a62082a=""
          >
            PROPUESTAS<br />
            BIG BANG WORKSHOP
          </p>
          <div
            class="big-proposal-content caption text-none"
            style="max-width: 500px"
          >
            <span><b>Instrucciones</b> </span>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry’s standard dummy text
            </p>
          </div>
          <Hr></Hr>
          <div
            v-for="elemento in ['Principio 01', 'Principio 02', 'Principio 03']"
            :key="elemento"
            class="leftBar pb-12"
          >
            <div class="big-bang-common-blk">
              <span
                ><b>{{ elemento }} </b></span
              >
              <div class="row">
                <div class="col-lg-3 col-md-3">
                  <div class="big-bang-single-content">
                    <span>Propuesta 01</span>
                    <p>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry’s standard
                      dummy text
                    </p>
                    <div class="my-12 kick-common-bottom-left">
                      <div class="kick-radio">
                        <label class="conntainer"
                          >Punto de contacto 1
                          <input type="radio" checked="checked" name="radio" />
                          <span class="checkmark my-0"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3">
                  <div class="big-bang-single-content">
                    <span> Propuesta 01</span>
                    <p>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry’s standard
                      dummy text
                    </p>
                    <div class="my-12 kick-common-bottom-left">
                      <div class="kick-radio">
                        <label class="conntainer"
                          >Punto de contacto 2
                          <input type="radio" checked="checked" name="radio" />
                          <span class="checkmark my-0"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-3">
                  <div class="big-bang-single-content">
                    <span> Propuesta 01</span>
                    <p>
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry’s standard
                      dummy text
                    </p>
                    <div class="my-12 kick-common-bottom-left">
                      <div class="kick-radio">
                        <label class="conntainer"
                          >Punto de contacto 3
                          <input type="radio" checked="checked" name="radio" />
                          <span class="checkmark my-0"></span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-3 mb-10 text-center align-self-end">
                  <BotonDiseno>Enviar</BotonDiseno>
                </div>
              </div>
            </div>
          </div>
        </div>
        <v-container>
          <Hr />
          <div class="font-weight-bold my-3">Todos los puntos de contacto</div>

          <div class="mt-4 mb-2 caption">
            Aquí encontrarás los 3 puntos de contacto propuestos por nuestro
            equipo. equipo.
            <br />
            <br />
            Los puedes reemplazar o puedes agregar más.
            <br />
            <br />
            Recuerda que el programa incluye 3 y los que quieras agregar tienen
            un costo adicional.
          </div>

          <v-row>
            <v-col cols="8">
              <v-row no-gutters>
                <v-col v-for="i in 9" :key="i" cols="4" class="mb-6">
                  <div class="kick-radio">
                    <label class="conntainer"
                      >Punto de contacto {{ i }}
                      <input type="radio" checked="checked" name="radio" />
                      <span class="checkmark my-0"></span>
                    </label>
                  </div>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="4" class="pl-4" style="border-left: 1px solid black">
              <v-layout align-center>
                <div class="font-weight-bold caption">
                  Agregar un punto de contacto
                </div>
                <v-spacer></v-spacer>
                <div class="">
                  <v-icon> mdi-minus-circle </v-icon>
                  1
                  <v-icon> mdi-plus-circle </v-icon>
                </div>
              </v-layout>

              <div class="caption">Descuento</div>
              <div class="font-weight-bold">25% dscto</div>

              <v-layout align-end>
                <div class="">
                  <div class="caption my-4">Valor total adicional</div>
                  <div class="font-weight-bold">$0</div>
                </div>
                <v-spacer></v-spacer>
                <BotonDiseno>Pagar</BotonDiseno>
              </v-layout>
            </v-col>
          </v-row>
          <div class="text-center">
            <BotonDiseno @click="$router.push({ path: '/control-panel' })">
              Aceptar
            </BotonDiseno>
            <div class="font-italic text--secondary caption my-2">
              Una vez finalizada esta etapa, haz clic en aceptar para pasar a la
              siguiente
            </div>
          </div>
        </v-container>
      </div>

      <!-- brand compass validation  end-->

      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/main.js"></script>
    </div>
  </div>
</template>
<script>
import Swal from "sweetalert2/dist/sweetalert2.js";

import "sweetalert2/src/sweetalert2.scss";
export default {
  methods: {
    login() {
      if (!this.email) {
        Swal.fire("El correo es inválido");
      } else if (!this.password) {
        Swal.fire("Debe ingresar una clave");
      } else if (this.email === "demo@demo.com" && this.password === "demo") {
        Swal.fire(
          "Iniciando sesión!",
          "Espere un momento mientras carga el inicio",
          "success"
        );
        this.$router.push({ path: "control-panel" });
      } else {
        Swal.fire("El usuario no existe");
      }
    },
  },
};
</script>
<style>
.leftBar:before {
  content: "";
  width: 6px;
  height: 6px;
  background: #808080;
  display: inline-block;
  margin-left: -23px;
  border-radius: 20px;
  position: absolute;
  margin-top: 10px;
}
.leftBar {
  border-left: 1px solid #c0c0c0;
  padding-left: 20px;
}
</style>
