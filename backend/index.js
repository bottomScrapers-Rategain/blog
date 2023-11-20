const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const MONGODB_URI = 'mongodb+srv://adnan2601:adnan@cluster0.gsefr4w.mongodb.net/rategain';

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions',
});

const loginRoutes = require('./routes/Login')

app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({ storage: fileStorage }).single('file'));
// app.use(express.static("public"));
// app.use('/files', express.static(path.join(__dirname, 'files')));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false, store: store }));
// app.use(flash());

app.use(loginRoutes);



mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(result => {
    console.log('Connected to MongoDB');
    app.listen(5000);
  }).catch(err => { console.log(err); });