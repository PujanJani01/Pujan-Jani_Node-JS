const express = require('express')
const multer = require('multer')

const app = express()

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
})

const upload = multer({
    storage: storage,
    limits: { fileSize: 1000000 },
    fileFilter: function (req, file, cb) {
        const type = file.mimetype.split('/')[0];
        if (type !== 'image') return cb(new Error('Only images are allowed'), false)
        cb(null, true)
    }
}).single('file');

app.use(express.static('public'));

app.post("/upload", (req, res) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            return res.status(500).json(err)
        }
        else if (err) {
            return res.status(500).json(err)
        }
        res.send(req.file);
    })
});

app.listen(3000, () => console.log("Server started on port 3000"));
