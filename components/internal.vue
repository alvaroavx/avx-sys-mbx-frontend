<template>
  <div class="">
    <v-row no-gutters>
      <v-col>
        <slot></slot>
      </v-col>
      <v-col cols="auto">
        <iframe
          :src="link"
          frameborder="0"
          crossorigin="anonymous"
          allowfullscreen
          allow="geolocation; microphone; camera"
          sandbox="allow-popups allow-same-origin allow-forms allow-scripts allow-presentation allow-top-navigation "
          class="call_iframe"
        ></iframe>
      </v-col>
    </v-row>

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
    this.link =
      "https://roomprotocol.pages.dev/videocall/kr39j537#name=" +
      this.$ls.get("usuario.name") +
      "&dark=" +
      (this.$vuetify.theme.dark * 1 || "");
  },
};
</script>

<style>
.call_iframe {
  width: 300px;
  height: 630px;
}
</style>
