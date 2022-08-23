<template>
  <div
    ref="el"
    v-intersect="{
      handler: onIntersect,
      options: {
        threshold: [0, 0.5, 1.0],
      },
    }"
    :style="style"
  >
    <slot v-if="isIntersecting"></slot>
  </div>
</template>

<script>
export default {
  data: () => ({
    isIntersecting: false,
    style: {},
  }),

  methods: {
    onIntersect(entries, observer) {
      // More information about these options
      // is located here: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
      const newStatus = entries[0].isIntersecting;

      if (this.$refs.el)
        if (this.isIntersecting === true && newStatus === false) {
          this.style.width = this.$refs.el.style.width;
          this.style.height = this.$refs.el.style.height;
        }
      this.isIntersecting = newStatus;
    },
  },
};
</script>

<style></style>
