'use strict';

describe('Service: miscellaneous/messages/messages', function () {

  // load the service's module
  beforeEach(module('paymentappApp'));

  // instantiate service
  var miscellaneous/messages/messages;
  beforeEach(inject(function (_miscellaneous/messages/messages_) {
    miscellaneous/messages/messages = _miscellaneous/messages/messages_;
  }));

  it('should do something', function () {
    expect(!!miscellaneous/messages/messages).toBe(true);
  });

});
