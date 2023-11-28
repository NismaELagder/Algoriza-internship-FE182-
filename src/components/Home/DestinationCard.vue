<template>
  <div class="w-[23%] font-SFProDisplay">
    <img
      :src="require(`@/assets/${destination?.source}.png`)"
      :alt="destination?.name"
      class="w-full"
    />
    <h3 class="text-xl mt-3 font-semibold">
      {{ destination?.name }}
    </h3>
    <p class="text-sm">
      {{ destination?.props }} properties
    </p>
  </div>
</template>

<script>
export default {
  name: "DestinationCard",
  props: ["destination"],
};
</script>

<style></style>
