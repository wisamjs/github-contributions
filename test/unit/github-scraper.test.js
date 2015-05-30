import githubScraper from '../../src/github-scraper';

describe('githubScraper', function () {
  it('should exist', function () {
    expect(githubScraper).to.be.an('Object');
    expect(githubScraper.getContributionsStats).to.be.a('Function');
    expect(githubScraper.getContributionsGraph).to.be.a('Function');
    expect(githubScraper.transformStatsHTML).to.be.a('Function');
    expect(githubScraper.transformGraphHTML).to.be.a('Function');
    expect(githubScraper.head).to.be.a('Function');
  });

  describe('githubScraper.head', function () {
    it('should return the first element of an array', function () {
      expect(githubScraper.head([1, 2, 3])).to.eql(1);
    });
  });

  describe('githubScraper.transformStatsHTML', function () {
    it('should return a function', function () {
      expect(githubScraper.transformStatsHTML()).to.be.a(
        'Function');

    });

  });

  describe('githubScraper.transformGraphHTML', function () {
    it('should return a function', function () {
      expect(githubScraper.transformGraphHTML()).to.be.a(
        'Function');

    });

  });
});
