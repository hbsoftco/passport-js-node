const express = require('express');
const authRoutes = require('./routes/auth-routes');
const passportSetup = require('./config/passport-setup');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

// Set up view engine
app.set('view engine', 'ejs');
// connect to mongodb
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connect to mongodb');
});

// Set up routes
app.use('/auth', authRoutes);

// create home route
app.get('/', (req, res) => {
    res.render('home');
});

app.listen(4001, () => {
    console.log('app now is runnig');

});