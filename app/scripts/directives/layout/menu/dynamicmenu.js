'use strict';
(function(){
/**
 * @ngdoc directive
 * @name paymentappApp.directive:Layout/Menu/DynamicMenu
 * @description
 * # Layout/Menu/DynamicMenu
 */
	angular.module('paymentappApp')
  .directive('dynamicMenu', ["$state", "menuFactory" , function ($state,menuFactory) {
    return {
      templateUrl: '/views/layout/menu/dynamicmenu.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.menu = menuFactory;

        scope.goToState = function(state){
        	$state.go(state);
        };

      }
    };
  }])
  .directive('menuTitle',[function(){
    return {
      template :  '<div class="menu-title" ng-click="openMenu()">'
                    +'<md-icon flex="15" class="material-icons flex-15 menu-icon">face</md-icon>'
                    +'<h1 class="md-body-2 flex menu-title-text" flex="">Mapa</h1>'
                  +'</div>',
      restrict : 'E',
      link: function(scope,element, attrs){
        
        scope.openMenu = function(){
          console.log(element[0]);
          var parent = element[0].parentElement;
          var content = parent.getElementsByClassName('content')[0];
          if(!scope.open){
            content.classList.add('open');
            scope.open = true;
          }else{
            var titles = document.getElementsByClassName('content');
            angular.forEach(titles,function(title){
              title.className = title.className.replace(/\bopen\b/,'');
            });
            content.className = content.className.replace(/\bopen\b/,'');
            scope.open = false;
          }
        };

      }
    };
  }]);
	
})();
