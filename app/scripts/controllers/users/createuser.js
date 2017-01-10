'use strict';
(function(){
	/**
	 * @ngdoc function
	 * @name paymentappApp.controller:UsersCreateuserCtrl
	 * @description
	 * # UsersCreateuserCtrl
	 * Controller of the paymentappApp
	 */
	angular.module('paymentappApp')
  .controller('CreateUserCtrl', ["$scope",createUser]);

  function createUser($scope){
		console.log("scope",$scope);
	}
})
