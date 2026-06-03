const express  = require('express');
const router = express.Router();
const upload = require('../utils/upload');
const {uploadFile, getFile} = require('../controller/fileController');

router.post('/upload',upload.single('file') ,uploadFile);
router.get('/file/:id', getFile);

module.exports = router;