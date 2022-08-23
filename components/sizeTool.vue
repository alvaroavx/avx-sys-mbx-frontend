<template>
  <div ref="el">
    <slot
      v-bind="{ height, width, screenHeight, screenWidth, children, window }"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: 300,
      width: 300,
      screenHeight: 300,
      screenWidth: 300,
      children: {},
      window: this.$vuetify.breakpoint,
    };
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
    window.removeEventListener("focus", this.resize);
  },
  mounted() {
    window.addEventListener("resize", this.resize);
    window.addEventListener("focus", this.resize);
    this.$nextTick(this.resize);
  },

  methods: {
    resize() {
      this.height = this.$refs.el.offsetHeight;
      this.width = this.$refs.el.offsetWidth;
      this.screenHeight = document.documentElement.clientHeight;
      this.screenWidth = document.documentElement.clientWidth;
      const breakpoints = ["xs", "sm", "md", "lg", "xl"];
      const obj = {};
      let candidate;
      for (const Index in breakpoints) {
        const Key = breakpoints[Index];
        const previousBP =
          this.$vuetify.breakpoint.thresholds[breakpoints[Index - 1]] || 0;
        const nextBP =
          this.$vuetify.breakpoint.thresholds[breakpoints[Index]] || Infinity;

        obj[Key] = false;

        if (this.width >= previousBP) {
          candidate = Key;
        }

        obj[Key + "AndDown"] = this.width <= nextBP;
        obj[Key + "AndUp"] = this.width >= previousBP;
      }
      obj[candidate] = true;

      this.children = obj;
    },
  },
};
</script>

<style></style>
