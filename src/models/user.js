const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let UserSchema = mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Invalidd Email!')
            }
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain password.')
            }
            var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
            if (!regularExpression.test(value)) {
                throw new Error("password should contain atleast one number and one special character");
            }
        }
    },
    token: {
        type: String,
        // required: true
    }
}, {
    timestamps: true
})

UserSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.hash(this.password, 10, (err, hash) => {
            this.password = hash;
            next();
        })
    }
})

UserSchema.method.generateAuthToken = async function () {
    const user = this;
    const token = jwt.sign(user, process.env.secret);
    user.token = token;
    await user.save();
    return token;
}

UserSchema.static.findByCredentials = async function (email, password) {
    const user = await User.findOne({ email });
    if(!user){
        throw 'unable to login!';
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        throw 'Password does not matched!';
    }

    return user;
}

module.exports = mongoose.model('User', UserSchema);