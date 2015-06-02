import chai from 'chai';
var expect = chai.expect;
import webdriverio from 'webdriverio';


describe('Github.com contributions', function () {

  this.timeout(99999999);
  var client = {};
  var contribColumnHtmlResponse;
  var textMutedHtmlResponse;
  var textMutedErrorResponse;
  var errResponse;
  before(function (done) {
    client = webdriverio.remote({
      desiredCapabilities: {
        browserName: 'phantomjs'
      }
    });
    client.init()
      .url('https://github.com/octocat')
      .getHTML('.contrib-column', false, function (err, html) {
        errResponse = err;
        contribColumnHtmlResponse = html;
      })
      .getHTML('.text-muted', false, function (err, html) {
        textMutedHtmlResponse = html;
        textMutedErrorResponse = err;
      })
      .call(done);
  });

  it('should return html', function () {
    expect(errResponse).to.eql(null);
    expect(textMutedErrorResponse).to.eql(null);
    expect(contribColumnHtmlResponse).to.not.eql(null);
  });


  it('should have 3 contributions', function () {
    expect(contribColumnHtmlResponse.length).to.eql(3);
  });

  it('should have all labels', function () {
    expect(textMutedHtmlResponse).to.be.an('Array');
    expect(textMutedHtmlResponse.indexOf(
        'Contributions in the last year')).to.be
      .above(-1);
    expect(textMutedHtmlResponse.indexOf(
      'Longest streak')).to.be.above(-1);
    expect(textMutedHtmlResponse.indexOf(
      'Current streak')).to.be.above(-1);

  });

  xit('should have all dates', function () {
    expect(textMutedHtmlResponse.indexOf(
      'May 29, 2014 – May 29, 2015')).to.be.above(-1);
    expect(textMutedHtmlResponse.indexOf(
      'June 10 –June 11'
    )).to.be.above(-1);
    expect(textMutedHtmlResponse.indexOf(
      'Last contributed a year ago'
    )).to.be.above(-1);
  });

  after(function (done) {
    client.end(done);
  });
});
