# Connect Force Domain

Inspired by [Rack::ForceDomain][1] it directs all traffic to a single domain with a 301 redirect.

This is useful where you are hosting your [node][2] site with [Joyent][3], [Nodester][4] or [Bejes.us][5] and want to ensure all visitors are on the same domain.

## Installation

via [npm][6]

    npm install connect-force-domain

## Usage

For [connect][7]

    var connect = require('connect'),
        force_domain = require('connect-force-domain');

    connect.createServer(force_domain('shapeshed.com')).listen(3000);


For [express][8]

    var express = require('express'),
        force_domain = require('connect-force-domain');
        
    express.createServer(force_domain('shapeshed.com')).listen(3000);

[1]: https://github.com/cwninja/rack-force_domain 
[2]: http://nodejs.org/
[3]: https://no.de/
[4]: http://nodester.com/
[5]: http://bejes.us/
[6]: https://github.com/isaacs/npm
[7]: https://github.com/senchalabs/connect/
[8]: http://expressjs.com/
