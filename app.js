  'use strict';
  var express = require('express');
  var app = express();
  var rp = require('request-promise');
  var githubScraper = require('./lib/github-scraper');
  var port = 8081;

  app.get('/contributions/:userId', function (req, res) {
    var userId = req.params.userId;

    rp('http://github.com/' + userId)
      .then(githubScraper.getContributions)
      .then(function (data) {
        //TODO: data should be valid JSON
        res.json(data);
      });
  });

  app.listen(port);


  //Expose app
  exports = module.exports = app;
