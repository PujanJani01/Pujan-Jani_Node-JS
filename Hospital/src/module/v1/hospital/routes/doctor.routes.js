const express = require('express');
const { getDoctor,
        postDoctor,
        putDoctor,
        deleteDoctor 
      } = require('../controllers/doctor.controllers.js');
      
const router = express.Router();

router.route('/')
.get(getDoctor)
.post(postDoctor);

router.route('/:id')
.get(getDoctor)
.put(putDoctor)
.delete(deleteDoctor);

module.exports = router;