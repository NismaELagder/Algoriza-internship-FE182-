<template>
  <div class="bg-[#f2f2f2]">
    <div
      class="imgs flex justify-between h-[70vh] px-[100px] bg-white"
    >
      <div class="w-[55%] h-full">
        <img
          src="../assets/Rectangle 28.png"
          alt=""
          class="w-full h-full"
        />
      </div>
      <div
        class="flex flex-col w-[40%] justify-between h-full"
      >
        <img
          src="../assets/Rectangle 29.png"
          alt=""
          class="w-full h-[48%]"
        />
        <img
          src="../assets/Rectangle 30.png"
          alt=""
          class="w-full h-[48%]"
        />
      </div>
    </div>

    <nav class="flex mx-[100px]">
      <p class="border-b-2 border-blue-500 m-4">Overview</p>
      <p class="mt-4">Rooms</p>
    </nav>
    <div class="w-full px-[100px] bg-[#f2f2f2]">
      <div class="py-3">
        <h1 class="font-medium text-lg">
          {{ hotel.name }}
        </h1>
        <div class="rate flex text-[#4f4f4f] items-center">
          <span
            class="imgs flex max-w-[5rem] justify-between"
            v-if="hotel.reviewCount && hotel.reviewScore"
          >
            <img
              class="h-5 w-5"
              src="../assets/star.png"
              alt=""
              v-for="score in Math.floor(
                +hotel.reviewScore / 2
              )"
              :key="score"
            />
          </span>
          <span v-else>Rate </span>

          <span
            >{{ Math.floor(Number(hotel.reviewScore) / 2) }}
            / 5
          </span>
          <p class="py-2">
            &nbsp; ({{ hotel.reviewCount }} Reviews)
          </p>
        </div>
        <div class="flex items-center">
          <img src="../assets/location1.png" alt="" />
          <p class="pl-2">{{ hotel.location }}</p>
        </div>
        <div class="flex my-4">
          <div class="w-2/3">
            <div class="bg-white px-10 h-full">
              <h1
                class="py-4 font-SFProDisplay font-medium text-lg"
              >
                Overview
              </h1>
              <p class="leading-6 mb-4">
                {{ hotelDesc.slice(0, 200) }}
              </p>
              <p
                class="capitalize border-b border-[#f2f2f2] pb-4"
              >
                {{ hotelDesc.slice(202, 300) }}
              </p>
              <div class="pt-4">
                <h3
                  class="py-4 font-medium font-SFProDisplay text-base"
                >
                  Top facilities
                </h3>
                <ul class="flex flex-wrap w-2/3 py-4">
                  <li
                    class="w-1/2 my-2 flex h-5 items-center"
                  >
                    <img
                      src="../assets/home-wifi 1.png"
                      alt=""
                      class="w-4 h-4"
                    />Free wifi
                  </li>
                  <li
                    class="w-1/2 my-2 flex h-5 items-center"
                  >
                    <img
                      src="../assets/wind 1.png"
                      class="w-4 h-4"
                      alt=""
                    />Air Conditioning
                  </li>
                  <li
                    class="w-1/2 my-2 flex h-5 items-center"
                  >
                    <img
                      src="../assets/car 1.png"
                      class="w-4 h-4"
                      alt=""
                    />Parking available
                  </li>
                  <li
                    class="w-1/2 my-2 flex h-5 items-center"
                  >
                    <img
                      src="../assets/bag-tick-2 1.png"
                      class="w-4 h-4"
                      alt=""
                    />Business Services
                  </li>
                  <li
                    class="w-1/2 my-2 flex h-5 items-center"
                  >
                    <img
                      src="../assets/location 1.png"
                      class="w-4 h-4"
                      alt=""
                    />
                    Swimming Pool
                  </li>
                  <li
                    class="w-1/2 my-2 flex h-5 items-center"
                  >
                    <img
                      src="../assets/like-1 1.png"
                      alt=""
                      class="w-4 h-4"
                    />Top rated in area
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="w-1/3">
            <img
              src="../assets/map.png"
              alt=""
              class="w-5/6 pl-[20px]"
            />
            <p class="pl-5 py-5">Explore the area</p>
            <ul class="pl-5">
              <li class="flex items-center text-xs py-2">
                <img
                  src="../assets/bxs-plane-alt 2.png"
                  alt=""
                  class="w-4 h-4"
                />
                <span>Hotel Penselvenyia</span>
              </li>
              <li class="flex items-center text-xs py-2">
                <img
                  src="../assets/location1.png"
                  alt=""
                  class="w-4 h-4"
                />
                <span>Olivia Johnson Garden</span>
              </li>
              <li class="flex items-center text-xs py-2">
                <img
                  src="../assets/location1.png"
                  alt=""
                  class="w-4 h-4"
                />
                <span>Hotel Penselvenyia</span>
              </li>
              <li class="flex items-center text-xs py-2">
                <img
                  src="../assets/location1.png"
                  alt=""
                  class="w-4 h-4"
                />
                <span>Olivia Johnson Garden</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div>
        <h1 class="text-lg font-medium py-4">
          Available rooms
        </h1>
        <div class="flex justify-between">
          <div
            class="bg-gradient-to-b from-[#4796FF] to-[#2366BF] flex w-1/4 py-4 px-2 h-56"
          >
            <div class="flex-col">
              <div class="flex">
                <img
                  src="../../src/assets/white-plane.png"
                  alt="Plan"
                  class="w-6 h-6"
                />
                <p
                  class="font-SFProDisplay font-medium text-lg"
                >
                  my Dream Place
                </p>
              </div>
              <p class="px-2 pt-4">
                20% off Use Promotional Coupon Code:
                <span class="text-yellow-600">Orlando</span>
              </p>
            </div>
            <img
              src="../assets/Frame.png"
              alt=""
              class="h-full"
            />
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
    <CovidWarning />
    <Footer />
  </div>
</template>
<script>
import Navbar from "@/components/Navbar.vue";
import CovidWarning from "@/components/Home/CovidWarning.vue";
import Footer from "@/components/Footer.vue";
import { onMounted, ref } from "vue";
import { useBookingStore } from "@/components/stores/bookingStore";
import { useRoute } from "vue-router";
export default {
  components: {
    Navbar,
    CovidWarning,
    Footer,
  },
  setup() {
    const hotelDesc = ref("");
    const bookingStore = useBookingStore();
    const route = useRoute();
    const availableRooms = ref();
    const hotel = ref({
      name: route.query.name,
      location: route.query.location,
      reviewCount: route.query.reviewCount,
      reviewScore: route.query.reviewScore,
      location: route.query.location,
    });
    onMounted(async () => {
      hotelDesc.value =
        await bookingStore.searchHotelDetails(
          route.query.hotel_id
        );
      availableRooms.value = await bookingStore.searchRooms(
        route.query.hotel_id,
        route.query.checkinDate,
        route.query.checkoutDate
      );
      console.log(availableRooms.value);
    });
    return { hotel, hotelDesc };
  },
};
</script>
