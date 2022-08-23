<template>
  <div class="text-center">
    <v-sheet
      v-if="value"
      :elevation="12"
      class="d-inline-block text-left modalse"
      width="400"
    >
      <!-- nombre, cargo y correo -->
      <slot />
    </v-sheet>
  </div>
</template>

<script>
export default {
  props: {
    value: { type: Boolean, default: false },
  },
};
</script>

<style>
.modalse {
  width: 400px;
  position: fixed;
  bottom: 70px;
  left: 50%;
  z-index: 2222;
  margin-left: -200px;
  padding: 20px 20px;
}
</style>
