"use strict";

const express = require('express');
const app = express();

app.use(express.static('public'));

try {

    app.get('/', function (req, res) {
        res.sendFile('index.html');
    });

    app.listen(process.env.PORT || 3000, function () {
        console.log("Server started!");
    });
}
catch (e){
    console.log(e.message);
}