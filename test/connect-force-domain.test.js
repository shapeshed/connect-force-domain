
var connect = require('connect'),
	force_domain = require('connect-force-domain'),
	assert = require('assert');

app = connect.createServer(force_domain('shapeshed.com'));


module.exports = {
  'GET /': function(){
    assert.response(app,
      { url: '/' },
      { status: 301 , headers: { 'Location': 'http://shapeshed.com/' }});
  },
  'GET /foobar': function(){
    assert.response(app,
      { url: '/foobar' },
      { status: 301 , headers: { 'Location': 'http://shapeshed.com/foobar' }});
  },
  'GET /foobar/': function(){
    assert.response(app,
      { url: '/foobar/' },
      { status: 301 , headers: { 'Location': 'http://shapeshed.com/foobar/' }});
  }
};
