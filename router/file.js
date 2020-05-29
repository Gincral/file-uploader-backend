const File = require("../model/file.model");
const fs = require("fs");

async function getFile(req, res, next) {
    console.log("/get file");
    try {
        res.json(await File.find(req.query));
    } catch (err) {
        res.json({ message: err });
    }
}

async function getAllFiles(req, res, next) {
    console.log("/get all files");
    try {
        res.json(await File.find());
    } catch (err) {
        res.json({ message: err });
    }
}

async function postFile(req, res, next) {
    console.log("/post file");
    const newFile = new File({
        username: req.body.username,
        date: req.body.date,
        file: { data: fs.readFileSync(req.file.path), contentType: 'text' }
    });
    try {
        const user = await newFile.save();
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
}

async function deleteFile(req, res, next) {
    console.log("/delete file");
    const params = req.query;
    try {
        const file = await File.deleteOne({ _id: params._id });
        res.json(file);
    } catch (err) {
        res.json({ message: err });
    }
}

module.exports = {
    getFile,
    getAllFiles,
    postFile,
    deleteFile,
};