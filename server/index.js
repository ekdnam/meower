const express = require('express');

// create express application
const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "Meow!"
    });
});

app.post('/mews', (req, res) => {
    console.log(req.body);
});
app.listen(5000, () => {
    console.log("Listening on http://localhost:5000");
});