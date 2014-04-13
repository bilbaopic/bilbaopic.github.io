
var app = angular.module('picApp', [
  'ui.router',
]);

app.config(function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state('home', {
      url: '/',  
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    })

    .state('mapa', {
      url: '/',  
      templateUrl: 'mapa.html',
      controller: 'MapaCtrl'
    })

    .state('ocio', {
      url: '/',  
      templateUrl: 'ocio.html',
      controller: 'OcioCtrl'
    })

    .state('servicios', {
      url: '/',  
      templateUrl: 'servicios.html',
      controller: 'ServiciosCtrl'
    }) 

    .state('ofertas', {
      url: '/',  
      templateUrl: 'ofertas.html',
      controller: 'OfertasCtrl'
    })

    .state('transporte', {
      url: '/',  
      templateUrl: 'transporte.html',
      controller: 'TransporteCtrl'
    })

    .state('turismo', {
      url: '/',  
      templateUrl: 'turismo.html',
      controller: 'TurismoCtrl'
    })

    .state('tiempo', {
      url: '/',  
      templateUrl: 'tiempo.html',
      controller: 'TiempoCtrl'
    })

    .state('emergencias', {
      url: '/',  
      templateUrl: 'emergencias.html',
      controller: 'EmergenciasCtrl'
    })

    .state('entradas', {
      url: '/',  
      templateUrl: 'entradas.html',
      controller: 'EntradasCtrl'
    })   

    $urlRouterProvider.otherwise('/');
});
