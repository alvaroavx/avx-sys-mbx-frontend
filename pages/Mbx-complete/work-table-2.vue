<template>
  <div>
    <head>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <title>Title Here</title>

      <link href="/assets2/css/bootstrap.min.css" rel="stylesheet" />
      <link href="/assets2/css/all.min.css" rel="stylesheet" />
      <link href="/assets2/css/fontawesome.css" rel="stylesheet" />
      <link href="/assets2/css/default.css" rel="stylesheet" />
      <link href="/assets2/css/style.css" rel="stylesheet" />
      <link href="/assets2/css/responsive.css" rel="stylesheet" />
    </head>

    <div style="background-color: #23262b">
      <!-- Header bar section start -->
      <div class="header-bar-section">
        <div class="container">
          <div class="header-main">
            <div class="logo-main">
              <a href=""><img src="/assets2/img/logo-main.png" alt="" /></a>
            </div>
            <div class="menu-open">
              <i class="fas fa-bars"></i>
            </div>
          </div>
        </div>
      </div>
      <!-- Header bar section complate -->

      <!----------------------------- Main area Start ---------------------------->
      <div class="main-area">
        <div class="common-area">
          <div class="work-table-area">
            <div class="title">
              <h4>MIS MBX</h4>
            </div>
            <div class="work-slider-wrapper">
              <div class="work-slider-blk">
                <div class="work-slider-item">
                  <p>
                    <a
                      v-for="(cliente, index) in clientes.slice(skip, skip + 4)"
                      :key="index"
                      href="/control-panel-x"
                      style="color: white; display: inline-block; margin: 0 8px"
                    >
                      {{ cliente.name }}
                    </a>
                  </p>
                </div>
              </div>
              <div class="slider-arrow">
                <button :disabled="skip <= 0" class="nav-left" @click="skip--">
                  <i class="fas fa-chevron-left"></i>
                </button>
                <button
                  :disabled="6 + skip > clientes.length"
                  class="nav-right"
                  @click="skip++"
                >
                  <i class="fas fa-chevron-right"></i>
                </button>
              </div>
              <div class="slider-dots">
                <button
                  v-for="i in Math.floor(clientes.length / 4)"
                  :key="i"
                  :class="{ active: 1 + Math.floor(skip / 4) === i }"
                  @click="skip = (i - 1) * 4"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!----------------------------- Main area End ---------------------------->

      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="/assets2/js/jquery.min.js"></script>
      <script src="/assets2/js/Popper.js"></script>
      <script src="/assets2/js/bootstrap.min.js"></script>
      <script></script>
      <script src="/assets2/js/main.js"></script>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      skip: 0,
      clientes: [
        { name: "Cliente - Proyecto 01" },
        { name: "Cliente - Proyecto 02" },
        { name: "Cliente - Proyecto 03" },
        { name: "Cliente - Proyecto 04" },
        { name: "Cliente - Proyecto 05" },
        { name: "Cliente - Proyecto 06" },
        { name: "Cliente - Proyecto 07" },
        { name: "Cliente - Proyecto 08" },
        { name: "Cliente - Proyecto 09" },
        { name: "Cliente - Proyecto 10" },
        { name: "Cliente - Proyecto 11" },
        { name: "Cliente - Proyecto 12" },
      ],
    };
  },
};
</script>
<style>
[disabled] {
  opacity: 0.5;
}
</style>
