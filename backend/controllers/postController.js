const Post = require('../models/post')

exports.getAllPosts = async (req,res,next) =>{
    try{
        const posts = await Post.find();
        res.status(200).send(posts)
    }
    catch(err){
        res.status(500).send('Internal server error');
    }
}

exports.postSinglePost = async (req,res,next) =>{
    try{
        const {slug} = req.body;
        const post = await Post.findOne({slug:slug});
        if(post){
            res.status(200).send(post);
        }
       
    }
    catch(err){
        res.status(500).send('Internal server error');
    }
    
}