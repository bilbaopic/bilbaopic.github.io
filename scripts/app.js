
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
      url: '/mapa',  
      templateUrl: 'mapa.html',
      controller: 'MapaCtrl'
    })

    .state('ocio', {
      url: '/ocio',  
      templateUrl: 'ocio.html',
      controller: 'OcioCtrl'
    })

    .state('servicios', {
      url: '/servicios',  
      templateUrl: 'servicios.html',
      controller: 'ServiciosCtrl'
    }) 

    .state('ofertas', {
      url: '/ofertas',  
      templateUrl: 'ofertas.html',
      controller: 'OfertasCtrl'
    })

    .state('transporte', {
      url: '/transporte',  
      templateUrl: 'transporte.html',
      controller: 'TransporteCtrl'
    })

    .state('turismo', {
      url: '/turismo',  
      templateUrl: 'turismo.html',
      controller: 'TurismoCtrl'
    })

    .state('tiempo', {
      url: '/tiempo',  
      templateUrl: 'tiempo.html',
      controller: 'TiempoCtrl'
    })

    .state('emergencias', {
      url: '/emergencias',  
      templateUrl: 'emergencias.html',
      controller: 'EmergenciasCtrl'
    })

    .state('entradas', {
      url: '/entradas',  
      templateUrl: 'entradas.html',
      controller: 'EntradasCtrl'
    })   

    $urlRouterProvider.otherwise('/');
});
