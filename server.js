const express = require('express');
// const hbs = require('hbs');

const port = process.env.PORT || 3004;
var app = express();

// app.set('view engine', 'hbs');
// http://localhost:3004/help.html
app.use(express.static(__dirname + '/public'));

// My own middleware
app.use((req, res, next) => {
  const now = new Date().toString();
  console.log(`${now}: ${req.method} ${req.url}`);
  next();
})

app.get('/', function (req, res) {
  res.send({name: "Boris"});
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: "Page title",
    currentYear: new Date().getFullYear()
  });
});

app.listen(port);
