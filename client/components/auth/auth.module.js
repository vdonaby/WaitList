'use strict';

angular.module('waitListApp.auth', [
  'waitListApp.constants',
  'waitListApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
