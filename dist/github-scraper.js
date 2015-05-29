Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _cheerio = require('cheerio');

var cheerio = _interopRequireWildcard(_cheerio);

'use strict';

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

function getYearContributions() {}

exports['default'] = {
  getContributions: getContributions,
  getYearContributions: getYearContributions,
  toInt: toInt,
  isInt: isInt,
  getTextFromElement: getTextFromElement
};
module.exports = exports['default'];