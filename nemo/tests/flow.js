const {auth, card, bank} = require('../flow');

describe('PayFriend payment methods', function () {
  beforeEach(auth.login);
  afterEach(auth.logout);

  it('try adding a credit card', async function () {
    await card.to.call(this);
    await card.add.call(this);
  });

  it('should try adding a bank account', async function () {
    await bank.to.call(this);
    await bank.add.call(this);
  });

});
