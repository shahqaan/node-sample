var Assert = require('assert');
var request = require('supertest');
var Async = require('async');
process.env.NODE_ENV = "test";
var app = require('../../app');

var Users = require('../../models/users');



describe('Routes', function() {

    // runs once before the first test in this suite
    before(function(done) {
        done();
     });


    // runs once after the last test in this suite
    after(function(done) {
        done();
    });

    // runs once before every test in this suite
    beforeEach(function(done) {
        // setup database fixture
        Users.remove({}, function() {
            var users = require('../seeds/users.json');
            Async.each(
                users,
                function(user, complete) {
                    new Users({
                        email: user.email,
                        name: user.name
                    }).save(function(err, item) {
                            complete();
                        });
                }, function() {
                    done();
                }
            );


        });
    });

    // runs once after every test in this suite
    afterEach(function(done) {
        // tear down database fixture
        Users.remove({}, function() {
            done();
        });
    });


    describe('GET /users', function() {
        it('responds 200 OK', function(done){
            request(app)
                .get('/users')
                .expect(200)
                .end(function(err, res) {
                    if (err) done(err)
                    var users = res.body.users;
                    Assert.equal(users.length, 2);
                    done();
                });
        });
    });

    describe('POST /users', function() {
        it('creates a user', function(done) {
            request(app)
                .post('/users')
                .expect(200)
                .end(function(err, res) {
                    if (err) done(err)
                    var user = res.body.user;
                    Assert.equal(user.email, "shahqaan@gmail.com");
                    done();
                });
        });
    })
});