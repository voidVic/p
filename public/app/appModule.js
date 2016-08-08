/*
 * @author Ankit Sharma <vicNWZ@gmail.com>
 */

var app = angular.module('webProfile', [
  'ngRoute',
  'ui.bootstrap'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "homeController as homeCtrl"})
    // Pages
    //.when("/about", {templateUrl: "partials/about.html", controller: "PageCtrl"})
    .when("/spaceShoot", {templateUrl: "partials/externalApps.html", controller: "externalAppController as eaCtrl"})
    // else 404
    .otherwise("/404", {templateUrl: "partials/404.html"});
}]);

app.run(function($rootScope){
  $rootScope.hideLoader = true;
});

app.constant('appConstants', {
	xBox: 5,
	yBox: 7,
	xLow: 10,
	xUp: 80,
	yLow: 10,
	yUp: 80,
	blkSizeX: 11.5,
	blkSizeY: 16,
	switchingDelay: 400,
  mobWidth: 600
});

app.directive('inputM',['$compile', function($compile){
  return {
    restrict: 'E',
    scope: {
      mName: '@',
      mType: '@',
      mPlaceholder: '@',
      mModel: '=',
      mLabel: '@',
      mRow: '@'
    },
    // controllerAs: ',
     //bindToController: true,
    controller: ['$scope', function($scope){
      //var scope = this;
      $scope.activeC= "";
      $scope.activated = function(isActive){
        if(isActive || ($scope.mModel != '' && $scope.mModel != null)){
          $scope.activeC= "active";
        }else{
          $scope.activeC= "";
        }
      }
    }],
    template: '<div class="input-m-class"><label class="{{activeC}}" ng-bind="mLabel"></label><input type="{{mType}}" row="{{mRow}}" name="{{mName}}" placeholder="{{mPlaceholder}}" ng-model="mModel" ng-focus="activated(true)" ng-blur="activated(false)"> </div>'
  }
}]);
