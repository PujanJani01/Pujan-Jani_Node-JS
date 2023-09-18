const express = require('express');
const router = express.Router();
const doctorRoutes = require('./doctor.routes.js');
const patientRoutes = require('./patient.routes.js');

router.use('/doctors', doctorRoutes);
router.use('/patients', patientRoutes);
router.use('/', (req, res) => res.send('Welcome to Hospital Server'));

module.exports = router;