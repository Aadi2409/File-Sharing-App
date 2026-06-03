
const File = require('../model/fileSchema');

const uploadFile = async (req, res) => {
    const fileObj = {
        path: req.file.path,
        name: req.file.originalname,
    }

    try {
        const file = await File.create(fileObj);
        res.status(200).json({
            path: `http://localhost:5000/file/${file._id}`,
            message: "File uploaded successfully"
        });
    } catch (error) {
        console.error("Error uploading file:", error.message);
        res.status(500).json({ message: "Error uploading file" });
    }
}

const getFile = async (req, res) => {
    try {
        const file = await File.findById(req.params.id);
        if (!file) {
            return res.status(404).json({ message: "File not found" });
        }
        file.downloadCount += 1;
        await file.save();
        res.download(file.path, file.name);

    } catch (error) {
        console.error("Error fetching file:", error.message);
        res.status(500).json({ message: "Error fetching file" });
    }
}

module.exports = { uploadFile, getFile };