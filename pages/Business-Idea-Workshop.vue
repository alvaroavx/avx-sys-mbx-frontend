<template>
  <iframecion
    src="https://miro.com/app/live-embed/o9J_kmzKOKU=/?moveToViewport=-3553,-2980,3055,5138"
  >
    <div class="text-center">
      <BotonDiseno @click="$router.push({ path: '/control-panel' })">
        Aceptar
      </BotonDiseno>
      <div class="font-italic text--secondary caption my-2">
        Una vez finalizada esta etapa, haz clic en aceptar para pasar a la
        siguiente
      </div>
    </div>
  </iframecion>
</template>

<script>
export default {};
</script>

<style></style>
