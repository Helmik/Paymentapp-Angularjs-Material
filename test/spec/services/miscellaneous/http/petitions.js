'use strict';

describe('Service: miscellaneous/http/petitions', function () {

  // load the service's module
  beforeEach(module('paymentappApp'));

  // instantiate service
  var miscellaneous/http/petitions;
  beforeEach(inject(function (_miscellaneous/http/petitions_) {
    miscellaneous/http/petitions = _miscellaneous/http/petitions_;
  }));

  it('should do something', function () {
    expect(!!miscellaneous/http/petitions).toBe(true);
  });

});
