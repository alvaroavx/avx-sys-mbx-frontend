<template>
  <client-only>
    <!-- r -->

    <div
      style="max-width: 700px; margin: 0 auto"
      autocomplete="new-password"
      @keypress.enter.exact="enter"
      @submit.prevent
    >
      <ValidationObserver
        ref="observer"
        v-slot="{ valid }"
        class="json-form"
        :class="{ 'row no-gutters': inline }"
      >
        <slot
          name="prepend"
          v-bind="{ parsedFields, valid, submit: send.bind(this) }"
        />

        <div
          v-if="$slots.title"
          class="my-3"
          :class="{ col: inline, 'row no-gutters': !inline }"
        >
          <div class="col">
            <slot name="title" />
          </div>
        </div>
        <v-alert v-if="saveAsNew" type="info">
          Se guardará como una copia
        </v-alert>

        <div v-for="(field, index) in parsedFields" :key="index">
          <div v-if="['title'].includes(field.type)">
            <div class="text-h5 my-6 font-weight-normal text--primary">
              {{ field.label }}
            </div>
          </div>
          <div v-else-if="['subtitle'].includes(field.type)">
            <v-row no-gutters class="mb-6">
              <v-col cols="auto">
                <div class="px-2 text-h5 text--secondary font-weight-light">
                  {{ field.label }}
                </div>
              </v-col>
              <v-col class="align-self-center">
                <v-divider />
              </v-col>
            </v-row>
          </div>
          <div v-else-if="['body'].includes(field.type)">
            <div class="text-body-1 px-2 mb-6 mt-n4 text--secondary">
              {{ field.label }}
            </div>
          </div>

          <div v-else-if="['divider'].includes(field.type)">
            <v-divider />
          </div>
          <ValidationProvider
            v-else
            v-slot="ValidationProvider"
            :name="field.label && field.label.length < 20 ? field.label : ' '"
            slim
            :rules="(!field.disabled && field.rules) || ''"
            :vid="field.name"
            :class="{ col: inline, 'row no-gutters': !inline }"
          >
            <div class="">
              <div v-if="field.label" style="width: 130px" class="text-center">
                <div class="text--primary mx-auto text-left pt-5 px-4">
                  <span v-text="field.label" />

                  <span
                    v-if="
                      ValidationProvider &&
                      ValidationProvider.required &&
                      !ValidationProvider.valid
                    "
                    style="color: red; display: inline"
                  >
                    *
                  </span>
                </div>
              </div>

              <div
                class="py-2 col mx-auto text-left"
                style="min-width: 250px; max-width: 400px"
              >
                <v-skeleton-loader
                  v-if="preloading"
                  class="rounded-xl"
                  width="100%"
                  height="48px"
                  type="image"
                />

                <Errors
                  v-if="!preloading"
                  :field="field"
                  :validation-provider="ValidationProvider"
                >
                  <slot
                    v-if="field.type == 'dateTimeRange'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <DateTimeRange
                      :field="field"
                      :value="getValue(field)"
                      @input="(value) => setValue(field, value)"
                    />
                  </slot>

                  <slot
                    v-else-if="field.type == 'files'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <Files
                      :field="field"
                      :value="getValue(field)"
                      @input="(value) => setValue(field, value)"
                    />
                  </slot>

                  <slot
                    v-else-if="field.type == 'file'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <Files
                      :multiple="false"
                      :field="field"
                      :value="getValue(field)"
                      @input="(value) => setValue(field, value)"
                    />
                  </slot>

                  <slot
                    v-else-if="field.type == 'switch'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <v-switch
                      inset
                      :label="field.label"
                      :input-value="getValue(field)"
                      :value="true"
                      @change="
                        (value) => {
                          setValue(field, value);
                        }
                      "
                    />
                  </slot>
                  <slot
                    v-else-if="field.type == 'multiple-ajax'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <SelectInput
                      :field="field"
                      :value="getValue(field)"
                      multiple
                      :disabled="field.disabled"
                      :items="
                        _.chain(field.options.values)
                          .unionBy(getCache(field), '_id')
                          .uniqBy(field.options.key)
                          .map((a) => ({
                            ...a,
                            value: a[field.options.key],
                            text: a[field.options.value],
                          }))
                          .value()
                      "
                      @change="(s) => setSearchValueAndSaveCache(field, s)"
                      @focus="triggerAjaxSearch(field, '')"
                      @update:search-input="
                        (s) => {
                          if (s !== null) {
                            triggerAjaxSearch(field, s);
                          }
                        }
                      "
                    />
                  </slot>
                  <slot
                    v-else-if="field.type == 'combobox'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <SelectInput
                      combobox
                      multiple
                      :value="getValue(field)"
                      :field="field"
                      :items="getValue(field)"
                      :placeholder="field.placeholder"
                      @change="
                        (s) => {
                          setValue(field, s);
                        }
                      "
                    />
                  </slot>
                  <slot
                    v-else-if="field.type == 'select-ajax'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <SelectInput
                      :chips="false"
                      :field="field"
                      :value="getValue(field)"
                      :disabled="field.disabled"
                      :items="
                        _.chain(field.options.values)
                          .unionBy(getCache(field), '_id')
                          .uniqBy(field.options.key)
                          .map((a) => ({
                            ...a,
                            value: a[field.options.key],
                            text: a[field.options.value],
                          }))
                          .value()
                      "
                      @change="(s) => setSearchValueAndSaveCache(field, s)"
                      @focus="triggerAjaxSearch(field, '')"
                      @update:search-input="
                        (s) => {
                          if (s !== null) {
                            triggerAjaxSearch(field, s);
                          }
                        }
                      "
                    />
                  </slot>
                  <slot
                    v-else-if="field.type == 'integer'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <NumberPicker
                      :field="field"
                      :value="getValue(field)"
                      @input="(value) => setValue(field, Math.round(value))"
                    />
                  </slot>
                  <slot
                    v-else-if="field.type == 'number'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <NumberPicker
                      :field="field"
                      :value="getValue(field)"
                      @input="(value) => setValue(field, value)"
                    />
                  </slot>

                  <slot
                    v-else-if="field.type == 'textarea'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <TextInput
                      :field="field"
                      textarea
                      :value="getValue(field)"
                      @input="(value) => setValue(field, value)"
                    />
                  </slot>
                  <slot
                    v-else-if="field.type == 'rate'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <v-rating
                      :value="getValue(field)"
                      @input="(value) => setValue(field, value)"
                    />
                  </slot>
                  <slot
                    v-else-if="['datePicker', 'dateTime'].includes(field.type)"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <DateTime
                      :field="field"
                      :value="getValue(field)"
                      @input="(value) => setValue(field, value)"
                    />
                  </slot>
                  <slot
                    v-else-if="field.type == 'checkbox'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <v-checkbox
                      :input-value="getValue(field)"
                      hide-details
                      :disabled="field.disabled"
                      :label="field.label || field.placeholder"
                      :value="true"
                      @change="
                        (value) => {
                          setValue(field, value);
                        }
                      "
                    />
                  </slot>
                  <slot
                    v-else-if="field.type == 'radiobutton'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <v-radio-group
                      :mandatory="false"
                      :value="getValue(field)"
                      hide-details
                      @change="
                        (value) => {
                          setValue(field, value);
                        }
                      "
                    >
                      <v-radio
                        v-for="radio in field.options.values"
                        :key="radio.key"
                        :class="{
                          'mt-5': index === 0,
                          'mb-5': index + 1 === field.options.values.length,
                        }"
                        :label="radio.value"
                        :value="radio.key"
                      />
                    </v-radio-group>
                  </slot>
                  <slot
                    v-else-if="field.type == 'checkboxes'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <v-checkbox
                      v-for="radio in field.options.values"
                      :key="radio.key"
                      hide-details
                      :label="radio.value"
                      :value="radio.key"
                      @change="
                        (value) => {
                          setValue(field, value);
                        }
                      "
                    />
                  </slot>

                  <slot
                    v-else-if="field.type == 'select'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <SelectInput
                      :chips="false"
                      :field="field"
                      :value="getValue(field)"
                      :items="
                        _.chain(field.options.values)
                          .uniqBy(field.options.key)
                          .map((a) => ({
                            ...a,
                            value: a[field.options.key],
                            text: a[field.options.value],
                          }))
                          .value()
                      "
                      @change="(s) => setValue(field, s)"
                    />
                  </slot>

                  <slot
                    v-else-if="field.type == 'multiple'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <SelectInput
                      :field="field"
                      :value="getValue(field)"
                      multiple
                      :items="
                        _.chain(field.options.values)
                          .uniqBy(field.options.key)
                          .map((a) => ({
                            ...a,
                            value: a[field.options.key],
                            text: a[field.options.value],
                          }))
                          .value()
                      "
                      @change="(s) => setValue(field, s)"
                    />
                  </slot>
                  <slot v-else-if="field.type == 'password'" name="password">
                    <password
                      :value="getValue(field) || ''"
                      :field="field"
                      @input="(value) => setValue(field, value)"
                    />
                  </slot>
                  <slot v-else-if="field.type == 'color'" name="password">
                    <v-sheet
                      color="rgba(0,0,0,0.06)"
                      style="border-radius: 30px; overflow: hidden"
                      class="d-inline-block"
                    >
                      <v-color-picker
                        dark
                        flat
                        rounded
                        hide-details
                        solo
                        autocomplete="new-password"
                        :hide-canvas="field.disabled"
                        :disabled="field.disabled"
                        :value="getValue(field)"
                        :placeholder="field.placeholder || field.label"
                        @input="(value) => setValue(field, value)"
                      />
                    </v-sheet>
                  </slot>
                  <slot
                    v-else-if="field.type == 'html'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <editor
                      :value="getValue(field)"
                      lang="html"
                      theme="chrome"
                      width="100%"
                      height="180"
                      @init="
                        () => {
                          require('brace/ext/language_tools');
                          require('brace/mode/html');
                          require('brace/theme/chrome');
                        }
                      "
                      @input="(value) => setValue(field, value)"
                    />
                  </slot>
                  <slot
                    v-else-if="field.type == 'captcha'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <Captcha @input="(value) => setValue(field, value)" />
                  </slot>
                  <slot
                    v-else-if="field.type == 'map'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <Map
                      :value="getValue(field)"
                      @input="(value) => setValue(field, value)"
                    />
                  </slot>

                  <slot
                    v-else-if="field.type == 'css'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <editor
                      :value="getValue(field)"
                      lang="css"
                      theme="chrome"
                      width="100%"
                      height="180"
                      @init="
                        () => {
                          require('brace/ext/language_tools');
                          require('brace/mode/css');
                          require('brace/theme/chrome');
                        }
                      "
                      @input="(value) => setValue(field, value)"
                    />
                  </slot>
                  <slot
                    v-else-if="field.type == 'javascript'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <editor
                      :value="getValue(field)"
                      lang="javascript"
                      theme="chrome"
                      width="100%"
                      height="180"
                      @init="
                        () => {
                          require('brace/ext/language_tools');
                          require('brace/mode/javascript');
                          require('brace/theme/chrome');
                        }
                      "
                      @input="(value) => setValue(field, value)"
                    />
                  </slot>

                  <slot
                    v-else-if="field.type == 'rich'"
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <div v-if="readyToShow">
                      <RichEditor
                        :value="getValue(field)"
                        @input="(value) => setValue(field, value)"
                      />
                    </div>
                  </slot>

                  <slot v-else-if="field.type == 'money'">
                    <NumberPicker
                      :field="field"
                      :value="getValue(field)"
                      @input="(value) => setValue(field, value)"
                    />
                  </slot>
                  <slot v-else-if="field.type == 'email'" name="email">
                    <MailInput
                      :field="field"
                      :disabled="field.disabled"
                      :value="getValue(field)"
                      :placeholder="field.placeholder || field.label"
                      @input="(value) => setValue(field, value)"
                    />
                  </slot>
                  <slot
                    v-else-if="$options.components[field.type]"
                    name="input"
                  >
                    <component
                      :is="field.type"
                      :value="getValue(field)"
                      @input="(value) => setValue(field, value)"
                    />
                  </slot>
                  <slot
                    v-else
                    name="input"
                    v-bind="{
                      getValue: getValue.bind(this, field),
                      setValue: setValue.bind(this, field),
                    }"
                  >
                    <TextInput
                      v-if="field.mask"
                      v-mask="field.mask"
                      :field="field"
                      :disabled="field.disabled"
                      :value="getValue(field)"
                      :placeholder="field.placeholder || field.label"
                      @input="(value) => setValue(field, value)"
                    />
                    <TextInput
                      v-else
                      :field="field"
                      :disabled="field.disabled"
                      :value="getValue(field)"
                      :placeholder="field.placeholder || field.label"
                      @input="(value) => setValue(field, value)"
                    />
                  </slot>
                </Errors>
              </div>
            </div>
          </ValidationProvider>
        </div>
        <slot name="default" v-bind="{ parsedFields, valid }" />

        <slot
          v-if="api"
          name="submit"
          v-bind="{ valid, submit: send.bind(this) }"
        >
          <v-sheet height="80" class="text-right px-1" color="transparent">
            <v-scroll-x-transition>
              <v-sheet v-show="!valid" class="py-8" color="transparent">
                Aún hay campos sin completar
              </v-sheet>
            </v-scroll-x-transition>

            <v-slide-y-transition>
              <v-btn
                v-show="valid"
                :loading="loading"
                fixed
                x-large
                bottom
                right
                fab
                dark
                color="blue"
                @click="send()"
              >
                <v-icon>mdi-check-bold</v-icon>
              </v-btn>
            </v-slide-y-transition>
          </v-sheet>
        </slot>
        <slot
          name="append"
          v-bind="{ parsedFields, valid, submit: send.bind(this) }"
        />
      </ValidationObserver>
    </div>
  </client-only>
