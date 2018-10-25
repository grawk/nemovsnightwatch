module.exports.to = async function () {
  let nemo = this.nemo || arguments[0].nemo;
  let {bank, nav} = nemo.view;
  await nav.bankLink().click();
  await bank.form.waitVisible(5000);
};
module.exports.add = async function () {
  let nemo = this.nemo || arguments[0].nemo;
  let {bank} = nemo.view;
  await bank.form.waitVisible(5000);
  await bank.ban().sendKeys(nemo.data.bn);
  await bank.brn().sendKeys('343434');
  await bank.button().click();
  await nemo.view._waitVisible(nemo.data.result, 5000);
};
