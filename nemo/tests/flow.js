const {auth, card, bank} = require('../flow');

describe('PayFriend payment methods', function () {
  beforeEach(auth.login);
  afterEach(auth.logout);

  it('try adding a credit card', async function () {
    await card.to(this);
    await card.add(this);
  });

  it('should try adding a bank account', async function () {
    await bank.to(this);
    await bank.add(this);
  });

});
