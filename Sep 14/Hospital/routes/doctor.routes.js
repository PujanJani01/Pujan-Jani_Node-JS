const express = require('express');
const doctorControllers = require('../controllers/doctor.controllers.js');
const router = express.Router();

router.get('/doctors', doctorControllers.getDoctor);
router.get('/doctors/:id', doctorControllers.getDoctor);
router.post('/doctors', doctorControllers.postDoctor);
router.put('/doctors/:id', doctorControllers.putDoctor);
router.patch('/doctors/:id', doctorControllers.patchDoctor);
router.delete('/doctors/:id', doctorControllers.deleteDoctor);

module.exports = router;