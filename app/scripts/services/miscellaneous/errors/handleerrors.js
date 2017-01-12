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
  .factory('HandleErrors', ['$mdToast', function ($mdToast) {
    var result = {};

  
    result.error = function(error){
      console.log(error);
      return $mdToast.simple()
        .textContent(error.data.code +" - " + error.data.message)
        .action('Acept')
        .highlightAction(true)
        .highlightClass('md-accent')// Accent is used by default, this just demonstrates the usage.
        .highlightClass('md-primary')// Accent is used by default, this just demonstrates the usage.
        .position('top right');
    }

    return result;

  }]);
})();
