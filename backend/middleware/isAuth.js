import jwt from "jsonwebtoken"

const isAuth = async(req, res, next)=>{
  try{
    let {token} = req.cookies
    if(!token){
      return res.status(400).json({message:"User doesn't have token"}) 
    }
    let verifyToekn = jwt.verify(token, process.env.JWT_SECRET)

    if(!verifyToekn){
      return res.status(400).json({message:"User doesn't have valid token"})
    }
    req.userId = verifyToekn.userId
    next()

  }catch (error){
        return res.status(500).json({message:`isAuth error: ${error.message}`})

  }
}

export default isAuth