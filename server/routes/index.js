const passport = require('passport');
const passportServices = require('../services/passport');

const requireAuth = passport.authenticate('jwt', {
    session: false
})

module.exports = app => {
    app.get('/', requireAuth, (req, res) => {
        res.send({
            hi: 'there'
        })
    })
    require('./signup')(app);
    require('./signin')(app);
}