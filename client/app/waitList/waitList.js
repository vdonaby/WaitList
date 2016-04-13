'use strict';

angular.module('waitListApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('waitList', {
        url: '/waitList',
        templateUrl: 'app/waitList/waitList.html',
        controller: 'WaitListCtrl'
      });
  });
