const file = require("../model/file.model");

async function getFile(req, res, next) {
    console.log("/get file");
    const params = req.query;
    try {
        const foundUser = await file.find({ _id: params._id });
        res.json(foundUser);
    } catch (err) {
        res.json({ message: err });
    }
}

async function getAllFiles(req, res, next) {
    console.log("/get all files");
    try {
        let foundUser;
        foundUser = await user.find();
        res.json(foundUser);
    } catch (err) {
        res.json({ message: err});
    }
}

async function postFile(req, res, next) {
    console.log("/post file");
    const body = req.body;
    const newUser = new user({
        login: body.login,
        username: body.username ? body.username : "No Name",
        password: body.password ? body.password : "",
    });
    try {
        const user = await newUser.save();
        res.json(user);
    } catch (err) {
        res.json({ message: err });
    }
}

async function deleteFile(req, res, next) {
    console.log("/delete file");
    const body = req.body;
    const newUser = new user({
        login: body.login,
        username: body.username ? body.username : "No Name",
        password: body.password ? body.password : "",
    });
    try {
        const user = await newUser.save();
        res.json(user);
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