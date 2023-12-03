<!-- PaymentForm.vue -->
<template>
  <div class="px-[100px]">
    <h2 class="text-3xl font-bold mb-4 font-SFProDisplay">
      Secure your reservation
    </h2>
    <CovidWarning />
    <div class="container mx-auto p-4">
      <form @submit.prevent="processPayment">
        <div class="mb-4">
          <label
            for="cardNumber"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Card Number</label
          >
          <input
            type="text"
            id="cardNumber"
            name="cardNumber"
            v-model="cardNumber"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter card number"
          />
        </div>

        <div class="mb-4">
          <label
            for="expirationDate"
            class="block text-gray-700 text-sm font-bold mb-2"
            >Expiration Date</label
          >
          <input
            type="text"
            id="expirationDate"
            name="expirationDate"
            v-model="expirationDate"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="MM/YY"
          />
        </div>

        <div class="mb-4">
          <label
            for="cvc"
            class="block text-gray-700 text-sm font-bold mb-2"
            >CVC</label
          >
          <input
            type="text"
            id="cvc"
            name="cvc"
            v-model="cvc"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter CVC"
          />
        </div>

        <button
          type="submit"
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Pay Now
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import CovidWarning from "../components/Home/CovidWarning.vue";
export default {
  components: { CovidWarning },
  setup() {
    // Use ref for reactive data
    const cardNumber = ref("");
    const expirationDate = ref("");
    const cvc = ref("");

    // Define the processPayment method
    const processPayment = () => {
      // Add logic to handle payment using a secure payment gateway
      console.log("Processing payment...");
      console.log("Card Number:", cardNumber.value);
      console.log("Expiration Date:", expirationDate.value);
      console.log("CVC:", cvc.value);

      // Reset form after processing payment
      cardNumber.value = "";
      expirationDate.value = "";
      cvc.value = "";
    };

    // Expose data and methods to the template
    return {
      cardNumber,
      expirationDate,
      cvc,
      processPayment,
    };
  },
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
