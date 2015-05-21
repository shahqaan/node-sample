var Utils = require('../lib/Utils');
var async = require('async');

exports.getTitles = function(req, res) {
    if (req.query.address) {
	if (req.query.address instanceof Array) {
	    var titles = [];
	    async.each(
		req.query.address,
		function(addr, addrComplete) {
		    Utils.getTitle(addr, function(title, url) {
			titles.push(url + " " + title);
			addrComplete();
		    });
		},
		function(err){
		    res.send({titles: titles});
		}
	    );
	}
	else {
	    Utils.getTitle(req.query.address, function(title) {
		res.send({title: title});
	    });
	}
    }
    else {
	res.send({message: "address parameter missing"}, 400);
    }
};
