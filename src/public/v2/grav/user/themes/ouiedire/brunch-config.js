'use strict';

module.exports = {
  files: {
    javascripts: {
      joinTo: 'js-compiled/app.js'
    },
    stylesheets: {
      joinTo: 'css-compiled/styles.css'
    }
  },
  paths: {
    'public': '',
    'watched': ['js', 'less']
  },
  plugins: {
    less: {}
  }
};
