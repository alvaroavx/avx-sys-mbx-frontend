<template>
  <div>
    <!-- r -->
    <v-row align="start" class="no-gutters">
      <v-col />

      <v-col cols="auto">
        <v-sheet max-width="300">
          <v-text-field
            v-if="r"
            solo
            background-color="rgba(220,220,220,0.2)"
            flat
            clear-icon="mdi-backspace-outline"
            dense
            :name="uniqid()"
            rounded
            :hint="`${dataSource.results} Resultados (en ${dataSource.resultsTime} segundos)`"
            clearable
            label="Buscar"
            autocomplete="new-password"
            append-icon="mdi-magnify"
            @input="inputSearch"
          />
        </v-sheet>
      </v-col>

      <v-col cols="auto" class="mx-auto">
        <v-btn v-if="r" color="primary" icon @click="loadResults({})">
          <v-icon>mdi-refresh</v-icon>
        </v-btn>

        <v-btn
          v-if="c"
          color="primary"
          x-small
          fab
          @click="
            editor.createModal = true;
            editor.currentId = undefined;
          "
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <!-- LOADER  SKELETON -->
    <v-sheet
      v-if="
        UITools.loading === undefined ||
        (UITools.loading === true && dataSource.items.length === 0)
      "
      color="transparent"
      class="px-3 pt-3 pb-3"
    >
      <v-skeleton-loader class="rounded-xl" width="100%" type="image" />
      <v-skeleton-loader class="rounded-xl mt-4" width="100%" type="image" />
      <v-skeleton-loader class="rounded-xl mt-4" width="100%" type="image" />
    </v-sheet>
    <!-- RESULTS -->
    <span v-for="(item, itemIndex) in dataSource.items" :key="item._id">
      <slot
        name="container"
        v-bind="{
          item,
          remove: remove.bind(this, item),
          edit: edit.bind(this, item),
          copy: copy.bind(this, item),
        }"
      >
        <div
          :style="
            itemIndex > 0 && `border-top: 1px solid rgb(127 127 127 / 15%);`
          "
        >
          <v-card
            color="transparent"
            flat
            class="mb-2"
            style="border-radius: 20px !important"
          >
            <slot
              name="item"
              v-bind="{
                item,
                remove: remove.bind(this, item),
                edit: edit.bind(this, item),
                copy: copy.bind(this, item),
              }"
            >
              <v-card-text class="pa-0">
                <!-- DATA -->

                <SwipeIt v-model="UITools.position">
                  <div
                    v-for="(data, label) in _(fields)
                      .toPairs()
                      .map((a) => [a[1].name, item[a[1].name]])
                      .fromPairs()
                      .omit('undefined')
                      .value()"
                    :key="label"
                  >
                    <div
                      v-if="itemIndex === 0"
                      ref="cabecera"
                      style="
                        border-radius: 0 0 20px 20px;
                        color: #287ad0;
                        border-bottom: 1px solid rgba(127, 127, 127, 0.4);
                      "
                      class="py-4 text--primary text-left pl-8 mb-5 ml-2 font-weight-bold"
                    >
                      {{ beautifyLabel(label) }}
                    </div>
                    <div
                      class="mb-2 mx-1 color-block"
                      style="
                        border-radius: 35px;
                        max-height: 150px;
                        overflow: hidden;
                      "
                    >
                      <div v-if="fields.find((a) => a.name === label)">
                        <Form
                          :value="item"
                          :fields="[
                            {
                              ...fields.find((a) => a.name === label),
                              placeholder: undefined,
                              label: undefined,
                              disabled: true,
                            },
                          ]"
                        />
                      </div>
                      <div v-else>
                        {{ data }}
                      </div>
                      <div
                        v-if="$scopedSlots[label]"
                        class="pt-2 px-3 pb-2 caption text-center"
                        style="color: black"
                      >
                        <slot
                          v-if="$scopedSlots[label]"
                          :name="label"
                          v-bind="{ data, item }"
                        />
                      </div>
                    </div>
                  </div>
                </SwipeIt>

                <!-- RIGHT CONTROLS -->
              </v-card-text>
            </slot>
          </v-card>

          <div v-if="d || u" class="text-right" style="height: 0">
            <v-menu open-on-hover>
              <template #activator="{ on, attrs }">
                <v-btn
                  style="position: relative; z-index: 2; margin-top: -80px"
                  class="primary mr-n3"
                  fab
                  small
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon style="color: white"> mdi-pencil </v-icon>
                </v-btn>
              </template>
              <v-list>
                <v-list-item
                  v-if="u"
                  @mousedown.stop
                  @click.stop.prevent="edit(item)"
                >
                  <v-list-item-title>
                    <v-icon> mdi-pencil </v-icon>
                    Editar
                  </v-list-item-title>
                </v-list-item>
                <v-list-item
                  v-if="u"
                  @mousedown.stop
                  @click.stop.prevent="copy(item)"
                >
                  <v-list-item-title>
                    <v-icon> mdi-content-copy </v-icon> Copiar
                  </v-list-item-title>
                </v-list-item>

                <v-list-item
                  v-if="d"
                  @mousedown.stop
                  @click.stop.prevent="remove(item)"
                >
                  <v-list-item-title>
                    <v-icon> mdi-delete </v-icon> Eliminar
                  </v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </div>
        </div>
      </slot>
    </span>
    <!-- INFINITE  SCROLL-->
    <v-row v-if="UITools.enableLoadMore" no-gutters>
      <v-col class="align-self-center text-center">
        <v-btn
          v-intersect="{ handler: onIntersect }"
          class="ma-4"
          icon
          @click="loadMore"
        >
          <v-progress-circular
            v-if="UITools.loading"
            indeterminate
            color="primary"
          />
          <v-icon v-else> mdi-dots-horizontal </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-dialog v-model="editor.createModal" width="600">
      <v-card light>
        <div class="text-right">
          <v-btn icon @click="editor.createModal = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </div>

        <v-card-text v-if="editor.createModal">
          <Form
            :id="editor.currentId"
            :value="value"
            :save-as-new="editor.isCopy"
            :additional="additional"
            :api="api"
            :fields="fields"
            @input="(a) => $emit('input', a)"
            @success="closingModal"
          />
        </v-card-text>
      </v-card>
    </v-dialog>

    <div
      v-if="UITools.loading === false && dataSource.items.length === 0"
      class="text-center w-100"
    >
      <slot name="empty">
        <v-alert color="#bbb" text class="d-inline-block mx-auto rounded-xl">
          <div class="text-center">
            <v-icon class="text-h4"> mdi-texture-box </v-icon>
          </div>
          <h3 class="headline">No hay resultados</h3>
          No sea encontrado ningún resultado o coincidencia
        </v-alert>
      </slot>
    </div>
  </div>
