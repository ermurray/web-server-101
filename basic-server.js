const http = require('http');
const PORT = 3000;

// routes
const getHome = (req, res) => {
  res.end('this is a get request to "/"');
}

const getStuff = (req, res) => {
  res.end('this is a request to the stuff route');
}


