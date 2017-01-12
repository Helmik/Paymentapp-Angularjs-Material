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

    self.getUserById = function(id){
      return PetitionsService.get("users/"+id)
    };

  	self.saveUser = function(user){
  		return PetitionsService.post("users/create",user);
  	};

    self.updateUser = function(user){
      return PetitionsService.put("users/update/"+user._id,user);
    }

  }]);
})();
