module.exports.to = async function () {
  let nemo = this.nemo || arguments[0].nemo;
  let {card, nav} = nemo.view;
  await nav.cardLink().click();
  await card.form.waitVisible(5000);
};
module.exports.add = async function () {
  let nemo = this.nemo || arguments[0].nemo;
  let {card} = nemo.view;
  await card.form.waitVisible(5000);
  await card.ccn().sendKeys(nemo.data.ccn);

  // do we have the CC type dropdown?
  if (await card.cctype.present()) {
    await card.cctype.optionValue('Misa');
  }
  await card.button().click();
  await nemo.view._waitVisible(nemo.data.result, 5000);
};
