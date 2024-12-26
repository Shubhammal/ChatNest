import createTokenandCookies from '../Jwt/generatetoken.js';
import User from '../models/user.model.js'
import bcrypt from "bcryptjs"


export const Signup = async(req, res) =>{
    const {fullname, Email, Password, VerifyPass} = req.body;

    try {
        if(Password !== VerifyPass){
            return res.status(400).json({message: "Passwords are not same"});
        }

        const user = await User.findOne({ Email });
    
        if(user ){
           return res.status(400).json({message:"Email is already Exist"});
        }
        const hashPassword = await bcrypt.hash(Password, 10)
        const newUser =  new User({
            fullname, 
            Email,
            Password : hashPassword,
        
        })
        await newUser
        .save()
        .then(()=>{
            createTokenandCookies(newUser._id, res);
            return res.status(201).json({message:"the user is sign up successfully" + newUser });
        })
    } catch (error) {
        console.log("Server problem " + error);
        res.status(500).json({message:"Check whether server problem"});
    }
}


export const Login = async(req, res) =>{
     const {Email , Password} = req.body;

     try {
        const checkEmail = await User.findOne({ Email });
        if(!checkEmail){
            return res.status(400).json({message:"the user is not present"})
        }
        const isMatch = await bcrypt.compare(Password, checkEmail.Password);
        console.log(isMatch);
        if(!isMatch){
            return res.status(400).json({message:"the password is wrong"});
        }
        createTokenandCookies(checkEmail._id, res);
        res.status(200).json({message:"the token is generated",User:{
            _id : checkEmail._id,
            fullname : checkEmail.fullname,
            Email: checkEmail.Email
        }});
     } catch (error) {
        console.log("Server problem " + error);
        res.status(501).json({message:"Check whether server problem"});
     }
}


export const logout = async(req, res)=>{
    
    try {
        res.clearCookie('jwt');
        res.status(200).json({message:"logout successfully"})
    } catch (error) {
        console.log("Server problem " + error);
        res.status(501).json({message:"Check whether server problem"});
    }
}

export const getAllUsers = async(req, res)=>{
    try {
          if (!req.user || !req.user._id) {
            return res.status(401).json({ message: "Unauthorized user" });
        }
        const LogInUser = req.user._id;
        const allUser = await User.find({_id:{$ne:LogInUser}}).select("-Password");
        res.status(201).json({allUser});
        } catch (error) {
        console.log("Error in getting All User" + error);
        res.status(502).json({message:"check in Getting All Users"});
    }
}