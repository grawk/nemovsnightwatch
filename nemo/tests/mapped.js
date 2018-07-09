describe('PayFriend payment methods', function () {
  beforeEach(async function () {
    let nemo = this.nemo;
    await nemo.driver.get(nemo.data.baseUrl);
    await nemo.view._wait('body[data-loaded=true]', 2000);
    await nemo.view._present('#email');
    await nemo.view._find('#email').sendKeys('me@mine.com');
    await nemo.view._find('#password').sendKeys('p4w3rD!');
    await nemo.driver.sleep(100);
    await nemo.view._find('#loginbutton').click();
    await nemo.view._waitVisible('#addccform', 5000);
  });
  afterEach(async function () {
    let nemo = this.nemo;
    await nemo.view._find('#logoutlink').click();
    await nemo.view._waitVisible('#email', 5000);
  });

  it('try adding a credit card', async function () {
    let nemo = this.nemo;

    await nemo.view._waitVisible('#addccform', 5000);
    await nemo.view._find('#cc').sendKeys(nemo.data.ccn);

    // do we have the CC type dropdown?
    if (await nemo.view._present('#type')) {
      await nemo.view._find('#type option[value=Misa]').click();
    }
    await nemo.view._find('#ccbutton').click();
    await nemo.view._waitVisible(nemo.data.result, 5000);
  });

  it('should try adding a bank account', async function () {
    let nemo = this.nemo;

    await nemo.view._find('#addbalink').click();
    await nemo.view._waitVisible('#ban').sendKeys(nemo.data.bn);
    await nemo.view._find('#brn').sendKeys('343434');
    await nemo.view._find('#babutton').click();
    await nemo.view._waitVisible(nemo.data.result);
  });

});
