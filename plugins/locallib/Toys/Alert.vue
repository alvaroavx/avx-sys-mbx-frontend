<template>
  <v-overlay style="backdrop-filter: blur(10px)" color="black">
    <v-sheet
      style="background: rgba(255, 255, 255, 0.9)"
      light
      class="rounded-xl pt-5 overflow-hidden"
      width="280"
    >
      <div class="text-center px-6 pb-4">
        <div class="title">{{ title }}</div>
        <div class="font-weight-light body-2">
          {{ text }}
        </div>
      </div>
      <div v-for="(action, key) in actions" :key="key">
        <v-divider></v-divider>
        <v-btn
          :color="action.color || 'blue'"
          class="py-5"
          block
          solo
          text
          tile
          @click="emit(key)"
        >
          {{ action.text || action }}
        </v-btn>
      </div>
    </v-sheet>
  </v-overlay>
</template>

<script>
export default {
  props: {
    actions: {
      type: [Array, Object],
      default: () => ({}),
    },
    text: {
      type: String,
      default: "",
    },
    title: {
      type: String,
      default: "",
    },
  },
  methods: {
    emit(value) {
      value = value === "true" ? true : value;
      value = value === "false" ? false : value;
      this.$emit("submit", value);
    },
  },
};
</script>

<style></style>
