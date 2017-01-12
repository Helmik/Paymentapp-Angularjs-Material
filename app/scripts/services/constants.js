(function(){
	'use strict';

	/**
	 * @ngdoc service
	 * @name paymentappApp.constants
	 * @description
	 * # constants
	 * Value in the paymentappApp.
	 */
	angular.module('Miscellaneous')
  .value('BACK_END', {
  	'BASE_URL' : "http://localhost",
  	'PORT' : "3000",
  	'URL' : function(){return this.BASE_URL+":"+this.PORT+"/"}
  });
})();
