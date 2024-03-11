const express = require("express");
const app = express();
const mongoose = require("mongoose");

require("dotenv/config");

const bodyParser = require("body-parser");
app.use(bodyParser.json());

//Import routes 

const postRoute = require('./routes/posts');

//middleware
app.use("/posts", postRoute);


app.get('/', (req,res) => {
    res.send("I'm inside a home!...");
});


// Connect the MongoDB

mongoose.connect(process.env.DB_CONNECTION)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Error connecting to MongoDB:', err));

//create a listening port

app.listen(4000);