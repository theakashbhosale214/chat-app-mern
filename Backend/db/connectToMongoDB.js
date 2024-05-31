import mongoose from "mongoose";

const connectToMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MongoDB_URL,)
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log("Having error while connecting MongoDB",error.message);
    }
}

export default connectToMongoDB;