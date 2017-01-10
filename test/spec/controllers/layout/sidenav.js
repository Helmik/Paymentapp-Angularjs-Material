'use strict';

describe('Controller: LayoutSidenavctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('paymentappApp'));

  var LayoutSidenavctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LayoutSidenavctrlCtrl = $controller('LayoutSidenavctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LayoutSidenavctrlCtrl.awesomeThings.length).toBe(3);
  });
});
