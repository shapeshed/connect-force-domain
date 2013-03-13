module.exports = function(domain){

  "use strict";

  domain = domain || false;
  return function(req, res, next){
    if (domain && (req.headers.host !== domain)){
      res.writeHead(301, {"Location": 'http://' + domain + req.url});
      res.end();
    } else {
      next();
    }
  };
};
