'use strict';

angular.module('waitListApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('signIn', {
        url: '/signIn',
        templateUrl: 'app/signIn/signIn.html',
        controller: 'SignInCtrl'
      });
  });
