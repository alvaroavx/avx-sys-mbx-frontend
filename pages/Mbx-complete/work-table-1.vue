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
              <h4>{{ $ls.get("usuario.name") }}</h4>
            </div>
            <div class="work-table-btn">
              <a href="work-table-2">Mis MBX</a>
              <a href="work-table-91">Mis Calendarios</a>
              <a href="work-table-4">Mis Equipos</a>
            </div>
            <div class="act-btn">
              <a href="" class="common-border">Ingresar a la actividad</a>
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
