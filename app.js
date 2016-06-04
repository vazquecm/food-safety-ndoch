// handles the routes for the client side, all client files are in the "public" folder //
var app = angular.module('mainApp', ['ngRoute', 'angular.filter'])

app.config(['$routeProvider',
  function($routeProvider) {

    $routeProvider
      .when('/search-view', {
        templateUrl: 'partials/search-view.html',
        controller: 'search-viewCtrl'
      })

      .otherwise('/search-view');

  }]);
