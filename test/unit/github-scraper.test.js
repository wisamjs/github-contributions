import githubScraper from '../../src/github-scraper';

describe('githubScraper', function () {
  it('should exist', function () {
    expect(githubScraper).to.be.an('Object');
    expect(githubScraper.getContributions).to.be.a('Function');
    expect(githubScraper.getYearContributions).to.be.a('Function');
    expect(githubScraper.toInt).to.be.a('Function');

  });
});


describe('githubScraper.toInt', function () {
  it('should exist', function () {
    expect(githubScraper.toInt).to.be.a('function');
  });

  it('should return a number', function () {
    expect(githubScraper.toInt('2 days')).to.eql(2);
  });

  it('should always return a number in base 10', function () {
    expect(githubScraper.toInt('01')).to.eql(1);
  });

  it('should handle numbers ', function () {
    expect(githubScraper.toInt(2)).to.eql(2);
  });
});

describe('githubScraper.isInt', function () {
  it('should exist', function () {
    expect(githubScraper.isInt).to.be.a('function');

  });

  it('should return true if number is passed in', function () {
    expect(githubScraper.isInt(1)).to.be.true;
    expect(githubScraper.isInt(2.5)).to.be.true;
    expect(githubScraper.isInt({})).to.be.false;
    expect(githubScraper.isInt('2')).to.be.false;
  });

});

describe('githubScraper.getTextFromElement', function () {
  it('should exist', function () {
    expect(githubScraper.getTextFromElement).to.be.a('function');
  });

});