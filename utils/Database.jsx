import mongoose from 'mongoose';

let isConnected = false;

export const ConnectToDB = async () => {
    mongoose.set('strictQuery', true)
    if (isConnected) {
        console.log("Database already Connected")
        return;
    }
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName: "meddium-blog",
            useNewurlparser: true,
            useUnifiedtopology: true,
        })
        isConnected = true;
        console.log("Database Connected")
    }
    catch (error) {

    }
}