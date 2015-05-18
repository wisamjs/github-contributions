/*eslint-disable no-unused-expressions*/

'use strict';

var expect = require('chai').expect;
var rewire = require('rewire');
var githubScraper = rewire('../../lib/github-scraper');
var toInt;
var isInt;
var getTextFromElement;

beforeEach(function () {
  toInt = githubScraper.__get__('toInt');
  isInt = githubScraper.__get__('isInt');
  getTextFromElement = githubScraper.__get__('getTextFromElement');
});

describe('githubScraper', function () {
  it('should exist', function () {
    expect(githubScraper).to.be.an('Object');
    expect(githubScraper.getContributions).to.be.a('Function');
    expect(githubScraper.getYearContributions).to.be.a('Function');

  });
});

describe('toInt', function () {
  it('should exist', function () {
    expect(toInt).to.be.a('function');
  });

  it('should return a number', function () {
    expect(toInt('2 days')).to.eql(2);
  });

  it('should always return a number in base 10', function () {
    expect(toInt('01')).to.eql(1);
  });

  it('should handle numbers ', function () {
    expect(toInt(2)).to.eql(2);
  });
});

describe('isInt', function () {
  it('should exist', function () {
    expect(isInt).to.be.a('function');

  });

  it('should return true if number is passed in', function () {
    expect(isInt(1)).to.be.true;
    expect(isInt(2.5)).to.be.true;
    expect(isInt({})).to.be.false;
    expect(isInt('2')).to.be.false;
  });

});

describe('getTextFromElement', function () {
  it('should exist', function () {
    expect(getTextFromElement).to.be.a('function');
  });

});