</template>

<script>
import path from "path";
import uniqid from "uniqid";
import qs from "qs";
import filesize from "filesize";
import lodash from "lodash";
import moment from "moment";
import VueRecaptcha from "vue-recaptcha";
import Files from "./Files";
import Map from "./Map";
import RichEditor from "./RichEditor";
import DateTimeRange from "./DateTimeRange";
import DateTime from "./DateTime";

const isProduction = process.env.NODE_ENV === "production";
const customParser = require("socket.io-msgpack-parser");
const { mask } = require("vue-the-mask");

let currentApp;

const feathers = require("@feathersjs/feathers");
const socketio = require("@feathersjs/socketio-client");
const io = require("socket.io-client");
const fetchCache = [];
moment.locale("es");
const Captcha = {
  components: { VueRecaptcha },
  methods: {
    verify(response) {
      this.$emit("input", response);
    },
  },
  render() {
    return (
      <vue-recaptcha
        {...{ on: { verify: (response) => this.verify(response) } }}
        loadRecaptchaScript={true}
        sitekey="6Lfwz00UAAAAAKWuDVDNW10gs2oNARo39XpWZetz"
      ></vue-recaptcha>
    );
  },
};

const defaults = (type) => {
  const obj = {
    name: "_", // aux
    disabled: false, // disabled
    label: undefined, // label
    placeholder: "", // placehloder
    rules: "required", // vee-validate rules
    hint: undefined, // helper text
    type: "text", // text, dateTimeRange, integer, username, select-ajax, switch
    hidden: false, // ignore input
    omit: false, // omit value on post
    value: undefined, // actual value / v-model
    mask: false, // v-mask
    attrs: {}, // vuetify input attr
    counter: false,

    options: {
      values: [], // predefined values
      cachedValues: [], // aux to cache
      max: 100000, // max number/money value
      min: 0, // min number/money value
      value: "value", // element value example: FirstName
      key: "key", // element key, example: _id
      api: "", // feathers js api model name
      searchQuery: "", // api search /api/users?name=
    },
  };
  if (type === "checkbox") {
    obj.value = null;
  }

  return obj;
};
const fixPopulatedObject = function (el) {
  const isArray = function (a) {
    // https://stackoverflow.com/a/16608074/3108846
    return Array.isArray(a);
  };

  if (isArray(el)) {
    el = el.map((a) => {
      return fixPopulatedObject(a);
    });
  }

  const isObject = function (a) {
    // https://stackoverflow.com/a/16608074/3108846
    return !!a && a.constructor === Object;
  };

  if (isObject(el)) {
    return el._id;
  } else {
    return el;
  }
};
const SelectInput = {
  props: {
    combobox: { type: Boolean, default: false },
    value: { type: [Array, Object, String] },
    field: { type: Object, default: () => ({}) },
  },
  methods: {
    remove(index) {
      this.value.splice(index, 1);
      this.$emit("change", this.value);
    },
    mongoosePopulatedObjectToString(element) {
      return fixPopulatedObject(element);
    },
  },
  render(h) {
    let { attrs, listeners } = {
      attrs: this.$attrs,
      listeners: this.$listeners,
    };

    attrs = {
      multiple: false,
      autocomplete: "new-password",
      "item-cache": true,
      // clearable: true,
      flat: true,
      chips: true,
      "append-icon": "", // 'mdi-chevron-down'
      // "deletable-chips": true,
      rounded: true,
      disabled: this.field.disabled,
      solo: true,
      hint: this.field.hint,
      "hide-details": !this.field.hint,
      "persistent-hint": true,
      "clear-icon": "mdi-backspace-outline",
      id: uniqid(),

      value: this.mongoosePopulatedObjectToString(this.value),

      placeholder: this.field.placeholder,
      label: this.field.label || this.field.placeholder,
      ...attrs,
    };
    listeners = {
      ...listeners,
      keydown: (event) => {
        event.keyCode === 32 && event.stopPropagation();
      },
    };
    const dataTemplate = (data) => {
      return <div class="small">{data.item}</div>;
    };
    const selectionTemplate = (data) => {
      if (attrs.multiple === false) {
        return data.item;
      } else {
        return (
          (data.index <= 9 && (
            <v-chip
              color="primary"
              dark
              class="py-2"
              style="max-width:240px;height:auto;white-space:break-spaces"
              key={JSON.stringify(data.item)}
              {...data.attrs}
              class="small"
              close
              input-value={data.selected}
              disabled={data.disabled}
              {...{
                on: {
                  "click:close": () => {
                    this.remove(data.index);
                  },
                },
              }}
            >
              {this._.truncate(data.item.text || data.item, { length: 40 })}
            </v-chip>
          )) ||
          (data.index === 10 && (
            <div class="px-2 py-4">(y {data.parent.value.length - 10} más)</div>
          )) ||
          ""
        );
      }
    };
    return this.combobox ? (
      <v-combobox
        {...{ directives: [{ name: "ripple" }] }}
        {...{ attrs }}
        {...{ on: listeners }}
        scopedSlots={{ item: dataTemplate, selection: selectionTemplate }}
      />
    ) : (
      <v-autocomplete
        {...{ directives: [{ name: "ripple" }] }}
        {...{ attrs }}
        {...{ on: listeners }}
        scopedSlots={{ item: dataTemplate, selection: selectionTemplate }}
      />
    );
  },
};
const MailInput = {
  props: {
    value: { type: String, default: "" },
    field: { type: Object, default: () => ({}) },
  },
  methods: {
    setter(text, part) {
      text = (text || "").replace("@", "");
      const value = String(this.value || "@").split("@");
      let result;
      if (part === "BEFORE") {
        result = text + "@" + (value[1] || "");
      }
      if (part === "AFTER") {
        result = (value[0] || "") + "@" + text;
      }
      this.$emit("input", result);
    },
    clear() {
      this.$nextTick(() => {
        this.$emit("input", "");
      });
    },
    getter(part) {
      const value = String(this.value || "@").split("@");
      if (part === "BEFORE") {
        return value[0] || "";
      }
      if (part === "AFTER") {
        return value[1] || "";
      }
    },
  },
  render(h) {
    const { attrs, listeners } = {
      attrs: this.$attrs,
      listeners: this.$listeners,
    };
    attrs.field = this._.omit(this.field, "hint");
    delete listeners.input;
    return (
      <div>
        <v-row no-gutters>
          <v-col>
            <TextInput
              class="center-align-input"
              onInput={(a) => {
                this.setter(a, "BEFORE");
              }}
              value={this.getter("BEFORE")}
              {...{ attrs: { ...attrs, clearable: false } }}
              {...{ on: listeners }}
              placeholder="mr.smith"
            />
          </v-col>
          <v-col cols="auto" class="align-self-center">
            <v-icon>mdi-at</v-icon>
          </v-col>
          <v-col>
            <SelectInput
              {...{
                on: {
                  ...listeners,
                  "click:clear": () => {
                    this.clear();
                  },
                },
              }}
              value={this.getter("AFTER")}
              append-icon={""}
              return-object={false}
              combobox
              chips={false}
              multiple={false}
              onInput={(a) => {
                this.setter(a, "AFTER");
              }}
              {...{ attrs }}
              placeholder="email.com"
              items={[
                "gmail.com",
                "hotmail.com",
                "outlook.com",
                "yahoo.com",
                "aol.com",
                "ymail.com",
              ].map((a) => ({ value: a, text: a }))}
            />
          </v-col>
        </v-row>
        {this.field.hint && (
          <div class="v-messages theme--light mt-5">
            <div class="v-messages__wrapper">
              <div class="v-messages__message">{this.field.hint}</div>
            </div>
          </div>
        )}
      </div>
    );
  },
};

