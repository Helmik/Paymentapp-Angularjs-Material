(function(){
	'use strict';

	/**
	 * @ngdoc function
	 * @name paymentappApp.controller:UsersGetusersCtrl
	 * @description
	 * # UsersGetusersCtrl
	 * Controller of the paymentappApp
	 */
	angular.module('Users')
  .controller('GetUsersCtrl', ['$scope','UsersService', function($scope,UserService){
  	$scope.selected = [];
  	$scope.users = [];

	  $scope.query = {
	    filter: '',
	    order: 'firstName',
	    limit: 5,
	    page: 1
	  };
  
  	UserService.getUsers().then(
  		function(data){
  			$scope.users = data.data.data;
  	},function(error){
  			console.log(error);
  	});

  	$scope.onOrderChange = function (order) {
	    return $scope.users; 
	  };

  }]);
})();
