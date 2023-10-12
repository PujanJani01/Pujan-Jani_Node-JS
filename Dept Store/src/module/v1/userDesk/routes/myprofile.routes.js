let cotrollers = require('../controllers/myprofile.controllers');

const userDeskRoutes = (app) => {
    app.get('/myprofile', cotrollers.myprofileGet);
    app.put('/myprofile', cotrollers.myprofileUpdate);
    app.delete('/myprofile', cotrollers.myprofileDelete)
}

module.exports = userDeskRoutes;