const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const port = 3000;

// basic syntax for custom middleware
// app.use((req, res, next) => {
//   console.log('new request in middleware',req);
//   next();
// });
app.set('view engine', 'ejs');

app.use(morgan('dev'));
// app.use(bodyParser.json());

app.get('/', (req, res) => {
  const templateVars = {
    user: 'Eric',
    message: 'Hello World',
    allowed: false,
    list: [0, 1, 2, 3, 4, 5]
  }
  res.render('index', templateVars)
});

app.get('/stuff', (req, res) => {
  res.send('this is some stuff');
});

app.post('/things', (req, res) =>{
  console.log('req', req);

  if( req.body){
    return res.status(200).send('ok');
  }
  res.status(500).send('its not okay');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});