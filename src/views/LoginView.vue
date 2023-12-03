<template>
  <nav class="flex w-[11.04vw] ms-[100px] my-[22px]">
    <img
      src="../../src/assets/Vector.png"
      alt="Plan"
      class="w-6 h-6"
    />
    <p class="font-SFProDisplay font-medium text-lg">
      my Dream Place
    </p>
  </nav>
  <Login />
</template>

<script>
import Login from "@/components/Login/Login.vue";
// import { useRoute } from "vue-router";
// import { useBookingStore } from "@/components/stores/bookingStore";
export default {
  components: { Login },
  // async beforeRouteLeave(to, from, next) {
  //   console.log(from.name);
  //   if (from.name !== "results") {
  //     const bookingStore = useBookingStore();
  //     const data = await bookingStore.getSearchInputs;
  //     const route = useRoute();
  //     // console.log(data);
  //     to.query.city = data.location;
  //     to.query.checkInDate = data.checkinDate;
  //     to.query.checkOutDate = data.checkoutDate;
  //     console.log(to.path);
  //     console.log(to.query);
  //     console.log(to);
  //     // route.push({ name: "results", query: to.query });
  //     // next({ name: "results", query: to.query });
  //     next();
  //     return;
  //     // this.$route = "/results";
  //     // this.$router.replace({
  //     //   name: "results",
  //     //   query: { city: data.location },
  //     // });

  //     // route.push({name:})
  //   }
  //   return false;
  // },
};
</script>

<style></style>
