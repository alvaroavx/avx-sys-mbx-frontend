<template>
  <div>
    <div>
      <div class="mbx-page">
        <div class="container h-100 position-relative">
          <div class="mbx-main-blk">
            <div class="mbx-bottom-content-blk">
              <div class="row mt-12 justify-content-center">
                <div class="col-lg-6 col-md-6 pr-12">
                  <div class="mbx-left-content evaluate-form regitry-form2">
                    <p style="padding-bottom: 24px" class="registry-title">
                      Tu cuenta
                    </p>

                    <Login />

                    <div class="row">
                      <div class="col-12"></div>
                    </div>
                  </div>
                </div>
                <div
                  v-if="!$ls.get('accessToken')"
                  class="col-lg-6 col-md-6 pl-12"
                  style="border-left: 1px solid black"
                >
                  <div class="mbx-left-content evaluate-form regitry-form2">
                    <InviteTeam />

                    <div class="row">
                      <div class="col-12"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- client-view Registration-2 end-->

      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/main.js"></script>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    forget() {},
  },
};
</script>
