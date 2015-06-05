'use strict';
import * as cheerio from 'cheerio';
import rp from 'request-promise';


function transformStatsHTML($) {
  return function (index, domElement) {
    let infoHTML = $(domElement).find('.text-muted');
    let totalHTML = $(domElement).find('.contrib-number');

    return {
      label: infoHTML.first().text(),
      total: totalHTML.first().text(),
      dates: infoHTML.last().text()
    };
  };
}

function getContributions(userId) {
  return rp('http://github.com/' + userId)
    .then(parseContributions);
}

function transformGraphHTML($) {
  return function (index, domElement) {
    return {
      date: $(domElement).data('date'),
      count: $(domElement).data('count')
    };
  };
}

function getContributionsStats($) {
  return $('.contrib-column').map(transformStatsHTML($)).toArray();

}

function parseContributions(html) {
  let $ = cheerio.load(html);
  return {
    'stats': getContributionsStats($),
    'calendar': getContributionsGraph($)
  };
}

function getContributionsGraph($) {
  return $('.js-calendar-graph-svg').find('g rect')
    .map(transformGraphHTML($)).toArray();
}


export default {
  parseContributions: parseContributions,
  getContributionsStats: getContributionsStats,
  getContributionsGraph: getContributionsGraph,
  transformStatsHTML: transformStatsHTML,
  transformGraphHTML: transformGraphHTML,
  getContributions: getContributions
};
