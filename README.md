README
------

## Install

To install the dependencies:

    npm install

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
		t1.js 
		t2.js
		t2.js
		t4.js
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



