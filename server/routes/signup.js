const Authentication = require('../controllers/authentication');

const signup = app => {
    app.post('/signup', Authentication.signup);
};

module.exports = signup;