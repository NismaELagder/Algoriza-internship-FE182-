<template>
  <div
    class="w-full font-SFProDisplay text-white px-11 flex justify-center flex-col max-h-[280px] my-16"
  >
    <p class="text-[28px] font-semibold">
      Download the mobile application for bonus <br />
      coupons and travel codes
    </p>
    <button
      class="bg-lightBlue rounded-md h-[44px] flex items-center mt-[10px] w-[164px] text-[15px] justify-center"
    >
      Download mobile app
    </button>
  </div>
</template>

<script>
export default {
  name: "MobileApp",
};
</script>

<style scoped>
div {
  height: 400px;
  background-image: url("../../assets/mobileapp.png"),
    url("../../assets/appbg.png");
  background-position: 95% top, left top;
  background-size: 63.5%, 100%;
  background-repeat: no-repeat, no-repeat;
}
/* button {
  padding: 12px 18px;
} */
</style>
