const express = require('express');
const { doctorAll,
        doctorGet,
        doctorAdd,
        doctorUpdate, 
        doctorDelete 
      } = require('../controllers/doctor.controllers.js');
    
      
const router = express.Router();

router.route('/')
.get(doctorAll)
.post(doctorAdd);

router.route('/:id')
.get(doctorGet)
.put(doctorUpdate)
.delete(doctorDelete);

module.exports = router;