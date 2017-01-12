'use strict';

describe('Controller: UsersUsercreateCtrl', function () {

  // load the controller's module
  beforeEach(module('paymentappApp'));

  var UsersUsercreateCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsersUsercreateCtrl = $controller('UsersUsercreateCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsersUsercreateCtrl.awesomeThings.length).toBe(3);
  });
});
