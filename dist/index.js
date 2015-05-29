Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _requestPromise = require('request-promise');

var _requestPromise2 = _interopRequireDefault(_requestPromise);

var _githubScraper = require('./github-scraper');

var _githubScraper2 = _interopRequireDefault(_githubScraper);

'use strict';

var app = (0, _express2['default'])();
var port = 8081;

app.get('/contributions/:userId', function (req, res) {
  var userId = req.params.userId;

  (0, _requestPromise2['default'])('http://github.com/' + userId).then(_githubScraper2['default'].getContributions).then(function (data) {
    //TODO: data should be valid JSON
    res.json(data);
  });
});

app.listen(port);

//Expose app
exports['default'] = app;
module.exports = exports['default'];