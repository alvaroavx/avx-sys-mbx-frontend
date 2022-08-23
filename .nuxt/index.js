import Vue from 'vue'
import Vuex from 'vuex'
import Meta from 'vue-meta'
import ClientOnly from 'vue-client-only'
import NoSsr from 'vue-no-ssr'
import { createRouter } from './router.js'
import NuxtChild from './components/nuxt-child.js'
import NuxtError from '../layouts/error.vue'
import Nuxt from './components/nuxt.js'
import App from './App.js'
import { setContext, getLocation, getRouteData, normalizeError } from './utils'
import { createStore } from './store.js'

/* Plugins */

import nuxt_plugin_plugin_85aa042c from 'nuxt_plugin_plugin_85aa042c' // Source: ./components/plugin.js (mode: 'all')
import nuxt_plugin_plugin_640d1e44 from 'nuxt_plugin_plugin_640d1e44' // Source: ./vuetify/plugin.js (mode: 'all')
import nuxt_plugin_workbox_319dad1c from 'nuxt_plugin_workbox_319dad1c' // Source: ./workbox.js (mode: 'client')
import nuxt_plugin_metaplugin_7c76182f from 'nuxt_plugin_metaplugin_7c76182f' // Source: ./pwa/meta.plugin.js (mode: 'all')
import nuxt_plugin_iconplugin_fdc484ba from 'nuxt_plugin_iconplugin_fdc484ba' // Source: ./pwa/icon.plugin.js (mode: 'all')
import nuxt_plugin_axios_31bb3800 from 'nuxt_plugin_axios_31bb3800' // Source: ./axios.js (mode: 'all')
import nuxt_plugin_nuxtvuexlocalstorage_0117ab57 from 'nuxt_plugin_nuxtvuexlocalstorage_0117ab57' // Source: ./nuxt-vuex-localstorage.js (mode: 'client')
import nuxt_plugin_localStorage_33b6fc86 from 'nuxt_plugin_localStorage_33b6fc86' // Source: ../plugins/locallib/localStorage.js (mode: 'all')
import nuxt_plugin_vuetify_75e6be2a from 'nuxt_plugin_vuetify_75e6be2a' // Source: ../plugins/locallib/vuetify.js (mode: 'all')
import nuxt_plugin_Forms_660f0c89 from 'nuxt_plugin_Forms_660f0c89' // Source: ../plugins/locallib/Forms/Forms.js (mode: 'all')
import nuxt_plugin_vuetifydialog_9a86b2e2 from 'nuxt_plugin_vuetifydialog_9a86b2e2' // Source: ../plugins/locallib/vuetify-dialog.js (mode: 'client')
import nuxt_plugin_veevalidate_68385289 from 'nuxt_plugin_veevalidate_68385289' // Source: ../plugins/locallib/vee-validate.js (mode: 'all')

// Component: <ClientOnly>
Vue.component(ClientOnly.name, ClientOnly)

// TODO: Remove in Nuxt 3: <NoSsr>
Vue.component(NoSsr.name, {
  ...NoSsr,
  render (h, ctx) {
    if (process.client && !NoSsr._warned) {
      NoSsr._warned = true

      console.warn('<no-ssr> has been deprecated and will be removed in Nuxt 3, please use <client-only> instead')
    }
    return NoSsr.render(h, ctx)
  }
})

// Component: <NuxtChild>
Vue.component(NuxtChild.name, NuxtChild)
Vue.component('NChild', NuxtChild)

// Component NuxtLink is imported in server.js or client.js

// Component: <Nuxt>
Vue.component(Nuxt.name, Nuxt)

Object.defineProperty(Vue.prototype, '$nuxt', {
  get() {
    return this.$root.$options.$nuxt
  },
  configurable: true
})

Vue.use(Meta, {"keyName":"head","attribute":"data-n-head","ssrAttribute":"data-n-head-ssr","tagIDKeyName":"hid"})

const defaultTransition = {"name":"page","mode":"out-in","appear":true,"appearClass":"appear","appearActiveClass":"appear-active","appearToClass":"appear-to"}

const originalRegisterModule = Vuex.Store.prototype.registerModule

