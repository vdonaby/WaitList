'use strict';

angular.module('waitListApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('analytics', {
        url: '/analytics',
        templateUrl: 'app/analytics/analytics.html',
        controller: 'AnalyticsCtrl'
      });
  });
