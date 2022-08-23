import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _61c8a072 = () => interopDefault(import('../pages/ajustes.vue' /* webpackChunkName: "pages/ajustes" */))
const _0393e5fb = () => interopDefault(import('../pages/big-bang-workshop.vue' /* webpackChunkName: "pages/big-bang-workshop" */))
const _5134fb47 = () => interopDefault(import('../pages/big-bang-workshop-project.vue' /* webpackChunkName: "pages/big-bang-workshop-project" */))
const _e1dd3598 = () => interopDefault(import('../pages/big-bang-workshop-proposal.vue' /* webpackChunkName: "pages/big-bang-workshop-proposal" */))
const _c6be92f8 = () => interopDefault(import('../pages/bmc.vue' /* webpackChunkName: "pages/bmc" */))
const _19a3e2d8 = () => interopDefault(import('../pages/brand-compass.vue' /* webpackChunkName: "pages/brand-compass" */))
const _449ccb24 = () => interopDefault(import('../pages/brand-compass-project.vue' /* webpackChunkName: "pages/brand-compass-project" */))
const _f1068ae6 = () => interopDefault(import('../pages/brand-compass-proposal-direction-1.vue' /* webpackChunkName: "pages/brand-compass-proposal-direction-1" */))
const _fc4ed2a8 = () => interopDefault(import('../pages/Brand-Compass-Proposals.vue' /* webpackChunkName: "pages/Brand-Compass-Proposals" */))
const _2c2fa2c4 = () => interopDefault(import('../pages/Brand-Compass-Proposals-direction.vue' /* webpackChunkName: "pages/Brand-Compass-Proposals-direction" */))
const _24d27191 = () => interopDefault(import('../pages/Brand-Compass-Proposals-directions-project.vue' /* webpackChunkName: "pages/Brand-Compass-Proposals-directions-project" */))
const _3747c0e1 = () => interopDefault(import('../pages/Brand-Compass-Proposals-purpose-1.vue' /* webpackChunkName: "pages/Brand-Compass-Proposals-purpose-1" */))
const _c42adfa6 = () => interopDefault(import('../pages/Brand-Compass-Proposals-purpose-1-project.vue' /* webpackChunkName: "pages/Brand-Compass-Proposals-purpose-1-project" */))
const _7033dade = () => interopDefault(import('../pages/Brand-Compass-Proposals-purpose-1-project-1.vue' /* webpackChunkName: "pages/Brand-Compass-Proposals-purpose-1-project-1" */))
const _551ec105 = () => interopDefault(import('../pages/Brand-Compass-Proposals-territory-project.vue' /* webpackChunkName: "pages/Brand-Compass-Proposals-territory-project" */))
const _5292ebbe = () => interopDefault(import('../pages/brand-compass-validation.vue' /* webpackChunkName: "pages/brand-compass-validation" */))
const _b0b8cfd8 = () => interopDefault(import('../pages/Business-Idea-Workshop.vue' /* webpackChunkName: "pages/Business-Idea-Workshop" */))
const _f3bcf740 = () => interopDefault(import('../pages/Business-Idea-Workshop-project.vue' /* webpackChunkName: "pages/Business-Idea-Workshop-project" */))
const _558402c8 = () => interopDefault(import('../pages/buy-mbx.vue' /* webpackChunkName: "pages/buy-mbx" */))
const _114e41ef = () => interopDefault(import('../pages/client.vue' /* webpackChunkName: "pages/client" */))
const _0fd73683 = () => interopDefault(import('../pages/client-view-registration.vue' /* webpackChunkName: "pages/client-view-registration" */))
const _715092e8 = () => interopDefault(import('../pages/client-view-registration-2.vue' /* webpackChunkName: "pages/client-view-registration-2" */))
const _2ae2df99 = () => interopDefault(import('../pages/clients-b2b.vue' /* webpackChunkName: "pages/clients-b2b" */))
const _49848ccb = () => interopDefault(import('../pages/comparative-R1.vue' /* webpackChunkName: "pages/comparative-R1" */))
const _7eb9d217 = () => interopDefault(import('../pages/comparative-R1-project.vue' /* webpackChunkName: "pages/comparative-R1-project" */))
const _bc443500 = () => interopDefault(import('../pages/contact-point-proposal.vue' /* webpackChunkName: "pages/contact-point-proposal" */))
const _6ec4b468 = () => interopDefault(import('../pages/contact-point-proposal-project.vue' /* webpackChunkName: "pages/contact-point-proposal-project" */))
const _795979a0 = () => interopDefault(import('../pages/contract-and-invoice.vue' /* webpackChunkName: "pages/contract-and-invoice" */))
const _270793a0 = () => interopDefault(import('../pages/control-panel.vue' /* webpackChunkName: "pages/control-panel" */))
const _7dde1cc5 = () => interopDefault(import('../pages/control-panel-2.vue' /* webpackChunkName: "pages/control-panel-2" */))
const _fc8eebea = () => interopDefault(import('../pages/control-panel-x.vue' /* webpackChunkName: "pages/control-panel-x" */))
const _3bf7d927 = () => interopDefault(import('../pages/evaluate-suitable.vue' /* webpackChunkName: "pages/evaluate-suitable" */))
const _4e87678b = () => interopDefault(import('../pages/final-delivary.vue' /* webpackChunkName: "pages/final-delivary" */))
const _48d42652 = () => interopDefault(import('../pages/final-delivary-project.vue' /* webpackChunkName: "pages/final-delivary-project" */))
const _c05a7774 = () => interopDefault(import('../pages/final-logo.vue' /* webpackChunkName: "pages/final-logo" */))
const _d07b42dc = () => interopDefault(import('../pages/final-logo-project.vue' /* webpackChunkName: "pages/final-logo-project" */))
const _36ff27fa = () => interopDefault(import('../pages/home.vue' /* webpackChunkName: "pages/home" */))
const _d0af2610 = () => interopDefault(import('../pages/kick-day-selection.vue' /* webpackChunkName: "pages/kick-day-selection" */))
const _2b68ee0c = () => interopDefault(import('../pages/kick-off.vue' /* webpackChunkName: "pages/kick-off" */))
const _5fe53b50 = () => interopDefault(import('../pages/kick-off-project.vue' /* webpackChunkName: "pages/kick-off-project" */))
const _f490bcee = () => interopDefault(import('../pages/learn-how-mbx.vue' /* webpackChunkName: "pages/learn-how-mbx" */))
const _81bd7622 = () => interopDefault(import('../pages/mbx-pro.vue' /* webpackChunkName: "pages/mbx-pro" */))
const _ae723fc6 = () => interopDefault(import('../pages/mbx-process-detail.vue' /* webpackChunkName: "pages/mbx-process-detail" */))
const _89954714 = () => interopDefault(import('../pages/Mi-MBX.vue' /* webpackChunkName: "pages/Mi-MBX" */))
const _84a21ecc = () => interopDefault(import('../pages/Mi-MBX-1.vue' /* webpackChunkName: "pages/Mi-MBX-1" */))
const _777b66dd = () => interopDefault(import('../pages/miroespacio.vue' /* webpackChunkName: "pages/miroespacio" */))
const _5c900559 = () => interopDefault(import('../pages/Mis-MBX.vue' /* webpackChunkName: "pages/Mis-MBX" */))
const _f3224cc8 = () => interopDefault(import('../pages/my-project.vue' /* webpackChunkName: "pages/my-project" */))
const _a3c3842c = () => interopDefault(import('../pages/my-team.vue' /* webpackChunkName: "pages/my-team" */))
const _6487c03c = () => interopDefault(import('../pages/Panel-project.vue' /* webpackChunkName: "pages/Panel-project" */))
const _5bf77ae0 = () => interopDefault(import('../pages/Panel-project-1.vue' /* webpackChunkName: "pages/Panel-project-1" */))
const _1151ca81 = () => interopDefault(import('../pages/panel-project-2.vue' /* webpackChunkName: "pages/panel-project-2" */))
const _6cb7cbdc = () => interopDefault(import('../pages/payment.vue' /* webpackChunkName: "pages/payment" */))
const _1c128d3a = () => interopDefault(import('../pages/Pre-agenda.vue' /* webpackChunkName: "pages/Pre-agenda" */))
const _560c03e2 = () => interopDefault(import('../pages/program-selection.vue' /* webpackChunkName: "pages/program-selection" */))
const _033ee5cd = () => interopDefault(import('../pages/proposal-contact-1.vue' /* webpackChunkName: "pages/proposal-contact-1" */))
const _05e34dfd = () => interopDefault(import('../pages/proposal-contact-a.vue' /* webpackChunkName: "pages/proposal-contact-a" */))
const _72be7443 = () => interopDefault(import('../pages/R1.vue' /* webpackChunkName: "pages/R1" */))
const _21a5bf25 = () => interopDefault(import('../pages/R1-logo.vue' /* webpackChunkName: "pages/R1-logo" */))
const _23980a71 = () => interopDefault(import('../pages/R1-logo-project.vue' /* webpackChunkName: "pages/R1-logo-project" */))
const _c19e7ce2 = () => interopDefault(import('../pages/R1-project.vue' /* webpackChunkName: "pages/R1-project" */))
const _72cc8bc4 = () => interopDefault(import('../pages/R2.vue' /* webpackChunkName: "pages/R2" */))
const _e4986fe0 = () => interopDefault(import('../pages/R2-project.vue' /* webpackChunkName: "pages/R2-project" */))
const _72daa345 = () => interopDefault(import('../pages/R3.vue' /* webpackChunkName: "pages/R3" */))
const _7c36ce91 = () => interopDefault(import('../pages/R3-project.vue' /* webpackChunkName: "pages/R3-project" */))
const _3be5e261 = () => interopDefault(import('../pages/registry.vue' /* webpackChunkName: "pages/registry" */))
const _e7c8d682 = () => interopDefault(import('../pages/research.vue' /* webpackChunkName: "pages/research" */))
const _1122a6fa = () => interopDefault(import('../pages/research2.vue' /* webpackChunkName: "pages/research2" */))
const _fae7385a = () => interopDefault(import('../pages/return-text-example.vue' /* webpackChunkName: "pages/return-text-example" */))
const _40956aff = () => interopDefault(import('../pages/revision.vue' /* webpackChunkName: "pages/revision" */))
const _1f847b29 = () => interopDefault(import('../pages/schedule-meeting.vue' /* webpackChunkName: "pages/schedule-meeting" */))
const _4abf460e = () => interopDefault(import('../pages/schedule-meeting-2.vue' /* webpackChunkName: "pages/schedule-meeting-2" */))
const _357cf69a = () => interopDefault(import('../pages/select-team.vue' /* webpackChunkName: "pages/select-team" */))
const _698b06fe = () => interopDefault(import('../pages/selection-of-strategists.vue' /* webpackChunkName: "pages/selection-of-strategists" */))
const _1e7e5a8c = () => interopDefault(import('../pages/Shop.vue' /* webpackChunkName: "pages/Shop" */))
const _57b708a8 = () => interopDefault(import('../pages/strategist.vue' /* webpackChunkName: "pages/strategist" */))
const _4742fe0a = () => interopDefault(import('../pages/timeline-proposal.vue' /* webpackChunkName: "pages/timeline-proposal" */))
const _fc8cd5bc = () => interopDefault(import('../pages/typeresearach.vue' /* webpackChunkName: "pages/typeresearach" */))
const _7f5f4707 = () => interopDefault(import('../pages/video.vue' /* webpackChunkName: "pages/video" */))
const _4ac6f2d0 = () => interopDefault(import('../pages/video-presentation.vue' /* webpackChunkName: "pages/video-presentation" */))
const _6f53c2ec = () => interopDefault(import('../pages/videoc.vue' /* webpackChunkName: "pages/videoc" */))
const _33bcc60f = () => interopDefault(import('../pages/voting-result.vue' /* webpackChunkName: "pages/voting-result" */))
const _233c58db = () => interopDefault(import('../pages/last/Mesa-de-trabajo-1-copia-31.vue' /* webpackChunkName: "pages/last/Mesa-de-trabajo-1-copia-31" */))
const _23669f5e = () => interopDefault(import('../pages/last/Mesa-de-trabajo-1-copia-34.vue' /* webpackChunkName: "pages/last/Mesa-de-trabajo-1-copia-34" */))
const _2374b6df = () => interopDefault(import('../pages/last/Mesa-de-trabajo-1-copia-35.vue' /* webpackChunkName: "pages/last/Mesa-de-trabajo-1-copia-35" */))
const _2382ce60 = () => interopDefault(import('../pages/last/Mesa-de-trabajo-1-copia-36.vue' /* webpackChunkName: "pages/last/Mesa-de-trabajo-1-copia-36" */))
const _2390e5e1 = () => interopDefault(import('../pages/last/Mesa-de-trabajo-1-copia-37.vue' /* webpackChunkName: "pages/last/Mesa-de-trabajo-1-copia-37" */))
const _239efd62 = () => interopDefault(import('../pages/last/Mesa-de-trabajo-1-copia-38.vue' /* webpackChunkName: "pages/last/Mesa-de-trabajo-1-copia-38" */))
const _23ad14e3 = () => interopDefault(import('../pages/last/Mesa-de-trabajo-1-copia-39.vue' /* webpackChunkName: "pages/last/Mesa-de-trabajo-1-copia-39" */))
const _24e319f9 = () => interopDefault(import('../pages/last/Mesa-de-trabajo-1-copia-40.vue' /* webpackChunkName: "pages/last/Mesa-de-trabajo-1-copia-40" */))
const _24f1317a = () => interopDefault(import('../pages/last/Mesa-de-trabajo-1-copia-41.vue' /* webpackChunkName: "pages/last/Mesa-de-trabajo-1-copia-41" */))
const _24ff48fb = () => interopDefault(import('../pages/last/Mesa-de-trabajo-1-copia-42.vue' /* webpackChunkName: "pages/last/Mesa-de-trabajo-1-copia-42" */))
const _072a735e = () => interopDefault(import('../pages/last/Mesa-de-trabajo-67.vue' /* webpackChunkName: "pages/last/Mesa-de-trabajo-67" */))
const _60208f24 = () => interopDefault(import('../pages/Mbx-complete/work-table-1.vue' /* webpackChunkName: "pages/Mbx-complete/work-table-1" */))
const _2e02cfb2 = () => interopDefault(import('../pages/Mbx-complete/work-table-10.vue' /* webpackChunkName: "pages/Mbx-complete/work-table-10" */))
const _2e10e733 = () => interopDefault(import('../pages/Mbx-complete/work-table-11.vue' /* webpackChunkName: "pages/Mbx-complete/work-table-11" */))
const _2e1efeb4 = () => interopDefault(import('../pages/Mbx-complete/work-table-12.vue' /* webpackChunkName: "pages/Mbx-complete/work-table-12" */))
const _2e2d1635 = () => interopDefault(import('../pages/Mbx-complete/work-table-13.vue' /* webpackChunkName: "pages/Mbx-complete/work-table-13" */))
const _2e3b2db6 = () => interopDefault(import('../pages/Mbx-complete/work-table-14.vue' /* webpackChunkName: "pages/Mbx-complete/work-table-14" */))
const _2e494537 = () => interopDefault(import('../pages/Mbx-complete/work-table-15.vue' /* webpackChunkName: "pages/Mbx-complete/work-table-15" */))
const _2e575cb8 = () => interopDefault(import('../pages/Mbx-complete/work-table-16.vue' /* webpackChunkName: "pages/Mbx-complete/work-table-16" */))
const _60046022 = () => interopDefault(import('../pages/Mbx-complete/work-table-2.vue' /* webpackChunkName: "pages/Mbx-complete/work-table-2" */))
const _5fcc021e = () => interopDefault(import('../pages/Mbx-complete/work-table-4.vue' /* webpackChunkName: "pages/Mbx-complete/work-table-4" */))
const _5fafd31c = () => interopDefault(import('../pages/Mbx-complete/work-table-5.vue' /* webpackChunkName: "pages/Mbx-complete/work-table-5" */))
const _5f93a41a = () => interopDefault(import('../pages/Mbx-complete/work-table-6.vue' /* webpackChunkName: "pages/Mbx-complete/work-table-6" */))
const _5f777518 = () => interopDefault(import('../pages/Mbx-complete/work-table-7.vue' /* webpackChunkName: "pages/Mbx-complete/work-table-7" */))
const _5f5b4616 = () => interopDefault(import('../pages/Mbx-complete/work-table-8.vue' /* webpackChunkName: "pages/Mbx-complete/work-table-8" */))
const _5f3f1714 = () => interopDefault(import('../pages/Mbx-complete/work-table-9.vue' /* webpackChunkName: "pages/Mbx-complete/work-table-9" */))
const _3bb7ac2b = () => interopDefault(import('../pages/Mbx-complete/work-table-91.vue' /* webpackChunkName: "pages/Mbx-complete/work-table-91" */))
const _006b5044 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/ajustes",
    component: _61c8a072,
    name: "ajustes"
  }, {
    path: "/big-bang-workshop",
    component: _0393e5fb,
    name: "big-bang-workshop"
  }, {
    path: "/big-bang-workshop-project",
    component: _5134fb47,
    name: "big-bang-workshop-project"
  }, {
    path: "/big-bang-workshop-proposal",
    component: _e1dd3598,
    name: "big-bang-workshop-proposal"
  }, {
    path: "/bmc",
    component: _c6be92f8,
    name: "bmc"
  }, {
    path: "/brand-compass",
    component: _19a3e2d8,
    name: "brand-compass"
  }, {
    path: "/brand-compass-project",
    component: _449ccb24,
    name: "brand-compass-project"
  }, {
    path: "/brand-compass-proposal-direction-1",
    component: _f1068ae6,
    name: "brand-compass-proposal-direction-1"
  }, {
    path: "/Brand-Compass-Proposals",
    component: _fc4ed2a8,
    name: "Brand-Compass-Proposals"
  }, {
    path: "/Brand-Compass-Proposals-direction",
    component: _2c2fa2c4,
    name: "Brand-Compass-Proposals-direction"
  }, {
    path: "/Brand-Compass-Proposals-directions-project",
    component: _24d27191,
    name: "Brand-Compass-Proposals-directions-project"
  }, {
    path: "/Brand-Compass-Proposals-purpose-1",
    component: _3747c0e1,
    name: "Brand-Compass-Proposals-purpose-1"
  }, {
    path: "/Brand-Compass-Proposals-purpose-1-project",
    component: _c42adfa6,
    name: "Brand-Compass-Proposals-purpose-1-project"
  }, {
    path: "/Brand-Compass-Proposals-purpose-1-project-1",
    component: _7033dade,
    name: "Brand-Compass-Proposals-purpose-1-project-1"
  }, {
    path: "/Brand-Compass-Proposals-territory-project",
    component: _551ec105,
    name: "Brand-Compass-Proposals-territory-project"
  }, {
    path: "/brand-compass-validation",
    component: _5292ebbe,
    name: "brand-compass-validation"
  }, {
    path: "/Business-Idea-Workshop",
    component: _b0b8cfd8,
    name: "Business-Idea-Workshop"
  }, {
    path: "/Business-Idea-Workshop-project",
    component: _f3bcf740,
    name: "Business-Idea-Workshop-project"
  }, {
    path: "/buy-mbx",
    component: _558402c8,
    name: "buy-mbx"
  }, {
    path: "/client",
    component: _114e41ef,
    name: "client"
  }, {
    path: "/client-view-registration",
    component: _0fd73683,
    name: "client-view-registration"
  }, {
    path: "/client-view-registration-2",
    component: _715092e8,
    name: "client-view-registration-2"
  }, {
    path: "/clients-b2b",
    component: _2ae2df99,
    name: "clients-b2b"
  }, {
    path: "/comparative-R1",
    component: _49848ccb,
    name: "comparative-R1"
  }, {
    path: "/comparative-R1-project",
    component: _7eb9d217,
    name: "comparative-R1-project"
  }, {
    path: "/contact-point-proposal",
    component: _bc443500,
    name: "contact-point-proposal"
  }, {
    path: "/contact-point-proposal-project",
    component: _6ec4b468,
    name: "contact-point-proposal-project"
  }, {
    path: "/contract-and-invoice",
    component: _795979a0,
    name: "contract-and-invoice"
  }, {
    path: "/control-panel",
    component: _270793a0,
    name: "control-panel"
  }, {
    path: "/control-panel-2",
    component: _7dde1cc5,
    name: "control-panel-2"
  }, {
    path: "/control-panel-x",
    component: _fc8eebea,
    name: "control-panel-x"
  }, {
    path: "/evaluate-suitable",
    component: _3bf7d927,
    name: "evaluate-suitable"
  }, {
    path: "/final-delivary",
    component: _4e87678b,
    name: "final-delivary"
  }, {
    path: "/final-delivary-project",
    component: _48d42652,
    name: "final-delivary-project"
  }, {
    path: "/final-logo",
    component: _c05a7774,
    name: "final-logo"
  }, {
    path: "/final-logo-project",
    component: _d07b42dc,
    name: "final-logo-project"
  }, {
    path: "/home",
    component: _36ff27fa,
    name: "home"
  }, {
    path: "/kick-day-selection",
    component: _d0af2610,
    name: "kick-day-selection"
  }, {
    path: "/kick-off",
    component: _2b68ee0c,
    name: "kick-off"
  }, {
    path: "/kick-off-project",
    component: _5fe53b50,
    name: "kick-off-project"
  }, {
    path: "/learn-how-mbx",
    component: _f490bcee,
    name: "learn-how-mbx"
  }, {
    path: "/mbx-pro",
    component: _81bd7622,
    name: "mbx-pro"
  }, {
    path: "/mbx-process-detail",
    component: _ae723fc6,
    name: "mbx-process-detail"
  }, {
    path: "/Mi-MBX",
    component: _89954714,
    name: "Mi-MBX"
  }, {
    path: "/Mi-MBX-1",
    component: _84a21ecc,
    name: "Mi-MBX-1"
  }, {
    path: "/miroespacio",
    component: _777b66dd,
    name: "miroespacio"
  }, {
    path: "/Mis-MBX",
    component: _5c900559,
    name: "Mis-MBX"
  }, {
    path: "/my-project",
    component: _f3224cc8,
    name: "my-project"
  }, {
    path: "/my-team",
    component: _a3c3842c,
    name: "my-team"
  }, {
    path: "/Panel-project",
    component: _6487c03c,
    name: "Panel-project"
  }, {
    path: "/Panel-project-1",
    component: _5bf77ae0,
    name: "Panel-project-1"
  }, {
    path: "/panel-project-2",
    component: _1151ca81,
    name: "panel-project-2"
  }, {
    path: "/payment",
    component: _6cb7cbdc,
    name: "payment"
  }, {
    path: "/Pre-agenda",
    component: _1c128d3a,
    name: "Pre-agenda"
  }, {
    path: "/program-selection",
    component: _560c03e2,
    name: "program-selection"
  }, {
    path: "/proposal-contact-1",
    component: _033ee5cd,
    name: "proposal-contact-1"
  }, {
    path: "/proposal-contact-a",
    component: _05e34dfd,
    name: "proposal-contact-a"
  }, {
    path: "/R1",
    component: _72be7443,
    name: "R1"
  }, {
    path: "/R1-logo",
    component: _21a5bf25,
    name: "R1-logo"
  }, {
    path: "/R1-logo-project",
    component: _23980a71,
    name: "R1-logo-project"
  }, {
    path: "/R1-project",
    component: _c19e7ce2,
    name: "R1-project"
  }, {
    path: "/R2",
    component: _72cc8bc4,
    name: "R2"
  }, {
    path: "/R2-project",
    component: _e4986fe0,
    name: "R2-project"
  }, {
    path: "/R3",
    component: _72daa345,
    name: "R3"
  }, {
    path: "/R3-project",
    component: _7c36ce91,
    name: "R3-project"
  }, {
    path: "/registry",
    component: _3be5e261,
    name: "registry"
  }, {
    path: "/research",
    component: _e7c8d682,
    name: "research"
  }, {
    path: "/research2",
    component: _1122a6fa,
    name: "research2"
  }, {
    path: "/return-text-example",
    component: _fae7385a,
    name: "return-text-example"
  }, {
    path: "/revision",
    component: _40956aff,
    name: "revision"
  }, {
    path: "/schedule-meeting",
    component: _1f847b29,
    name: "schedule-meeting"
  }, {
    path: "/schedule-meeting-2",
    component: _4abf460e,
    name: "schedule-meeting-2"
  }, {
    path: "/select-team",
    component: _357cf69a,
    name: "select-team"
  }, {
    path: "/selection-of-strategists",
    component: _698b06fe,
    name: "selection-of-strategists"
  }, {
    path: "/Shop",
    component: _1e7e5a8c,
    name: "Shop"
  }, {
    path: "/strategist",
    component: _57b708a8,
    name: "strategist"
  }, {
    path: "/timeline-proposal",
    component: _4742fe0a,
    name: "timeline-proposal"
  }, {
    path: "/typeresearach",
    component: _fc8cd5bc,
    name: "typeresearach"
  }, {
    path: "/video",
    component: _7f5f4707,
    name: "video"
  }, {
    path: "/video-presentation",
    component: _4ac6f2d0,
    name: "video-presentation"
  }, {
    path: "/videoc",
    component: _6f53c2ec,
    name: "videoc"
  }, {
    path: "/voting-result",
    component: _33bcc60f,
    name: "voting-result"
  }, {
    path: "/last/Mesa-de-trabajo-1-copia-31",
    component: _233c58db,
    name: "last-Mesa-de-trabajo-1-copia-31"
  }, {
    path: "/last/Mesa-de-trabajo-1-copia-34",
    component: _23669f5e,
    name: "last-Mesa-de-trabajo-1-copia-34"
  }, {
    path: "/last/Mesa-de-trabajo-1-copia-35",
    component: _2374b6df,
    name: "last-Mesa-de-trabajo-1-copia-35"
  }, {
    path: "/last/Mesa-de-trabajo-1-copia-36",
    component: _2382ce60,
    name: "last-Mesa-de-trabajo-1-copia-36"
  }, {
    path: "/last/Mesa-de-trabajo-1-copia-37",
    component: _2390e5e1,
    name: "last-Mesa-de-trabajo-1-copia-37"
  }, {
    path: "/last/Mesa-de-trabajo-1-copia-38",
    component: _239efd62,
    name: "last-Mesa-de-trabajo-1-copia-38"
  }, {
    path: "/last/Mesa-de-trabajo-1-copia-39",
    component: _23ad14e3,
    name: "last-Mesa-de-trabajo-1-copia-39"
  }, {
    path: "/last/Mesa-de-trabajo-1-copia-40",
    component: _24e319f9,
    name: "last-Mesa-de-trabajo-1-copia-40"
  }, {
    path: "/last/Mesa-de-trabajo-1-copia-41",
    component: _24f1317a,
    name: "last-Mesa-de-trabajo-1-copia-41"
  }, {
    path: "/last/Mesa-de-trabajo-1-copia-42",
    component: _24ff48fb,
    name: "last-Mesa-de-trabajo-1-copia-42"
  }, {
    path: "/last/Mesa-de-trabajo-67",
    component: _072a735e,
    name: "last-Mesa-de-trabajo-67"
  }, {
    path: "/Mbx-complete/work-table-1",
    component: _60208f24,
    name: "Mbx-complete-work-table-1"
  }, {
    path: "/Mbx-complete/work-table-10",
    component: _2e02cfb2,
    name: "Mbx-complete-work-table-10"
  }, {
    path: "/Mbx-complete/work-table-11",
    component: _2e10e733,
    name: "Mbx-complete-work-table-11"
  }, {
    path: "/Mbx-complete/work-table-12",
    component: _2e1efeb4,
    name: "Mbx-complete-work-table-12"
  }, {
    path: "/Mbx-complete/work-table-13",
    component: _2e2d1635,
    name: "Mbx-complete-work-table-13"
  }, {
    path: "/Mbx-complete/work-table-14",
    component: _2e3b2db6,
    name: "Mbx-complete-work-table-14"
  }, {
    path: "/Mbx-complete/work-table-15",
    component: _2e494537,
    name: "Mbx-complete-work-table-15"
  }, {
    path: "/Mbx-complete/work-table-16",
    component: _2e575cb8,
    name: "Mbx-complete-work-table-16"
  }, {
    path: "/Mbx-complete/work-table-2",
    component: _60046022,
    name: "Mbx-complete-work-table-2"
  }, {
    path: "/Mbx-complete/work-table-4",
    component: _5fcc021e,
    name: "Mbx-complete-work-table-4"
  }, {
    path: "/Mbx-complete/work-table-5",
    component: _5fafd31c,
    name: "Mbx-complete-work-table-5"
  }, {
    path: "/Mbx-complete/work-table-6",
    component: _5f93a41a,
    name: "Mbx-complete-work-table-6"
  }, {
    path: "/Mbx-complete/work-table-7",
    component: _5f777518,
    name: "Mbx-complete-work-table-7"
  }, {
    path: "/Mbx-complete/work-table-8",
    component: _5f5b4616,
    name: "Mbx-complete-work-table-8"
  }, {
    path: "/Mbx-complete/work-table-9",
    component: _5f3f1714,
    name: "Mbx-complete-work-table-9"
  }, {
    path: "/Mbx-complete/work-table-91",
    component: _3bb7ac2b,
    name: "Mbx-complete-work-table-91"
  }, {
    path: "/",
    component: _006b5044,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
