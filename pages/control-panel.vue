<template>
  <div>
    <div>
      <style>
        .v-main {
          padding: 0 !important;
        }
        .v-footer {
          display: none;
        }
      </style>
      <!-- back btn start-->
      <div class="back-btn"></div>
      <!-- back btn end-->

      <Modal :value="modalSebaKickOff">
        <v-layout justify-space-around align-center style="font-size: 14px">
          <div class="">¿Desea acceder en modo conferencia?</div>

          <BotonDiseno
            class="mx-1"
            @click="$router.push({ path: '/research2?conference=1' })"
          >
            Si
          </BotonDiseno>

          <BotonDiseno
            class="mx-1"
            @click="$router.push({ path: '/research2' })"
          >
            No
          </BotonDiseno>

          <BotonDiseno
            v-if="$nuxt.$route.path.match('control-panel-x')"
            class="mx-1"
            @click="$router.push({ path: '/research2' })"
          >
            Reagendar
          </BotonDiseno>
        </v-layout>
      </Modal>
      <!-- Control panel start-->
      <div class="mbx-page">
        <div class="h-100 position-relative">
          <div class="mbx-main-blk">
            <div style="margin-top: -70px" class="mbx-bottom-content-blk">
              <div class="row">
                <div class="col-1"></div>
                <div class="col-7 pt-12">
                  <div
                    style="padding-top: 140px"
                    class="mbx-left-content left-border"
                  >
                    <p
                      style="line-height: 40px; margin-bottom: 50px"
                      class="bold-title font-weight-bold"
                    >
                      HOLA! <br />BIENVENIDO A MBX
                    </p>
                    <div class="row">
                      <div class="col">
                        <div class="control-panel-left-blk">
                          <div class="control-panel-progress">
                            <div class="progress-circle">
                              <svg
                                id="svg"
                                style="transform: rotate(-90deg)"
                                width="200"
                                height="200"
                                viewPort="0 0 100 100"
                                version="1.1"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle
                                  id="bar"
                                  r="150"
                                  cx="150"
                                  cy="150"
                                  fill="transparent"
                                  stroke-dasharray="952"
                                  :stroke-dashoffset="strokeDashoffset"
                                ></circle>
                              </svg>

                              <div class="progress-circle-rate">
                                <p
                                  class="font-weight-bold"
                                  style="font-family: barlow; font-size: 100px"
                                >
                                  {{ percent() }}<span class="percent">%</span>
                                </p>
                                <span style="color: #b1b1b1">Avance</span>
                              </div>
                            </div>
                            <div class="control-panel-btn">
                              <a style="" href="" class="seven-days">
                                {{ nextEvent.summary }}
                                {{ moment(nextEvent.start).fromNow() }}</a
                              >
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="col">
                        <div class="control-panel-step-bar">
                          <p>
                            Próximo hito:
                            <b> {{ moment(nextEvent.start).fromNow() }}</b>
                          </p>
                          <div class="common-step-bar-blk">
                            <div class="step-bar">
                              <ul>
                                <li
                                  v-for="etapa in etapas"
                                  :key="etapa.title"
                                  :class="{ active: etapa.active }"
                                >
                                  {{ etapa.title }}

                                  <span
                                    v-if="
                                      etapa.active && etapa.title === 'Research'
                                    "
                                    style="
                                      background: red;
                                      color: white;
                                      width: 15px;
                                      height: 15px;
                                      display: inline-block;
                                      border-radius: 100%;
                                      font-size: 10px;
                                      margin-left: -3px;
                                      text-align: center;
                                      transform: translateY(-8px);
                                    "
                                  >
                                    3
                                  </span>
                                  <div>
                                    <v-btn
                                      v-if="
                                        etapa.active &&
                                        etapas
                                          .filter((a) => a.active)
                                          .slice(-1)[0].title === etapa.title
                                      "
                                      style="
                                        border-top: 1px solid;
                                        border-bottom: 1px solid;
                                        font-size: 18px;
                                        font-weight: 600;
                                        letter-spacing: 0;
                                      "
                                      :disabled="
                                        !(
                                          new Date() > new Date(nextEvent.start)
                                        )
                                      "
                                      text
                                      class="text-none text-body py-5 px-6 my-4 rounded-0"
                                      @click="go(etapa)"
                                    >
                                      {{
                                        new Date() > new Date(nextEvent.start)
                                          ? "Ingresar"
                                          : "Aún no comienza"
                                      }}
                                    </v-btn>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  class="col-4"
                  style="background: #f2f2f0; padding-top: 300px"
                >
                  <div
                    class="mbx-bottom-right-content control-panel-right-blk w-100"
                    style="max-width: 100%"
                  >
                    <div class="control-panel-right">
                      <div class="phase-blk">
                        <nuxt-link
                          :to="'Mi-MBX?' + (tareas ? 'tareas=1' : '')"
                          class="font-weight-normal common-field"
                        >
                          Mi MBX

                          <v-icon
                            v-if="
                              nextEvent &&
                              nextEvent.summary &&
                              nextEvent.summary.match('(2)')
                            "
                            style="
                              margin-top: -20px;
                              margin-left: -10px;
                              transform: scale(1.5);
                            "
                            color="red"
                          >
                            mdi-circle-small
                          </v-icon>
                        </nuxt-link>
                      </div>
                      <div class="phase-blk">
                        <nuxt-link
                          to="my-team"
                          class="font-weight-normal common-field"
                        >
                          Mi equipo
                        </nuxt-link>
                      </div>
                      <div class="phase-blk">
                        <nuxt-link
                          to="contract-and-invoice"
                          class="font-weight-normal common-field"
                        >
                          Contrato y factura
                        </nuxt-link>
                      </div>
                      <div class="phase-blk">
                        <nuxt-link
                          to="my-project"
                          class="font-weight-normal common-field"
                        >
                          Mi project
                        </nuxt-link>
                      </div>
                      <div class="phase-blk">
                        <nuxt-link
                          to="Shop"
                          class="font-weight-normal common-field shop"
                        >
                          Shop
                        </nuxt-link>
                      </div>
                      <slot v-bind="{ nextEvent }"></slot>
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
const progress = {
  data() {
    return {
      nextEvent: {},
      etapas: [
        { link: "/kick-off", match: /kick/i, active: true, title: "Kick Off" },
        {
          link: "/Mi-MBX",
          match: /search/i,
          active: false,
          title: "Research",
        },
        {
          link: "/brand-compass",

          match: /propuesta/i,
          active: false,
          title: "Brand Compass",
        },

        {
          link: "/big-bang-workshop",

          match: /(?!propuesta).*brand/i,
          active: false,
          title: "Big Bang Workshop",
        },

        {
          link: "/brand-compass-validation",

          match: /propuesta.*compass/i,
          active: false,
          title: "Validación Brand Compass",
        },
        {
          link: "/big-bang-workshop-proposal",
          match: /big/i,
          active: false,
          title: "Propuesta Big Bang Workshop",
        },
        {
          link: "/revision",
          match: /visión/i,
          active: false,
          title: "Revisión 1",
        },
        {
          link: "/revision",
          match: /visión 2/i,
          active: false,
          title: "Revisión 2",
        },
        {
          link: "/revision",
          match: /visión 3/i,
          active: false,
          title: "Revisión 3",
        },
        {
          link: "/Business-Idea-Workshop",
          match: /busines/i,
          active: false,
          title: "Business Idea Workshop",
        },
        { match: /final/i, active: false, title: "Entrega final" },
      ],
    };
  },
  mounted() {
    this.startLoading();
  },
  methods: {
    getAdvanceIndex() {
      const result = [...this.etapas].find((a, index) => {
        if (this.nextEvent.summary) {
          return this.nextEvent.summary.match(`\\(${index + 1}\\)`);
        } else {
          return false;
        }
      });
      const index = this.etapas.indexOf(result);
      return index;
    },
    smartLock() {
      const index = this.getAdvanceIndex();
      this.etapas.map((a, b) => {
        return (a.active = b <= index);
      });
    },
    startLoading() {
      return this.$axios
        .$get("/get-calendar", { progress: false })
        .then((a) => {
          this.nextEvent = a;
        })
        .then(() => {
          setTimeout(() => {
            this.smartLock();
            if (!this._isDestroyed) this.startLoading();
          }, 3000);
        });
    },
  },
};
export { progress };
export default {
  mixins: [progress],
  props: {
    tareas: { type: Boolean, default: false },
  },
  data() {
    return {
      modalSebaKickOff: false,
    };
  },
  computed: {
    strokeDashoffset() {
      let val = this.percent();

      if (isNaN(val)) {
        return 100;
      } else {
        const c = Math.PI * (150 * 2);

        if (val < 0) {
          val = 0;
        }
        if (val > 100) {
          val = 100;
        }

        const pct = ((100 - val) / 100) * c;
        return -pct;
      }
    },
  },

  methods: {
    go(etapa) {
      if (etapa.title === "Research") {
        this.modalSebaKickOff = true;
      } else {
        this.$router.push({ path: etapa.link });
      }
    },
    percent() {
      return Math.round(
        (100 * (Math.max(this.etapas.filter((a) => a.active).length, 1) - 1)) /
          (this.etapas.length - 1)
      );
    },
  },
};
</script>
<style scoped>
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
</style>
