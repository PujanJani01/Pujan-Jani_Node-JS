const { verifyToken } = require('../../../../middlewares/token');
let cotrollers = require('../controllers/usercart.controllers');

const usercartRoutes = (app) => {
    app.get('/usercart', verifyToken, cotrollers.usercartGet);
    app.post('/usercart', verifyToken, cotrollers.usercartAdd);
    app.put('/usercart', verifyToken, cotrollers.usercartUpdate);
    app.delete('/usercart', verifyToken, cotrollers.usercartDelete)
}

module.exports = usercartRoutes;