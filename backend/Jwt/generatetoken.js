import jwt from 'jsonwebtoken';

const createTokenandCookies = (userId , res)=>{
    const Token = jwt.sign({userId}, process.env.TOKEN_ID,{
        expiresIn : "1d",
    });

    res.cookie("jwt", Token,{
        httpOnly: true,
        secure:true,
        sameSite:'strict',
    } )
}

export default createTokenandCookies;