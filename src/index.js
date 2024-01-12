const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');

const app = express();
const path = require('path');
const port = 3000;

app.use(express.static('public'));

// HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

app.get('/', (req, res) => {
  res.render('home')
});

app.get('/news', (req, res) => {
  res.render('news')
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
