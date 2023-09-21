const express = require('express')
const multer  = require('multer')

const app = express()

const storage = multer.diskStorage({
        destination: function (req, file, cb) {
                cb(null, 'uploads/')
        },
        filename: function (req, file, cb) {
            cb(null, file.originalname + '-' + Date.now())
        }
})
const upload = multer({ storage })

app.use(express.urlencoded({ extended: true }))

app.post("/upload", upload.single("file"), (req, res) => {
    let file = req.file;
    res.send(file);
});

app.listen(3000, () => console.log("Server started on port 3000"));