const TextInput = {
  props: {
    value: { type: [String, Number] },
    field: { type: Object, default: () => ({}) },
    textarea: { type: Boolean, default: false },
  },
  mounted() {
    if (this.$refs.textField) {
      this.$refs.textField.$el.querySelector("input").autocapitalize = "none";
    }
  },
  render(h) {
    let { attrs, listeners } = {
      attrs: this.$attrs,
      listeners: this.$listeners,
    };
    attrs = {
      color: "secondary",
      clearable: true,
      flat: true,
      "clear-icon": "mdi-backspace-outline",
      id: uniqid(),
      placeholder: this.field.placeholder,
      counter: this.field.counter,
      // label: this.field.label || this.field.placeholder,
      disabled: this.field.disabled,
      value: this.value,
      hint: this.field.hint,
      rounded: true,
      "hide-details": !(this.field.hint || this.field.counter),
      "persistent-hint": true,
      autocomplete: "new-password",
      solo: true,
      ...attrs,
      ...this.field.attrs,
    };
    listeners = {
      ...listeners,
      keydown: (event) => {
        event.keyCode === 32 && event.stopPropagation();
      },
      focus: () => {
        if (this.autoScroll) {
          this.$vuetify.goTo(this, { offset: 150 });
        }
      },
    };
    return this.textarea ? (
      <v-textarea
        auto-grow
        {...{ directives: [{ name: "ripple" }] }}
        {...{ attrs }}
        {...{ on: listeners }}
        clearable={false}
      />
    ) : (
      <v-text-field
        ref="textField"
        {...{ directives: [{ name: "ripple" }] }}
        {...{ attrs }}
        {...{ on: listeners }}
      />
    );
  },
};
const NumberPicker = {
  components: { TextInput },
  props: {
    field: {
      type: Object,
    },
    value: {
      type: [Number, String],
    },
  },
  methods: {
    refreshHTML() {
      this.$refs.selector.getElementsByTagName("input")[0].value = this.value;
    },
    setValue(value) {
      const newValue =
        Math.min(
          Math.max(Number(value), Number(this.field.options.min)),
          this.field.options.max || Number(value)
        ) || 0;
      this.$emit("input", newValue);
    },
  },
  render(h) {
    return (
      <v-row ref="selector" class="no-gutters">
        <v-col cols="auto" class="align-self-top pt-2">
          <v-btn
            disabled={this.field.disabled}
            icon
            onClick={() => this.setValue(Number(this.value) - 1)}
          >
            <v-icon>mdi-minus-circle-outline</v-icon>
          </v-btn>
        </v-col>
        <v-col cols>
          <TextInput
            style="width:100%"
            class="center-align-input"
            type="number"
            value={String(this.value)}
            field={this.field}
            onInput={(value) => this.setValue(value)}
            onBlur={() => this.refreshHTML()}
          />
        </v-col>
        <v-col cols="auto" class="align-self-top pt-2">
          <v-btn
            disabled={this.field.disabled}
            icon
            onClick={() => this.setValue(Number(this.value) + 1)}
          >
            <v-icon>mdi-plus-circle-outline</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    );
  },
};

