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
    .controller('GetUsersCtrl', ['$scope','$timeout','$state','$q','UsersService','lodash', function($scope,$timeout,$state,$q,UsersService,lodash){

    var allUsers = [];
  	$scope.usersToShow = [];

  	$scope.selected = [];
  	$scope.users = [];
  	$scope.inactives = false;

	$scope.query = {
	    // filter: '',
	    order: 'firstName',
	    limit: 5,
	    page: 1
	};
  
  	// Get all user on load state
  	UsersService.getUsers().then(
  		function(data){
  			allUsers = data.data.data;
  			$scope.users = allUsers.filter(function(user){
  								return user.active;
  							});
  			$scope.usersToShow = $scope.users.slice(($scope.query.page-1)*5,($scope.query.page-1)*5+$scope.query.limit);
  	},function(error){
  			console.log(error);
  	});

  	// Function to show the specific elements in the table
  	$scope.onOrderChange = function (page,limit) {
  		$scope.promise = $timeout(function () {
  			$scope.usersToShow = $scope.users.slice(($scope.query.page-1)*5,($scope.query.page-1)*5+$scope.query.limit);
  			// $scope.usersToShow = $scope.users.slice((page-1)*5,(page-1)*5+limit);
    	}, 200);
	};

	// Function to order by any field
	$scope.reorder = function(column){
		$scope.promise = $timeout(function () {
			var reverse = false;
			if(column[0] == "-"){
				reverse = true;
				column.replace("-","");
			}

			$scope.users = lodash.sortBy($scope.users, [function(o) { return o[column]; }]);

			if(reverse){
				$scope.users.reverse();
			}
			$scope.onOrderChange();
			// $scope.usersToShow = $scope.users.slice(($scope.query.page-1)*5,($scope.query.page-1)*5+$scope.query.limit);
		}, 200);
	};

	// This function sends to edit functionality
	$scope.editUser = function(users){
		if(users.length >2){
			throw "You can edit one user at the same time";
		}
		$state.go("getUser",{id : user[0]._id});
	};

	// Remove user from table and data  base
	$scope.removeUser = function(user){
		$scope.removeUsers([user]);
	};

	// Active an user
	$scope.activeUser = function(user){
		user.active = true;
     	UsersService.updateUser(user).then(
     	function(data){
     		console.log(data);
     	},
     	function(error){
     		console.log(error);
     	});
	};

	// Remove all user selected
	$scope.removeUsers = function(users){
		var promises = users.map(function(user){
			user.active = false;
     		return UsersService.updateUser(user);
		});

		$q.all(promises).then(
		function(data) {
			if(!$scope.inactives){
	 			angular.forEach(data,function(user){
	 				lodash.remove($scope.users,function(u){
	 					return user.data.data._id == u._id;
	 				});
	 			});
			}
			$scope.onOrderChange();
 			// $scope.usersToShow = $scope.users.slice(($scope.query.page-1)*5,($scope.query.page-1)*5+$scope.query.limit);
 			$scope.selected.length = 0;
		}, function(error) {
			console.log(error);
		});
	};

	// Show or hide the inactive users
	$scope.changeInactives = function(){
		// $scope.inactives = !$scope.inactives;
		$scope.users = allUsers.filter(function(user){
										return user.active || $scope.inactives;
									});
		$scope.onOrderChange();
		// $scope.usersToShow = $scope.users.slice(($scope.query.page-1)*5,($scope.query.page-1)*5+$scope.query.limit);
	};

  }]);
})();
