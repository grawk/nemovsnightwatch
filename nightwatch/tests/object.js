module.exports = {
  'beforeEach': function login(browser, done) {
    var login = browser.page.login();
    login.navigate()
      .signIn(done);
  },
  'afterEach': function logout(browser, done) {
    var login = browser.page.login();
    login.navigate()
      .signOut(done);
  },
  'after': function end(browser) {
    browser.end();
  },
  'Should succeed adding a new credit card': function (browser) {
    var card = browser.page.card();
    card
      .to()
      .add('4141554433223333', '.result.good');
  },
  'Should fail adding a new credit card': function (browser) {
    var card = browser.page.card();
    card
      .to()
      .add('1001001', '.result.bad');
  },
  'Should succeed adding a new bank account': function (browser) {
    var bank = browser.page.bank();
    bank
      .to()
      .add('0123545332', '343434', '.result.good');
  },
  'Should fail adding a new bank account': function (browser) {
    var bank = browser.page.bank();
    bank
      .to()
      .add('1001001', '343434', '.result.bad');
  }
};
