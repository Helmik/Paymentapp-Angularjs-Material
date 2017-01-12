(function(){
	'use strict';

	/**
	 * @ngdoc service
	 * @name paymentappApp.miscellaneous/http/petitions
	 * @description
	 * # miscellaneous/http/petitions
	 * Service in the paymentappApp.
	 */
	angular.module('Miscellaneous')
  .service('PetitionsService', ["$http","$q","BACK_END",function($http,$q,BACK_END){

  	var self = this;
    const BASE_URL = BACK_END.URL();

    // Define a generic get petition
  	self.get = function(URL){
  		var defer = $q.defer();
  		$http.get(BASE_URL + URL).then(
  			function(data){
  				defer.resolve(data);
  			},
  			function(error){
  				defer.reject(err);
  			}
  		);
  		return defer.promise;
  	};

    // Define a generic post petition
  	self.post = function(URL,data){
  		var defer = $q.defer();
  		$http.post(BASE_URL + URL, data).then(
  			function(data){
  				defer.resolve(data);
  			},
  			function(error){
  				defer.reject(error);
  			}
  		);
  		return defer.promise;
  	};

    // Define a generic put petition
    self.put = function(URL,data){
      var defer = $q.defer();
      $http.put(BASE_URL + URL, data).then(
        function(data){
          defer.resolve(data);
        },
        function(error){
          defer.reject(error);
        }
      );
      return defer.promise;
    };

  }]);
})();
