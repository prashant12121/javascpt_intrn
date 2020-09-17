const express = require('express');
const app = express();
const port = 8900;
const mongo = require('mongodb');
const bodyParser = require('body-parser');
const MongoClient = mongo.MongoClient;
const mongoUrl = "mongodb://localhost:27017";
var cors = require('cors');
let db;
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());





app.get('/restaurantdetailpercity/:cityid', (req, res) => {
    var city = req.params.city;

    db.collection('city').find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);

    })
})

mongo.MongoClient.connect(mongoUrl, (err, client) => {
    if (err) throw err;
    db = client.db('edureka');

    app.listen(port, (err) => {
        if (err) throw err;
        console.log(`server is running on port ${port}`)
    })
})