var request = require('request');
var RSVP = require('rsvp');

var Utils = {
    /*
     * Requests URL and gets title
     * if any error, responds with 'NO RESPONSE'
     * abstracting all other errors from calling method
     */
    getTitle: function(url, getTitleComplete) {
	var re = /(<\s*title[^>]*>(.+?)<\s*\/\s*title)>/gi;
	var errorResponse = 'NO RESPONSE';
	if (!url) getTitleComplete(errorResponse);
	else {
	    if (!~url.indexOf('http://')) url = "http://" + url;
	    request(
		{
                    "method": "GET",
                    "rejectUnauthorized": false,
                    "url": url
		},
		function(err, res, body) {
                    if (err) {
			console.log(err);
			getTitleComplete(errorResponse, url);
                    }
                    else {
			if (res && res.statusCode == 200) {
                            try {
				// TODO: use a more solid scraping library
				var match = re.exec(body);
				if (match && match[2]) {
				    getTitleComplete(match[2], url);
				}
				else {
				    getTitleComplete(errorResponse, url);
				}
                            } catch(e) {
				console.log(e);
				getTitleComplete(errorResponse, url);
                            }
			}
			else {
			    console.log("error requesting URL, status code: " + res.statusCode);
			    getTitleComplete(errorResponse, url);
			}
                    }
		});
	}
	
    },
    getTitlePromise: function(url) {
	var promise = new RSVP.Promise(function(getTitleComplete, reject) {
	    var re = /(<\s*title[^>]*>(.+?)<\s*\/\s*title)>/gi;
	    var errorResponse = 'NO RESPONSE';
	    if (!url) getTitleComplete(errorResponse, url);
	    else {
		if (!~url.indexOf('http://')) url = "http://" + url;
		request(
		    {
			"method": "GET",
			"rejectUnauthorized": false,
			"url": url
		    },
		    function(err, res, body) {
			if (err) {
			    console.log(err);
			    getTitleComplete({url: url, title: errorResponse});
			}
			else {
			    if (res && res.statusCode == 200) {
				try {
				    // TODO: use a more solid scraping library
				    var match = re.exec(body);
				    if (match && match[2]) {
					getTitleComplete({url: url, title: match[2]});
				    }
				    else {
					getTitleComplete({url: url, title: errorResponse});
				    }
				} catch(e) {
				    console.log(e);
				    getTitleComplete({url: url, title: errorResponse});
				}
			    }
			    else {
				console.log("error requesting URL, status code: " + res.statusCode);
				getTitleComplete({url: url, title: errorResponse});
			    }
			}
		    });
	    }
	});
	return promise;
    },
    getTitleStream: function(url) {
	var promise = new RSVP.Promise(function(getTitleComplete, reject) {
	    var re = /(<\s*title[^>]*>(.+?)<\s*\/\s*title)>/gi;
	    var errorResponse = 'NO RESPONSE';
	    if (!url) getTitleComplete(errorResponse, url);
	    else {
		if (!~url.indexOf('http://')) url = "http://" + url;
		request(
		    {
			"method": "GET",
			"rejectUnauthorized": false,
			"url": url
		    },
		    function(err, res, body) {
			if (err) {
			    console.log(err);
			    getTitleComplete({url: url, title: errorResponse});
			}
			else {
			    if (res && res.statusCode == 200) {
				try {
				    // TODO: use a more solid scraping library
				    var match = re.exec(body);
				    if (match && match[2]) {
					getTitleComplete({url: url, title: match[2]});
				    }
				    else {
					getTitleComplete({url: url, title: errorResponse});
				    }
				} catch(e) {
				    console.log(e);
				    getTitleComplete({url: url, title: errorResponse});
				}
			    }
			    else {
				console.log("error requesting URL, status code: " + res.statusCode);
				getTitleComplete({url: url, title: errorResponse});
			    }
			}
		    });
	    }
	});
	return promise;
    }
};

module.exports = Utils;
