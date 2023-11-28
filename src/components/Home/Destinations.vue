<template>
  <h1
    class="font-SFProDisplay text-[28px] text-[#181818] font-semibold"
  >
    Enjoy your dream vacation
  </h1>
  <p class="font-SFProDisplay text-base font-normal">
    Plan and book our perfect trip with expert advice,
    travel tips, destination information and inspiration
    from us
  </p>
  <div class="flex justify-between mt-8">
    <DestinationCard
      :destination="item"
      v-for="item in destinations"
      :key="item.name"
    />
  </div>
</template>

<script>
import DestinationCard from "./DestinationCard.vue";
export default {
  name: "destinations",
  components: { DestinationCard },
  setup() {
    const destinations = [
      {
        source: "Australia",
        name: "Australia",
        props: 2246,
      },
      {
        source: "Japan",
        name: "Japan",
        props: 1278,
      },
      {
        source: "New Zealand",
        name: "New Zealand",
        props: 480,
      },
      {
        source: "Greece",
        name: "Greece",
        props: 320,
      },
    ];

    return { destinations };
  },
};
</script>

<style></style>
