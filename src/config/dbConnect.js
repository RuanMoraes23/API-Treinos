import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

async function conectaBanco() {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    return mongoose.connection;
};

export default conectaBanco;
