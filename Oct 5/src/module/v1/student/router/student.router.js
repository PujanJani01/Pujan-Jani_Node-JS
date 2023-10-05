
const controller = require('../controllers/student.controller');

const studentRoute = (app) => {
    app.get('/student/studentAll', controller.studentAll);
    app.get('/student/:id', controller.studentGet);
    app.post('/student/studentAdd', controller.studentAdd);
};

module.exports = studentRoute;
