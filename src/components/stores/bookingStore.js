import { defineStore } from "pinia";

export const useBookingStore = defineStore("bookingStore", {
  state: () => ({
    hotels: [],
    citiesIds: [],
    isSearchClicked: false,
    searchInputs: null,
    currentPageHotels: [],
    filteredMinMaxHotels: [],
    pagesNumber: 0,
    hotelsNumber: 0,
  }),
  getters: {
    async getSearchInputs() {
      return await this.searchInputs;
    },
    async getHotelsNumber() {
      return await this.hotelsNumber;
    },
    async getAllHotels() {
      return await this.hotels;
    },
  },

  //actions
  actions: {
    toggleisSearchClicked() {
      this.isSearchClicked = !this.isSearchClicked;
      return this.isSearchClicked;
    },

    setSearchInputs(
      location,
      dest_id,
      checkinDate,
      checkoutDate,
      adults,
      rooms
    ) {
      this.searchInputs = {
        location,
        dest_id,
        checkinDate,
        checkoutDate,
        adults,
        rooms,
      };
      return this.searchInputs;
    },

    async getCitiesIds(location) {
      const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=${location}`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "001331947emsh18f7877b47b5692p1e2209jsnec5d21a38634",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };
      const response = await fetch(url, options);
      const citiesDestinations = (await response.json())
        .data;
      const cities = await citiesDestinations
        .map((city) => {
          if (city["city_name"] !== "")
            return {
              city_Name: city["city_name"],
              id: city["dest_id"],
            };
        })
        .filter((el) => el !== undefined);

      this.citiesIds = cities;
      return cities;
    },

    async findMatchedHotels(
      location,
      dest_id,
      start_date,
      end_date,
      rooms,
      adults
    ) {
      const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=${dest_id}&search_type=CITY&arrival_date=${start_date}&departure_date=${end_date}&adults=${adults}&room_qty=${rooms}&languagecode=en-us`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "001331947emsh18f7877b47b5692p1e2209jsnec5d21a38634",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);

        const data = (await response.json()).data;
        const hotelsNumber = parseInt(
          (await data).meta[0].title
        );

        this.hotels = (await data).hotels;
        this.hotelsNumber = hotelsNumber;
        this.pagesNumber = Math.ceil(hotelsNumber / 20);
        return this.hotels;
      } catch (error) {
        console.error(error);
      }
    },
    async searchByMinMaxPrice(
      location,
      dest_id,
      start_date,
      end_date,
      rooms,
      adults,
      minPrice,
      maxPrice
    ) {
      const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=${dest_id}&search_type=CITY&arrival_date=${start_date}&departure_date=${end_date}&adults=${adults}&room_qty=${rooms}&price_min=${minPrice}&price_max=${maxPrice}&languagecode=en-us`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "001331947emsh18f7877b47b5692p1e2209jsnec5d21a38634",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        const result = (await response.json()).data;
        this.filteredMinMaxHotels = result.hotels;
        return this.filteredMinMaxHotels;
      } catch (error) {
        console.error(error);
      }
    },
    async searchByPage(
      location,
      dest_id,
      start_date,
      end_date,
      rooms,
      adults,
      pageNumber = 1
    ) {
      const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=${dest_id}&search_type=CITY&arrival_date=${start_date}&departure_date=${end_date}&adults=${adults}&room_qty=${rooms}&page_number=${pageNumber}&languagecode=en-us`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "001331947emsh18f7877b47b5692p1e2209jsnec5d21a38634",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };
      try {
        const response = await fetch(url, options);
        const result = (await response.json()).data;
        console.log(response);
        this.currentPageHotels = (await result).hotels;
        return this.currentPageHotels;
      } catch (error) {
        console.error(error);
      }
    },

    async searchHotelDetails(id) {
      const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/getDescriptionAndInfo?hotel_id=${id}&languagecode=en-us`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "001331947emsh18f7877b47b5692p1e2209jsnec5d21a38634",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = (await response.json()).data;
        const hotelDescription = (await result)[0]
          .description;

        return hotelDescription;
      } catch (error) {
        console.error(error);
      }
    },
    async searchRooms(id, checkinDate, checkoutDate) {
      const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/getRoomList?hotel_id=${id}&arrival_date=${checkinDate}&departure_date=${checkoutDate}&languagecode=en-us&currency_code=EUR`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "001331947emsh18f7877b47b5692p1e2209jsnec5d21a38634",
          "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = (await response.json()).data.rooms;
        return result;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
