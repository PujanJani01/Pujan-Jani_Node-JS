const express = require('express');
const { getPrescription, 
        postPrescription,
        deletePrescription, 
        putPrescription
      } = require('../controllers/prescription.controllers.js');
      
const router = express.Router();

router.get('/', getPrescription);
router.get('/:id', getPrescription);
router.post('/', postPrescription);
// router.put('/:id', putPrescription);
router.delete('/:id', deletePrescription);

module.exports = router;