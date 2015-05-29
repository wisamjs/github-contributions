import rp from 'request-promise';
import githubScraper from './github-scraper';

    rp('http://github.com/wzaghal')
      .then(githubScraper.getContributionsJson)
      .then(function (data) {
        //TODO: data should be valid JSON
        console.log(data);
      });