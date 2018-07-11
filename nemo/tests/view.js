
describe('PayFriend payment methods', function () {
  beforeEach(async function () {
    let nemo = this.nemo;
    let {nav, login, card} = nemo.view;
    await nemo.driver.get(nemo.data.baseUrl);
    await nav.jsLoaded.wait();
    await login.email().sendKeys('me@mine.com');
    await login.password().sendKeys('p4w3rD!');
    await login.button().click();
    await card.form.waitVisible(3000);
  });
  afterEach(async function () {
    let nemo = this.nemo;
    let {nav, login} = nemo.view;
    await nav.logoutLink().click();
    await login.form.waitVisible(3000);
  });

  it('try adding a credit card', async function () {
    let nemo = this.nemo;
    let {card} = nemo.view;
    await card.form.waitVisible(5000);
    await card.ccn().sendKeys(nemo.data.ccn);

    // do we have the CC type dropdown?
    if (await card.cctype.present()) {
      await card.cctype.optionValue('Misa');
    }
    await card.button().click();
    await nemo.view._waitVisible(nemo.data.result, 5000);
  });

  it('should try adding a bank account', async function () {
    let nemo = this.nemo;
    let {nav, bank} = nemo.view;
    await nav.bankLink().click();
    await bank.form.waitVisible(3000);
    await bank.ban().sendKeys(nemo.data.bn);
    await bank.brn().sendKeys('343434');
    await bank.button().click();
    await nemo.view._waitVisible(nemo.data.result);
  });

});
