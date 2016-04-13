'use strict';

describe('Controller: WaitListCtrl', function () {

  // load the controller's module
  beforeEach(module('waitListApp'));

  var WaitListCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WaitListCtrl = $controller('WaitListCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
