'use strict';

module.exports = {
  elements: {
    link: {
      selector: '#addbalink'
    },
    form: {
      selector: '#addbaform'
    },
    ban: {
      selector: '#ban'
    },
    brn: {
      selector: '#brn'
    },
    submit: {
      selector: '#babutton'
    }
  },
  commands: [{
    to: function () {
      return this
        .click('@link')
        .waitForElementVisible('@form', 3000);
    },
    add: function(ban, brn, result) {
      return this
        .setValue('@ban', ban)
        .setValue('@brn', brn)
        .click('@submit')
        .waitForElementPresent(result, 3000)
    }
  }]
};
