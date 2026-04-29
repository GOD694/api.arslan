const mongoose = require("mongoose");

const connectDB = async () => {
    const URI = await process.env.MONGO_URI;
    try {
        mongoose.connect(URI);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log(error,`MongoDB connection failed`);
        process.exit(1);
    }
}
module.exports = connectDB;