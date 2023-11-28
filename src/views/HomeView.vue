<template>
  <div class="home px-[100px]">
    <MainContent /> <CovidWarning />
    <Destinations />
    <Trips />
    <PopularHotels />
    <MobileApp />
    <Footer></Footer>
  </div>
  <p
    class="text-right bg-[#f4f4f4] pe-[200px] text-sm py-[10px]"
  >
    &copy; my Dream Place 2022
  </p>
</template>

<script>
// @ is an alias to /src
import MainContent from "@/components/Home/MainContent.vue";
import CovidWarning from "@/components/Home/CovidWarning.vue";
import Destinations from "@/components/Home/Destinations.vue";
import PopularHotels from "@/components/Home/PopularHotels.vue";
import Trips from "@/components/Home/Trips.vue";
import MobileApp from "@/components/Home/MobileApp.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "HomeView",
  components: {
    MainContent,
    CovidWarning,
    Destinations,
    Trips,
    PopularHotels,
    MobileApp,
    Footer,
  },
};
</script>
