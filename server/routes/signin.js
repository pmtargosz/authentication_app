const Authentication = require('../controllers/authentication');
const passport = require('passport');
const passportServices = require('../services/passport');

const requireSginin = passport.authenticate('local', {
    session: false
})

const signin = app => {
    app.post('/signin', requireSginin, Authentication.signin);
};

module.exports = signin;