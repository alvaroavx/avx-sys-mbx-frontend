<template>
  <div>
    <div class="ajustes">
      <link
        href="/Mbx-complete/assets/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link href="/Mbx-complete/assets/css/all.min.css" rel="stylesheet" />
      <link href="/Mbx-complete/assets/css/fontawesome.css" rel="stylesheet" />
      <link href="/Mbx-complete/assets/css/default.css" rel="stylesheet" />
      <link href="/Mbx-complete/assets/css/style.css" rel="stylesheet" />
      <link href="/Mbx-complete/assets/css/responsive.css" rel="stylesheet" />

      <!-- Header bar section complate -->

      <!----------------------------- Main area Start ---------------------------->
      <div class="main-area">
        <div class="common-area text-left">
          <div class="account-wrapper" style="margin-left: -200px">
            <h4 style="color: black">TU CUENTA</h4>
            <div class="account-blk">
              <div class="account-profile-blk">
                <div class="profile-thumb">
                  <img :src="photo" alt="" />
                </div>
                <div class="profile-upload">
                  <ImgUr @input="setPhoto">
                    <p>
                      <span><i class="fas fa-plus-circle"></i></span> Agregar
                      imagen
                    </p></ImgUr
                  >
                </div>
              </div>
              <div class="account-form-wrapper">
                <div class="row">
                  <div class="col-lg-6 col-md-6">
                    <div class="account-form-blk">
                      <div class="single-input-item">
                        <label for=""
                          >Nombre completo
                          <span class="font-italic">Editar</span></label
                        >
                        <input
                          v-model="nombre"
                          type="text"
                          placeholder="Nombre Apellido"
                        />
                      </div>
                      <div class="single-input-item">
                        <label for="">
                          Phone Number
                          <span class="font-italic">Editar</span></label
                        >
                        <input
                          v-model="phone"
                          type="text"
                          placeholder=" +56 9 8789 1124"
                        />
                      </div>
                      <div class="single-input-item">
                        <label for="">
                          Nombre Empresa
                          <span class="font-italic">Editar</span></label
                        >
                        <input
                          v-model="empresa"
                          type="text"
                          placeholder=" Adidas"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-6">
                    <div class="account-form-blk">
                      <div class="single-input-item">
                        <label for="">
                          Email<span class="font-italic">Editar</span></label
                        >
                        <input
                          v-model="email"
                          type="email"
                          placeholder=" Nombre01@gmail.com"
                        />
                      </div>
                      <div class="single-input-item">
                        <label for="">
                          Password
                          <span class="font-italic">Editar</span></label
                        >
                        <input
                          v-model="password"
                          type="password"
                          placeholder=" Password"
                        />
                      </div>
                      <div class="submit-btn text-right">
                        <button
                          class="common-border"
                          type="submitF"
                          style="color: black"
                          @click="save"
                        >
                          Guardar
                        </button>
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
  </div>
</template>
<script>
export default {
  data() {
    return {
      nombre: "",
      email: "",
      password: "",
      empresa: "",
      phone: "",
      photo: "",
    };
  },
  mounted() {
    this.nombre = this.$ls.get("usuario.name");
    this.email = this.$ls.get("usuario.email");
    this.empresa = this.$ls.get("usuario.empresa");
    this.phone = this.$ls.get("usuario.phone");
    this.photo = this.$ls.get("usuario.photo", "/assets/img/strategist.png");
  },
  methods: {
    setPhoto(url) {
      this.photo = url;
      this.save();
    },
    async save() {
      await this.$axios.$patch("/usuarios/" + this.$ls.get("usuario._id"), {
        nombre: this.nombre,
        email: this.email,
        password: this.password,
        empresa: this.empresa,
        photo: this.photo,
        phone: this.phone,
      });
      this.$axios
        .$get(`/usuarios/${this.$ls.get("usuario._id")}`)
        .then((data) => {
          this.$store.commit("localStorage/update", {
            ...this.$ls.get(),
            usuario: data,
          });
        });
    },
  },
};
</script>

<style>
.ajustes button {
  border-top: 1px solid black !important;

  border-bottom: 1px solid black !important;
}
.ajustes input {
  border-bottom: 1px solid black !important;
  color: black !important;
}
.ajustes label {
  color: gray;
  font-style: italic;
}
</style>
