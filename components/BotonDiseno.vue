<template>
  <v-btn
    text
    tile
    class="font-weight-bold align-middle align-center btn-mbx text-none"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot />
  </v-btn>
</template>

<script>
export default {
  inheritAttrs: false,
};
</script>

<style>
.btn-mbx {
  border-top: 1px solid;
  border-bottom: 1px solid;
  letter-spacing: 0;
}

.btn-mbx.no-border {
  border-width: 0px;
  letter-spacing: 0;
  padding: 0;
  margin: 0 -15px;
}
</style>
