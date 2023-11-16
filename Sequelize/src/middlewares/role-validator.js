
const roleValidator = (roles) => {
    return (req, res, next) => {
        const { role } = req.user;
        if (roles.includes(role)) {
            next();
        } else {
            res.status(401).json({
                message: 'Unauthorized'
            })
        }
    }
}

module.exports = roleValidator;