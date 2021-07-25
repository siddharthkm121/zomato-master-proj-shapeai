import mongoose, { mongo } from "mongoose";

const foodSchema = new mongoose.Schema({
    name: { type: String, require: true },
    descript: { type: String, required: true },
    isVeg: { type: Boolean, required: true },
    isContainsEgg: { type: Boolean, required: true },
    category: { type: String, required: true },
    photos: {
        type: mongoose.Types.ObjectId,
        ref: "Images",
    },
    price: { type: Number, defaut: 150, require: true },
    addOns: [{
        type: mongoose.Types.ObjectId,
        ref: "Foods",
    },
    ],
    restaurant: {
        type: mongoose.Types.ObjectId,
        ref: "Restaurants",
        required: true,
    },
});

export const FoodModel = mongo.model("Foods", FoodSchema);