const Errors = {
  components: {},
  props: {
    validationProvider: undefined,
    field: { type: Object },
  },

  render(h) {
    // const { valid, errors, changed, required } = this.validationProvider
    const { errors } = this.validationProvider;
    // https://vee-validate.logaretm.com/v3/guide/state.html#flags
    return (
      <div>
        <div style="min-width:250px">
          {this.$scopedSlots.default && this.$scopedSlots.default()}
        </div>
        <div
          cols="auto"
          style="color: #da3737; background-image: linear-gradient(-45deg, #e51ec6, red); -webkit-background-clip: text; -webkit-text-fill-color: transparent;"
        >
          <span>{errors.join(" , ")} </span>
        </div>
      </div>
    );
  },
};

const logoutSocket = () => {
  return new Promise((resolve) => {
    if (!currentApp) {
      resolve();
    }
    currentApp.removeAllListeners();
    return currentApp.authentication
      .reset()
      .then(resolve)
      .catch(() => {});
  });
};

const loginSocket = async ({ accessToken, app }) => {
  if (accessToken) {
    await (app || currentApp).authentication.setAccessToken(accessToken);
    await (app || currentApp).authentication
      .reAuthenticate(true)
      .catch(() => {});
  }
  return Promise.resolve(app || currentApp);
};
const refreshUser = (context) => {
  context.$axios.$get(`/users/${context.$ls.get("user._id")}`).then((data) => {
    context.$store.commit("localStorage/update", {
      ...context.$ls.get(),
      user: data,
    });
  });
};
const loginAxios = (context, data) => {
  return new Promise((resolve) => {
    context.$store.commit("localStorage/update", data);
    context.$axios.defaults.headers.common = {
      authorization: `Bearer ${data.accessToken}`,
    };
    resolve();
  });
};
const login = async (context, data) => {
  await loginAxios(context, data).catch((e) => {});
  await loginSocket({ accessToken: data.accessToken }).catch((e) => {});
};
const logout = async (context) => {
  await logoutSocket(context);
  await logoutAxios(context);
};
const logoutAxios = (context) => {
  context.$store.commit("localStorage/delete", "accessToken");
  context.$store.commit("localStorage/delete", "user");
  context.$axios.defaults.headers.common = undefined;
  return Promise.resolve();
};
const configureAxios = (context) => {
  if (!process.env.apiURL) {
    return;
  }
  const { origin } = new URL(
    process.env.apiURL ? process.env.apiURL : location.href
  );

  context.$axios.defaults.baseURL = origin;
  context.$axios.defaults.headers = {
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
    Expires: "0",
  };

  if (context.$ls.get("accessToken")) {
    // todo, test with ssr
    context.$axios.defaults.headers.common = {
      authorization: `Bearer ${context.$store.state.localStorage.object.accessToken}`,
    };
  }
};
const configureSocket = (context) => {
  const addFunctionalityToAutomaticallyDeleteListeningWhenTheComponentIsDestroyed = (
    app
  ) => {
    return {
      service: (service) => {
        const wrapper = app.service(service);
        const on = (ev, fx) => {
          if (typeof context !== "undefined") {
            context.$once("hook:beforeDestroy", () => {
              app.service(service).removeListener(ev, fx);
            });
          }

          return app.service(service).on(ev, fx);
        };
        const find = (ev, fx) => {
          return app.service(service).find(ev, fx);
        };
        const create = (ev, fx) => {
          return app.service(service).create(ev, fx);
        };
        const patch = (ev, fx) => {
          return app.service(service).patch(ev, fx);
        };
        const remove = (ev, fx) => {
          return app.service(service).remove(ev, fx);
        };

        const get = (ev, fx) => {
          return app.service(service).get(ev, fx);
        };

        const update = (ev, fx) => {
          return app.service(service).update(ev, fx);
        };
        return { wrapper, on, get, create, update, patch, remove, find };
      },
    };
  };
  if (!context._isVue) {
    return Promise.reject(new Error("Invalid context"));
  } else if (!process.env.apiURL) {
    return Promise.reject(new Error("Api url not defined"));
  } else if (process.server) {
    return Promise.reject(
      new Error(
        "The socket should not work from the server, only from the client browser"
      )
    );
  } else if (currentApp) {
    return Promise.resolve(currentApp).then((a) =>
      addFunctionalityToAutomaticallyDeleteListeningWhenTheComponentIsDestroyed(
        a
      )
    );
  } else {
    const { host, pathname, protocol } = new URL(process.env.apiURL);
    const socket = io(protocol + "//" + host, {
      path: path.join(pathname, "/wss"),
      transports: ["websocket"],
      parser: isProduction ? customParser : undefined,
    });
    const auth = require("@feathersjs/authentication-client");

    class MyAuthenticationClient extends auth.AuthenticationClient {}

    const app = feathers();
    app.configure(
      socketio(socket, {
        timeout: 20000,
      })
    );
    app.configure(auth({ Authentication: MyAuthenticationClient }));

    currentApp = loginSocket({
      accessToken: context.$store.state.localStorage.object.accessToken,
      app,
    }).then((app) => {
      window.s = currentApp = app;
      return Promise.resolve(app);
    });

    return currentApp.then((app) =>
      addFunctionalityToAutomaticallyDeleteListeningWhenTheComponentIsDestroyed(
        app
      )
    );
  }
};

