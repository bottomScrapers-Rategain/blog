const User = require('../models/user');
const bcrypt = require('bcryptjs');


exports.postRegister = async (req, res, next) => {
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;

    try {
        const userDoc = await User.findOne({ name: username });

        if (userDoc) {
            console.log('User already exists');
            console.log(userDoc);
            return res.redirect('/signup');
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Hashing the password

        const user = new User({
            email:email,
            username: username,
            password: hashedPassword, // Storing the hashed password
        });

        const result = await user.save();
        console.log(result);
        res.redirect('/');
    } catch (err) {
        console.log(err);
        // Handle error appropriately (e.g., show an error message)
        res.status(500).send('Internal Server Error');
    }
};

exports.postLogin = (req, res, next) => {

    if (req.session.isLoggedIn) {
        return res.redirect('/');
    }

    const name = req.body.name;
    const password = req.body.password;
    console.log(password);

    User.findOne({ name: name }).then(user => {
        if (!user) {
            req.flash('error', 'Invalid username or password.');
            return res.redirect('/');
        }

        req.session.isLoggedIn = true;
        req.session.user = user;
        return req.session.save(err => {
            console.log(err);
            res.redirect('/');
        });
    }).catch(err => {
        console.log(err);
    });

}