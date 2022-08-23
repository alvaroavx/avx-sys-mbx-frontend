<template>
  <div>
    <Video>
      <v-layout>
        <v-icon> mdi-information </v-icon>
        <v-spacer></v-spacer>
        <div class="text-center">
          <BotonDiseno @click="$router.push({ path: '/control-panel' })">
            Aceptar
          </BotonDiseno>
          <div class="font-italic text--secondary caption my-2">
            Una vez finalizada esta etapa, haz clic en aceptar para pasar a la
            siguiente
          </div>
        </div>
        <v-spacer></v-spacer>
      </v-layout>
    </Video>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style></style>