const password = {
  components: {
    TextInput,
  },
  props: {
    value: { type: String },
    field: { type: Object },
  },
  data() {
    return {
      showPassword: false,
    };
  },
  mounted() {
    const $el = this.$refs.password.$el.getElementsByTagName("input")[0];
    const fx = () => {
      const input = this.$el.querySelector("input");
      input.selectionStart = input.selectionEnd;
    };
    $el.addEventListener("select", fx, false);

    $el.addEventListener("mousemove", fx, false);

    $el.autocorrect = "off";
    $el.autocomplete = "off";
  },
  watch: {
    showPassword() {
      if (this.showPassword) {
        this.$dialog.message.info(
          "Tu clave será encriptada para siempre una vez enviada al servidor, solo por ahora puedes verla",
          { icon: "mdi-lock" }
        );
      }
    },
  },
  methods: {
    click() {
      if (this.value) {
        this.$nextTick(() => {
          this.$emit("input", "");
        });
      }
    },
  },
  render(h) {
    return (
      <span
        onClick={() => this.click()}
        class={this.value && !this.showPassword ? "passwordin" : ""}
      >
        {!this.showPassword && (
          <span style="z-index: 1;  letter-spacing:-2px;   line-height: 48px;position: absolute; margin: 0 20px; font-size: 33px; padding: 0;">
            {"•".repeat(this.value.length).slice(0, 25)}
          </span>
        )}
        <TextInput
          {...{
            on: {
              "click:append": () => {
                this.showPassword = !this.showPassword;
              },
            },
          }}
          append-icon={this.showPassword ? "mdi-eye" : "mdi-eye-off"}
          maxlength="400"
          field={this.field}
          ref="password"
          value={this.value}
          onInput={(v) => this.$emit("input", v)}
          placeholder={this.field.placeholder || this.field.label}
        />
      </span>
    );
  },
};

