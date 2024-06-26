import userModel from "../models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from 'bcrypt';
import validator from  'validator';


// login User

const loginUser = async (req,res)=>{
    const {  email, password } = req.body;
    try{
        const user = await userModel.findOne({ email }); 
        if(!user){
            return res.json({success:false, message:"User  not found"});
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.json({success:false,message:"Invalid  Password"});

        }

        const token = createToken(user._id)
        res.json({success:true,token:token})

    }catch(error){
        console.log(error);
        res.json({success:false,message:"Error"})
    }

}


//create and returning jsonwebtoken
const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRETE); // Return the generated token
}



// register user
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // checking if user already exists
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }
        // validating email format & strong password
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: 'Please provide a valid Email' });
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" });
        }
        // hashing user password 
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashPassword
        });
        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({ success: true, token: token }); 
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error in registration" });
    }
}


export {registerUser,loginUser};