(function(){
  'use strict';

  /**
   * @ngdoc service
   * @name paymentappApp.miscellaneous/errors/handleerrors
   * @description
   * # miscellaneous/errors/handleerrors
   * Factory in the paymentappApp.
   */
  angular.module('Miscellaneous')
  .factory('Messages', ['$mdToast', function ($mdToast) {
    var result = {};

  
    result.error = function(error){
      return $mdToast.simple()
        .textContent(error.data.code +" - " + error.data.message)
        .action('Acept')
        .highlightAction(true)
        .highlightClass('md-accent')
        .position('top right');
    }

    result.success = function(data){
      console.log(data);
      return $mdToast.simple()
        .textContent(data.data.message)
        .action('Acept')
        .highlightAction(true)
        .highlightClass('md-primary')
        .position('top right');
    };

    return result;

  }]);
})();
