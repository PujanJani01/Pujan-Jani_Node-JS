const express = require('express');
const router = express.Router();
const doctorRoutes = require('./doctor.routes.js');
const patientRoutes = require('./patient.routes.js');
const prescriptionRoutes = require('./prescription.routes.js');
const { doctorAuthorizer} = require('../middlewares/doctorAuthorizer.js');
const { patientAuthorizer} = require('../middlewares/patientAuthorizer.js');

router.use('/doctors' , doctorAuthorizer ,doctorRoutes);
router.use('/patients', patientAuthorizer, patientRoutes);
router.use('/prescription', doctorAuthorizer, prescriptionRoutes);

module.exports = router;