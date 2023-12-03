<template>
  <div class="mt-56 mx-[100px] flex justify-between">
    <div class="font-SFProDisplay w-[23.8%]">
      <div
        class="w-full bg-[#f2f2f2] rounded-md py-5 ps-[18px]"
      >
        <h3 class="text-base font-medium mb-3">
          Search by property name
        </h3>
        <input
          v-model="searchProp"
          type="search"
          placeholder="eg: beach"
          class="rounded-sm border border-[#E0E0E0] text-[#181818] placeholder:text-[#4f4f4f] font-sm w-[87.8%]"
        />
      </div>
      <div>
        <h2 class="text-[#333333] ps-5 py-5">Filter by</h2>
        <div
          class="font-normal text-sm border border-[#E0E0E0] rounded-md"
        >
          <h3
            class="bg-[#f2f2f2] text-base font-medium p-[18px]"
          >
            Your budget per day
          </h3>
          <section class="p-[18px] flex">
            <input
              type="checkbox"
              name="budget"
              id=""
              v-model="minMaxPrice"
              value="0-200"
              class="bg-[#BDBDBD] w-5 h-5 rounded-[5px] mr-[18px]"
            />
            <label for="">$ 0 - $ 200</label>
          </section>
          <section class="pb-[18px] ps-[18px] flex">
            <input
              type="checkbox"
              name="budget"
              id=""
              v-model="minMaxPrice"
              value="200-500"
              class="bg-[#BDBDBD] w-5 h-5 rounded-[5px] mr-[18px]"
            />
            <label for="">$ 200 - $ 500 </label>
          </section>
          <section class="pb-[18px] ps-[18px] flex">
            <input
              type="checkbox"
              name="budget"
              id=""
              v-model="minMaxPrice"
              value="500-1000"
              class="bg-[#BDBDBD] w-5 h-5 rounded-[5px] mr-[18px]"
            />
            <label for="">$ 500 - $ 1,000</label>
          </section>
          <section class="pb-[18px] ps-[18px] flex">
            <input
              type="checkbox"
              name="budget"
              id=""
              v-model="minMaxPrice"
              value="1000-2000"
              class="bg-[#BDBDBD] w-5 h-5 rounded-[5px] mr-[18px]"
            />
            <label for="">$ 1,000 - $ 2,000</label>
          </section>
          <section class="pb-[18px] ps-[18px] flex">
            <input
              type="checkbox"
              name="budget"
              id=""
              v-model="minMaxPrice"
              value="2000-5000"
              class="bg-[#BDBDBD] w-5 h-5 rounded-[5px] mr-[18px]"
            />
            <label for="">$ 2,000 - $ 5,000</label>
          </section>
        </div>
        <div>
          <section class="flex p-[18px] justify-between">
            <p class="text-sm font-normal text-[#4f4f4f]">
              Show your own budget
            </p>
            <SwitchButton />
          </section>
          <section>
            <div>
              <input
                type="text"
                placeholder="Min budget"
                class="py-[12px] pl-[12px] text-sm text-[#333333] max-w-[40%] mr-[13px] border border-[#E0E0E0]"
              /><input
                type="text"
                placeholder="Max budget"
                class="py-[12px] pl-[12px] text-sm text-[#333333] max-w-[40%] border border-[#E0E0E0]"
              />
              <p
                class="font-Inter font-normal text-[#4f4f4f] text-xs mt-[18px]"
              >
                Press Enter to filter
              </p>
            </div>
          </section>
        </div>
      </div>
      <div
        class="w-full rounded-md mt-[18px] border border-[#E0E0E0]"
      >
        <h3
          class="bg-[#f2f2f2] text-base font-medium border-b border-[#E0E0E0] py-5 ps-[18px]"
        >
          Rating
        </h3>
        <p
          class="text-sm text-[#4f4f4f] px-[18px] mt-[18px]"
        >
          Show only ratings more than
        </p>
        <div
          class="rates border border-[#E0E0E0] mx-[18px] rounded-s-md border-e-md flex my-[18px]"
        >
          <button
            class="flex justify-center items-center w-1/5 border border-r-[#E0E0E0] py-3"
          >
            1 <img src="../../assets/star.png" alt="" />
          </button>
          <button
            class="flex justify-center items-center w-1/5 border border-r-[#E0E0E0] py-3"
          >
            2 <img src="../../assets/star.png" alt="" />
          </button>
          <button
            class="flex justify-center items-center w-1/5 border border-r-[#E0E0E0] py-3"
          >
            3 <img src="../../assets/star.png" alt="" />
          </button>
          <button
            class="flex justify-center items-center w-1/5 border border-r-[#E0E0E0] py-3"
          >
            4 <img src="../../assets/star.png" alt="" />
          </button>
          <button
            class="flex justify-center items-center w-1/5 border border-r-[#E0E0E0] py-3"
          >
            5 <img src="../../assets/star.png" alt="" />
          </button>
        </div>
      </div>
    </div>

    <div class="w-[73.7%]">
      <div class="w-full flex justify-between">
        <p
          class="font-semibold font-SFProDisplay text-2xl text-[#181818]"
        >
          {{ cityName }}: {{ parseInt(results) }} search
          results found
          <!-- {{cityName.concat(":")}} {{ parseInt(results)}} search results found -->
        </p>
        <Dropdown />
      </div>
      <div v-if="isMounted">
        <Hotel
          v-for="hotel in currentPageHotels"
          :key="hotel['hotel_id']"
          :data="hotel"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, watch, computed } from "vue";
