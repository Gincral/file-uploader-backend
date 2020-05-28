const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    username: String,
    date: Date,
    file: {data: Buffer, contentType: String},
});

const File = mongoose.model("File", fileSchema);

module.exports = File;