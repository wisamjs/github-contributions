var chai = require('chai');
var expect = chai.expect;
var webdriverio = require('webdriverio');
var bluebird = require('bluebird');

describe('Github.com contributions', function () {

  this.timeout(99999999);
  var client = {};
  var htmlResponse;
  var errResponse;
  before(function (done) {
    client = webdriverio.remote({
      desiredCapabilities: {
        browserName: 'phantomjs'
      }
    });
    client.init()
      .url('https://github.com/octocat')
      .getHTML('.contrib-number', false, function (err, html) {
        errResponse = err;
        htmlResponse = html;
      })
      .call(done);
  });

  it('should return html', function () {
    expect(errResponse).to.eql(null);
    expect(htmlResponse).to.not.eql(null);
  });


  it('should have 3 contributions', function () {
    expect(htmlResponse.length).to.eql(3);
  });

  it('should show last year\'s contributions', function () {
    expect(htmlResponse[0]).to.eql('2 total');
  });

  it('should show longest streak', function () {
    expect(htmlResponse[1]).to.eql('2 days');
  });

  it('should show current streak', function () {
    expect(htmlResponse[2]).to.eql('0 days');
  });

  after(function (done) {
    client.end(done);
  });
});
