const express = require('express');
const patientControllers = require('../controllers/patient.controllers.js');
const router = express.Router();

router.get('/patients', patientControllers.getPatient);
router.get('/patients/:id', patientControllers.getPatient);
router.post('/patients', patientControllers.postPatient);
router.put('/patients/:id', patientControllers.putPatient);
router.patch('/patients/:id', patientControllers.patchPatient);
router.delete('/patients/:id', patientControllers.deletePatient);

module.exports = router;