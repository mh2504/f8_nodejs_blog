const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const app = express();
const port = 3000;

// HTTP logger
// app.use(morgan('combined'));

// 
app.use(express.urlencoded({
  extended: true,
}));
app.use(express.json());

// static
app.use(express.static(path.join(__dirname, 'public')));

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

app.get('/search', (req, res) => {
  res.render('search');
});

app.post('/search', (req, res) => {
  console.log('req.body = ', req.body);
  res.send('');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});

