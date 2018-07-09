describe('PayFriend payment methods', function () {
  beforeEach(async function () {
    let nemo = this.nemo;
    await nemo.driver.get(nemo.data.baseUrl);
    await nemo.view._wait('body[data-loaded=true]');
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

  it('should @succeed@ adding a credit card', async function () {
    let nemo = this.nemo;

    await nemo.view._waitVisible('#addccform', 5000);
    await nemo.view._find('#cc').sendKeys('4141554433223333');

    // do we have the CC type dropdown?
    if (await nemo.view._present('#type')) {
      await nemo.view._find('#type option[value=Misa]').click();
    }
    await nemo.view._find('#ccbutton').click();
    await nemo.view._waitVisible('.result.good', 5000);
  });

  it('should @fail@ adding a credit card', async function () {
    let nemo = this.nemo;

    await nemo.view._waitVisible('#addccform', 5000);
    await nemo.view._find('#cc').sendKeys('1001001');

    // do we have the CC type dropdown?
    if (await nemo.view._present('#type')) {
      await nemo.view._find('#type option[value=Misa]').click();
    }
    await nemo.view._find('#ccbutton').click();
    await nemo.view._waitVisible('.result.bad', 5000);
  });

  it('should @succeed@ adding a bank account', async function () {
    let nemo = this.nemo;

    await nemo.view._find('#addbalink').click();
    await nemo.view._waitVisible('#ban').sendKeys('0123545332');
    await nemo.view._find('#brn').sendKeys('343434');
    await nemo.view._find('#babutton').click();
    await nemo.view._waitVisible('p.result.good');
  });

  it('should @fail@ adding a bank account', async function () {
    let nemo = this.nemo;

    await nemo.view._find('#addbalink').click();
    await nemo.view._waitVisible('#ban').sendKeys('1001001');
    await nemo.view._find('#brn').sendKeys('343434');
    await nemo.view._find('#babutton').click();
    await nemo.view._waitVisible('p.result.bad');
  });
});
