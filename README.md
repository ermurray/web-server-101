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
```

```


### Express.js

 * simple package to make routing and middleware easier to use
 * fast, unopinionated, small.... (Express.js website)


### MiddleWare

client             intercept request/do some work                       method/route then send response
request <==================middleware============================================>response


### EJS

## Promises recap