</template>
<script>
import lodash from "lodash";
import qs from "qs";
import uniqid from "uniqid";
import smartRender from "./smartRender";
import { configureSocket } from "./Form";
import SwipeIt from "./SwipeIt";
export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { SwipeIt, smartRender },
  props: {
    value: {
      type: Object,
      default: () => ({}),
    },
    project: {
      type: Object,
      default: () => ({}),
    },
    apiQuery: {
      type: Object,
      default: () => ({}),
    },
    additional: {
      type: Object,
      default: () => ({}),
    },
    c: { type: Boolean, default: false },
    r: { type: Boolean, default: false },
    u: { type: Boolean, default: false },
    d: { type: Boolean, default: false },
    fields: { type: Array, default: () => [] },
    api: { default: undefined, type: String },
  },
  data() {
    return {
      urlQuery: {},
      filtersSortAndPagination: {
        JSONFindQuery: {},
        skip: 0,
        limit: 10,
      },
      dataSource: {
        items: [],
        results: 0,
        resultsTime: 0,
        remainingResults: undefined,
        lastRefresh: undefined,
      },
      UITools: {
        enableLoadMore: false,
        position: [],
        loading: undefined,
      },
      uniqid,
      editor: {
        isCopy: false,
        createModal: false,
        currentId: undefined,
      },
    };
  },
  watch: {
    apiQuery: {
      async handler(a, b) {
        if (!this._.isEqual(a, b)) {
          this.filtersSortAndPagination.skip = 0;
          await this.loadResults({});
        }
      },
      immediate: true,
    },
  },
  async mounted() {
    setTimeout(() => {
      this.UITools.enableLoadMore = true;
    }, 3000);
    const created = () => {
      this.loadResults({ clearAll: true });
    };
    (await configureSocket(this))
      .service(this.api)
      .on("created", created)
      .on("removed", ({ id }) => {
        const indexOfTheItemToRemove = this.dataSource.items.indexOf(
          this.dataSource.items.find((a) => a._id === id)
        );
        if (indexOfTheItemToRemove > -1) {
          this.dataSource.items.splice(indexOfTheItemToRemove, 1);
        }
        this.loadResults({ clearAll: true });
      })
      .on("patched", (data) => {
        const indexOfTheItemToReplace = this.dataSource.items.indexOf(
          this.dataSource.items.find((a) => a._id === data._id)
        );
        if (indexOfTheItemToReplace > -1) {
          this.dataSource.items[indexOfTheItemToReplace] = data;
        }
        this.loadResults({ clearAll: true });
      })
      .on("updated", (data) => {
        const indexOfTheItemToReplace = this.dataSource.items.indexOf(
          this.dataSource.items.find((a) => a._id === data._id)
        );
        if (indexOfTheItemToReplace > -1) {
          this.dataSource.items[indexOfTheItemToReplace] = data;
        }
        this.loadResults({ clearAll: true });
      });
  },
  methods: {
    loadResults: lodash.throttle(
      function () {
        return this._loadResults(...arguments);
      },
      5000,
      {}
    ),
    loadMore(entries, observer, isIntersecting) {
      // this.$dialog.toast({ text: 'Cargando más resultados' })
      this.loadResults({}).then(({ data }) => {
        if (data.length === 0) {
          this.$dialog.toast({ text: "No hay más resultados" });
        } else {
          // this.$dialog.toast({ text: 'Listo' })
        }
      });
    },
    onIntersect(entries, observer, isIntersecting) {
      if (this.UITools.loading === false && isIntersecting) {
        if (this.dataSource.remainingResults !== 0) {
          this._loadResults({});
        }
      }
    },
    inputSearch: lodash.debounce(function (a) {
      return this._inputSearch(a);
    }, 250),
    async _inputSearch(text) {
      this.dataSource.items = [];
      this.filtersSortAndPagination.skip = 0;
      if (text) {
        this.filtersSortAndPagination.JSONFindQuery = {
          indexed: { $regex: text.toLowerCase() },
        };
      } else {
        this.filtersSortAndPagination.JSONFindQuery = {};
      }
      await this.loadResults({ clearAllResultsWhenLoadIsFinished: true });
    },
    isAName(label) {
      return label.match(/name|title/i);
    },
    mustShow(label) {
      if (this.project[label] !== undefined) {
        if (!!this.project[label] === true) {
          return true;
        } else {
          return false;
        }
      }
      const ifIsNotUnderScore = label[0] !== "_";
      const ifIsNotAName = !this.isAName(label);

      return ifIsNotUnderScore && ifIsNotAName;
    },
    beautifyLabel(label) {
      const result = this.fields.find((a) => a.name === label);

      if (result) {
        return result.label;
      } else {
        return label;
      }
    },

    closingModal() {
      this.editor.createModal = false;
      this.loadResults({});
    },
    async _loadResults({ clearAllResultsWhenLoadIsFinished = false }) {
      if (process.server) return;
      this.urlQuery = qs.parse(decodeURIComponent(location.search).substr(1));

      this.UITools.loading = true;
      const query = {
        $sort: { _id: -1 },
        ...this.filtersSortAndPagination.JSONFindQuery,
        $limit: this.filtersSortAndPagination.limit,
        ...this.apiQuery,
        $skip: this.filtersSortAndPagination.skip,
        ...this.urlQuery,
      };
      const start = +new Date();
      return await configureSocket(this)
        .then((socket) => {
          return socket
            .service(this.api)
            .find({ query })
            .then(
              ({ data, total }) => {
                if (clearAllResultsWhenLoadIsFinished) {
                  this.dataSource.items = [];
                }

                this.dataSource.results = total;
                if (this.filtersSortAndPagination.skip === 0) {
                  this.dataSource.items = [];
                }
                if (data.length) {
                  data.forEach(
                    (item) =>
                      !this.dataSource.items.find((a) => a._id === item._id) &&
                      this.dataSource.items.push(item)
                  );
                }

                this.filtersSortAndPagination.skip =
                  Math.min(
                    this.dataSource.items.length,
                    this.filtersSortAndPagination.skip
                  ) +
                  Math.min(this.filtersSortAndPagination.limit, data.length);

                this.dataSource.resultsTime =
                  Math.round((100 * (+new Date() - start)) / 1000) / 100;
                this.dataSource.remainingResults =
                  (total || 0) - this.dataSource.items.length;

                this.$nextTick(() => {
                  this.$emit("loaded", this.dataSource);
                  this.UITools.loading = false;
                });
                return { data };
              },
              (_error) => {
                this.UITools.loading = false;
                return { data: [] };
              }
            );
        })
        .catch((_error) => {
          return { data: [] };
        });
    },
    edit(item) {
      this.editor.createModal = true;
      this.editor.currentId = item._id;
      this.editor.isCopy = false;
    },
    copy(item) {
      this.editor.createModal = true;
      this.editor.currentId = item._id;
      this.editor.isCopy = true;
    },
    remove(item) {
      this.$fevu
        .alert({
          title: "Eliminar",
          text: "Una vez eliminado este elemento no se podrá recuperar",
          actions: {
            true: { text: "Eliminar", color: "error" },
            false: "Volver atrás",
          },
        })
        .then(async (ok) => {
          if (ok) {
            await this.$axios.$delete("/" + this.api + "/" + item._id);
            this.loadResults({});
          }
        });
    },
  },
};
</script>
<style>
.theme--light .color-block {
  background: white;
}
.theme--dark .color-block {
  background: black;
}

.swiper-button-disabled {
  opacity: 0;
}
</style>
