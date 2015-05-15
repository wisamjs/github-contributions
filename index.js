'use strict';

var rp = require('request-promise');
var githubScraper = require('./lib/github-scraper');

rp('http://github.com/wzaghal')
  .then(githubScraper.getContributions)
  .then(function (data) {
    console.log(data);
  });
