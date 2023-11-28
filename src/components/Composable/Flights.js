export default async function flightsLocations(location) {
  const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchDestination?query=${location}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key":
        "70f5784584mshded6e9ecf61039fp1bba74jsnd87ecb87b6b0",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  const response = await fetch(url, options);
  const flights = (await response.json()).data;
  const cities = flights
    .map((flight) => flight["city_name"])
    // need to add dest_id from hotels destinations then edit cities variable in searchbar.vue then restore data based on city search and each city's dest
    // and the dates and room and guests. then save data using pinia and show it in a  new page.
    .filter((item) => item !== "");
  const result = Array.from(new Set(cities));
  // console.log(result);
  return result;
}

export async function hotelsSearch(
  location,
  start_date,
  end_date,
  rooms,
  adults,
  children
) {
  console.log("location", location);
  console.log("start_date", start_date);
  console.log("end_date", end_date);
  console.log("rooms", rooms);
  console.log("adults", adults);
  console.log();

  const url = `https://booking-com15.p.rapidapi.com/api/v1/hotels/searchHotels?dest_id=-2092174&search_type=CITY&arrival_date=${start_date}&departure_date=${end_date}&adults=${adults}&room_qty=${rooms}&languagecode=en-us`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key":
        "70f5784584mshded6e9ecf61039fp1bba74jsnd87ecb87b6b0",
      "X-RapidAPI-Host": "booking-com15.p.rapidapi.com",
    },
  };

  try {
    const response = await fetch(url, options);
    const data = (await response.json()).data;
    const result = data?.hotels.map((hotel) => {
      if (hotel["city_name"] == location) {
        return hotel;
      }
    });

    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