const editor = (process.client && require("vue2-ace-editor")) || (() => {});

export {
  refreshUser,
  TextInput,
  SelectInput,
  logout,
  logoutAxios,
  logoutSocket,
  configureSocket,
  configureAxios,
  login,
  loginAxios,
  loginSocket,
};
export default {
  directives: {
    mask,
  },
  components: {
    Map,
    RichEditor,
    editor,
    MailInput,
    SelectInput,
    TextInput,
    NumberPicker,
    Captcha,
    password,
    DateTimeRange,
    DateTime,
    Files,
    Errors,
  },
  props: {
    autoScroll: { type: Boolean, default: true },
    saveAsNew: {
      type: Boolean,
      default: false,
    },
    fields: {
      type: Array,
      default: () => [],
    },
    inline: {
      type: Boolean,
      default: false,
    },
    additional: {
      type: Object,
      default: () => ({}),
    },
    multiple: {
      type: Boolean,
      default: true,
    },
    value: {
      type: [Object, String, Number, undefined],
      default: undefined,
    },
    api: {
      type: String,
      default: undefined,
    },
    id: {
      type: String,
      default: undefined,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      uniqid,
      readyToShow: false,
      moment,
      filesize,
      lodash,
      preloading: false,
      loading: false,
      internalValue: {},
      parsedFields: [],
    };
  },
  watch: {
    value: {
      handler(value) {
        if (value) {
          this.internalValue = value;
        }
      },
      immediate: true,
    },
    fields: {
      handler(newValue, oldValue) {
        if (!lodash.isEqual(newValue, oldValue)) {
          // this.log(JSON.stringify(newValue), JSON.stringify(oldValue))

          const parsedFields = [];
          for (const field of newValue) {
            if (!field.hidden) {
              parsedFields.push({
                ...lodash.merge(defaults(field.type), field),
              });
            }
          }
          this.parsedFields = parsedFields;
          this.initializeFieldValues();
        }
      },
      immediate: true,
    },
  },

  async mounted() {
    if (this.id) {
      // recover data from server
      await this.recoverOriginalDataFromServer();
    }

    this.configureSocket(this);
    this.initializeFieldValues();
    this.$nextTick(() => {
      setTimeout(() => {
        this.readyToShow = true;
      }, 200);
    });
  },
  methods: {
    enter() {
      const valid = this.$refs.observer.$data.flags.valid;
      if (valid) {
        this.send();
      }
    },
    recoverOriginalDataFromServer() {
      this.preloading = true;
      return this.$fevu.configureSocket(this).then((socket) => {
        socket
          .service(this.api)
          .get(this.id)
          .then((a) => {
            this.preloading = false;
            if (this.saveAsNew) {
              delete a._id;
            }
            this.update(a);
            this.$nextTick(() => {
              if (this.$refs.observer) {
                this.$refs.observer.validate();
              }
            });
          });
      });
    },
    configureSocket,
    getValue({ name }) {
      if (this.multiple) {
        return this.internalValue[name];
      } else {
        return this.internalValue;
      }
    },
    setValue({ name }, value, extra) {
      if (this.multiple) {
        this.internalValue[name] = value;
        this.$emit(name, ...[value, extra]);
      } else {
        this.$emit("input", value);
        this.$emit(name, ...[value, extra]);
        this.internalValue = value;
      }
      // if (this.$refs.observer) {
      //   this.$refs.observer.validate()
      // }
    },
    setCache(field, value) {
      field.options.cachedValues = [...value];
    },
    getCache(field) {
      return field.options.cachedValues;
    },

    log(aa, bb, cc, dd, ee, ff) {},
    update(newValue) {
      this.$emit("input", newValue);
      this.internalValue = newValue;
    },
    initializeFieldValues() {
      const uiFields = this.internalValue;
      // Set default values
      for (const field of this.parsedFields) {
        if (this.getValue(field) !== undefined) {
          uiFields[field.name] = this.getValue(field);
        } else {
          uiFields[field.name] = field.value;
        }
        if (field.type.match("ajax")) {
          this.setSearchValueAndSaveCache(field);
        }
      }
      // Update values
      this.update({
        ...uiFields,
      });
    },
    async setSearchValueAndSaveCache(field, newValue) {
      const definingANewValue = arguments.length === 2;
      if (!definingANewValue) {
        newValue = this.getValue(field);
      }
      if (newValue === undefined) {
        return;
      }
      const values = (Array.isArray(newValue) && newValue) || [newValue];

      const cacheIntent = lodash.filter(
        lodash.unionBy(
          lodash.cloneDeep(field.options.values),
          lodash.cloneDeep(this.getCache(field)),
          "_id"
        ),
        (a) =>
          lodash.find(values, { [field.options.key]: a[field.options.key] })
      );

      if (cacheIntent.length === values.length) {
        this.setCache(field, cacheIntent);
      } else {
        const allInputValuesInArray = [];
        for (const value of values) {
          allInputValuesInArray.push({
            [field.options.key]: fixPopulatedObject(value),
          });
        }
        await this.searchDB(field.options.api, allInputValuesInArray).then(
          (results) => {
            this.setCache(field, results.data);
          }
        );
      }
      if (definingANewValue) {
        this.setValue(field, newValue, this.getCache(field));
      }
    },
    searchDB(api, query) {
      // query
      api = api.replace("/", "");
      if (Array.isArray(query)) {
        query = qs.stringify({ $or: query }, { arrayFormat: "brackets" });
      } else if (typeof query === "object") {
        query = qs.stringify(query);
      }

      const url = api + "?" + query;
      if (
        fetchCache[url] === undefined ||
        fetchCache[url].time < +new Date() - 4 * 1000
      ) {
        let result;
        if (currentApp) {
          result = currentApp
            .service(api)
            .find({ query: qs.parse(query) })
            .catch(() => {
              return this.$axios
                .$get("/" + url)
                .then((data) => {
                  fetchCache[url] = { data };
                  return data;
                })
                .catch(() => ({ data: [] }));
            });
        } else {
          result = this.$axios
            .$get("/" + url)
            .then((data) => {
              fetchCache[url] = { data };
              return data;
            })
            .catch(() => ({ data: [] }));
        }
        fetchCache[url] = {
          IncompleteAjaxAsEvidence: result,
          time: new Date(),
        };
        return result;
      } else if (fetchCache[url].IncompleteAjaxAsEvidence) {
        return fetchCache[url].IncompleteAjaxAsEvidence;
      } else {
        return Promise.resolve(fetchCache[url].data);
      }
    },
    triggerAjaxSearch(field, value) {
      this.searchDB(
        field.options.api,
        `${field.options.searchQuery}=${encodeURIComponent(value)}`
      ).then((results) => {
        field.options.values = results.data;
      });
    },
    clearForm() {
      if (this.id) {
        return;
      }
      const uiFields = this.internalValue;
      for (const field of this.parsedFields) {
        uiFields[field.name] = undefined;
      }
      this.update({
        ...uiFields,
      });
    },
    send() {
      const api = (arguments[0] && arguments[0].api) || this.api;

      if (this.loading === false && api) {
        this.loading = true;

        const method = (this.id && !this.saveAsNew && "$patch") || "$post";
        const url =
          "/" + api + "/" + (this.saveAsNew ? "" : this.id ? this.id : "");
        let payload = { ...this.additional, ...this.internalValue };
        payload = lodash.omit(
          payload,
          this.parsedFields.filter((a) => a.omit).map((a) => a.name)
        );
        return this.$axios[method](url, payload)
          .then((res) => {
            this.initializeFieldValues();
            this.$emit("success", res);
            setTimeout(() => {
              this.loading = false;
            }, 100);
            this.$dialog.message.success("Realizado con éxito");

            this.clearForm();
            this.$refs.observer.reset();
          })
          .catch((e) => {
            this.$emit("fail", e);

            this.$dialog.message.error(
              `Ha ocurrido el siguiente error: ${this._.get(
                e,
                "response.data.message"
              )}`
            );
            setTimeout(() => {
              this.loading = false;
            }, 100);
            this.$refs.observer.reset();
          });
      }
      return Promise.resolve(true);
    },
  },
};
</script>
<style>
.json-form .v-input__slot {
  width: auto;
}
/* Chrome, Safari, Edge, Opera */
.json-form input::-webkit-outer-spin-button,
.json-form input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.json-form .v-input--selection-controls {
  margin-top: 0;
}
.json-form .v-input .v-input__slot {
  min-height: 48px !important;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 30px;
  cursor: pointer !important;
}
.json-form .v-input input {
  cursor: pointer;
  caret-color: red;
}
.json-form .v-input.v-input--is-focused {
  position: relative !important;
  z-index: 1;
}

