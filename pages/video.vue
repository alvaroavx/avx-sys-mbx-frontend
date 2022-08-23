<template>
  <div>
    <div style="background-color: #1c2026">
      <link
        href="/Mbx-complete/assets/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link href="/Mbx-complete/assets/css/all.min.css" rel="stylesheet" />
      <link href="/Mbx-complete/assets/css/fontawesome.css" rel="stylesheet" />
      <link href="/Mbx-complete/assets/css/default.css" rel="stylesheet" />
      <link href="/Mbx-complete/assets/css/style.css" rel="stylesheet" />
      <link href="/Mbx-complete/assets/css/responsive.css" rel="stylesheet" />
      <div class="main-area">
        <div class="mbx-media">
          <div class="mbx-screen">
            <iframe
              src="https://call.roje.cl/213"
              frameborder="0"
              allow="geolocation; microphone; camera"
              sandbox="allow-popups allow-same-origin allow-forms allow-scripts allow-presentation allow-top-navigation "
              style="width: 100%; height: 100%"
            ></iframe>
          </div>
          <div style="background: white" class="mbx-right-bar">
            <div class="mbx-toggle">
              <i class="fas fa-bars"></i>
            </div>
            <div class="view-top">
              <span> <i class="far fa-chevron-right fa-rotate-270"></i></span>
            </div>
            <div style="height: 71vh; overflow: scroll">
              <Crud api="usuarios">
                <div
                  slot="container"
                  slot-scope="{ item }"
                  style="background-size: cover"
                  :style="{ backgroundImage: `url(${item.photo})` }"
                  class="single-mbx-profile"
                >
                  <h5>{{ item.name }}</h5>
                </div>
              </Crud>
            </div>

            <div class="mbx-media-bottom">
              <a href="">
                <span><i class="fas fa-microphone-slash"></i></span>
                Micrófono
              </a>
              <a href="">
                <span><i class="fas fa-video"></i></span>
                Video
              </a>
              <a href="">
                <span class="new-sms"><i class="fas fa-comment-alt"></i></span>
                Chat
              </a>
            </div>
            <div class="btn-mbx">
              <a href="" class="common-border">Validación Cliente</a>
            </div>
            <div class="mbx-bar-open">
              <img src="assets/img/mbx-open.png" alt="" />
            </div>
          </div>
          <div class="bottom-control-bar" style="background: white">
            <div class="bottom-control-wrap">
              <div class="tool-tip-btn">
                <span>
                  <img
                    style="width: 20px; margin-top: -4px"
                    src="assets/img/info.png"
                    alt=""
                /></span>
              </div>
              <!-- <div class="bottom-btn">
              <a href="" class="common-border">Ir a presentación</a>
            </div>
            <div class="bottom-control">
              <span class="arr-left"><i class="far fa-chevron-left"></i></span>
              <a href="">Ejercicio Research</a>
              <a href="">Ejercicio Business Model Canvas</a>
              <span class="arr-right"
                ><i class="far fa-chevron-right"></i
              ></span>
            </div> -->
              <a href="" class="start-btn common-border">Aceptar</a>
              <div class="single-input-item m-0">
                <input type="text" class="m-0" placeholder="Comentario" />
              </div>
              <div style="width: 100px"></div>
            </div>
          </div>
        </div>
      </div>
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/Popper.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script></script>
      <script src="assets/js/main.js"></script>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
