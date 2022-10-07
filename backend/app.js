
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('mongoose')
const bodyparser = require('body-parser')

const path = require('path')
const userRoutes = require('./routes/User');

const app = express()

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

mongoose.connect("mongodb+srv://ilyaskukshi:Ilyas%40786@cluster0.bn4aw.mongodb.net/?retryWrites=true&w=majority",
{
  
});



app.use("/user", userRoutes);

// app.use((req, res, next) => {
//     res.status(200).json({
//         message : 'It works!'
//     });
// });

module.exports = app;
