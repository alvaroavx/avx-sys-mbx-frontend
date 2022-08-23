<template>
  <div>
    <div>
      <!-- back btn start-->

      <!-- back btn end-->

      <!-- Shop area start-->

      <div class="mbx-page">
        <div class="container h-100 position-relative">
          <div class="mbx-main-blk">
            <div class="row">
              <div class="col-12">
                <div class="strategists-blk pb-5">
                  <p
                    class="text-left text-uppercase mb-12 pt-4"
                    style="font-weight: 700; font-size: 50px"
                  >
                    Shop
                  </p>
                  <v-row>
                    <v-col cols="3">
                      <v-sheet style="border-top: 1px solid black" class="pt-2">
                        <div class="font-weight-bold">TOTAL</div>
                        <div class="font-weight-bold">$2.300.323</div>

                        <v-btn
                          tile
                          color="#000"
                          style="letter-spacing: 0; f "
                          dark
                          large
                          class="mt-2 text-none font-weight-bold px-8 title-1"
                          @click="pay"
                          >Pagar</v-btn
                        >
                      </v-sheet>
                    </v-col>
                    <v-col>
                      <div class="strategist-item-blk">
                        <div class="row">
                          <div
                            v-for="i in 20"
                            :key="i"
                            class="col-lg-4 col-md-4"
                          >
                            <div
                              style="background: #f5f5f3"
                              class="pa-2 stratigist-item product-item position-relative"
                            >
                              <div
                                class="stratigist-thumb product-thumb position-relative"
                              >
                                <img src="assets/img/strategist.png" alt="" />
                                <div class="product">Producto</div>
                              </div>
                              <p></p>
                              <div class="font-weight-bold">Pieza 01</div>
                              <div class="py-2 body">
                                Qué incluye / que se entrega
                              </div>
                              <div class="product-btn text-left">
                                <div class="font-weight-bold my-5">
                                  $2.300.323
                                </div>

                                <v-btn
                                  class="caption text-none font-weight-bold mb-2"
                                  tile
                                  text
                                  style="
                                    border-bottom: 1px solid black;
                                    border-top: 1px solid black;
                                  "
                                >
                                  <span style="font-size: 14px"> Agregar </span>
                                </v-btn>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </v-col>
                  </v-row>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--  Shop area end-->
      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/main.js"></script>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    pay() {
      const { amount, description, customerMail, url } = {
        amount: 2300323,
        description: "Prueba de integración",
        customerMail: "hugojerez21@googlemail.com",
        url: "https://hola.com",
      };
      this.$axios
        .$post("/payments", {
          amount,
          description,
          customerMail,
          url,
        })
        .then((a) => {
          location.href = a.url;
        });
    },
  },
};
</script>
