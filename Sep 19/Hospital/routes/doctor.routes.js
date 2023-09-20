const express = require('express');
const { getDoctor,
        postDoctor,
        putDoctor,
        patchDoctor, 
        deleteDoctor 
      } = require('../controllers/doctor.controllers.js');
      
const router = express.Router();

router.route('/')
.get(getDoctor)
.post(postDoctor);

router.route('/:id')
.get(getDoctor)
.put(putDoctor)
.patch(patchDoctor)
.delete(deleteDoctor);

module.exports = router;