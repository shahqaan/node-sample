README
------

* Purpose of this generated application is to give you a skeleton to start working your code with
* Use the guidelines taken by this application to develop your apps

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
        database.json -- JSON object of MongoDB connection strings for production, development and test environment
        development.js -- only called when environment is 'development'
        global.js -- contains global configuration: imports modules, sets layout, defines 404 method, set logger...
        mongo.js -- contains connect code for MongoDB database: also includes connect, disconnect and reconnect callbacks
        production.js -- only called when environment is 'production'
    /controllers
        users.js -- defines sample methods for creating and viewing users
    /models
        users.js -- defines schema for sample user model
    /public
        /images
        /javascripts
        /stylesheets
    /routes
        index.js -- defines sample routes for index, links user controller to routes and defines health endpoint
    /views
        error.jade
        index.jade
        layout.jade
    /tests
        /acceptance
        /controllers
        /routes
            users.js -- defines database fixture setup and tear down and tests for sample routes
        /seeds
            users.json -- data to be included in database fixture for testing
    app.js -- imports global configuration and calls config file based on detected environment
    package.json
    README.md



