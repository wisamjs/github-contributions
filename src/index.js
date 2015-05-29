'use strict';
import express from 'express';
import rp from 'request-promise';
import githubScraper from './github-scraper';

let app = express();
const port = 8081;

  app.get('/contributions/:userId', function (req, res) {
    const userId = req.params.userId;

    rp('http://github.com/' + userId)
      .then(githubScraper.getContributionsJson)
      .then(function (data) {
        //TODO: data should be valid JSON
         res.json(data);
       });
  });

  app.listen(port);


  //Expose app
  export default app;
