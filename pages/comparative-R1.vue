<template>
  <div>
    <div>
      <!-- back btn start-->
      <div class="back-btn kick-back d-none"></div>
      <!-- back btn end-->

      <!-- Comparative R1 start-->

      <div class="mbx-page">
        <div class="kick-multiple-blk">
          <div class="kick-off-main">
            <div class="kick-off-content text-center">
              <div class="kick-play kick-r1">
                <img src="assets/img/r1-logo.png" alt="" />
              </div>
              <span class="dif-txt">Logotipo + Sistema 01</span>
            </div>
          </div>

          <div class="kick-off-main light-gray-bg">
            <div class="kick-off-content text-center">
              <div class="kick-play kick-thumbs">
                <img src="assets/img/img-2.png" alt="" />
              </div>
              <span>Logotipo + Sistema 02</span>
            </div>
          </div>

          <div class="kick-off-main">
            <div class="kick-off-content text-center">
              <div class="kick-play kick-thumbs">
                <img src="assets/img/img-3.png" alt="" />
              </div>
              <span>Logotipo + Sistema 03</span>
            </div>
          </div>
        </div>
        <div class="bottom-bar comparative-bottom-bar">
          <div class="kick-bar">
            <img src="assets/img/kick-bar.png" alt="" />
          </div>
          <div class="comparative-kick-blk">
            <div class="kick-comparative-item">
              <div class="kick-bottom-form with-btn">
                <div class="kick-input">
                  <input type="text" placeholder="Comentarios" />
                </div>
                <button type="submit" class="sub-btn">Enviar</button>
              </div>
              <label class="conntainer"
                >Elegir Opción 1
                <input type="radio" checked="checked" name="radio" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="kick-comparative-item">
              <div class="kick-bottom-form">
                <div class="kick-input">
                  <input type="text" placeholder="Comentarios" />
                </div>
              </div>
              <label class="conntainer"
                >Elegir Opción 2
                <input type="radio" checked="" name="radio" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="kick-comparative-item">
              <div class="kick-bottom-form">
                <div class="kick-input">
                  <input type="text" placeholder="Comentarios" />
                </div>
              </div>
              <label class="conntainer"
                >Elegir Opción 3
                <input type="radio" checked="" name="radio" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
      </div>

      <!-- Comparative R1  end-->

      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/main.js"></script>
    </div>
  </div>
</template>
