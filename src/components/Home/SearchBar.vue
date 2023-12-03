<template>
  <div
    class="flex justify-between w-10/12 absolute left-[8.335%] px-4 h-16 bg-white py-3 rounded-md"
    :class="{
      '-bottom-10': resultPage,
      '-top-6': !resultPage,
    }"
  >
    {{ resultPage }}
    <!-- Search bar for location and date -->
    <select
      name="location"
      class="ps-6 w-1/5 font-WorkSans text-[#4f4f4f] rounded-md bg-[#f4f4f4] h-[43px] text-[13px] appearance-none"
      v-model="userEnteredData.city"
    >
      <option selected disabled>
        Where are you going?
      </option>
      <template v-if="citiesOptions.length">
        <option
          v-for="city in citiesOptions"
          :key="city['id']"
          :value="city['city_Name']"
        >
          {{ city.city_Name }}
        </option></template
      >
    </select>

    <!-- ************************** Start_Date ************************** -->

    <div class="relative date">
      <input
        type="text"
        name="starting-date"
        id="starting-date"
        class="block focus:border-[rgba(231, 223, 223,.3)] outline-none font-WorkSans h-[43px] rounded-[5px] text-[#4f4f4f] bg-[#f4f4f4] placeholder-current text-[12px]"
        :min="minDateAllowed"
        @focus="$event.target.type = 'date'"
        placeholder="Check in date"
        v-model="userEnteredData.checkinDate"
      />
      <!-- @blur="checkOutInput.min = minCheckoutDate" -->
      <!-- {{ checkinDate }} -->
    </div>

    <!-- ************************** End_Date ************************** -->

    <div class="relative date">
      <input
        type="text"
        name="ending-date"
        id="ending-date"
        class="block focus:border-[rgba(231, 223, 223,.3)] outline-none font-WorkSans h-[43px] rounded-[5px] text-[#4f4f4f] bg-[#f2f2f2] placeholder-current text-[12px]"
        @focus="$event.target.type = 'date'"
        placeholder="Check out date"
        v-model="userEnteredData.checkoutDate"
        ref="checkOutInput"
        :min="minCheckoutDateAllowed"
      />
      {{ minCheckoutDateAllowed }}
    </div>

    <!-- ************************** Guests ************************** -->
    <div class="w-[14%]">
      <input
        type="text"
        name="adults"
        id="guests"
        placeholder="Guests"
        min="1"
        max="10"
        class="text-[#4f4f4f] ps-9 bg-[#f4f4f4] rounded-[5px] text-[13px] font-WorkSans w-full placeholder-current h-[43px] focus:placeholder:text-[8px] outline-none"
        @focus="$event.target.placeholder = 'Adults 0'"
        @blur="$event.target.placeholder = 'Guests'"
        v-model="userEnteredData.adults"
      />
    </div>
    <!-- <div>
      <input
        type="number"
        name="adults"
        placeholder="Adults 1"
        class="text-[#4f4f4f] placeholder-current border-gray-400 border outline-none rounded-sm w-full"
        min="1"
        max="10"
        v-model="userEnteredData.adults"
      />
    </div> -->

    <!-- ************************** Rooms ************************** -->

    <div class="w-[14%]">
      <input
        type="number"
        name="rooms"
        id="rooms"
        min="1"
        max="10"
        placeholder="Rooms"
        v-model="userEnteredData.rooms"
        class="text-[#4f4f4f] bg-[#f4f4f4] rounded-[5px] text-[13px] font-WorkSans w-full placeholder-current focus:placeholder:text-[8px]"
      />
    </div>
    <div class="w-[13%]">
      <button
        @click="searchHandler"
        class="bg-lightBlue rounded-md text-white w-full h-[43px] flex items-center justify-center"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed, watch } from "vue";
import { useBookingStore } from "../stores/bookingStore.js";
import router from "@/router/index.js";
import "../../assets/styles/searchbar.css";
import { useRouter } from "vue-router";
export default {
  name: "SearchBar",
  setup() {
    const userEnteredData = ref({
      checkinDate: "",
      checkoutDate: "",
      city: "Where are you going?",
      rooms: "",
      adults: 0,
      dest_id: "",
    });

    const citiesOptions = ref([]);
    const minDateAllowed = new Date()
      .toISOString()
      .split("T")[0];
    const minCheckoutDateAllowed = computed(() => {
      const date = new Date(
        userEnteredData.value.checkinDate
      );
      date.setDate(date.getDate() + 1);
      return `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()}`;
    });
    // const menuShown = ref(false);
    const checkLogin = ref(false);
    const bookingStore = useBookingStore();
    const resultPage = ref(false);

    onMounted(async () => {
      const router = useRouter();
      // console.log(router);

      const searchCachedData =
        await bookingStore.getSearchInputs;
      /* ----- API ----------- */
      await bookingStore.getCitiesIds("egypt");
      /* ------API End ------ */
      citiesOptions.value.push(...bookingStore.citiesIds);
      checkLogin.value = sessionStorage.loggedIn;
      console.log(router.options.history.location);
      if (
        router.options.history.location.includes("/results")
      ) {
        resultPage.value = true;

        userEnteredData.value.city = searchCachedData?.city;
        userEnteredData.value.dest_id =
          searchCachedData?.dest_id;
        userEnteredData.value.checkinDate =
          searchCachedData?.checkinDate;
        userEnteredData.value.checkoutDate =
          searchCachedData?.checkoutDate;
        userEnteredData.value.adults =
          searchCachedData?.adults;
        userEnteredData.value.rooms =
          searchCachedData?.rooms;
      }
    });

    async function searchHandler() {
      userEnteredData.value.dest_id =
        citiesOptions.value.find((el) => {
          if (el["city_Name"] == userEnteredData.value.city)
            return el.id;
        }).id;
      if (checkLogin.value == "true") {
        router.push({
          name: "results",
          query: { ...userEnteredData.value },
        });
      } else {
        bookingStore.toggleisSearchClicked();
        bookingStore.setSearchInputs(
          userEnteredData.value.city,
          userEnteredData.value.dest_id,
          userEnteredData.value.checkinDate,
          userEnteredData.value.checkoutDate,
          userEnteredData.value.adults,
          userEnteredData.value.rooms
        );
        router.push({
          name: "login",
          // query: { ...userEnteredData.value },
        });
      }
    }
    return {
      citiesOptions,
      minDateAllowed,
      userEnteredData,
      // menuShown,
      searchHandler,
      minCheckoutDateAllowed,
      resultPage,
    };
  },
};
</script>
