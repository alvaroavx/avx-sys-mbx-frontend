<template>
  <div>
    <div>
      <!-- back btn start-->

      <!-- back btn end-->

      <!-- client-view Registration start-->

      <div class="mbx-page">
        <div class="container h-100 position-relative">
          <div class="mbx-main-blk">
            <div class="mbx-bottom-content-blk">
              <div class="row">
                <div class="col-lg-6" style="border-right: 1px solid black">
                  <div
                    class="mbx-left-content buy-mbx-form left-border evaluate-form"
                  >
                    <p class="registry-title">Tu cuenta</p>
                    <Login />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div
                    class="mbx-bottom-right-content w-100"
                    style="max-width: 100%"
                  >
                    <InviteTeam></InviteTeam>
                    <div class="form-submit registry-sub mt-2">
                      <button type="submit" class="sub-btn">Entrar</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- client-view Registration end-->

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
};
</script>
