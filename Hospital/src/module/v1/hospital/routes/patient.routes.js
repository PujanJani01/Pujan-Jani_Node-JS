const express = require('express');
const { patientAll, 
        patientGet, 
        patientAdd, 
        patientUpdate, 
        patientDelete 
      } = require('../controllers/patient.controllers.js');
      
const router = express.Router();

router.get('/', patientAll);
router.get('/:id', patientGet);
router.post('/', patientAdd);
router.put('/:id', patientUpdate);
router.delete('/:id', patientDelete);

module.exports = router;