const express = require('express')
const app = express()

const { animals } = require('./public/data/animals')



app.get('/api/animals', (req,res) => {
    let results = animals;
    console.log(req.query);
    res.json(results)
})

app.listen(3005, () => {
    console.log(`API server now on port 3005!`)
});