describe('Happy path use cases', function () {
    it('should log in and log out', async function () {
        let nemo = this.nemo;
        await nemo.driver.get(nemo.data.baseUrl);
        await nemo.view._wait('body[data-loaded=true]');
        await nemo.view._present('#email');
        await nemo.view._find('#email').sendKeys('me@mine.com');
        await nemo.view._find('#password').sendKeys('p4w3rD!');
        await nemo.driver.sleep(100);
        await nemo.view._find('#loginbutton').click();
        await nemo.view._waitVisible('#addccform', 5000);
        await nemo.view._find('#logoutlink').click();
        await nemo.view._waitVisible('#email', 5000);
    });
    it('should add a credit card', async function () {
        let nemo = this.nemo;
        await nemo.driver.get(nemo.data.baseUrl);
        await nemo.view._wait('body[data-loaded=true]');
        await nemo.view._present('#email');
        await nemo.view._find('#email').sendKeys('me@mine.com');
        await nemo.view._find('#password').sendKeys('p4w3rD!');
        await nemo.driver.sleep(100);
        await nemo.view._find('#loginbutton').click();
        await nemo.view._waitVisible('#addccform', 5000);
        await nemo.view._find('#cc').sendKeys('4141554433223333');
        // do we have the CC type dropdown?
        let dropdown = await nemo.view._present('#type');
        if (dropdown) {
            let opts = await nemo.view._finds('#type option');
            await opts[1].click();
        }
        await nemo.view._find('#ccbutton').click();
        await nemo.view._waitVisible('.result.good', 5000);
        await nemo.view._find('#logoutlink').click();
        await nemo.view._waitVisible('#email', 5000);
    });
});