/* form disabled */

.json-form .theme--light.v-input .v-input__slot {
  border-bottom: 1px solid rgba(127, 127, 127, 0.4);
  background: rgba(0, 0, 0, 0.01) !important;
  transition: all 0.3s !important;
  box-shadow: 0 0px 0px rgba(0, 0, 0, 0), 0 0px 10px rgba(0, 0, 0, 0);
}
.json-form .theme--dark.v-input .v-input__slot {
  border-bottom: 1px solid rgba(127, 127, 127, 0.4);
  background: rgba(255, 255, 255, 0.01) !important;

  transition: all 0.3s !important;
  box-shadow: 0 0px 0px rgba(255, 255, 255, 0),
    0 0px 10px rgba(255, 255, 255, 0);
}

/* hover */
.json-form .theme--light.v-input:hover .v-input__slot {
  background-color: rgba(0, 0, 0, 0.02) !important;
}
.json-form .theme--dark.v-input:hover .v-input__slot {
  background-color: rgba(255, 255, 255, 0.02) !important;
}
/* focus */
.json-form .theme--light.v-input.v-input--is-focused .v-input__slot {
  background-color: rgba(0, 0, 0, 0.02) !important;

  border-color: rgba(0, 0, 0, 0.06);
  box-shadow: 0 -30px 70px rgb(255 255 255 / 5%), 0 30px 70px rgb(0 0 0 / 10%);
}
.json-form .theme--dark.v-input.v-input--is-focused .v-input__slot {
  background-color: rgba(255, 255, 255, 0.02) !important;
  border-color: rgba(255, 255, 255, 0.06);
  box-shadow: 0 -30px 70px rgb(0 0 0 / 5%), 0 30px 70px rgb(255 255 255 / 10%);
}

/* password */
.passwordin .v-input input {
  pointer-events: none;
  transform: scale(0);
  color: transparent !important;
}
/* other fixes */
.json-form .v-input__append-inner .v-input__icon > .v-icon,
.json-form .v-input__prepend-inner .v-input__icon > .v-icon {
  margin-top: 0 !important;
}

.json-form .v-text-field.v-text-field--solo.v-input-- > .v-input__control {
  min-height: 28px !important;
}
/* form number align */

.json-form .center-align-input input {
  text-align: center;
}

.passwordin input::selection {
  background-color: transparent;
}
</style>
