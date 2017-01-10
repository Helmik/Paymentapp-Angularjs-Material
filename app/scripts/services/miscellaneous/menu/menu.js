'use strict';
(function(){
  /**
   * @ngdoc service
   * @name paymentappApp.miscellaneous/menu/menu
   * @description
   * # miscellaneous/menu/menu
   * Factory in the paymentappApp.
   */
  angular.module('paymentappApp')
  .factory('menuFactory', function () {

    // Public API here
    return [
      {
        name : "Users list",
        state : "userList",
        url: "/"
      },
      {
        name : "Create user",
        state : "createUser",
        url: "/createUser"
      }
    ];
  });
})();
