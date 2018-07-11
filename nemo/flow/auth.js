module.exports.login = async function () {
  let nemo = this.nemo;
  let {nav, login, card} = nemo.view;
  await nemo.driver.get(nemo.data.baseUrl);
  await nav.jsLoaded.wait(3000);
  await login.email().sendKeys('me@mine.com');
  await login.password().sendKeys('p4w3rD!');
  await login.button().click();
  await card.form.waitVisible(3000);
};

module.exports.logout = async function () {
  let nemo = this.nemo;
  let {nav, login} = nemo.view;
  await nav.logoutLink().click();
  await login.form.waitVisible(3000);
};
