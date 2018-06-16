'use strict';

module.exports = function(environment) {
  let ENV = {
    modulePrefix: 'token-settle-test',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      apiHost: 'https://wt-f805e3589e52ede2272a91b25a1374e6-0.sandbox.auth0-extend.com/jwt-dummy'
    }
  };

  ENV['ember-simple-auth-token'] = {
    refreshAccessTokens      : false,
    serverTokenEndpoint      : `${ENV.APP.apiHost}/login`,
    tokenPropertyName        : 'access_token',
    refreshTokenPropertyName : 'refresh_token',
    authorizationPrefix      : 'JWT ',
    authorizationHeaderName  : 'Authorization',
    headers                  : {}
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
