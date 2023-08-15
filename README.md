# Webservers 101

## Topics
* [x] Web Servers
* [x] Express
* [x] MiddleWare
* [x] EJS


### Web Servers
* What is a Web Server
  -Mdn defines webservers as ...a web server includes several parts that control how web users access hosted files, at minimum an HTTP server. An HTTP server is a piece of software that understands URLs (web addresses) and HTTP (the protocol your browser uses to view webpages).
  
  ```
  send/recieve            send/recieve
  client <======TCP=======> server

  request                     response
  client <======TCP/HTTP=====> server

  client <======TCP/HTTP======>server
  browser                     http Web server


* server vrs client
  - client initiates the request
  - server initiates the response


* HTTP
  - request response closed
  - request object (client sends request)
    - address url
    - method (verb) GET POST
    - action ('/users')
    - headers
  - response (server sends response)
    - address url
    - method
    - status code 
    - action
    - headers

```javascript

```


### Express.js

```javascript

```

### MiddleWare
```
client  |intercept our request/do some work pass it on| method/route 
request <=============middleware=========================> response
```
```javascript

```


### EJS
* templating engine
 ```html
 ```