const express = require('express');
const cors = require('cors');
const monk = require('monk');
const Filter = require('bad-words');
const rateLimit = require('express-rate-limit');

// create express application
const app = express();

// add database conn
const db = monk('localhost/meower');
const mews = db.get('mews');
const filter = new Filter();

const limiter = rateLimit({
    windowMs: 300 * 1000, // 30 seconds
    max: 1 // limit each IP to 1 requests per windowMs
});

app.use(cors());
app.use(express.json());


app.get("/", (req, res) => {
    res.json({
        message: "Meow!"
    });
});

app.get('/mews', (req, res) => {
    mews
        .find()
        .then(mews => {
            res.json(mews);
        })
});

function isValidMew(mew) {
    return mew.name && mew.name.toString().trim() !== '' && mew.content && mew.content.toString().trim() !== '';
}

// app.use(limiter);

app.post('/mews', (req, res) => {
    if (isValidMew(req.body)) {
        // insert into db
        const mew = {
            name: filter.clean(req.body.name.toString()),
            content: filter.clean(req.body.content.toString()),
            created: new Date()
        };
        console.log(mew);
        mews
            .insert(mew)
            .then(createdMew => {
                res.json(createdMew);
            });
    } else {
        res.status(422);
        res.json({
            message: "Name and content are reqd"
        })
    }
});
app.listen(5000, () => {
    console.log("Listening on http://localhost:5000");
});