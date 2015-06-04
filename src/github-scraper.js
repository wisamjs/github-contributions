'use strict';
import * as cheerio from 'cheerio';


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
  getContributionsJson: getContributionsJson,
  getContributionsStats: getContributionsStats,
  getContributionsGraph: getContributionsGraph,
  transformStatsHTML: transformStatsHTML,
  transformGraphHTML: transformGraphHTML
};
