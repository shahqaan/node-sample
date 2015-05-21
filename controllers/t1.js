var Utils = require('../lib/Utils');

exports.getTitles = function(req, res) {
    if (req.query.address) {
	if (req.query.address instanceof Array) {
	    // TODO: implement a control flow mechanism
	    var length = req.query.address.length;
	    var isLocked = true;
	    var titles = [];
	    var responseCount = 0;
	    for (var i = 0 ; i < length ; i++) {
		var addr = req.query.address[i];
		Utils.getTitle(addr, function(title, url) {
		    titles.push(url + " " + title);
		    if (++responseCount == length) res.send({titles: titles});
		});
	    }
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
