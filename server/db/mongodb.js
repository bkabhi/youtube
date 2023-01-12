import mongoose from "mongoose";

mongoose.set('strictQuery', false);

export const connect = ()=>{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Connected to MongoDB");
    }).catch(err=>{
        throw err;
    })
}