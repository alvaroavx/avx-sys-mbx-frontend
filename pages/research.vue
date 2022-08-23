<template>
  <div>
    <v-container>
      <!-- back btn start-->

      <!-- back btn end-->

      <!-- Research text start-->
      <p
        class="bold-title font-weight-bold"
        style="line-height: 40px; margin-bottom: 50px; margin-top: 100px"
        data-v-5a62082a=""
      >
        RESEARCH
      </p>
      <div class="mbx-page">
        <div class="research-txt-blk">
          <span><b>Instrucciones </b></span>
          <p>
            Debe completar la etapa de research accediento a las siguientes
            ejercicios
          </p>
        </div>
        <hr style="border-color: black; margin-top: 100px" />
        <div class="">
          <div class="row">
            <div class="col-12">
              <div class="research-text">
                <div class="research-txt-blk">
                  <span><b>Ejercicio 01 </b></span>
                  <p>
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard dummy
                    text
                  </p>
                  <BotonDiseno class="no-border my-5">
                    Ir al Desktop Research
                  </BotonDiseno>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr style="border-color: black; margin-top: 100px" />

        <div class="">
          <div class="row">
            <div class="col-12">
              <div class="research-text">
                <div class="research-txt-blk">
                  <span><b>Ejercicio 02 </b></span>
                  <p>
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard dummy
                    text
                  </p>
                  <BotonDiseno class="no-border my-5">
                    Ir al Desktop Research
                  </BotonDiseno>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr style="border-color: black; margin-top: 100px" />

      <div class="">
        <div class="row">
          <div class="col-12">
            <div class="research-text">
              <div class="research-txt-blk">
                <span><b>Ejercicio 03 </b></span>
                <p>
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry’s standard dummy text
                </p>
                <BotonDiseno class="no-border my-5">
                  Ir al Desktop Research
                </BotonDiseno>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="height: 100px"></div>
      <div class="text-center">
        <BotonDiseno @click="$router.push({ path: '/control-panel' })">
          Aceptar
        </BotonDiseno>
        <div class="font-italic text--secondary caption my-2">
          Una vez finalizada esta etapa, haz clic en aceptar para pasar a la
          siguiente
        </div>
      </div>
      <!-- Research text end-->

      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/main.js"></script>
    </v-container>
  </div>
</template>