import { useBookingStore } from "../stores/bookingStore";
import Dropdown from "../Dropdown.vue";
import SwitchButton from "./ToggleButton.vue";
import Hotel from "./Hotel.vue";
import { useRoute } from "vue-router";
export default {
  components: { Dropdown, Hotel, SwitchButton },
  name: "Hotels",
  props: ["data"],
  setup(props) {
    const isMounted = ref(false);
    const bookingStore = useBookingStore();
    const allHotels = ref([]);
    const currentPageHotels = ref([]);
    const results = ref(0);
    const cityName =
      useRoute().query.city || useRoute().query.city;
    const minMaxPrice = ref([]);

    const minPrice = computed(() => {
      return Math.min(
        ...minMaxPrice.value
          .map((el) => el.split("-"))
          .flat()
      );
    });
    const maxPrice = computed(() => {
      return Math.max(
        ...minMaxPrice.value
          .map((el) => el.split("-"))
          .flat()
      );
    });
    const searchProp = ref("");
    watch([() => searchProp], async (newProp) => {
      allHotels.value = allHotels.value.filter((hotel) =>
        hotel.property.name.includes(newProp)
      );
      console.log(allHotels.value);
    });
    // const showPropFilter = async ($event) => {
    //   allHotels.value = allHotels.value.filter((hotel) =>
    //     hotel.property.name.includes($event.target.value)
    //   );
    //   console.log($event.target.value);
    //   console.log(allHotels.value);
    // };
    /* ********************************* API *************************************** */
    onMounted(async () => {
      allHotels.value =
        await bookingStore.findMatchedHotels(
          props.data.city,
          props.data.dest_id,
          props.data.checkinDate,
          props.data.checkoutDate,
          props.data.rooms,
          props.data.adults
        );

      currentPageHotels.value =
        await bookingStore.searchByPage(
          props.data.city,
          props.data.dest_id,
          props.data.checkinDate,
          props.data.checkoutDate,
          props.data.rooms,
          props.data.adults
        );

      results.value = await bookingStore.getHotelsNumber;
      isMounted.value = true;
    });

    /* ******************************************* End of api code ********************************************/
    return {
      isMounted,
      currentPageHotels,
      results,
      cityName,
      searchProp,
    };
  },
};
</script>

<style scoped>
input[type="search"] {
  padding: 11px 12px 12px;
}
</style>
>
