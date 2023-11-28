<template>
  <div
    @click="menu = false"
    class="flex justify-between w-10/12 absolute left-[8.335%] px-4 -top-6 h-16"
  >
    <!-- Search bar for location and date -->
    <select
      name="location"
      class="ps-6 w-1/5 font-WorkSans text-[#4f4f4f] rounded-md bg-[#f4f4f4] h-[43px] text-[13px] appearance-none"
      v-model="selectedCity"
    >
      <option selected disabled>
        Where are you going?
      </option>
      <template v-if="cities">
        <option
          v-for="city in cities"
          :key="city"
          :value="city"
        >
          {{ city }}
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
        :min="minDate"
        @focus="$event.target.type = 'date'"
        placeholder="Check in date"
        v-model="checkinDate"
      />
    </div>

    <!-- ************************** End_Date ************************** -->

    <div class="relative date">
      <input
        type="text"
        name="ending-date"
        id="ending-date"
        class="block focus:border-[rgba(231, 223, 223,.3)] outline-none font-WorkSans h-[43px] rounded-[5px] text-[#4f4f4f] bg-[#f2f2f2] placeholder-current text-[12px]"
        :min="minDate"
        @focus="$event.target.type = 'date'"
        placeholder="Check out date"
        v-model="checkoutDate"
      />
    </div>

    <!-- ************************** Guests ************************** -->
    <div class="w-[14%]">
      <input
        type="text"
        readonly
        name="guests"
        id="guests"
        placeholder="Guests"
        class="text-[#4f4f4f] ps-9 bg-[#f4f4f4] rounded-[5px] text-[13px] font-WorkSans w-full placeholder-current h-[43px] focus:placeholder:text-[8px]"
        @focus="
          ($event.target.placeholder =
            'Adults 0 , Children 0'),
            (menu = true)
        "
        @click.stop="menu = true"
        @blur="$event.target.placeholder = 'Guests'"
      />
      <div
        v-if="menu"
        @click.stop
        @mouseleave="menu = false"
        class="mt-[2px] rounded-sm w-full"
      >
        <input
          type="number"
          name="adults"
          placeholder="Adults 1"
          class="text-[#4f4f4f] placeholder-current border-gray-400 border outline-none rounded-sm w-full"
          min="1"
          max="10"
          v-model="adults"
        />
        <input
          type="number"
          name="children"
          placeholder="Children 0"
          min="0"
          max="10"
          v-model="children"
          class="text-[#4f4f4f] placeholder-current border-gray-400 border outline-none rounded-sm w-full"
        />
      </div>
    </div>

    <!-- ************************** Rooms ************************** -->

    <div class="w-[14%]">
      <input
        type="number"
        name="rooms"
        id="rooms"
        min="1"
        max="10"
        placeholder="Rooms"
        v-model="selectedRooms"
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
      <!-- :to="{ name: 'login', path: '/login' }" -->
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import flightsLocations, {
  hotelsSearch,
} from "../Composable/Flights";
export default {
  name: "SearchBar",
  setup() {
    const checkinDate = ref("");
    const checkoutDate = ref("");
    const selectedCity = ref("Where are you going?");
    const selectedRooms = ref("");
    const children = ref("");
    const adults = ref("");
    const cities = ref([]);
    const minDate = new Date().toISOString().split("T")[0];
    const menu = ref(false);
    const checkLogin = ref(false);
    onMounted(async () => {
      cities.value.push(
        ...(await flightsLocations("egypt"))
      );
      // cities.value.push(
      //   ...(await flightsLocations("Italy"))
      // );
      // cities.value.push(
      //   ...(await flightsLocations("Netherlands"))
      // );

      checkLogin.value = sessionStorage.loggedIn;
    });
    function searchHandler() {
      if (checkLogin.value == "true") {
        console.log("yeeeeeeeeeees");
        hotelsSearch(
          selectedCity.value,
          checkinDate.value,
          checkoutDate.value,
          selectedRooms.value,
          adults.value
        );
      } else {
        window.location.href = "/login";
      }
    }
    return {
      cities,
      minDate,
      checkinDate,
      checkoutDate,
      selectedCity,
      selectedRooms,
      adults,
      children,
      menu,
      searchHandler,
    };
  },
};
</script>
<!-- 





For personal purpose



 -->

<style scoped>
/* Style the location dropdown with a custom background image */
select[name="location"] {
  background-image: url(../../assets/location1.png);
  background-position: 5px center;
  background-size: 15px;
  background-repeat: no-repeat;
}

#guests {
  background-image: url(../../assets/user.png);
  background-position: 12px center;
  background-size: 20px;
  background-repeat: no-repeat;
}

#rooms {
  background-image: url(../../assets/Rooms.png);
  background-position: 12px center;
  background-size: 17px;
  background-repeat: no-repeat;
}

input[type="date"] {
  padding: 11px 12px 12px;
  display: flex;
  flex-direction: row-reverse;
  border-radius: 5px;
}

#starting-date[type="text"],
#ending-date[type="text"] {
  background: url(../../assets//calendar1.png) no-repeat;
  background-position: 6px center;
  background-color: #f2f2f2;
  padding: 12px 0 12px 1.8rem;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  color: #4f4f4f;
  opacity: 1;
  display: block;
  background: url(../../assets//calendar1.png) no-repeat;
  width: 20px;
  height: 20px;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
  padding: 11px 0 12px 30px;
}

/* Firefox */
input[type="number"] {
  -moz-appearance: textfield;
  padding: 11px 0 12px 2.5rem;
}
</style>
