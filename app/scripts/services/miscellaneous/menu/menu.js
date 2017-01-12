(function(){
'use strict';
  /**
   * @ngdoc service
   * @name paymentappApp.miscellaneous/menu/menu
   * @description
   * # miscellaneous/menu/menu
   * Factory in the paymentappApp.
   */
  angular.module('Miscellaneous')
  .factory('menuFactory', function () {

    // Public API here
    return [
      {
        name : "Users list",
        state : "usersList"
      },
      {
        name : "Create user",
        state : "createUser"
      }
    ];
  });
})();
