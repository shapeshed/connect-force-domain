# Connect Force Domain

Inspired by [Rack::ForceDomain][1] it directs all traffic to a single domain with a 301 redirect.

This is useful where you are hosting your node.js site with [Joyent][2], [Nodester][3] or [Bejes.us][4] and want to ensure all visitors are on the same domain.

## Installation

via [npm][5]

    npm install connect-force-domain

## Usage

For [connect][6]

    var connect = require('connect'),
        force_domain = require('connect-force-domain');

    connect.createServer(force_domain('shapeshed.com')).listen(3000);


For [express][7]

    var express = require('express'),
        force_domain = require('connect-force-domain');
        
    express.createServer(force_domain('shapeshed.com')).listen(3000);

[1]: https://github.com/cwninja/rack-force_domain 
[2]: https://no.de/
[3]: http://nodester.com/
[4]: http://bejes.us/
[5]: https://github.com/isaacs/npm
[6]: http://expressjs.com/
