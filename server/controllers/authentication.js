const bcrypt = require('bcryptjs');
const User = require('../models/user');

exports.signup = async (req, res, next) => {
    const {
        email,
        password
    } = req.body;

    if (!email || !password) {
        return res.status(422).send({
            error: 'You must provide email and password'
        })
    }

    // See if a user with the given email exists
    try {
        const findUser = await User.findOne({
            email
        })

        // If a user with email does exists, retun error 
        if (findUser) {
            return res.status(422).send({
                error: 'Email is in use'
            })
        }

    } catch (err) {
        return next(err);
    }

    const user = new User({
        email,
        password
    });

    bcrypt.genSalt(10, (err, salt) => {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, async (err, hash) => {
            if (err) return next(err);
            //Hash Password
            user.password = hash;
            // If a user with email does NOT exists, create and save user record
            try {
                const newUser = await user.save();

                // Respond to request indicating the user was created 
                res.json({
                    sucess: true
                });
                next();
            } catch (err) {
                return next(err);
            }
        });
    });
}