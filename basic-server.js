const http = require('http');
const PORT = 3000;


const getHome = (req, res) => {
  res.end('this is the home route')
};

const getAbout = (req, res) => {
  res.end('this is the about page');
};

const getStuff = (reg, res) => {
  res.end('this is the stuff route');
};

const getProducts = (req, res) => {
  res.end('this is the products route');
}

const routes = {
  'GET /': getHome,
  'GET /about': getAbout,
  'GET /stuff': getStuff,
  'GET /products': getProducts,
};


const server = http.createServer((req, res) => {
  console.log('request', req);
  const route = `${req.method} ${req.url}`
  console.log('route', route);

  if(!routes[route]) {
    return res.end('Route Not Found');
  }

  // same as switch below but leverages object lookup to clean up code and
  // abstract away the inner workings of the routes.
  routes[route](req, res)

  // switch (route) {
  //   case 'GET /':
  //     res.end('this is the base response from /');
  //     break;
  //   case 'GET /stuff':
  //     res.end('this is the stuff route')
  //     break;
  //   default:
  //     res.end('unknown route')
  //     return;
  // }


});

server.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});