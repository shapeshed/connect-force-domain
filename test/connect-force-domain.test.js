
var connect = require('connect'),
	force_domain = require('../lib/connect-force-domain'),
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
  },
  'GET /two/folders': function(){
    assert.response(app,
      { url: '/two/folders' },
      { status: 301 , headers: { 'Location': 'http://shapeshed.com/two/folders' }});
  },
  'GET /two/folders/': function(){
    assert.response(app,
      { url: '/two/folders/' },
      { status: 301 , headers: { 'Location': 'http://shapeshed.com/two/folders/' }});
  },
  'GET /querystring?a=1': function(){
    assert.response(app,
      { url: '/querystring?a=1' },
      { status: 301 , headers: { 'Location': 'http://shapeshed.com/querystring?a=1' }});
  },
  'GET /querystring/?a=1': function(){
    assert.response(app,
      { url: '/querystring/?a=1' },
      { status: 301 , headers: { 'Location': 'http://shapeshed.com/querystring/?a=1' }});
  }
};
