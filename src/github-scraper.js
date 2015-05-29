'use strict';
import * as cheerio from 'cheerio';
var $;


function transformHTML() {
  var infoHTML = $(this).find('.text-muted');
  var totalHTML = $(this).find('.contrib-number');

  return {
    label: infoHTML.first().text(),
    total: totalHTML.first().text(),
    dates: infoHTML.last().text()
  };
}

function getContributionsJson(html) {
  $ = cheerio.load(html);

  return head($('.contrib-column').map(transformHTML).toArray());
}

function getYearContributions() {

}

function head(arr) {
  return arr[0];

}

export default {
  getContributionsJson: getContributionsJson,
  getYearContributions: getYearContributions,
  transformHTML: transformHTML
};
