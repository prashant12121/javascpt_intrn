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

app.get('/restaurantdetailpercit/:city', (req, res) => {
    var cityy = req.params.city;
    console.log(cityy)
    var query = { city: cityy };
    db.collection('restaurant').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})



app.get('/restauranthome/:cityid', (req, res) => {
    console.log(req.query.sort)
    if (req.query.sort) {
        var sort = { cost: parseInt(req.query.sort) };
        console.log(sort)
    }
    else {
        var sort = {};
        console.log(sort)
    }

    if (req.query.cuisine && req.query.lcost && req.query.hcost) {

        var query = {
            "Cuisine.cuisine": req.query.cuisine,
            cost: {
                $gt: parseInt(req.query.lcost),
                $lt: parseInt(req.query.hcost)
            }
        }
    }
    else if (req.query.lcost && req.query.hcost) {

        var query = {
            cost: {
                $gt: parseInt(req.query.lcost),
                $lt: parseInt(req.query.hcost)
            }
        }
    }
    else if (req.query.cuisine) {

        var query = { "Cuisine.cuisine": req.query.cuisine }
    }


    db.collection('restaurant').find(query).sort(sort).toArray((err, result) => {
        if (err) throw err;
        res.send(result);

    })
})







app.get('/restauranthomie/:city/:mealtype', (req, res) => {
    console.log(req.query.sort)
    console.log("city");
    console.log(req.params.city)
    if (req.query.sort) {
        var sort = { cost: parseInt(req.query.sort) };
        console.log(sort)
    }
    else {
        var sort = {};
        console.log(sort)
    }

    if (req.query.cuisine && req.query.lcost && req.query.hcost) {

        var query = {
            city: req.params.city,
            "type.mealtype": req.params.mealtype,
            "Cuisine.cuisine": req.query.cuisine,
            cost: {
                $gt: parseInt(req.query.lcost),
                $lt: parseInt(req.query.hcost)
            }
        }
    }
    else if (req.query.lcost && req.query.hcost) {

        var query = {
            city: req.params.city,
            "type.mealtype": req.params.mealtype,
            cost: {
                $gt: parseInt(req.query.lcost),
                $lt: parseInt(req.query.hcost)
            }
        }
    }
    else if (req.query.cuisine) {

        var query = {
            city: req.params.city,
            "type.mealtype": req.params.mealtype,
            "Cuisine.cuisine": req.query.cuisine
        }
    }
    else {

        var query = {
            city: req.params.city,
            "type.mealtype": req.params.mealtype,
        }
    }
    console.log(query);
    db.collection('restaurant').find(query).sort(sort).toArray((err, result) => {
        if (err) throw err;
        res.send(result);

    })
})




app.get('/restaurantdetail/:id', (req, res) => {
    console.log(req.params.id);
    var query = { _id: req.params.id }
    db.collection('restaurant').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})


app.get('/restaurantlist/:city/:mealtype', (req, res) => {
    var query;
    var sort = {}

    if (req.query.cuisine && req.query.sort && req.query.lcost && req.query.hcost) {
        query = {
            city: req.params.city,
            cost: {
                $gt: parseInt(req.query.lcost),
                $lt: parseInt(req.query.hcost)
            },
            "type.mealtype": req.params.mealtype,
            "Cuisine.cuisine": req.query.cuisine
        }
        sort = { cost: parseInt(req.query.sort) };
    }

    else if (req.query.sort && req.query.lcost && req.query.hcost) {
        query = {
            city: req.params.city,
            cost: {
                $gt: parseInt(req.query.lcost),
                $lt: parseInt(req.query.hcost)
            },
            "type.mealtype": req.params.mealtype,
            "Cuisine.cuisine": req.query.cuisine
        }
        sort = { city: parseInt(req.query.sort) }
    }


    else if (req.query.cuisine && req.query.lcost && req.query.hcost) {
        query = {
            city: req.params.city,
            "type.mealtype": req.params.mealtype,
            cost: {
                $gt: parseInt(req.query.lcost),
                $lt: parseInt(req.query.hcost)
            },
            "Cuisine.cuisine": req.query.cuisine
        }
    }

    else if (req.query.sort && req.query.cuisine) {
        sort = {
            city: parseInt(req.query.sort)
        }
        query = {
            city: req.params.city,
            "type.mealtype": req.params.mealtype,
            "Cuisine.cuisine": req.query.cuisine
        }
    }


    else if (req.query.cuisine) {
        query = {
            city: req.params.city,
            "type.mealtype": req.params.mealtype,
            "Cuisine.cuisine": req.query.cuisine
        }
    }


    else if (req.query.lcost && req.query.hcost) {
        query = {
            city: req.params.city,
            "type.mealtype": req.params.mealtype,
            cost: {
                $gt: parseInt(req.query.lcost),
                $lt: parseInt(req.query.hcost)
            }
        }
    }

    else if (req.query.sort) {
        sort = {
            cost: parseInt(req.query.sort)
        }
        query = {
            city: req.params.city,
            "type.mealtype": req.params.mealtype
        }
    }
    else {
        query = {
            city: req.params.city,
            "type.mealtype": req.params.mealtype
        }
        sort = { cost: 1 };
    }


    db.collection('restaurant').find(query).sort(sort).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })

})



app.get('/location', (req, res) => {
    db.collection('city').find({}).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})


app.get('/cuisine', (req, res) => {
    db.collection('cuisine').find({}).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})


app.get('/mealtype', (req, res) => {
    db.collection('mealtype').find({}).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})



//place  order
app.post('/placeorder', (req, res) => {
    console.log(req.body);
    db.collection('orders').insert(req.body, function (err, result) {
        if (err) throw err;
        console.log('orderplaced')
    })
})

app.get('/allorders', (req, res) => {
    db.collection('orders').find({}).toArray((err, result) => {
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

