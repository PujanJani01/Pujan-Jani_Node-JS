const express = require('express');
const { getPatient, 
        postPatient,
        deletePatient 
      } = require('../controllers/patient.controllers.js');
      
const router = express.Router();

router.get('/', getPatient);
router.get('/:id', getPatient);
router.post('/', postPatient);
router.delete('/:id', deletePatient);

module.exports = router;