'use strict';

describe('Directive: Layout/Menu/DynamicMenu', function () {

  // load the directive's module
  beforeEach(module('paymentappApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-layout/-menu/-dynamic-menu></-layout/-menu/-dynamic-menu>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the Layout/Menu/DynamicMenu directive');
  }));
});
