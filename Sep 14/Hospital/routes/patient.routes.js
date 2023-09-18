const express = require('express');
const { getPatient, 
        postPatient,
        putPatient, 
        patchPatient, 
        deletePatient 
      } = require('../controllers/patient.controllers.js');
      
const router = express.Router();

router.get('/', getPatient);
router.get('/:id', getPatient);
router.post('/', postPatient);
router.put('/:id', putPatient);
router.patch('/:id', patchPatient);
router.delete('/:id', deletePatient);

module.exports = router;