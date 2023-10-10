
const controller = require('../controllers/student.controller');

const studentRoute = (app) => {
    app.get('/student', controller.studentAll);
    app.get('/student/:id', controller.studentGet);
    app.post('/student', controller.studentAdd);
    app.put('/student/:id', controller.studentUpdate);
    app.delete('/student/:id', controller.studentDelete);
};

module.exports = studentRoute;
