<template>
  <div class="">
    <slot name="frame">
      <div
        style="
          height: 580px;
          overflow: hidden;
          position: absolute;

          margin-top: 50px;
        "
        :style="{ width: conference ? 'calc(100% - 300px)' : '100%' }"
      >
        <iframe
          v-if="!url.match('waitpage')"
          :src="url"
          style="margin-top: -30px; width: 100%"
          :style="{ height: url.match(/miro|keynote/) ? '690px' : '630px' }"
          frameborder="0"
          crossorigin="anonymous"
          allowfullscreen
          allow="geolocation; microphone; camera"
          sandbox="allow-popups allow-same-origin allow-forms allow-scripts allow-presentation allow-top-navigation "
        ></iframe>
      </div>
    </slot>
    <div class="call_iframe">
      <iframe
        v-if="conference"
        class="call_iframe"
        :src="link + ($vuetify.theme.isDark ? '#dark=1' : undefined)"
        frameborder="0"
        crossorigin="anonymous"
        style="width: 100%"
        allowfullscreen
        allow="geolocation; microphone; camera"
        sandbox="allow-popups allow-same-origin allow-forms allow-scripts allow-presentation allow-top-navigation "
      ></iframe>
    </div>
    <v-container style="max-width: 95%; margin: 0 auto" class="pt-6">
      <slot></slot>
    </v-container>
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
    url: { type: String, default: "" },
    conference: { type: Boolean, default: true },
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
