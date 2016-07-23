'use strict';

/**
 * @ngdoc overview
 * @name stephenProjectApp
 * @description
 * # stephenProjectApp
 *
 * Main module of the application.
 */
angular
  .module('stephenProjectApp', [
    'ngCookies',
      'ui.router',
        'LayoutModule',
        'HomeModule',
        'DemoModule'
  ]);



