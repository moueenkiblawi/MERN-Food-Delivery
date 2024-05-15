import mongoose from "mongoose";


export const connectDB = async () =>{
    await mongoose.connect('mongodb+srv://moueen415kiblawi:moueen2kiblawi@fooddelivery.ysg0w1j.mongodb.net/food-del')
    .then(()=>{
        console.log('DB connected');
    })
}