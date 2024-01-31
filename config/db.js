import mongoose from 'mongoose';

export const connectDb = async()=>{
    const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
    await mongoose.connect(process.env.MONGODB_URI, clientOptions);
    console.log("Pinged db deployment. Successfully connected to MongoDB!");
    return mongoose.connection;
}
