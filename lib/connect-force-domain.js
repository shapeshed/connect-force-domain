/*    
*	connect-force_domain
*	Force all visitors onto a single domain
*	Inspired by rack-force_domain
*
*/

module.exports = function(domain){
	domain = domain || false;
	return function(req, res, next){
		if (domain && (req.headers.host != domain)){
			res.writeHead(301, {"Location": 'http://' + domain + req.url});
			res.end();
		}
		next();
	} 
};
