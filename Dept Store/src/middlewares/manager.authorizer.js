
const managerAuthorizer = (req, res, next) => {
    if (req.user.role !== 'manager') {
        return res.status(401).send({ error: 'Not authorized to access this resource' })
    }
    next()
}

module.exports = managerAuthorizer;