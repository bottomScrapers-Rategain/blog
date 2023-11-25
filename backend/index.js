const express = require('express');
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const searchRoutes=require('./routes/search')
const MONGODB_URI = 'mongodb+srv://adnan2601:adnan@cluster0.gsefr4w.mongodb.net/rategain';

const app = express();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions',
});

const authRoutes = require('./routes/auth')
const postRoutes = require('./routes/posts');
const dashboardRoutes=require('./routes/dashboard')
const adRoutes=require('./routes/ad')
const { protect } = require('./middleware/isAuth');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(multer({ storage: fileStorage }).single('file'));
// app.use(express.static("public"));
// app.use('/files', express.static(path.join(__dirname, 'files')));
app.use(session({ secret: 'secret', resave: false, saveUninitialized: false, store: store }));
// app.use(flash());
app.use(postRoutes);
app.use(authRoutes);
app.use(dashboardRoutes)
app.use(searchRoutes)
app.use(adRoutes)
app.get('/protected-route', protect, (req, res) => {
  res.json({ message: 'This is a protected route', user: req.user });
});



mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }).then(result => {
    console.log('Connected to MongoDB');
    app.listen(5000);
  }).catch(err => { console.log(err); });