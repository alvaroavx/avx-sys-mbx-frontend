<template>
  <div>
    <v-img
      v-if="value"
      max-height="200"
      max-width="200"
      :src="value"
      width="100%"
    />
    <input ref="file" type="file" style="display: none" @change="subirImagen" />
    <v-btn-toggle :value="-1">
      <div @click="clickImage">
        <slot><v-btn>Subir imagen</v-btn></slot>
      </div>
    </v-btn-toggle>
  </div>
</template>
<script>
const imgur = require("imgur-file-upload");

export default {
  props: {
    value: { type: String },
  },
  methods: {
    upload(img) {
      const token = "9a55a3919977065";
      // intilize client id
      imgur.setClientId(token);

      // uploading image file
      return imgur.uploadImgur(img);
    },
    clickImage() {
      this.$refs.file.click();
    },
    subirImagen() {
      const file = this.$refs.file.files[0];
      this.upload(file).then((a) => {
        this.$emit("input", a.url);
      });
    },
  },
};
</script>
