module.exports = {
  'beforeEach': function login(browser, done) {
    browser.url(browser.launchUrl)
      .waitForElementPresent('body[data-loaded=true]', 3000)
      .assert.elementPresent('#email')
      .setValue('#email', 'me@mine.com')
      .setValue('#password', 'p4w3rD!')
      .click('#loginbutton')
      .waitForElementVisible('#addccform', 3000, function () {
        done();
      });
  },
  'afterEach': function logout(browser, done) {
    browser
      .waitForElementVisible('#logoutlink', 3000)
      .click('#logoutlink')
      .waitForElementVisible('#email', 3000, function () {
        done();
      });
  },
  'after': function end(browser) {
    browser.end();
  },
  'Should succeed adding a new credit card': function (browser) {
    browser
      .setValue('#cc', '4141554433223333')
      .click('#type option[value=Misa]')
      .click('#ccbutton')
      .waitForElementPresent('.result.good', 3000)
  },
  'Should fail adding a new credit card': function (browser) {
    browser
      .setValue('#cc', '1001001')
      .click('#type option[value=Misa]')
      .click('#ccbutton')
      .waitForElementPresent('.result.bad', 3000)
  },
  'Should succeed adding a new bank account': function (browser) {
    browser
      .click('#addbalink')
      .waitForElementVisible('#ban', 3000)
      .setValue('#ban', '0123545332')
      .setValue('#brn', '343434')
      .click('#babutton')
      .waitForElementPresent('.result.good', 3000)
  },
  'Should fail adding a new bank account': function (browser) {
    browser
      .click('#addbalink')
      .waitForElementVisible('#ban', 3000)
      .setValue('#ban', '1001001')
      .setValue('#brn', '343434')
      .click('#babutton')
      .waitForElementPresent('.result.bad', 3000)
  }
};
