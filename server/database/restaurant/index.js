import Mongoose from "mongoose";

const RestaurantSchema = new Mongoose.Schema({
    name: { Type: String, required: true },
    city: { type: String, required: true },
    address: { type: String, required: true },
    mapLocation: { type: String, required: true },
    cuisine: [String],
    restaurantTimings: String,
    contactNumber: Number,
    website: Number,
    popularDishes: [String],
    averageCost: Number,
    amenties: [String],
    menuImages: {
        type: mongoose.Types.ObjectID,
        ref: " Images",
    },
    menu: {
        type: mongoose.Types.ObjectID,
        ref: " Menus",
    },
    reviews: [{ type: mongoose.Types.ObjectID, ref: "Reviews" }],
    photos: { type: mongoose.Types, ObjectID, ref: "Images" },
});

export const RestaurantModel = mongoose.model("Restaurants", RestaurantSchema);