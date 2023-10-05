const express = require('express');
const { getDoctor,
        postDoctor,
        deleteDoctor 
      } = require('../controllers/doctor.controllers.js');
      
const router = express.Router();

router.route('/')
.get(getDoctor)
.post(postDoctor);

router.route('/:id')
.get(getDoctor)
.delete(deleteDoctor);

module.exports = router;