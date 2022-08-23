/* eslint-disable */

 // need instance of vuetify, for example
 import Vue from 'vue'
 import VuetifyDialog from 'vuetify-dialog'
 const { vuetify } = require( './vuetify')
 import 'vuetify-dialog/dist/vuetify-dialog.css'
   Vue.use(VuetifyDialog, {
     context: {
       vuetify
     }
   })