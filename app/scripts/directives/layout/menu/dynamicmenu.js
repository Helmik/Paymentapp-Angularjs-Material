'use strict';
(function(){
/**
 * @ngdoc directive
 * @name paymentappApp.directive:Layout/Menu/DynamicMenu
 * @description
 * # Layout/Menu/DynamicMenu
 */
	angular.module('paymentappApp')
  .directive('dynamicMenu', ["$state", "menuFactory" , function ($state,menuFactory) {
      return {
        templateUrl: '/views/layout/menu/dynamicmenu.html',
        restrict: 'E',
        link: function postLink(scope, element, attrs) {
          scope.menu = menuFactory;

          scope.goToState = function(state){
          	$state.go(state);
          };
  
        }
      };
    }]);
	
})();
