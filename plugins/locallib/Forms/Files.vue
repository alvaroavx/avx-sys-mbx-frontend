<script>
import path from "path";
import filesize from "filesize";
import moment from "moment";
const mixin = {
  methods: {
    serverUpload(file) {
      return new Promise((resolve, reject) => {
        const getBase64 = (file, callback) => {
          const reader = new FileReader();
          reader.readAsDataURL(file);
          reader.onload = () => {
            callback(reader.result);
          };
          reader.onerror = (error) => {
            reject(error);
          };
        };
        getBase64(file, (fileURI) => {
          share(fileURI);
        });
        const share = (fileURI) => {
          this.$axios
            .$post("/uploads", {
              extension: path.extname(file.name),
              uri: fileURI,
            })
            .then((response) => {
              resolve(response.fileName);
            })
            .catch((err) => {
              reject(err);
            });
        };
      });
    },
  },
};
export { mixin };
export default {
  mixins: [mixin],
  props: {
    multiple: { default: true, type: Boolean },
    value: { type: Array, required: true, default: () => [] },
    field: { type: Object, default: () => ({}) },
  },
  data() {
    return {
      text: "Subir",
    };
  },
  methods: {
    remove(index) {
      // eslint-disable-next-line vue/no-mutating-props
      const newList = [...this.value];
      newList.splice(index, 1);
      this.$emit("input", newList);
    },
    handleDrop(e) {
      const dt = e.dataTransfer;
      const files = dt.files;

      for (const file of files) {
        this.newFile(file);
      }
    },
    newFile(file) {
      // const fileCategory = (file.type.split('/')[0])
      const extension = path.extname(file.name);
      const name = file.name;
      const size = file.size;
      const timestamp = moment().format();
      let actualValue = this.value;
      if (!actualValue || !actualValue.push) {
        actualValue = [];
      }
      const fileData = {
        file: undefined,
        extension,
        name,
        size,
        timestamp,
        loading: true,
      };
      if (this.multiple) {
        actualValue.push(fileData);
      } else {
        actualValue = [fileData];
      }

      this.serverUpload(file)
        .then((file) => {
          fileData.file = file;
          fileData.loading = undefined;
          this.$emit("input", actualValue);
        })
        .catch(() => {});
    },
  },
  render(h) {
    return (
      <v-input
        persistent-hint
        hide-details={!this.field.hint}
        hint={this.field.hint}
      >
        <div color="transparent" style="width:100%" class="ma-4   d-block">
          {Array.isArray(this.value) &&
            this.value.map((file, index) => {
              return (
                <v-row
                  style="border-radius:30px !important;overflow:hidden;border:1px solid rgba(127,127,127,0.2);margin-bottom:5px"
                  key={index}
                  href={file.file}
                  v-ripple
                  class="px-2"
                  three-line
                  target="_blank"
                  link
                >
                  <v-col cols="auto" class="align-self-center">
                    <v-avatar style="background:#444">
                      {(file.file &&
                        file.file.match(/\.(jpg|jpeg|png|jpeg|gif)/gi) && (
                          <v-img src={file.file} />
                        )) || (
                        <v-icon style="background:#2698e8" class="white--text">
                          mdi-file
                        </v-icon>
                      )}
                    </v-avatar>
                  </v-col>

                  <v-col>
                    <div class="font-weight-bold">
                      {this._.truncate(file.name, { length: 20 })}
                    </div>
                    <div v-show={file.loading}>Subiendo...</div>
                    <div v-show={!file.loading}>
                      <div class="caption">
                        {file.size && filesize(file.size)}
                      </div>
                      <div class="caption">
                        {moment(file.timestamp).fromNow()}
                      </div>
                    </div>
                  </v-col>
                  <v-col cols="auto" class="px-1 align-self-center">
                    {this.field.disabled === false && (
                      <v-btn
                        icon
                        onClick={(e) => {
                          e.preventDefault();
                          this.remove(index);
                        }}
                      >
                        <v-icon>mdi-close</v-icon>
                      </v-btn>
                    )}
                  </v-col>
                </v-row>
              );
            })}
          <v-sheet
            class="pa-3"
            style="border:1px solid rgba(127,127,127,0.2);border-radius:30px !important;overflow:hidden;"
            v-ripple
            {...{
              on: {
                dragenter: (e) => {
                  e.preventDefault();
                },
                dragover: (e) => {
                  this.text = "Suelta aquí";
                  e.preventDefault();
                },
                dragleave: (e) => {
                  e.preventDefault();
                },
                drop: (e) => {
                  this.text = "Subir";
                  this.handleDrop(e);
                  e.preventDefault();
                },
              },
            }}
            onClick={() => {
              this.$refs.input.click();
            }}
          >
            <v-row class="px-2" v-show={this.field.disabled === false} link>
              <v-col cols="auto">
                <v-icon>mdi-cloud-upload</v-icon>
              </v-col>
              <v-col>{this.text}</v-col>
            </v-row>
          </v-sheet>
        </div>
        <input
          ref="input"
          style="width:30px;height:30px;visibility:hidden;position:absolute;pointer-events:none"
          type="file"
          onChange={(ev) => {
            this.newFile(ev.target.files[0]);
            ev.target.value = "";
          }}
        />
      </v-input>
    );
  },
};
</script>
