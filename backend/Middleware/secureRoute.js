import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';


const secureRoute = async(req,res, next)=>{
    try {
        const token = req.cookies.jwt;
        if(!token){

            return res.status(401).json({message:"Unauthorized User!!"});
        }
        const verified = jwt.verify(token, process.env.TOKEN_ID);
        if(!verified){
            return res.status(401).json({message:"Invalid User"});
        }
        const foundUser = await User.findById(verified.userId).select("-Password");
        if(!foundUser){
            return res.status(401).json({message:"Users not found"});
        }
        req.user =foundUser
        next();
    
    } catch (error) {
        console.log(error);
        res.status(501).json({message:"Problem in secureRoute serverfile"})
    }
}
export default secureRoute;