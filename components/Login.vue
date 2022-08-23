<template>
  <div class="">
    <div class="phase-blk">
      <div class="single-input-item">
        <input v-model="email" type="email" class="" placeholder="Email" />
      </div>
    </div>
    <div class="phase-blk">
      <div class="single-input-item">
        <input
          v-model="password"
          type="password"
          class=""
          placeholder="Password"
        />
      </div>
    </div>
    <v-layout class="my-3">
      <div class="font-italic">
        <p style="font-size: 15px; color: gray" @click="forgot">
          ¿Olvidaste tu contraseña?
        </p>
      </div>
      <v-spacer></v-spacer>
      <div class="font-italic">
        <p style="font-size: 15px; color: gray" @click="forgot">Crear cuenta</p>
      </div>
    </v-layout>
    <div>
      <div class="form-submit registry-sub mt-2" style="padding-top: 48px">
        <BotonDiseno large class="my-7" @click="login">Entrar</BotonDiseno>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { email: "", password: "" };
  },
  methods: {
    forgot() {
      window.$nuxt.$dialog
        .prompt({
          title: "Olvidaste tu contraseña",
          text: "Introduce tu email",
          actions: { false: "cancelar", true: "Enviar email" },
        })
        .then((email) => {
          if (email) {
            window.$nuxt.$dialog.confirm({
              actions: { ok: "Ok" },
              text: `Se ha enviado una nueva clave a el email`,
            });

            this.$axios.$post("/requestPassword", { email });
          }
        });
    },
    login() {
      const { email, password } = this;
      this.$axios
        .$post("/authentication", { strategy: "local", email, password })
        .then((a) => {
          if (a.accessToken) {
            window.$nuxt.$dialog.confirm({
              actions: { ok: "Ok" },
              text: `Hola ${a.usuario.name},Inicio de sesión exitoso`,
            });
            this.$fevu.login(this, a);
            location.href =
              a.usuario.role === "PROJECT"
                ? "/Mbx-complete/work-table-1"
                : "/control-panel";
          } else {
            window.$nuxt.$dialog.confirm({
              actions: { ok: "Ok" },
              text: `La cuenta no existe`,
            });
          }
        });
      // if (!this.email) {
      //   window.$nuxt.$dialog.confirm({
      //     actions: { ok: "Ok" },
      //     text: "El correo es inválido",
      //   });
      // } else if (!this.password) {
      //   window.$nuxt.$dialog.confirm({
      //     actions: { ok: "Ok" },
      //     text: "Debe ingresar una clave",
      //   });
      // } else if (this.email === "demo@demo.com" && this.password === "demo") {
      //   window.$nuxt.$dialog.confirm({
      //     actions: { ok: "Ok" },
      //     text: "Espere un momento mientras carga el inicio",
      //   });
      //   this.$router.push({ path: "control-panel" });
      // } else {
      //   window.$nuxt.$dialog.confirm({
      //     actions: { ok: "Ok" },
      //     text: "El usuario no existe",
      //   });
      // }
    },
  },
};
</script>

<style></style>
