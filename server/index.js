const express = require('express');

// create express application
const app = express();

app.listen(5000, () => {
    console.log("Listening on http://localhost:5000");
});