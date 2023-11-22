const User = require('../models/user');
exports.getUserDetails = async (req, res, next) => {
    const {username}=req.body;
    try{
        const details=await User.findOne({username:username})
        res.status(200).send(details)
    }catch(err){
        res.status(500).send('Internal server error');
    }
}