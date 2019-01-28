// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose = require('mongoose');
const router = require('./routes');
const config = require('./config');

const app = express();

// DB Setup
// mongoose.set('useFindAndModify', false)
mongoose.set('useCreateIndex', true);
mongoose.connect(config.MONGODB_URI, {
    useNewUrlParser: true
});

// App Setup
app.use(morgan('combined'));
app.use(bodyParser.json({
    type: '*/*'
}));

router(app);

// Server Setup
const server = http.createServer(app);
server.listen(config.PORT);
console.log(`Server listening on: ${config.URL}`);