const post = require("../models/post");
const User = require("../models/user");

exports.selectContextualAdCategory=async(req,res)=>{
    const {postId}=req.body;
    const foundUser = await User.findOne({ _id: userId });
    const post=await blog.findOne({_id:postId})
    if(!post){
        return res.status(404).json({message:"Post not foundd"})
    }
    //parse the categories from the content
    return res.status(200).json({message:" here are the categories",categories:"media,betting,pet"})
}

exports.selectBehaviouralAdCategory = async (req, res) => {
    try {
        const { userId } = req.body;

        // Check if the user exists
        const foundUser = await User.findOne({ _id: userId });
        if (!foundUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        const userInteractions = await UserInteractions.find({ userId });

        // const topCategories = getTopBlogCategories(userInteractions);
        const userInterests=foundUser.interests
        const topCategories = categoryArray.slice(0, 3);
        res.status(200).json({ topCategories });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const getTopBlogCategories = (userInteractions) => {
    const categoryCounts = {};

    userInteractions.forEach((interaction) => {
        const { pageId } = interaction;
        if (pageId) {
            categoryCounts[pageId] = (categoryCounts[pageId] || 0) + 1;
        }
    });

    const categoryArray = Object.entries(categoryCounts).map(([category, count]) => ({
        category,
        count,
    }));

    categoryArray.sort((a, b) => b.count - a.count);

    const topCategories = categoryArray.slice(0, 3);

    return topCategories;
};