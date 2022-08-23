import Vue from 'vue'

const components = {
  BotonDiseno: () => import('../../components/BotonDiseno.vue' /* webpackChunkName: "components/boton-diseno" */).then(c => c.default || c),
  Hr: () => import('../../components/Hr.vue' /* webpackChunkName: "components/hr" */).then(c => c.default || c),
  ImgUr: () => import('../../components/ImgUr.vue' /* webpackChunkName: "components/img-ur" */).then(c => c.default || c),
  InviteTeam: () => import('../../components/InviteTeam.vue' /* webpackChunkName: "components/invite-team" */).then(c => c.default || c),
  Login: () => import('../../components/Login.vue' /* webpackChunkName: "components/login" */).then(c => c.default || c),
  Logo: () => import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c),
  Modal: () => import('../../components/Modal.vue' /* webpackChunkName: "components/modal" */).then(c => c.default || c),
  VuetifyLogo: () => import('../../components/VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => c.default || c),
  Iframecion: () => import('../../components/iframecion.vue' /* webpackChunkName: "components/iframecion" */).then(c => c.default || c),
  Internal: () => import('../../components/internal.vue' /* webpackChunkName: "components/internal" */).then(c => c.default || c),
  SizeTool: () => import('../../components/sizeTool.vue' /* webpackChunkName: "components/size-tool" */).then(c => c.default || c),
  Video: () => import('../../components/video.vue' /* webpackChunkName: "components/video" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
