'use strict';

module.exports = {
  url: function () {
    return this.api.launchUrl;
  },
  elements: {
    jsLoaded: {
      selector: 'body[data-loaded=true]'
    },
    email: {
      selector: '#email'
    },
    password: {
      selector: '#password'
    },
    submit: {
      selector: '#loginbutton'
    },
    logoutLink: {
      selector: '#logoutlink'
    }
  },
  commands: [{
    signIn: function (done) {
      return this
        .waitForElementPresent('@jsLoaded', 3000)
        .setValue('@email', 'me@mine.com')
        .setValue('@password', 'p4w3rD!')
        .click('@submit')
        .waitForElementVisible('#addccform', 3000, function () {
          done();
        });
    },
    signOut: function (done) {
      return this
        .click('@logoutLink')
        .waitForElementVisible('@email', 3000, function () {
          done();
        });
    }
  }]
};
