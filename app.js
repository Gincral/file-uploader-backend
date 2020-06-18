const file = require("./router/file");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' })
const cors = require("cors");
require('dotenv').config();
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((req, res, next) => { 
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Origin', '*');
    next(); 
});

if (process.env.LOCAL === 'true') {
    mongoose.connect(`mongodb://localhost:27017/${process.env.DB_NAME}`, (err) => {
        if (err) throw err;
        console.log("Local DB Connected Successfully");
    });
} else {
    mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_CLUSTER}-zzir5.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`, { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
        if (err) throw err;
        console.log("Cloud DB Connected Successfully");
    });
}

app.listen(process.env.PORT || process.env.port || 5000, () => {
    console.log(`App listening on port ${process.env.PORT || 5000}.`);
});

app.get("/file", file.getFile);
app.get("/files", file.getAllFiles);
app.post("/file", upload.single('file'), file.postFile);
app.delete("/file", file.deleteFile);