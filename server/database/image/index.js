import mongoose from "mongoose";

const ImageSchema = new mongoose.Schema({
    images: [
        {
            location: { type: String, require: true },
        },
    ],
});

export const ImageModel = mongoose.model("Images", ImageSchema);