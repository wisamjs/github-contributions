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

function getYearContributions() {

}

export default {
    getContributions: getContributions,
    getYearContributions: getYearContributions,
    toInt: toInt,
    isInt: isInt,
    getTextFromElement: getTextFromElement
  };