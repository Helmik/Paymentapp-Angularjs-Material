(function(){
'use strict';
  /**
   * @ngdoc overview
   * @name paymentappApp
   * @description
   * # paymentappApp
   *
   * Main module of the application.
   */
  var app = angular
  .module('paymentappApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngRoute',

    'ui.router',
    'md.data.table',

    'Layout',
    'Users',
    'Miscellaneous'
  ])
  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
    .state('home', {
      url: "/home",
      controller: 'DashboardCtrl',
      templateUrl: 'views/dashboard/dashboard.html'
    })
    .state('createUser', {
      url: "/createUser",
      controller: 'UserCreateCtrl',
      templateUrl: 'views/users/createuser.html'
    })
    .state('usersList', {
      url: "/usersList",
      controller: 'GetUsersCtrl',
      templateUrl: 'views/users/getusers.html'
    });
  });
})();
