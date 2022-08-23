<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      disable-resize-watcher
      clipped
      fixedc
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      v-if="!$route.fullPath.match(/\/(Mbx-complete|final)\//)"
      :clipped-left="clipped"
      style="background-color: transparent; border-bottom: 1px solid #0002"
      color="transparent"
      :elevation="0"
      fixed
      app
    >
      <v-toolbar-title>
        <nuxt-link :to="link">
          <v-img
            src="/assets/img/header.png"
            style="width: 60px; margin-top: 29px"
            alt=""
          />
        </nuxt-link>
      </v-toolbar-title>
      <v-spacer />
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
      <div class="back-btn">
        <a class="" @click="$router.back()"
          ><i class="fas fa-play"></i> Volver</a
        >
      </div>
    </v-main>
    <v-navigation-drawer
      v-model="rightDrawer"
      dark
      color="transparent"
      right
      temporary
      fixed
    >
      <div class="text-right mr-12 mt-12" @click="rightDrawer = !rightDrawer">
        <v-icon> mdi-close </v-icon>
      </div>
      <v-list class="pt-12 mt-12 menu">
        <v-list-item>
          <v-list-item-title class="text-right" style="opacity: 0.8">
            Home</v-list-item-title
          >
        </v-list-item>
        <v-list-item to="/control-panel">
          <v-list-item-title class="text-right" style="opacity: 0.8">
            Panel de control</v-list-item-title
          >
        </v-list-item>
        <v-list-item to="/Mi-MBX">
          <v-list-item-title class="text-right" style="opacity: 0.8">
            Mi MBX</v-list-item-title
          >
        </v-list-item>
        <v-list-item to="/my-team">
          <v-list-item-title class="text-right" style="opacity: 0.8">
            Mi Equipo</v-list-item-title
          >
        </v-list-item>
        <v-list-item to="/contract-and-invoice">
          <v-list-item-title class="text-right" style="opacity: 0.8">
            Contrato y factura</v-list-item-title
          >
        </v-list-item>
        <v-list-item to="/ajustes">
          <v-list-item-title class="text-right" style="opacity: 0.8">
            Ajustes</v-list-item-title
          >
        </v-list-item>

        <v-list-item to="/client-view-registration-2" @click="logout">
          <v-list-item-title class="text-right" style="opacity: 0.8">
            Cerrar sesión</v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer
      v-if="!$route.fullPath.match(/\/(kick|Mbx-complete|final)\//)"
      :absolute="!fixed"
      app
      color="#fff"
      style="border-top: 1px solid #f1f1f1"
    >
      <v-container>
        <div class="text-right">
          <span>
            Magia Brand Express &copy; {{ new Date().getFullYear() }}</span
          >
        </div>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
  computed: {
    link() {
      return this.$ls.get("accessToken") ? "control-panel" : "/";
    },
  },
  watch: {
    "$route.fullPath": {
      immediate: true,
      handler() {
        this.$vuetify.theme.dark = !!this.$route.fullPath.match(
          /\/(Mbx-complete|last)/
        );
      },
    },
  },
  mounted() {
    this.$fevu.login(this, this.$ls.get());
    this.$fevu.configureSocket(this).then(() => {});
  },
  methods: {
    logout() {
      this.$fevu.logout(this);
    },
  },
};
</script>
<style>
div#app.theme--dark.v-application {
  background: #24262b;
}
</style>
