const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');

const route = require('./routes');

const app = express();
const port = 3000;

// HTTP logger
app.use(morgan('combined'));

//
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  }),
);

// static
        app.use(express.static(path.join(__dirname, 'public')));

// Template engine
              app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', './src/resources/views');

      route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
