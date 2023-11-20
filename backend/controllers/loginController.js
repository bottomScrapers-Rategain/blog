const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.postRegister = async (req, res, next) => {
    const { email, username, password } = req.body;
    try {
        const userDoc = await User.findOne({ email: email });

        if (userDoc) {
            res.status(403).send('User already exists');
        }

        const user = new User({
            email:email,
            username: username,
            password: password, // Storing the hashed password
        });

        const result = await user.save();
        console.log(result);
        res.status(200).send(result);
    } catch (err) {
        console.log(err);
        // Handle error appropriately (e.g., show an error message)
        res.status(500).send('Internal Server Error');
    }
};

exports.postLogin = (req, res, next) => {

    const { email, password } = req.body;

    console.log(email);

    User.findOne({ email: email }).then(user => {
        if (!user) {
            return res.status(500).send('Internal server error');
        }

        req.session.authenticated = true;
        req.session.user = user;
        req.session.save();

        const tokenUser = {email:email}
        const token = jwt.sign(tokenUser,'secret');
        return res.json({token:token});
    }).catch(err => {
        console.log(err);
    });

}