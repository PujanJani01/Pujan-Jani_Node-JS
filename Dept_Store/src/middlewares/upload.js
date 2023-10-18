const multer = require('multer');
const fs = require('fs');
require('dotenv').config();

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        if (!fs.existsSync(process.env.UPLOAD_DIR)) fs.mkdirSync(process.env.UPLOAD_DIR, { recursive: true });
         console.log(process.env.UPLOAD_DIR);
        cb(null, process.env.UPLOAD_DIR)
    },
    filename: function (req, file, cb) {
        filename = Date.now() + '-' + file.originalname;
        cb(null, filename);
        req.body.prd_imgs = filename;
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
});


module.exports = upload;