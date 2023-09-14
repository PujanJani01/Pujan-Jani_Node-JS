const express = require('express');
const patientControllers = require('../controllers/patient.controllers.js');
const router = express.Router();

router.get('/', patientControllers.getPatient);
router.get('/:id', patientControllers.getPatient);
router.post('/', patientControllers.postPatient);
router.put('/:id', patientControllers.putPatient);
router.patch('/:id', patientControllers.patchPatient);
router.delete('/:id', patientControllers.deletePatient);

module.exports = router;