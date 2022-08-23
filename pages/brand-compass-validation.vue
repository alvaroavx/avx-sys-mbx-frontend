<template>
  <div>
    <div>
      <div>
        <!-- back btn start-->
        <div class="big-bang-proposal-main container">
          <p
            class="bold-title font-weight-bold"
            style="
              zoom: 1.2;
              line-height: 40px;
              margin-bottom: 30px;
              margin-top: 100px;
            "
            data-v-5a62082a=""
          >
            VALIDACIÓN<br />
            DE BRAND COMPASS
          </p>
          <div class="big-proposal-content">
            <span><b>Instrucciones</b> </span>
            <p>
              is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry’s standard dummy text
            </p>
          </div>
          <Hr></Hr>
          <div
            v-for="elemento in [
              'Propósito',
              'Onliness',
              'Personalidad',
              'Trueline',
            ]"
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
                          >Opción 1
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
                          >Opción 1
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
                          >Opción 1
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
        <div>
          <div class="territory-main-blk">
            <div class="single-territory-item">
              <p>Territorio 01</p>
            </div>
            <div class="single-territory-item dif">
              <p>Territorio 02</p>
            </div>
          </div>
          <div class="territory-txt">
            <div>
              <div class="big-bang-common-blk">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="px-12 big-bang-single-content">
                      <div class="territory-count"><b> 20%</b></div>
                      <span>Principio 01</span>
                      <p>
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry’s standard
                        dummy text
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="px-12 big-bang-single-content">
                      <div class="territory-count"><b> 80%</b></div>
                      <span> Principio 01</span>
                      <p>
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry’s standard
                        dummy text
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="brand-compass-bottom">
            <div>
              <div class="kick-common-bottom-blk">
                <div class="kick-common-bottom-left"></div>
                <div class="kick-common-right-blk">
                  <div class="kick-bottom-form px-12">
                    <BotonDiseno> Enviar </BotonDiseno>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="territory-main-blk">
            <div class="single-territory-item">
              <p>Dirección 01</p>
            </div>
            <div class="single-territory-item dif">
              <p>Dirección 02</p>
            </div>
          </div>
          <div class="territory-txt">
            <div>
              <div class="big-bang-common-blk">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="px-12 big-bang-single-content">
                      <div class="territory-count"><b> 20%</b></div>
                      <span>Principio 01</span>
                      <p>
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry’s standard
                        dummy text
                      </p>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="px-12 big-bang-single-content">
                      <div class="territory-count"><b> 80%</b></div>
                      <span> Principio 01</span>
                      <p>
                        is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry’s standard
                        dummy text
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="brand-compass-bottom">
            <div>
              <div class="kick-common-bottom-blk">
                <div class="kick-common-bottom-left"></div>
                <div class="kick-common-right-blk">
                  <div class="kick-bottom-form px-12">
                    <BotonDiseno>Enviar</BotonDiseno>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="text-center">
          <BotonDiseno @click="$router.push({ path: '/control-panel' })">
            Aceptar
          </BotonDiseno>
          <div class="font-italic text--secondary caption my-2">
            Una vez finalizada esta etapa, haz clic en aceptar para pasar a la
            siguiente
          </div>
        </div>
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
