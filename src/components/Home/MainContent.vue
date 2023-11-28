<template>
  <div
    class="rect w-full flex flex-col justify-center min-h-[65vh] font-SFProDisplay text-white"
  >
    <h1 class="text-center font-bold text-large">
      Enjoy Your Dream Vacation
    </h1>
    <p class="text-center text-xl leading-7">
      Plan and book our perfect trip with expert advice,
      travel tips, destination <br />
      information and inspiration from us
    </p>
  </div>
  <div class="relative">
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from "./SearchBar.vue";
export default {
  name: "MainContent",
  components: { SearchBar },
};
</script>

<style scoped>
.rect {
  background: url(../../assets/mainContent.png) no-repeat;
  background-size: 100% 100%;
}
</style>
