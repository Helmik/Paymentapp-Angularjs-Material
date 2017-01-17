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
    'md.data.table',
    'ngLodash',
    'ngMenuSidenav',

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
      url: "/users/create",
      controller: 'UserSaveCtrl',
      templateUrl: 'views/users/saveuser.html'
    })
    .state('usersList', {
      url: "/users",
      controller: 'GetUsersCtrl',
      templateUrl: 'views/users/getusers.html'
    })
    .state('getUser', {
      url: "/users/:id",
      controller: 'UserSaveCtrl',
      templateUrl: 'views/users/saveuser.html'
    });
  })
  .controller('AppCtrl', ['$scope', '$mdSidenav', function ($scope, $mdSidenav) {
    $scope.index = 0;

    $scope.toggleSidenav = function (menuId) {
      $mdSidenav(menuId).toggle();
    };
  }]);

})();
