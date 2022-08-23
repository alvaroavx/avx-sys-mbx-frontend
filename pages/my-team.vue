<template>
  <div>
    <div>
      <div class="mbx-page">
        <div class="container h-100 position-relative">
          <v-row no-gutters="">
            <v-col cols="auto" class="pr-12">
              <p
                class="text-left text-uppercase mb-12 pt-4"
                style="font-weight: 700; font-size: 50px"
              >
                Mi Equipo
              </p>
              <InviteTeam disable-multiple disable-title @sent="loadTeam" />
            </v-col>
            <v-col>
              <div class="mbx-main-blk">
                <div style="padding-top: 90px" class="my-team-blk">
                  <div class="strategists-blk ml-n1">
                    <div class="strategist-item-blk">
                      <div class="row">
                        <div
                          v-for="(member, index) in members"
                          :key="index"
                          class="col-lg-4 col-md-4"
                        >
                          <div
                            class="stratigist-item my-team-item position-relative"
                          >
                            <div class="stratigist-thumb">
                              <img
                                :src="
                                  member.photo
                                    ? member.photo
                                    : '/assets/img/strategist.png'
                                "
                                alt=""
                              />
                            </div>
                            <p>{{ member.name || "Sin nombre" }}</p>
                            <div
                              class="strategist-select"
                              @click="remove(member)"
                            >
                              <span><i class="far fa-plus rotate-45"></i></span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
          <div class="text-center">
            <Modal :value="deleteModal">
              <!-- nombre, cargo y correo -->
              <v-row>
                <v-col class="align-self-center">
                  <div class="pa-3">
                    <div class="body-1 font-weight-light">Eliminar a</div>
                    <div class="font-weight-bold">{{ wannaDelete.name }}</div>
                  </div>
                </v-col>
                <v-col cols="auto" class="align-self-center">
                  <v-btn
                    class="text-none font-weight-bold"
                    style="
                      letter-spacing: 0;
                      border-top: 1px solid black;
                      border-bottom: 1px solid black;
                    "
                    text
                    tile
                    @click="confirmDelete"
                  >
                    Eliminar
                  </v-btn>
                </v-col>
                <v-col cols="auto" class="align-self-center">
                  <v-btn
                    class="text-none font-weight-bold"
                    style="
                      letter-spacing: 0;
                      border-top: 1px solid black;
                      border-bottom: 1px solid black;
                    "
                    text
                    tile
                    @click="deleteModal = false"
                  >
                    Cancelar
                  </v-btn>
                </v-col>
              </v-row>
            </Modal>
          </div>
        </div>
      </div>

      <!-- My team end-->

      <!-- jQuery first, then Popper.js, then Bootstrap JS -->
      <script src="assets/js/jquery.min.js"></script>
      <script src="assets/js/bootstrap.min.js"></script>
      <script src="assets/js/main.js"></script>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return { deleteModal: false, members: [{}], wannaDelete: {} };
  },
  mounted() {
    this.loadTeam();
  },
  methods: {
    loadTeam() {
      const team = this.$ls.get(
        "usuario.team",
        String(Math.round(+new Date()))
      );

      this.$axios.$get("usuarios?team=" + team).then((a) => {
        this.members = a.data;
      });
    },
    remove(wannaDelete) {
      this.wannaDelete = wannaDelete;
      this.deleteModal = true;
    },
    async confirmDelete() {
      await this.$axios.$delete("/usuarios/" + this.wannaDelete._id);
      this.loadTeam();
      this.deleteModal = false;
    },
  },
};
</script>
