<template>
  <h1 class="font-semibold text-[28px] mt-16 mb-8">
    Get inspiration for your next trip
  </h1>
  <div class="flex justify-between">
    <Trip
      v-for="trip in trips"
      :key="trip.id"
      :trip="trip"
      :id="'trip' + trip.id"
    />
  </div>
</template>

<script>
import Trip from "./Trip.vue";

export default {
  name: "Trips",
  components: { Trip },
  setup() {
    const trips = [
      {
        id: 1,
        src: "@/assets/Sydney.png",
        title: "Sydeny’s 10 most fashionable 5 star hotels",
        info: "Browse the fastest growing tourism sector in the heart of Australia tourism capital ....",
      },
      {
        id: 2,
        src: "@/assets/Vegan.png",
        title: "Top cities for Vegan Travellers",
        info: "Top sites where you do not have to worry about being a vegan. Our tourist guide is here...",
      },
      {
        id: 3,
        src: "@/assets/Covid.png",
        title:
          "World’s top destinations during and post covid timeline",
        info: "Pandemic is still intact and will be here for a longer time. Here’s where your next destination...",
      },
    ];
    return { trips };
  },
};
</script>

<style scoped>
#trip1 {
  background-image: url("@/assets/Sydney.png");
}

#trip2 {
  background-image: url("@/assets/Vegan.png");
}

#trip3 {
  background-image: url("@/assets/covid.png");
}
</style>
