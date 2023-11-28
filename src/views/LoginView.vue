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
export default { components: { Login } };
</script>

<style></style>
