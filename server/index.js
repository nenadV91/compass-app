const express = require('express');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const personRoutes = require('./routes/personRoutes');


const app = express();
dotenv.config();

const {
  DB_HOST,
  DB_NAME,
  NODE_ENV
} = process.env;


if(!DB_HOST) {
  throw new Error('Please provide database host name.')
}

if(!DB_NAME) {
  throw new Error('Please provide database name.')
}


// Mongodb connection
const mongoURI = `mongodb://${DB_HOST}/${DB_NAME}`;
console.log(mongoURI)
mongoose.connect(mongoURI, { useNewUrlParser: true });
mongoose.set('useCreateIndex', true);
mongoose.connection.on('error', error => console.log(error));
mongoose.connection.once('open', () => console.log("Connected to mongo server."));


// Express middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
app.use('/person', personRoutes);


// Set directory for static files, catch all routes and serve index.html
if(NODE_ENV !== 'development') {
  app.use(express.static(path.resolve(__dirname, '..', 'client', 'build')));
  app.get('*', (req, res) => res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html')))
}


// Starting the server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Server running on port ${port}.`));