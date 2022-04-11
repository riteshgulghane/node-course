const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const token = req.headers['authorization'].replace("Bearer ", '');

    jwt.verify(token, process.env.secret, (err, user) => {
        if (user) {
            req.user = user;
            next();
        } else
            res.send(404);
    });


}

module.exports = auth;