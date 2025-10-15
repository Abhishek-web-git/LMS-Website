import uploadOnCloudinary from "../config/cloudinary.js"
import User from "../model/userModel.js"


export const getCurrentUser = async (req,res) =>{
  try{
    const user = await user.findById(req.userId).select("-password")
    if(!user){
      return res.status(404).json({message: "User not found"})
    }
    return res.status(200).json(user)

  }catch (error){
    return res.status(500).json({message: `GetCurrentUser error ${error}` })

  }

}

export const updateProfile = async (req, res) => {
  try{
    const userId = req.userId
    const {description, name} = req.body
    let photoUrl
    if(req.file){
      photoUrl = await uploadOnCloudinary(req.file.path)
    }
    const user = await User.findOneAndUpdate(userId, {name, description, photoUrl})

    if(!user){
      return res.status(404).json({message:"User not Found"})
    }
    
    await user.save()

    return res.status(200).json(user)

  } catch(error){
        return res.status(500).json({message: `update Profile error ${error}` })


  }
}