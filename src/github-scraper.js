'use strict';
import * as cheerio from 'cheerio';
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

function transformHTML(){
    var infoHTML = $(this).find('.text-muted');
    var totalHTML = $(this).find('.contrib-number');

    return {
      label: infoHTML.first().text(),
      total: totalHTML.first().text(),
      dates: infoHTML.last().text()
    };
  }

function getContributionsJson(html){
  $ = cheerio.load(html);

  return head($('.contrib-column').map(transformHTML).toArray());
}

function getYearContributions() {

}

function head(arr){
  return arr[0];

}

export default {
    getContributions: getContributions,
    getContributionsJson: getContributionsJson,
    getYearContributions: getYearContributions,
    toInt: toInt,
    isInt: isInt,
    getTextFromElement: getTextFromElement
  };