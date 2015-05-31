'use strict';
import * as cheerio from 'cheerio';


function transformStatsHTML($) {
  return function (index, domElement) {
    var infoHTML = $(domElement).find('.text-muted');
    var totalHTML = $(domElement).find('.contrib-number');

    return {
      label: infoHTML.first().text(),
      total: totalHTML.first().text(),
      dates: infoHTML.last().text()
    };
  };
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

function getContributionsJson(html) {
  var $ = cheerio.load(html);
  return {
    'stats': getContributionsStats($),
    'calendar': getContributionsGraph($)
  };
}

function getContributionsGraph($) {
  return $('.js-calendar-graph-svg').find('g rect')
    .map(transformGraphHTML($)).toArray();
}

function cleanWhiteSpace(str) {

  str.replace()

}


export default {
  getContributionsJson: getContributionsJson,
  getContributionsStats: getContributionsStats,
  getContributionsGraph: getContributionsGraph,
  transformStatsHTML: transformStatsHTML,
  transformGraphHTML: transformGraphHTML
};
