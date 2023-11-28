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
  <Register />
</template>

<script>
import Register from "@/components/Login/Register.vue";
export default {
  name: "RegisterView",
  components: { Register },
};
</script>

<style></style>
