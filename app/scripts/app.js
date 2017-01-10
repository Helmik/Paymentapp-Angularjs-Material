'use strict';
(function(){
  /**
   * @ngdoc overview
   * @name paymentappApp
   * @description
   * # paymentappApp
   *
   * Main module of the application.
   */
  angular
  .module('paymentappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngRoute',

    'ui.router',

    'Layout'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
      url: "/home",
      controller: 'DashboardCtrl',
      template: 'view/dashboard/dashboard.html'
    })
    .state('createUser', {
      url: "/createUser",
      controller: 'CreateUserCtrl',
      templateUrl: 'views/users/createuser.html'
    });
  });
})();
