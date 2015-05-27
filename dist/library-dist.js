(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('express'), require('request-promise'), require('cheerio')) : typeof define === 'function' && define.amd ? define(['express', 'request-promise', 'cheerio'], factory) : global.MyLibrary = factory(global.express, global.request_promise, global.cheerio);
})(this, function (express, request_promise, cheerio) {
  'use strict';

  'use strict';
  var $;

  function getTextFromElement() {
    return $(this).text();
  }

  function toInt(str) {

    if (isInt(str)) {
      return str;
    }

    var cleanStr = str.replace(/\D/g, '');
    return parseInt(cleanStr, 10);
  }

  function isInt(x) {
    return typeof x === 'number';
  }

  function getContributions(html) {
    $ = cheerio.load(html);
    return $('.contrib-number').map(getTextFromElement).toArray().map(toInt);
  }

  function getYearContributions() {}

  var githubScraper = {
    getContributions: getContributions,
    getYearContributions: getYearContributions
  };

  'use strict';
  var app = express();
  var port = 8081;

  app.get('/contributions/:userId', function (req, res) {
    var userId = req.params.userId;

    request_promise('http://github.com/' + userId).then(githubScraper.getContributions).then(function (data) {
      //TODO: data should be valid JSON
      res.json(data);
    });
  });

  app.listen(port);

  //Expose app
  var index = app;

  return index;
});
//# sourceMappingURL=./library-dist.js.map