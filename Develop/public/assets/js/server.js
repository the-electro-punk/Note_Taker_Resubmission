const express = require('express')
const app = express()

const { notes } = require('./public/assets/data/notes')

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.get('/api/notes', (req, res) => {
    let results = notes;
    // if (req.query) {
    //   results = filterByQuery(req.query, results);
    // }
    res.json(results);
});

app.post('/api/notes', (req, res) => {
// req.body is where our incoming content will be
console.log(req.body);
res.json(req.body);
});

app.listen(4001, () => {
    console.log(`API port 4001 is go!`)
});