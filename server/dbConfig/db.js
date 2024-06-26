import mongoose from "mongoose";
import colors from "colors";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        // await mongoose.connect(process.env.MONGO_URI);

        console.log(`MongoDB Connected: ${ conn.connection.host }`.cyan.underline);
    } catch (error) {
        console.log(`Error: ${ error.message }`.red.bold);
        process.exit();
    }
};

export { connectDB };