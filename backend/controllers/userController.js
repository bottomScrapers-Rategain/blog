const User = require('../models/user')

exports.getAllUsers = async (req,res,next) =>{
    try{
        const users = await User.find();
        res.status(200).send(users)
    }
    catch(err){
        res.status(500).send('Internal server error');
    }
}

exports.getUserByUid = async (req, res) => {
    try {
      const { uid } = req.body; // Access uid from req.body
      console.log(uid);
      const user = await User.findOne({ _id:uid });
  
      if (!user) {
        return res.status(500).json({ message: 'User not found' });
      }
  
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  
