<template>
  <div>
    <div>
      <!-- back btn start-->

      <!-- back btn end-->

      <!-- Mi MBX  start-->

      <div class="mbx-page">
        <div class="h-100 position-relative">
          <div class="">
            <div class="row">
              <div class="col-md-6 px-12">
                <div class="my-mbx-title px-12 ml-12">
                  <p
                    class="text-left text-uppercase mb-12 pt-4"
                    style="font-weight: 700; font-size: 50px"
                  >
                    Mi MBX
                  </p>
                </div>
                <div class="mi-mbx-step-blk">
                  <div class="control-panel-step-bar">
                    <div class="common-step-bar-blk">
                      <div class="step-bar">
                        <ul>
                          <li class="active">
                            <div class="step-top-blk active">
                              <span>Fase 1 / entender</span>
                              Research
                            </div>
                            <div
                              :class="{ active: getAdvanceIndex() == 0 }"
                              class="mi-steps"
                            >
                              <span>13 / 02</span>
                              <p>Kick Off</p>
                            </div>
                            <div
                              :class="{ active: getAdvanceIndex() == 1 }"
                              class="mi-steps"
                            >
                              <span>13 / 02</span>
                              <div
                                v-if="getAdvanceIndex() == 1"
                                style="
                                  float: right;
                                  background: #f00;
                                  color: #fff;
                                  width: 25px;
                                  display: inline-block;
                                  text-align: center;
                                  border-radius: 210px;
                                  font-weight: bold;
                                  font-size: 16px;
                                  margin-top: -12px;
                                "
                              >
                                3
                              </div>
                              <div>Research</div>
                            </div>
                          </li>
                          <li :class="{ active: getAdvanceIndex() >= 2 }">
                            <div class="step-top-blk">
                              <span>Fase 2 / definir y sestear</span>
                              Co-Creación Estratégica
                            </div>
                            <div
                              :class="{ active: getAdvanceIndex() == 2 }"
                              class="mi-steps"
                            >
                              <span>13 / 02</span>
                              <p>Brand Compass Workshop</p>
                            </div>
                            <div
                              :class="{ active: getAdvanceIndex() == 3 }"
                              class="mi-steps"
                            >
                              <span>13 / 02</span>
                              <p>Propuesta Brand Compass</p>
                            </div>

                            <div
                              :class="{ active: getAdvanceIndex() == 4 }"
                              class="mi-steps"
                            >
                              <span>13 / 02</span>
                              <p>Propuesta Big Bang Workshop</p>
                            </div>
                          </li>
                          <li :class="{ active: getAdvanceIndex() >= 5 }">
                            <div class="step-top-blk">
                              <span>Fase 3 / Implementar</span>
                              Expresión
                            </div>
                            <div
                              :class="{ active: getAdvanceIndex() == 5 }"
                              class="mi-steps"
                            >
                              <span>13 / 02</span>
                              <p>Revisión 1</p>
                            </div>
                            <div
                              :class="{ active: getAdvanceIndex() == 6 }"
                              class="mi-steps"
                            >
                              <span>13 / 02</span>
                              <p>Revisión 2</p>
                            </div>

                            <div
                              :class="{ active: getAdvanceIndex() == 7 }"
                              class="mi-steps"
                            >
                              <span>13 / 02</span>
                              <p>Revisión 3</p>
                            </div>

                            <div
                              :class="{ active: getAdvanceIndex() == 8 }"
                              class="mi-steps"
                            >
                              <span>13 / 02</span>
                              <p>Business Idea Workshop</p>
                            </div>

                            <div
                              :class="{ active: getAdvanceIndex() == 9 }"
                              class="mi-steps"
                            >
                              <span>13 / 02</span>
                              <p>Entrega final</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style="margin-top: -60px"
                class="beige-light col-md-6 pr-12 pl-3 py-12"
                :style="{
                  background: $route.query.tareas ? '#E0E0D5' : '#f5f5f3',
                }"
              >
                <div class="text-right" style="padding-top: 130px">
                  <v-btn
                    to="/my-project"
                    class="caption text-none font-weight-bold mb-2"
                    tile
                    text
                    style="
                      border-bottom: 1px solid black;
                      border-top: 1px solid black;
                    "
                  >
                    <span style="font-size: 14px"> Mi Project </span>
                  </v-btn>
                </div>

                <div class="mi-mbx-research">
                  <div
                    v-if="$route.query.tareas"
                    class="archive-research-wrap"
                    style="margin-top: -84px"
                  >
                    <v-tabs
                      v-model="selectedItem"
                      color="black"
                      class="mb-8"
                      background-color="transparent"
                    >
                      <v-tab
                        class="text-none"
                        style="
                          margin: 0 30px;
                          padding: 0px 20px;
                          font-size: 17px;
                          letter-spacing: 0;
                        "
                        >Documentos</v-tab
                      >
                      <v-tab
                        class="text-none"
                        style="
                          margin: 0 30px;
                          padding: 0px 20px;
                          font-size: 17px;
                          letter-spacing: 0;
                        "
                        >Mis Tareas</v-tab
                      >
                    </v-tabs>
                    <div
                      v-if="selectedItem === 0"
                      class="archive-research-scroll"
                      style="width: 460px"
                    >
                      <div v-if="getAdvanceIndex() == 1">
                        <div class="px-3" style="color: orangered">
                          <div
                            style="font-weight: 500; color: orangered"
                            class="caption_f"
                          >
                            <span> Business Model Canvas </span>
                          </div>
                          <div class="caption_f">
                            <span>Ir al ejercicio</span>
                          </div>
                        </div>

                        <div class="single-research-item">
                          <hr style="border-color: #000" />
                          <p>Resultados del cliente</p>
                          <v-row no-gutters>
                            <v-col
                              cols="8"
                              style="font-weight: 500"
                              class="caption_f"
                            >
                              <nuxtLink to="typeresearach">
                                <span style="color: orangered"> Research </span>
                              </nuxtLink> </v-col
                            ><v-col class="caption_f">
                              <span>Ir </span>
                            </v-col>
                            <v-col
                              cols="8"
                              style="font-weight: 500"
                              class="caption_f"
                            >
                              <nuxtLink to="bmc">
                                <span style="color: orangered">
                                  Business Model Canvas
                                </span>
                              </nuxtLink> </v-col
                            ><v-col class="caption_f">
                              <span>Ir </span>
                            </v-col>
                            <v-col
                              cols="8"
                              style="font-weight: 500"
                              class="caption_f"
                            >
                              <nuxtLink to="miroespacio">
                                <span style="color: orangered">
                                  Ejercicio espacio en blanco
                                </span>
                              </nuxtLink> </v-col
                            ><v-col class="caption_f">
                              <span>Ir </span>
                            </v-col>
                          </v-row>
                          <p class="mt-6">Entregable Research</p>
                          <v-row no-gutters>
                            <v-col
                              cols="8 "
                              style="font-weight: 500"
                              class="caption_f"
                            >
                              <nuxtLink to="typeresearach">
                                <span style="color: orangered">
                                  Documento Research
                                </span>
                              </nuxtLink> </v-col
                            ><v-col class="caption_f">
                              <span>
                                <v-icon style="font-size: 17px; color: inherit">
                                  mdi-format-vertical-align-top
                                </v-icon>
                              </span>
                            </v-col>
                          </v-row>
                        </div>
                      </div>
                    </div>

                    <div
                      v-if="selectedItem === 1"
                      class="archive-research-scroll"
                      style="width: 460px"
                    >
                      <div v-if="getAdvanceIndex() == 1">
                        <div class="px-3" style="color: black">
                          <div style="font-weight: 500" class="caption_f">
                            <span> Descripción </span>
                          </div>
                          <div class="caption_f">
                            <span>
                              Es un documento que permite identificar</span
                            >
                          </div>
                        </div>

                        <div class="single-research-item">
                          <hr style="width: 370px" />
                          <v-row>
                            <v-col
                              cols="5"
                              style="font-weight: 500"
                              class="caption_f"
                            >
                              <nuxtLink to="typeresearach">
                                Entregable Research
                              </nuxtLink>
                            </v-col>

                            <v-col class="caption_f">
                              <span>Ver documento</span>
                            </v-col>

                            <v-col class="caption_f">
                              <span>Subir</span>
                            </v-col>
                          </v-row>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- <div class="mbx-research-title">
                  <p>Archivos Research</p>
                </div> -->
                  <div
                    v-if="!$route.query.tareas"
                    class="archive-research-wrap"
                    style="margin-top: -84px"
                  >
                    <v-tabs
                      v-model="selectedItem"
                      color="black"
                      class="mb-8"
                      background-color="transparent"
                    >
                      <v-tab
                        class="text-none"
                        style="
                          margin: 0 30px;
                          padding: 0px 20px;
                          font-size: 17px;
                          letter-spacing: 0;
                        "
                        >Actividades</v-tab
                      >
                      <v-tab
                        class="text-none"
                        style="
                          margin: 0 30px;
                          padding: 0px 20px;
                          font-size: 17px;
                          letter-spacing: 0;
                        "
                        >Mis entregables</v-tab
                      >
                      <v-spacer></v-spacer>
                    </v-tabs>
                    <div
                      v-if="selectedItem === 0"
                      class="archive-research-scroll"
                      style="width: 460px"
                    >
                      <div v-if="getAdvanceIndex() == 1">
                        <div class="px-3" style="color: orangered">
                          <div
                            style="font-weight: 500; color: orangered"
                            class="caption_f"
                          >
                            <span> {{ title }} </span>
                          </div>
                          <div class="caption_f">
                            <span>{{ body }}</span>
                          </div>
                        </div>

                        <div class="single-research-item">
                          <hr style="border-color: #000" />
                          <p>Tus tareas</p>
                          <v-row no-gutters>
                            <v-col
                              cols="8"
                              style="font-weight: 500"
                              class="caption_f"
                            >
                              <span
                                style="color: orangered"
                                @click="
                                  setHeader('Research ', 'Texto de referencia')
                                "
                              >
                                Research
                              </span> </v-col
                            ><v-col class="caption_f">
                              <nuxtLink to="typeresearach">
                                <span>Ir al ejercicio</span>
                              </nuxtLink>
                            </v-col>
                            <v-col
                              cols="8"
                              style="font-weight: 500"
                              class="caption_f"
                            >
                              <span
                                style="color: orangered"
                                @click="
                                  setHeader(
                                    ' Business Model Canvas ',
                                    'Texto de referencia'
                                  )
                                "
                              >
                                Business Model Canvas
                              </span> </v-col
                            ><v-col class="caption_f">
                              <nuxtLink to="bmc">
                                <span>Ir al ejercicio</span>
                              </nuxtLink>
                            </v-col>
                            <v-col
                              cols="8"
                              style="font-weight: 500"
                              class="caption_f"
                            >
                              <span
                                style="color: orangered"
                                @click="
                                  setHeader(
                                    ' Ejercicio espacio en blanco ',
                                    'Texto de referencia'
                                  )
                                "
                              >
                                Ejercicio espacio en blanco
                              </span> </v-col
                            ><v-col class="caption_f">
                              <nuxtLink to="miroespacio">
                                <span>Ir al ejercicio</span>
                              </nuxtLink>
                            </v-col>
                          </v-row>
                          <p class="mt-6">Documentos Adjuntos</p>
                          <v-row no-gutters>
                            <v-col
                              cols="8 "
                              style="font-weight: 500"
                              class="caption_f"
                            >
                              <span
                                style="color: orangered"
                                @click="
                                  setHeader(
                                    ' Nombre Documento ',
                                    'Texto de referencia'
                                  )
                                "
                              >
                                Nombre Documento
                              </span> </v-col
                            ><v-col class="caption_f">
                              <nuxtLink to="typeresearach">
                                <span>Ver Documento</span>
                              </nuxtLink>
                            </v-col>
                          </v-row>
                        </div>
                      </div>
                    </div>

                    <div
                      v-if="selectedItem === 1"
                      class="archive-research-scroll"
                      style="width: 460px"
                    >
                      <div v-if="getAdvanceIndex() == 1">
                        <div class="px-3" style="">
                          <div style="font-weight: 500" class="caption_f">
                            <span> Descripción </span>
                          </div>
                          <div class="caption_f">
                            <span>
                              Es un documento que permite identificar</span
                            >
                          </div>
                        </div>

                        <div class="single-research-item">
                          <hr style="width: 370px" />
                          <v-row>
                            <v-col
                              cols="5"
                              style="font-weight: 500"
                              class="caption_f"
                              @click="
                                setHeader(
                                  'Entregable Research ',
                                  'Texto de referencia'
                                )
                              "
                            >
                              Entregable Research
                            </v-col>

                            <v-col class="caption_f">
                              <nuxtLink to="typeresearach">
                                <span>Ver documento</span>
                              </nuxtLink>
                            </v-col>

                            <v-col class="caption_f">
                              <span>Descargar</span>
                            </v-col>
                          </v-row>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Mi MBX  end -->

      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/main.js"></script>
    </div>
  </div>
