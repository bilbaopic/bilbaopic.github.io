
var app = angular.module('picApp', [
  'ui.router',
]);

app.config(function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state('home', {
      url: '/',  
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    });

    $urlRouterProvider.otherwise('/');
});
