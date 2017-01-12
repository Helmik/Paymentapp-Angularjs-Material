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
  .controller('UserSaveCtrl', ['$scope','$state','$mdToast','UsersService','HandleErrors',function ($scope,$state,$mdToast,UsersService,HandleErrors) {

  	$scope.user = {};
    $scope.editMode = false;

    // If an id user has been pass as parameter
    if($state.params.id){
      $scope.editMode = true;
      // Get the user
      UsersService.getUserById($state.params.id).then(
      function(data){
        var user = data.data.data[0];
        // Set the user got in the model
        console.log($scope.user);
        $scope.user = data.data.data[0];
        delete $scope.user.password;
      },
      function(error){
        console.log('----',error);
      });
    }

    $scope.saveInfo = function(){
      if($scope.editMode){
        // Update user if it exist
        updateUser($scope.user);
      }else{
        // Create a new user
        createUser($scope.user);
      }
    };

    function updateUser(user){
      UsersService.updateUser(user).then(
        function(data){
          console.log(data);
        },function(error){
          console.log(error);
        }
      );
    }

    function createUser(user){
  		UsersService.saveUser(user).then(
  			function(data){
  				console.log(data);
  			},function(error){
          $mdToast.show(HandleErrors.error(error));
  			}
  		);
  	}
  }]);
})();
