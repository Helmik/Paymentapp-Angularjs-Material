(function(){
	'use strict';

	/**
	 * @ngdoc function
	 * @name paymentappApp.controller:UsersUsercreateCtrl
	 * @description
	 * # UsersUsercreateCtrl
	 * Controller of the paymentappApp
	 */
	angular.module('Users')
  .controller('UserCreateCtrl', ["$scope","UsersService",function ($scope,UsersService) {

  	$scope.user = {};

  	$scope.createUser = function(){
  		UsersService.saveUser($scope.user).then(
  			function(data){
  				console.log(data);
  			},function(error){
  				console.log(error);
  			}
  		);
  	}
  }]);
})();
