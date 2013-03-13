# Connect Force Domain

[![Build Status](https://secure.travis-ci.org/shapeshed/connect-force-domain.png)](http://travis-ci.org/shapeshed/connect-force-domain)

Inspired by [Rack::ForceDomain][1] it directs all traffic to a single domain with a 301 redirect.

This is useful where you are hosting your [node][2] site with a PaaS provide like [Joyent][3] or [Nodester][4] and want to ensure all visitors are on the same domain.

## Installation

via [npm][6]

    npm install connect-force-domain

## Usage

For [connect][7]

    var connect = require('connect'),
        http = require('http'),
        forceDomain = require('connect-force-domain');

    var app = connect()
      .use(forceDomain('shapeshed.com'))
     
    http.Server(app).listen(3000);

For [express][8]

    var express = require('express'),
        forceDomain = require('connect-force-domain');

    var app = module.exports = express.createServer();

    app.configure(function(){
      app.use(forceDomain('shapeshed.com');
    });

    app.listen(3000);

[1]: https://github.com/cwninja/rack-force_domain 
[2]: http://nodejs.org/
[3]: https://no.de/
[4]: http://nodester.com/
[5]: http://bejes.us/
[6]: https://github.com/isaacs/npm
[7]: https://github.com/senchalabs/connect/
[8]: http://expressjs.com/
