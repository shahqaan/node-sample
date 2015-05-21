README
------

## Install

To install the dependencies:

    npm install

Copy database.sample.json to database.json and fix your user, password and host settings:

    cp config/database.sample.json config/database.json

## Start Server

To start the server:

    npm start

## Run Tests

To run the sample tests included:

    npm test

## Directory Structure

Your code is divided into following directories:

    /bin
        www -- calls app.js
    /config
        global.js -- contains global configuration: imports modules, sets layout, defines 404 method, set logger...
    /controllers
		t1.js -- controller for test #1
		t2.js -- controller for test #2
		t2.js -- controller for test #3
		t4.js -- controller for bonus test
    /models
        N/A
    /public
        /images
        /javascripts
        /stylesheets
    /routes
        index.js -- links user controller to routes and defines health endpoint
    /tests
        /acceptance
        /controllers
        /routes
        /seeds
    app.js -- imports global configuration and calls config file based on detected environment
    package.json
    README.md



