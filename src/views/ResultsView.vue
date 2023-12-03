<template>
  <div
    class="bg-blue-300 absolute top-0 left-0 w-full h-[200px] z-[0] bg-gradient-to-b from-[#2969BF] to-[#144E9D]"
  >
    <SearchBar />
  </div>

  <template v-if="isMounted">
    <Hotels :data="queries"
  /></template>
  <CovidWarning />
  <Footer />
</template>

<script>
import { useBookingStore } from "@/components/stores/bookingStore";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import SearchBar from "@/components/Home/SearchBar.vue";
import Hotels from "@/components/Results/Hotels.vue";
import CovidWarning from "@/components/Home/CovidWarning.vue";
import Footer from "@/components/Footer.vue";

export default {
  components: { SearchBar, Hotels, CovidWarning, Footer },
  name: "resultsView",
  setup() {
    const bookingStore = useBookingStore();
    const queries = ref(useRoute().query);
    const isMounted = ref(false);
    onMounted(() => {
      isMounted.value = true;
    });

    return { queries, isMounted };
  },
};
</script>
<style scoped></style>
