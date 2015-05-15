'use strict';
var cheerio = require('cheerio');
var $;

function getTextFromElement() {
  return $(this).text();
}

function toInt(str) {
  var cleanStr = str.replace(/\D/g, '');
  return parseInt(cleanStr, 10);
}

function getContributions(html) {
  $ = cheerio.load(html);
  return $('.contrib-number').map(getTextFromElement).toArray().map(toInt);
}


module.exports = function () {
  return {
    getContributions: getContributions
  };
}();
