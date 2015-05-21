var Utils = require('../lib/Utils');
var async = require('async');
var RSVP = require('rsvp');

exports.getTitles = function(req, res) {
    if (req.query.address) {
	if (req.query.address instanceof Array) {
	    var promises = req.query.address.map(function(url) {
		return Utils.getTitlePromise(url);
	    });
	    RSVP.all(promises).then(function(urls) {
		res.send({titles: urls});
	    });

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
