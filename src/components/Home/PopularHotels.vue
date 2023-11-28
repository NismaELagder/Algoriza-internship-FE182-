<template>
  <h1
    class="font-SFProDisplay text-[28px] text-[#181818] font-semibold mt-16 mb-8"
  >
    Popular hotels
  </h1>

  <div class="flex justify-between mt-8">
    <DestinationCard
      :destination="item"
      v-for="item in hotels"
      :key="item.name"
    />
  </div>
</template>

<script>
import DestinationCard from "./DestinationCard.vue";
export default {
  name: "PopularHotels",
  components: { DestinationCard },
  setup() {
    const hotels = [
      {
        id: 1,
        source: "lakeside",
        name: "Lakeside Motel Warefront",
        props: 2246,
      },
      {
        id: 2,
        name: "Recce Graham resort",
        source: "recce",
        props: 1278,
      },
      {
        id: 3,
        name: "Fireside Dinners",
        source: "fireside",
        props: 480,
      },
      {
        id: 4,
        name: "Oculous Inn Stay",
        source: "oculous",
        props: 320,
      },
    ];
    return { hotels };
  },
};
</script>

<style></style>
