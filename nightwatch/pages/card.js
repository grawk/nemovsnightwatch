'use strict';
module.exports = {
  elements: {
    link: {
      selector: '#addcclink'
    },
    form: {
      selector: '#addccform'
    },
    ccn: {
      selector: '#cc'
    },
    cctype: {
      selector: '#type'
    },
    misa: {
      selector: '#type option[value=Misa]'
    },
    submit: {
      selector: '#ccbutton'
    }
  },
  commands: [{
    to: function () {
      return this
        .click('@link')
        .waitForElementVisible('@form', 3000);
    },
    add: function(ccn, result) {
      return this
        .setValue('@ccn', ccn)
        .click('@misa')
        .click('@submit')
        .waitForElementPresent(result, 3000)
    }
  }]
};
