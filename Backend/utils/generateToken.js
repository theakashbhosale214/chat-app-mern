import jwt from 'jsonwebtoken'

const generateTokenAndSetCookie = (userId, res ) => {
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn:'15d'
    })

    res.cookie("jwt",token,{
        maxAge:15 * 24 * 60 * 60 * 1000,
        httpOnly : true, //we added this cookie so that it is not accsible to javascript
        sameSite:"strict"
    })
}

export default generateTokenAndSetCookie;