const mongoose=require('mongoose')
const User=require('../models/user')
exports.addToSearch=async(req,res)=>{
    const {username,searchTerm}=req.body;
    try {
        
        const user=await User.findOne({username:username})
        if(!user){
            res.status(400).send("User not found")

        }
        user.searchterms.push(searchTerm);
        await user.save()
        res.status(200).send("Search term addded")
    } catch (error) {
        res.status(500).send('Internal server error')        
    }
}