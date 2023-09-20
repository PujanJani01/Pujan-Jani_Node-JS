const express = require('express');
const router = express.Router();
const doctorRoutes = require('./doctor.routes.js');
const patientRoutes = require('./patient.routes.js');
const { doctorAuthorizer } = require('../middlewares/doctor.middleware.js');
const { patientAuthorizer } = require('../middlewares/patient.middleware.js');
const { logger } = require('../middlewares/logger.js');

router.use('/doctors', logger, doctorAuthorizer, doctorRoutes);
router.use('/patients',logger, patientAuthorizer, patientRoutes);

module.exports = router;