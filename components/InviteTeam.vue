<script>
export default {
  props: {
    disableTitle: {
      type: Boolean,
      default: false,
    },
    disableMultiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showModal: false,
      actual: 0,
      personas: [],
      myTeam: "",
    };
  },
  mounted() {
    this.myTeam = this.$ls.get("usuario.team", String(Math.round(+new Date())));

    this.resetPersonas();
  },
  methods: {
    resetPersonas() {
      const result = [];
      result.push({ name: "", email: "" });
      result.push({ name: "", email: "" });
      result.push({ name: "", email: "" });
      result.push({ name: "", email: "" });
      result.push({ name: "", email: "" });

      this.personas = result;
    },
    async add() {
      await this.$axios
        .$get("/usuarios?email=" + this.personas[this.actual].email, {
          progress: false,
        })
        .then(async ({ total }) => {
          if (total) {
            this.showModal = true;
          } else if (this.personas.filter((a) => a.email).length) {
            const recipients = this.personas.filter((a) => a.email);
            for (const recipient of recipients) {
              await this.$axios.$post("/usuarios", {
                ...recipient,
                team: this.myTeam,
              });
            }
            window.$nuxt.$dialog.confirm({
              text:
                "Se ha enviado un email conteniendo la lave del nuevo usuario",
              actions: { ok: "Aceptar" },
            });
            this.$emit("sent", 1);
            this.resetPersonas();
          } else {
            window.$nuxt.$dialog.confirm({
              text: "Debe añadir al menos un email",
              actions: { ok: "Aceptar" },
            });
          }
        });
    },
  },
  render() {
    return (
      <div>
        <Modal value={this.showModal}>
          <v-row>
            <v-col>El correo ya existe</v-col>
            <v-col cols="auto">
              <BotonDiseno onclick={() => (this.showModal = false)}>
                Aceptar
              </BotonDiseno>
            </v-col>
          </v-row>
        </Modal>
        <div class="registry-right-form">
          {this.disableTitle ? "" : <p class="registry-title">Tu equipo</p>}
          {this.personas.length ? (
            <div>
              <div class="phase-blk">
                <div class="single-input-item">
                  <input
                    value={this.personas[this.actual].name}
                    onInput={(value) => {
                      this.personas[this.actual].name = value.target.value;
                    }}
                    type="tel"
                    class=""
                    placeholder="Nombre"
                  />
                </div>
              </div>
              <div class="phase-blk">
                <div class="single-input-item">
                  <input
                    value={this.personas[this.actual].email}
                    onInput={(value) => {
                      this.personas[this.actual].email = value.target.value;
                    }}
                    type="email"
                    class=""
                    placeholder="Email"
                  />
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {this.disableMultiple ? (
            ""
          ) : (
            <div class="invite-user text-left">
              {Array(4)
                .fill(1)
                .map((value, key) => {
                  return (
                    <span
                      onClick={() => {
                        this.actual = key;
                      }}
                    >
                      {this.actual === key ? (
                        <i style="color:#333" class="fas fa-user"></i>
                      ) : (
                        <i class="fas fa-user"></i>
                      )}
                    </span>
                  );
                })}
              {this.personas[this.actual] && this.personas[this.actual].name ? (
                <span style="color:#333" class="font-italic">
                  {this.personas.length && this.personas[this.actual].name}
                  <v-icon>mdi-close</v-icon>
                </span>
              ) : undefined}
            </div>
          )}{" "}
        </div>
        <div class="mt-12 row p-0 align-items-center">
          <div class="col-lg-3 col-md-4 col-sm-4">
            <div class="form-submit registry-sub mt-2">
              <BotonDiseno large onClick={() => this.add()}>
                Agregar
              </BotonDiseno>
            </div>
          </div>
        </div>
      </div>
    );
  },
};
</script>
