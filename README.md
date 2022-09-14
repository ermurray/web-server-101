# Webservers 101

## Topics
* [X] Web Servers
* [X] Express
* [X] MiddleWare
* [ ] EJS

### Web Servers
* What is a Web Server
  - Mdn defines web servers as
    ...a web server includes several parts that control how web users access hosted files, at minimum an HTTP server. An HTTP server is a piece of software that understands URLs (web addresses) and HTTP (the protocol your browser uses to view webpages).
```
send/recevie                send/recieve
client <========TCP==========>server
request
client ======TCP/HTTP===========>server
browser
httpServer ===========> anotherhttpServer
client                    serrver
                                      response
client <=========TCP/HTTP=============server
browser
```
* server vrs client
  - server initiates the response
  - client initiates the request

* HTTP
 - request object
    - address url
    - method(verb)
    - action ('/users')
    - headers
  - response object
    - address url
    - method
    - status code
    - action 
    - headers
```javascript
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

// same as above except uses Object lookup and abstracts the inner workings away to another function.
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

```


### Express.js

 * simple package to make routing and middleware easier to use
 * fast, unopinionated, small.... (Express.js website)
```javascript
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
```

### MiddleWare
```
client   |    intercept request/do some work    |   method/route then send response
request <==============middleware==========================>response
```
```javascript
// basic syntax for custom middleware
 app.use((req, res, next) => {
  console.log('new request in middleware',req);
  next();
});
```


### EJS
* templating engine
 - use for server side rendering 
 - ejs tags to embed javascript
 ```html
 <body>
  <div>
   <span><%= user %></span></br>
    <ul>
    <% for (const elem of list){ %>
      <li>
        <%= elem %>
      </li>
    <% } %>
    </ul>
    <% if(allowed) {%>
   <b><%= message %></b>
   <% } %> 
  </div>
</body>
 ```