require('dotenv').config()
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var parentsRouter = require('./routes/parents');
var kitaRouter = require('./routes/kita');

var app = express();

// Set up mongoose connection
var mongoose = require('mongoose');
var dev_db_url = 'mongodb+srv://testuser:testtest@cluster0.xi1wj.mongodb.net/local_library?retryWrites=true';
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/parents', parentsRouter);
app.use('/kita', kitaRouter);

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.listen(port,"0.0.0.0", () => {
  console.log(`Example app listening on port ${port}!`)
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });
  
  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.json({error: err.message});
  });


module.exports = app;
