const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    username: String,
    file: String,
});

const File = mongoose.model("File", fileSchema);

module.exports = File;