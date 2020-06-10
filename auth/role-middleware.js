module.exports = role => {
    return function (req, res, next) {
        if (req.decodedJWT.role && req.decodedJWT.role === role) {
            next()
        } else {
            res.sendStatus(401)
        }
    }
}