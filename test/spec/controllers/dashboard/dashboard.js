'use strict';

describe('Controller: DashboardDashboardCtrl', function () {

  // load the controller's module
  beforeEach(module('paymentappApp'));

  var DashboardDashboardCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DashboardDashboardCtrl = $controller('DashboardDashboardCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DashboardDashboardCtrl.awesomeThings.length).toBe(3);
  });
});
