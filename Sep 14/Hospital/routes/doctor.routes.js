const express = require('express');
const doctorControllers = require('../controllers/doctor.controllers.js');
const router = express.Router();

router.get('/', doctorControllers.getDoctor);
router.get('/:id', doctorControllers.getDoctor);
router.post('/', doctorControllers.postDoctor);
router.put('/:id', doctorControllers.putDoctor);
router.patch('/:id', doctorControllers.patchDoctor);
router.delete('/:id', doctorControllers.deleteDoctor);

module.exports = router;