<template>
  <div class="">
    <slot name="frame">
      <div
        style="
          height: 580px;
          overflow: hidden;
          position: absolute;
          width: calc(100% - 300px);
          margin-top: 50px;
        "
      >
        <iframe
          v-if="!src.match('waitpage')"
          :src="src"
          style="margin-top: -30px; width: 100%"
          :style="{ height: src.match(/miro|keynote/) ? '690px' : '630px' }"
          frameborder="0"
          crossorigin="anonymous"
          allowfullscreen
          allow="geolocation; microphone; camera"
          sandbox="allow-popups allow-same-origin allow-forms allow-scripts allow-presentation allow-top-navigation "
        ></iframe>
      </div>
    </slot>

    <iframe
      :src="link + ($vuetify.theme.isDark ? '#dark=1' : undefined)"
      frameborder="0"
      crossorigin="anonymous"
      style="width: 100%"
      allowfullscreen
      allow="geolocation; microphone; camera"
      sandbox="allow-popups allow-same-origin allow-forms allow-scripts allow-presentation allow-top-navigation "
      class="call_iframe"
    ></iframe>
    <slot></slot>
    <style>
      .back-btn {
        display: none;0
      }
    </style>
  </div>
</template>

<script>
export default {
  props: {
    src: undefined,
  },
  data() {
    return { link: "" };
  },
  mounted() {
    this.link = "https://roomprotocol.pages.dev/videocall/krqnaci3";
  },
};
</script>

<style>
.call_iframe {
  height: 630px;
  width: 100%;
}
</style>
