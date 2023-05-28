// index.js
const express = require("express");
const router = require("./router");
const PORT = 1338;
const app = express();
// Apply JSON parsing middleware
app.use(express.json());
// Apply router
app.use("/", router);
// Serving app on defined PORT
app.listen(PORT, () => {
  console.log(`Express is running on port ${PORT}`);
});
const API = "api";
// City search suggestions
router.get(`/${API}/search`, async (req, res) => {
  const { keyword } = req.query;
  const response = await amadeus.referenceData.locations.get({
    keyword,
    subType: Amadeus.location.city,
  });
  try {
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});
// Querying hotels
router.get(`/${API}/hotels`, async (req, res) => {
    const { cityCode } = req.query;
    const response = await amadeus.shopping.hotelOffers.get({
      cityCode,
    });
    try {
      await res.json(JSON.parse(response.body));
    } catch (err) {
      await res.json(err);
    }
  });
  // Querying hotel offers
router.get(`/${API}/offers`, async (req, res) => {
    const { hotelId } = req.query;
    const response = await amadeus.shopping.hotelOffersByHotel.get({
      hotelId,
    });
    try {
      await res.json(JSON.parse(response.body));
    } catch (err) {
      await res.json(err);
    }
  });