</template>
<script>
import { progress } from "./control-panel.vue";
export default {
  mixins: [progress],
  data() {
    return {
      title: "",
      body: "",
      selectedItem: 0,
    };
  },
  mounted() {
    if (this.$route.query.tareas) {
      this.$vuetify.theme.dark = true;
      this.$vuetify.theme.isDark = true;
    }
  },

  methods: {
    setHeader(title, body) {
      this.title = title;
      this.body = body;
    },
  },
};
</script>
<style>
p.sngl-research-title {
  font-size: 15px;
  font-weight: bold;
}

.single-research * {
  font-size: 14px !important;
}

.mi-steps.active {
  color: #000 !important;
  padding: 5px 0;
  padding-top: 8px;
  padding-bottom: 0px;
  transition: 0.4s;
  position: relative;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  margin-left: 25px;
  padding-left: 10px;
}
.caption_f {
  font-size: 16px;
}
.v-tabs-slider-wrapper {
  height: 1px !important;
}

div#app.theme--dark.v-application {
  background: #24262b;
}

div#app.theme--dark.v-application .text-none.v-tab {
  color: black !important;
}

div#app.theme--dark.v-application .v-slide-group__content.v-tabs-bar__content {
  color: black !important;
}

div#app.theme--dark.v-application .beige-light span.v-btn__content {
  color: black !important;
}

div#app.theme--dark.v-application .mi-steps.active {
  color: #fff !important;
  padding: 5px 0;
  padding-top: 8px;
  padding-bottom: 0px;
  transition: 0.4s;
  position: relative;
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  margin-left: 25px;
  padding-left: 10px;
}

.single-research-item {
  color: black !important;
}
.theme--dark .back-btn a {
  color: #fff !important;
}
</style>
