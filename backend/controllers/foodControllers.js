import { log } from "console";
import foodModel from "../models/foodModel.js";
import fs from 'fs'


//add food item

const addFood = async (req,res)=>{
    
    let image_filename = `${req.file.filename}`

    const food = new foodModel({
        name : req.body.name,
        description: req.body.description,
        price: req.body.price,
        category: req.body.category,
        image: image_filename,  
    })

    try{
        await food.save();
        res.json({success:true,message:"Food Added"})
    }
    catch(error){
            console.log("Error in adding Food", error)
            res.json({success:false,message:"Failed to Add Food"})
    }
}

// all food list

const listFood = async (req,res)=>{
    try{
        const foods = await foodModel.find({})
        res.json({success:true,data:foods})
    }catch(error){
        console.log('Error in getting Food List', error);
        res.json({sucess: false, message:'failed to get Food List'});
    }
}

// remove food item

const removeFood = async (req,res)=>{
    try{
        const id = req.body.id;
        const food = await foodModel.findById(id);

        //remove the image from  the folder as well 
        fs.unlink(`uploads/${food.image}` , ()=>{}); 

        await foodModel.findByIdAndDelete(id);
        res.json({success:true,message:"Deleted Successfully!"})

    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }
} 

export {addFood,listFood,removeFood}