<template>
  <div>
    <Navbar
      v-if="
        this.$route.name !== 'login' &&
        this.$route.name !== 'register'
      "
    />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
export default {
  name: "App",
  components: { Navbar },
};
</script>
<style></style>
