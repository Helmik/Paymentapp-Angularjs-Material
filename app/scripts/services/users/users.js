(function(){
'use strict';
	/**
	 * @ngdoc service
	 * @name paymentappApp.Users/Users
	 * @description
	 * # Users/Users
	 * Service in the paymentappApp.
	 */
	angular.module('Users')
  .service('UsersService', ["$http","$q","PetitionsService","BACK_END",function($http,$q,PetitionsService,BACK_END){
  	var self = this;

  	self.getUsers = function(){
  		return PetitionsService.get("users");
  	};

  	self.saveUser = function(user){
  		return PetitionsService.post("users/create",user);
  	};

  }]);
})();
