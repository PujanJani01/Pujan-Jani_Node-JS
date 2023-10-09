const express = require('express');
const { prescriptionAll, 
        prescriptionGet, 
        prescriptionAdd, 
        prescriptionDelete 
      } = require('../controllers/prescription.controllers.js');
      
const router = express.Router();

router.get('/', prescriptionAll);
router.get('/:id', prescriptionGet);
router.post('/', prescriptionAdd);
router.delete('/:id', prescriptionDelete);

module.exports = router;