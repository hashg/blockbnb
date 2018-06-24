'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');


module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
  });

  app.import('vendor/ratchet/css/ratchet.css');
  app.import('vendor/ratchet/css/ratchet-theme-ios.css');

  // app.import('vendor/ratchet/js/common.js');
  // app.import('vendor/ratchet/js/toggles.js');


  app.import('vendor/ratchet/fonts/ratchicons.eot', {
    destDir: '/fonts'
  });
  app.import('vendor/ratchet/fonts/ratchicons.svg', {
    destDir: '/fonts'
  });
  app.import('vendor/ratchet/fonts/ratchicons.ttf', {
    destDir: '/fonts'
  });
  app.import('vendor/ratchet/fonts/ratchicons.woff', {
    destDir: '/fonts'
  });


  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