function registerModule (path, rawModule, options = {}) {
  const preserveState = process.client && (
    Array.isArray(path)
      ? !!path.reduce((namespacedState, path) => namespacedState && namespacedState[path], this.state)
      : path in this.state
  )
  return originalRegisterModule.call(this, path, rawModule, { preserveState, ...options })
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config)

  const store = createStore(ssrContext)
  // Add this.$router into store actions/mutations
  store.$router = router

  // Create Root instance

  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.
  const app = {
    head: {"titleTemplate":"MBX Platform","title":"mbx","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":""}],"script":[{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fwebrtc-adapter\u002F6.4.0\u002Fadapter.min.js"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fjquery\u002F1.9.1\u002Fjquery.min.js"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fjquery.blockUI\u002F2.70\u002Fjquery.blockUI.min.js"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Ftwitter-bootstrap\u002F3.4.1\u002Fjs\u002Fbootstrap.min.js"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fbootbox.js\u002F5.4.0\u002Fbootbox.min.js"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Fspin.js\u002F2.3.2\u002Fspin.min.js"},{"src":"https:\u002F\u002Fcdnjs.cloudflare.com\u002Fajax\u002Flibs\u002Ftoastr.js\u002F2.1.4\u002Ftoastr.min.js"}],"link":[{"rel":"stylesheet","href":"assets\u002Fcss\u002Fbootstrap.min.css"},{"rel":"stylesheet","href":"assets\u002Fcss\u002Fall.min.css"},{"rel":"stylesheet","href":"assets\u002Fcss\u002Ffontawesome.css"},{"rel":"stylesheet","href":"assets\u002Fcss\u002Fdefault.css"},{"rel":"stylesheet","href":"assets\u002Fcss\u002Fstyle.css"},{"rel":"stylesheet","href":"assets\u002Fcss\u002Fresponsive.css"},{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico?2"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Ffonts.googleapis.com\u002Fcss?family=Roboto:100,300,400,500,700,900&display=swap"},{"rel":"stylesheet","type":"text\u002Fcss","href":"https:\u002F\u002Fcdn.jsdelivr.net\u002Fnpm\u002F@mdi\u002Ffont@latest\u002Fcss\u002Fmaterialdesignicons.min.css"}],"style":[]},

    store,
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],
      setTransitions (transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions]
        }
        transitions = transitions.map((transition) => {
          if (!transition) {
            transition = defaultTransition
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, { name: transition })
          } else {
            transition = Object.assign({}, defaultTransition, transition)
          }
          return transition
        })
        this.$options.nuxt.transitions = transitions
        return transitions
      },

      err: null,
      dateErr: null,
      error (err) {
        err = err || null
        app.context._errored = Boolean(err)
        err = err ? normalizeError(err) : null
        let nuxt = app.nuxt // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207
        if (this) {
          nuxt = this.nuxt || this.$options.nuxt
        }
        nuxt.dateErr = Date.now()
        nuxt.err = err
        // Used in src/server.js
        if (ssrContext) {
          ssrContext.nuxt.error = err
        }
        return err
      }
    },
    ...App
  }

  // Make app available into store via this.app
  store.app = app

  const next = ssrContext ? ssrContext.next : location => app.router.push(location)
  // Resolve route
  let route
  if (ssrContext) {
    route = router.resolve(ssrContext.url).route
  } else {
    const path = getLocation(router.options.base, router.options.mode)
    route = router.resolve(path).route
  }

  // Set context to app.context
  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  })

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided')
    }
    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`)
    }

    key = '$' + key
    // Add into app
    app[key] = value
    // Add into context
    if (!app.context[key]) {
      app.context[key] = value
    }

    // Add into store
    store[key] = app[key]

    // Check if plugin not already installed
    const installKey = '__nuxt_' + key + '_installed__'
    if (Vue[installKey]) {
      return
    }
    Vue[installKey] = true
    // Call Vue.use() to install the plugin into vm
    Vue.use(() => {
      if (!Object.prototype.hasOwnProperty.call(Vue.prototype, key)) {
        Object.defineProperty(Vue.prototype, key, {
          get () {
            return this.$root.$options[key]
          }
        })
      }
    })
  }

  // Inject runtime config as $config
  inject('config', config)

  if (process.client) {
    // Replace store state before plugins execution
    if (window.__NUXT__ && window.__NUXT__.state) {
      store.replaceState(window.__NUXT__.state)
    }
  }

  // Add enablePreview(previewData = {}) in context for plugins
  if (process.static && process.client) {
    app.context.enablePreview = function (previewData = {}) {
      app.previewData = Object.assign({}, previewData)
      inject('preview', previewData)
    }
  }
  // Plugin execution

  if (typeof nuxt_plugin_plugin_85aa042c === 'function') {
    await nuxt_plugin_plugin_85aa042c(app.context, inject)
  }

  if (typeof nuxt_plugin_plugin_640d1e44 === 'function') {
    await nuxt_plugin_plugin_640d1e44(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_workbox_319dad1c === 'function') {
    await nuxt_plugin_workbox_319dad1c(app.context, inject)
  }

  if (typeof nuxt_plugin_metaplugin_7c76182f === 'function') {
    await nuxt_plugin_metaplugin_7c76182f(app.context, inject)
  }

  if (typeof nuxt_plugin_iconplugin_fdc484ba === 'function') {
    await nuxt_plugin_iconplugin_fdc484ba(app.context, inject)
  }

  if (typeof nuxt_plugin_axios_31bb3800 === 'function') {
    await nuxt_plugin_axios_31bb3800(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_nuxtvuexlocalstorage_0117ab57 === 'function') {
    await nuxt_plugin_nuxtvuexlocalstorage_0117ab57(app.context, inject)
  }

  if (typeof nuxt_plugin_localStorage_33b6fc86 === 'function') {
    await nuxt_plugin_localStorage_33b6fc86(app.context, inject)
  }

  if (typeof nuxt_plugin_vuetify_75e6be2a === 'function') {
    await nuxt_plugin_vuetify_75e6be2a(app.context, inject)
  }

  if (typeof nuxt_plugin_Forms_660f0c89 === 'function') {
    await nuxt_plugin_Forms_660f0c89(app.context, inject)
  }

  if (process.client && typeof nuxt_plugin_vuetifydialog_9a86b2e2 === 'function') {
    await nuxt_plugin_vuetifydialog_9a86b2e2(app.context, inject)
  }

  if (typeof nuxt_plugin_veevalidate_68385289 === 'function') {
    await nuxt_plugin_veevalidate_68385289(app.context, inject)
  }

  // Lock enablePreview in context
  if (process.static && process.client) {
    app.context.enablePreview = function () {
      console.warn('You cannot call enablePreview() outside a plugin.')
    }
  }

  // If server-side, wait for async component to be resolved first
  if (process.server && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, (err) => {
        // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
        if (!err._isRouter) return reject(err)
        if (err.type !== 2 /* NavigationFailureType.redirected */) return resolve()

        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from) => {
          ssrContext.url = to.fullPath
          app.context.route = await getRouteData(to)
          app.context.params = to.params || {}
          app.context.query = to.query || {}
          unregister()
          resolve()
        })
      })
    })
  }

  return {
    store,
    app,
    router
  }
}

export { createApp, NuxtError }
