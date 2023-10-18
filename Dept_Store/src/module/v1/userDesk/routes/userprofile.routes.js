let cotrollers = require('../controllers/userprofile.controllers');
let {verifyToken} = require('../../../../middlewares/token');

const userdeskRoutes = (app) => {
    app.get('/myprofile', verifyToken, cotrollers.myprofileGet);
    app.put('/myprofile', verifyToken, cotrollers.myprofileUpdate);
    app.delete('/myprofile', verifyToken, cotrollers.myprofileDelete)
}

module.exports = userdeskRoutes;