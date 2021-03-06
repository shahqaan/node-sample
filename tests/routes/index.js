var assert = require('assert');
var request = require('supertest');
var async = require('async');
process.env.NODE_ENV = "test";
var app = require('../../app');

describe('Routes', function() {
    this.timeout(20000);
    before(function(done) { done(); });
    after(function(done) { done(); });
    beforeEach(function(done) {	done(); });
    afterEach(function(done) { done(); });
    describe('GET /t1/I/want/titles', function() {
        it('responds 404', function(done){
            request(app)
                .get('/t1/I/want/titles')
                .expect(404)
                .end(function(err, res) {
    		    done();
                });
        });
    });
    describe('GET /t1/I/want/title', function() {
        it('responds 400 without address', function(done){
            request(app)
                .get('/t1/I/want/title?')
                .expect(400)
                .end(function(err, res) {
    		    assert.equal('address parameter missing',res.body.message);
    		    done();
                });
        });
    });

    describe('t1', function() {
        it('responds 200', function(done){
    	    request(app)
                .get('/t1/I/want/title?address=www.google.com&address=www.facebook.com')
                .expect(200)
                .end(function(err, res) {
    		    console.log(res.body);
    		    assert.equal(2, res.body.titles.length);
    		    done();
                });
        });
    });
    describe('t2', function() {
        it('responds 200', function(done){
    	    request(app)
                .get('/t2/I/want/title?address=www.google.com&address=www.facebook.com')
                .expect(200)
                .end(function(err, res) {
    		    console.log(res.body);
    		    assert.equal(2, res.body.titles.length);
    		    done();
                });
        });
    });
    describe('t3', function() {
        it('responds 200', function(done){
    	    request(app)
                .get('/t3/I/want/title?address=www.google.com&address=www.facebook.com')
                .expect(200)
                .end(function(err, res) {
    		    console.log(res.body);
    		    assert.equal(2, res.body.titles.length);
    		    done();
                });
        });
    });
    describe('t4', function() {
        it('responds 200', function(done){
	    request(app)
                .get('/t4/I/want/title?address=www.google.com&address=www.facebook.com')
                .expect(200)
                .end(function(err, res) {
		    console.log(res.body);
		    assert.equal(2, res.body.titles.length);
		    done();
                });
        });
    });
});
