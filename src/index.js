'use strict';
import * as express from 'express';
import * as rp from 'request-promise';
import githubScraper from './github-scraper';
var app = express();
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
  export default app;
