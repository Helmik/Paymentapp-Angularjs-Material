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
  		return PetitionsService.get("user");
  	};

    self.getUserById = function(id){
      return PetitionsService.get("user/"+id)
    };

  	self.saveUser = function(user){
  		return PetitionsService.post("user/create",user);
  	};

    self.updateUser = function(user){
      return PetitionsService.put("user/update/"+user._id,user);
    }

  }]);
})();
