<template>
  <div class="flex justify-between my-6">
    <div class="w-[31.15%]">
      <img
        :src="hotel.property.photoUrls[0]"
        :alt="hotel.property.name"
        class="w-full rounded-md h-[200px]"
      />
    </div>
    <div
      class="flex w-[61.4%] flex-col font-SFProDisplay font-medium justify-between"
    >
      <div class="flex">
        <h1 class="title text-xl w-[67.6%]">
          {{ hotel?.property?.name }}
        </h1>
        <p
          v-if="
            hotel?.property?.priceBreakdown?.excludedPrice
          "
          class="text-white bg-red-500 rounded-md py-1 px-2 text-xs flex justify-center items-center"
        >
          Book now and Save
          {{
            (hotel?.property?.priceBreakdown?.excludedPrice
              .value /
              hotel?.property?.priceBreakdown?.grossPrice
                .value) *
            100
          }}
          % off
        </p>
      </div>
      <div class="flex justify-between">
        <div class="w-[67.6%]">
          <div
            class="rate flex text-[#4f4f4f] items-center"
          >
            <span
              class="imgs flex w-[5rem] justify-between"
              v-if="
                hotel?.property?.reviewCount &&
                hotel?.property?.reviewScore
              "
            >
              <img
                class="h-5 w-5"
                src="../../assets/star.png"
                alt=""
                v-for="score in Math.floor(
                  hotel.property.reviewScore / 2
                )"
                :key="score"
              />
            </span>
            <span v-else>Rate </span>

            <span
              >{{
                Math.floor(
                  Number(hotel?.property?.reviewScore) / 2
                )
              }}
              / 5
            </span>
            <p>
              ({{ hotel?.property?.reviewCount }} Reviews)
            </p>
          </div>
          <p class="info text-[#4f4f4f] text-xs my-4">
            {{
              hotelDesc.split(". ").length > 1
                ? hotelDesc
                    .split(". ")[0]
                    .concat(hotelDesc.split(". ")[1])
                    .concat("...")
                : hotelDesc.split(". ")[0].concat("...")
            }}
          </p>
          <button
            @click="detailsHandler"
            class="bg-lightBlue px-4 py-2 text-center rounded-md text-white my-4"
          >
            See availability
          </button>
        </div>
        <div>
          <span>
            <p class="text-sm mt-12">
              <span
                class="text-red-500 line-through text-xs"
              >
                {{
                  hotel?.property?.priceBreakdown
                    ?.strikethroughPrice?.value
                }}
                {{
                  hotel?.property?.priceBreakdown
                    ?.strikethroughPrice?.currency
                }}
              </span>

              {{
                hotel?.property?.priceBreakdown?.grossPrice
                  ?.value
              }}
              {{
                hotel?.property?.priceBreakdown?.grossPrice
                  ?.currency
              }}
              <br />
              <span class="">Includes taxes and fees </span>
            </p>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useBookingStore } from "../stores/bookingStore";
import router from "@/router";
import { useRoute } from "vue-router";
export default {
  name: "Hotel",
  props: ["data"],
  setup(props) {
    const bookingStore = useBookingStore();
    const hotel = ref(props.data);
    const hotelDesc = ref("");
    const route = useRoute();
    onMounted(async () => {
      hotelDesc.value =
        await bookingStore.searchHotelDetails(
          await hotel.value.hotel_id
        );
    });

    function detailsHandler() {
      router.push({
        name: "hoteldetails",
        query: {
          name: hotel.value.property.name,
          hotel_id: hotel.value["hotel_id"],
          location: route.query.location,
          reviewScore: hotel.value.property.reviewScore,
          reviewCount: hotel.value.property.reviewCount,
          checkinDate: route.query.checkinDate,
          checkoutDate: route.query.checkoutDate,
        },
      });
    }
    // console.log(hotelDesc);

    return { hotel, hotelDesc, detailsHandler };
  },
};
</script>

<style></style>
