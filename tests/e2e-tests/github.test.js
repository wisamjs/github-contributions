var chai = require('chai');
var assert = chai.assert;
var webdriverio = require('webdriverio');

describe('my webdriverio tests', function () {

  this.timeout(99999999);
  var client = {};

  before(function (done) {
    client = webdriverio.remote({
      desiredCapabilities: {
        browserName: 'phantomjs'
      }
    });
    client.init(done);
  });

  it('Github test', function (done) {
    client
      .url('https://github.com/')
      .getTitle(function (err, title) {
        assert.equal(undefined, err);
        assert.strictEqual(title,
          'GitHub · Build software better, together.');
      })
      .call(done);
  });

  after(function (done) {
    client.end(done);
  });
});
