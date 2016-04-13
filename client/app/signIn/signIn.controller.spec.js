'use strict';

describe('Controller: SignInCtrl', function () {

  // load the controller's module
  beforeEach(module('waitListApp'));

  var SignInCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SignInCtrl = $controller('SignInCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
