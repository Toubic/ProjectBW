"use strict";

const express = require('express');
const app = express();

try {

    app.get('/', function (req, res) {
        res.send('Hello World');
    });

    app.listen(process.env.PORT || 3000, function () {
        console.log("Server started!");
    });
}
catch (e){
    console.log(e.message);
}