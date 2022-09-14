const http = require('http');
const PORT = 3000;

// routes
const getHome = (req, res) => {
  res.end('this is a get request to "/"');
}

const getStuff = (req, res) => {
  res.end('this is a request to the stuff route');
}

//object for object lookup, another way to handle different conditions
const routes = {
  'GET /': getHome,
  'GET /stuff': getStuff, 
};


const server = http.createServer((req,res) => {
  const route = `${req.method} ${req.url}`

// switch(route) {
//   case 'GET /':
//     res.end('this is a get to "/"')
//     break;
//   case 'GET /stuff':
//     res.end('this is the stuff route');
//     break;
//   default:
//     res.end('there is no such route');
//}

// same as above except uses Object lookup and abstracts the inner working away to another function.
  if (route in routes) {
    routes[route](req, res);
  }
  else {
    res.end('Route Not Found');
  }
    
});

server.listen(PORT, () => {
  console.log(`server is listening on ${PORT} `);
})
