<template>
  <div
    class="h-[280px] flex flex-col justify-end text-white font-SFProDisplay p-5"
  >
    <h3 class="text-xl font-semibold pb-2">
      {{ trip.title }}
    </h3>
    <p class="text-base">{{ trip.info }}</p>
  </div>
</template>
<script>
export default {
  name: "Trip",
  props: ["trip"],
};
</script>

<style scoped>
div {
  background-repeat: no-repeat;
  background-size: 100%;
  width: 32.25%;
}
</style>
