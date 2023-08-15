const express = require('express');
const morgan = require('morgan')
const PORT = 8080;

const app = express();
// app.use((req, res, next) => {
//   console.log('new request in middleware', req);
//   next();
// } )

app.use(morgan('dev'));

// app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  const templateVars = {
    user: 'Eric',
    message: 'Hello World',
    allowed: true,
    list: [0,1,2,3,4,5]
  }

  res.render('index', templateVars)
});

app.get('/about', (req, res) => {
  res.send('this is the about path');
});

app.get('/stuff', (req, res) => {
  res.send('this is the stuff route');
});

app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`)
});
