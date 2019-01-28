const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const timeStamp = require('mongoose-timestamp');
// const bcrypt = require('bcrypt-nodejs');

// Define our model
const UserSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        trim: true
    },
    password: String
});

// Create timestamp
UserSchema.plugin(timeStamp);

// // On Save Hook, encrypt password
// UserSchema.pre('save', next => {
//     const user = this;

//     bcrypt.genSalt(10, (err, salt) => {
//         if (err) {
//             return next(err)
//         };

//         bcrypt.hash(user.password, salt, null, (err, hash) => {
//             if (err) {
//                 return next(err)
//             };

//             user.password = hash;

//             next();
//         });
//     });
// });

// Create the model class
const User = mongoose.model('User', UserSchema);

// Export the model
module.exports = User;