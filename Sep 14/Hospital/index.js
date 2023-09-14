const express = require('express');
const app = express();
const port = 3000;

const doctorRoutes = require('./routes/doctor.routes.js');
const patientRoutes = require('./routes/patient.routes.js');

app.use(express.json());

app.use('/hospital', doctorRoutes);
app.use('/hospital', patientRoutes); 

app.use("/", (req, res) =>{
    res.send("Welcome to the hospital!")
})


app.listen(port, () => console.log(`Server listening on port ${port}`));