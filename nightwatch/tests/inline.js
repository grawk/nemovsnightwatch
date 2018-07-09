module.exports = {
  'Should log in and out': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementPresent('body[data-loaded=true]', 3000)
      .assert.elementPresent('#email')
      .setValue('#email', 'me@mine.com')
      .setValue('#password', 'p4w3rD!')
      .click('#loginbutton')
      .waitForElementVisible('#addccform', 3000)
      .click('#logoutlink')
      .waitForElementVisible('#email', 3000)
      .end();
  },
  'Should add a new credit card': function (browser) {
    browser
      .url(browser.launchUrl)
      .waitForElementPresent('body[data-loaded=true]', 3000)
      .assert.elementPresent('#email')
      .setValue('#email', 'me@mine.com')
      .setValue('#password', 'p4w3rD!')
      .click('#loginbutton')
      .waitForElementVisible('#addccform', 3000)
      .setValue('#cc', '4141554433223333')
      // conditional behavior not straightforward. this test will sometimes fail
      .click('#type option[value=Misa]')
      .click('#ccbutton')
      .waitForElementPresent('.result.good', 3000)
      .click('#logoutlink')
      .waitForElementVisible('#email', 3000)
      .end();
  }
};
