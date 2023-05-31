import axios from "axios";

function calculatePriceAndPost(hotel) {
  async function generateId() {
    try {
      const response = await axios.get(
        "https://destinate-production.up.railway.app/trip-confirmations"
      );
      const tripConfirmations = response.data;

      if (tripConfirmations.length === 0) {
        // If no trip confirmations exist, generate a random ID
        return Math.floor(Math.random() * 100000);
      } else {
        // Get the last object from the trip-confirmations array
        const lastObject = tripConfirmations[tripConfirmations.length - 1];
        const lastId = lastObject.id;
        const newId = lastId + 1;

        return newId;
      }
    } catch (error) {
      console.log("Error retrieving last ID:", error);
      // Handle the error if necessary
    }
  }

  const basePrice = 100;
  const ratingMultiplier = 10;

  const price = basePrice + hotel.rating * ratingMultiplier;
  hotel.price = price;

  generateId()
    .then((id) => {
      hotel.id = id;
      return axios.post(
        "https://destinate-production.up.railway.app/trip-confirmation",
        hotel
      );
    })
    .then((res) => {
      console.log("Posted hotel with ID:", hotel.id);
      console.log("Response:", res.data);
    })
    .catch((err) => console.log(err));
}

export default calculatePriceAndPost;