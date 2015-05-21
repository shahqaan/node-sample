var assert = require('assert');
var async = require('async');
process.env.NODE_ENV = "test";
var app = require('../../app');
var Utils = require('../../lib/Utils');

describe('Unit Test', function() {
    this.timeout(20000);
    before(function(done) { done(); });
    after(function(done) { done(); });
    beforeEach(function(done) {	done(); });
    afterEach(function(done) { done(); });
    describe('should return title for www.google.com', function() {
	it('responds with title', function(done) {
	    Utils.getTitle('http://www.google.com', function(title) {
		assert.equal('Google', title);
		done();
	    });
	});
	it('responds with title', function(done) {
	    Utils.getTitle('www.google.com', function(title) {
		assert.equal('Google', title);
		done();
	    });
	});
    });
    describe('should return NO RESPONSE', function() {
	it('responds with NO RESPONSE', function(done) {
	    Utils.getTitle('ww.google.com', function(title) {
		assert.equal('NO RESPONSE', title);
		done();
	    });
	});
    });
});
