const auth = (req, res, next) => {
    const token = req.headers;
    console.log('req.body - ', req.body);
    console.log('token - ', JSON.stringify(token));

    next();
}

module.exports = auth;