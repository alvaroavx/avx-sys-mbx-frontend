<template>
  <div>
    <style>
      button.text-none.text-body.py-5.px-6.my-4.rounded-0.v-btn.v-btn--text.v-size--default {
        color: #fff !important;
      }
      .back-btn a {
        color: #fff !important;
      }
      i.v-icon.notranslate.mdi.mdi-menu.theme--light {
        color: #fff !important;
      }
    </style>
    <control-panel tareas back>
      <div slot-scope="{}" class="phase-blk">
        <nuxt-link
          to="/last/Mesa-de-trabajo-1-copia-31"
          class="font-weight-normal common-field shop"
        >
          Tareas
        </nuxt-link>
      </div>
    </control-panel>
  </div>
</template>
<script>
import controlPanel from "./control-panel.vue";

export default {
  components: { controlPanel },
  mounted() {
    this.$nextTick(() => {
      this.$vuetify.theme.dark = true;
      this.$vuetify.theme.isDark = true;
    });
  },
};
</script>
<style>
.v-toolbar__content {
  /* background: #24262b !important;*/
}
.mbx-bottom-content-blk .col-4 {
  background: #02bddc !important;
}

a.font-weight-normal.common-field {
  color: white !important;
}

html,
body,
.v-main__wrap {
  /* background: #24262b !important; */
  color: white !important;
}
.percent {
  display: inline-block;
  vertical-align: 24px;
  font-size: 60px;
}
.seven-days {
  color: #e3402e !important;
  font-weight: bolder;
  line-height: 24px;
  margin-left: -30px;
  margin-top: 40px;
}
div#app.theme--dark.v-application span.v-btn__content {
  color: #fff !important;
}

.mbx-bottom-content-blk {
  background: #24262b;
  color: #fff;
}

a.text-none.v-btn--router.v-btn--text.v-size--default {
  color: white !important;
}
</style>
