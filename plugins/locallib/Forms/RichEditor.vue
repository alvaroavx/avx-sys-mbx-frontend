<template>
  <CKEditor
    ref="richeditor"
    :editor="ClassicEditor"
    :value="value"
    :config="editorConfig"
    @input="(value) => $emit('input', value)"
  />
</template>

<script>
import { mixin } from "./Files";
let serverUpload;
const CKEditor =
  (process.client && require("@ckeditor/ckeditor5-vue").component) ||
  (() => {});

export default {
  components: {
    CKEditor,
  },
  mixins: [mixin],

  props: {
    value: { type: String, default: "" },
  },
  data() {
    return {
      editorConfig: {
        extraPlugins: [this.MyCustomUploadAdapterPlugin],
      },
      ClassicEditor: require("@ckeditor/ckeditor5-build-classic"),
    };
  },
  mounted() {
    serverUpload = this.serverUpload;
    this.$emit("input", this.value);
  },

  methods: {
    MyCustomUploadAdapterPlugin(editor) {
      class MyUploadAdapter {
        constructor({ loader }) {
          // The file loader instance to use during the upload.
          this.loader = loader;
        }

        // Starts the upload process.
        upload() {
          return this.loader.file.then(
            (file) =>
              new Promise((resolve, reject) => {
                serverUpload(file)
                  .then(({ file }) => {
                    resolve(file);
                  })
                  .catch(reject);
              })
          );
        }
      }
      editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
        // Configure the URL to the upload script in your back-end here!

        return new MyUploadAdapter({ loader });
      };
    },
  },
};
</script>

<style></style>
