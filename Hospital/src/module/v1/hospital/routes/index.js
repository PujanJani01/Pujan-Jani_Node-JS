const express = require('express');
const router = express.Router();
const doctorRoutes = require('./doctor.routes.js');
const patientRoutes = require('./patient.routes.js');
const { doctorAuthorizer} = require('../middlewares/doctorAuthorizer.js');
const { patientAuthorizer} = require('../middlewares/patientAuthorizer.js');

router.use('/doctors' , doctorAuthorizer ,doctorRoutes);
router.use('/patients', patientAuthorizer, patientRoutes);

module.exports = router;