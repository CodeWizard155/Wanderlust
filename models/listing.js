const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,

  // Updated 'image' to accept an object with filename and url
  image: {
    filename: {
      type: String,
      default: "listingimage"
    },
    url: {
      type: String,
      default: "https://unsplash.com/photos/hills-enveloped-in-morning-fog-and-golden-light-Uu1MoLHczCo",
      set: (v) =>
        v === ""
          ? "https://unsplash.com/photos/hills-enveloped-in-morning-fog-and-golden-light-Uu1MoLHczCo"
          : v,
    }
  },

  price: Number,
  location: String,
  country: String,
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
