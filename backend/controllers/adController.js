const Post = require("../models/post");
const User = require("../models/user");
const axios=require('axios')
exports.selectContextualAdCategory=async(req,res)=>{
    const {postId}=req.body;
    const post=await Post.findOne({_id:postId})
    if(!post){
        return res.status(404).json({message:"Post not foundd"})
    }
    const response = await axios.post("http://127.0.0.1:6000/getads", {
        interestList: ["media", "betting", "pet"],
        });
    //parse the categories from the content
    const ads=await response.data
    return res.status(200).json({ads})
}

exports.selectBehaviouralAdCategory = async (req, res) => {
    try {
        const { userId } = req.body;

        // Check if the user exists
        const foundUser = await User.findOne({ _id: userId });
        if (!foundUser) {
            return res.status(404).json({ message: 'User not found' });
        }

        const userInterests = foundUser.interests;
        const topCategories = userInterests.slice(0, 3);

        // Fetch ads asynchronously
        const response = await axios.post("http://127.0.0.1:6000/getads", {
            interestList: topCategories,
        });

        // Check if the status code is not in the 2xx range
        if (response.status < 200 || response.status >= 300) {
            throw new Error(`Error fetching ads: ${response.statusText}`);
        }

        // Access the response data directly
        const ads = response.data;

        res.status(200).json({ ads });
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