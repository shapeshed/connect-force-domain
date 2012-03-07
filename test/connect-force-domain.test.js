var connect = require('connect')
  , http = require('http')
  , assert = require('assert')
  , forceDomain = require('../lib/connect-force-domain');

var app = connect()
  .use(forceDomain('shapeshed.com'))

describe('Connect Force Domain module', function(){
  before(function(){
    http.Server(app).listen(3000);
  })
  describe('making a get request', function(){
    it('should get return a 301 response', function(done){
      http.get( { host: '127.0.0.1', port: '3000' }, function(res){
        assert.strictEqual(res.statusCode, 301);
        done();
      })
    })
    it('should set the location header correctly', function(done){
      http.get( { host: '127.0.0.1', port: '3000' }, function(res){
        assert.strictEqual(res.headers['location'], 'http://shapeshed.com/')
        done();
      })
    })
    it('should include a path in the location header', function(done){
      http.get( { host: '127.0.0.1', port: '3000', path: '/foobar' }, function(res){
        assert.strictEqual(res.headers['location'], 'http://shapeshed.com/foobar')
        done();
      })
    })
    it('should include trailing slashes in location header', function(done){
      http.get( { host: '127.0.0.1', port: '3000', path: '/foobar/' }, function(res){
        assert.strictEqual(res.headers['location'], 'http://shapeshed.com/foobar/')
        done();
      })
    })
    it('should include nested routes in location header', function(done){
      http.get( { host: '127.0.0.1', port: '3000', path: '/foo/bar' }, function(res){
        assert.strictEqual(res.headers['location'], 'http://shapeshed.com/foo/bar')
        done();
      })
    })
    it('should include nested routes with trailing slashes in location header', function(done){
      http.get( { host: '127.0.0.1', port: '3000', path: '/foo/bar/' }, function(res){
        assert.strictEqual(res.headers['location'], 'http://shapeshed.com/foo/bar/')
        done();
      })
    })
    it('should include a query string in the location header', function(done){
      http.get( { host: '127.0.0.1', port: '3000', path: '/foo?q=1' }, function(res){
        assert.strictEqual(res.headers['location'], 'http://shapeshed.com/foo?q=1')
        done();
      })
    })
    it('should include a query string after a trailing slash in the location header', function(done){
      http.get( { host: '127.0.0.1', port: '3000', path: '/foo/?q=1' }, function(res){
        assert.strictEqual(res.headers['location'], 'http://shapeshed.com/foo/?q=1')
        done();
      })
    })
  })
})
