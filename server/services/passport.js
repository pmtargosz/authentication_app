const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local');
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const config = require('../config');

// Create Local strategy
const localOptions = {
    usernameField: 'email',
}
const localLogin = new LocalStrategy(localOptions, async (email, password, done) => {
    // Verify this username and password, call done with the user 
    // if it is he correct username and password 
    // otherwise, call done with false
    try {

        const user = await User.findOne({
            email: email
        })

        if (!user) {
            return done(null, false)
        }

        // compere passwords - is 'password' equal to user.passowrd

        bcrypt.compare(password, user.password, (err, match) => {
            if (err) {
                return done(err);
            }

            if (!match) {
                return done(null, false)
            }

            return done(null, user)
        })

    } catch (err) {
        return done(err);
    }
})

// Set up options for JWT strategy
const jwtOptions = {
    jwtFromRequest: ExtractJwt.fromHeader('authorization'),
    secretOrKey: config.SECRET_STRING
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, async (payload, done) => {
    // See if the user ID in the payload exists in our database
    // If it does, call 'done' whit that user object
    // otherwise, call done without a user object
    try {
        const user = await User.findById(payload.sub)

        if (user) {
            return done(null, user);
        } else {
            return done(null, false)
        }
    } catch (err) {
        return done(err, false);
    }

});

// Tell passport to use this strategy
passport.use(jwtLogin);
passport.use(localLogin);