var Utils = require('../lib/Utils');
var async = require('async');
var Rx = require('rx');

exports.getTitles = function(req, res) {
    if (req.query.address) {
	if (req.query.address instanceof Array) {
	    var titles = [];
	    var requestStream = Rx.Observable.just(req.query.address)
		.flatMap(function(addr) {
		    return addr
		});

	    // TODO: It feels like is working synchronously :-|
	    var responseStream = requestStream
		.flatMap(function(requestUrl) {
		    return Rx.Observable.fromPromise(Utils.getTitlePromise(requestUrl));
		});

	    responseStream.subscribe(function(response) {
		titles.push(response);
	    }, function(err) {
		console.log(err);
		res.send({err: "error processing your request"}, 500);
	    }, function() {
		res.send({titles: titles});
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
