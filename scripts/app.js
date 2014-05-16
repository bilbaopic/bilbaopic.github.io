
var app = angular.module('picApp', [
  'ui.router',
  'ui.bootstrap'
]);

app.config(function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider.state('web', {
      url: '/web',  
      templateUrl: 'web.html',
    })

    $stateProvider.state('web.home', {
      url: '/home',  
      templateUrl: 'home.html',
      controller: 'HomeCtrl'
    })

    .state('web.mapa', {
      url: '/mapa',  
      templateUrl: 'mapa.html',
      controller: 'MapaCtrl'
    })

    .state('web.ocio', {
      url: '/ocio',  
      templateUrl: 'ocio.html',
      controller: 'OcioCtrl'
    })

    .state('web.servicios', {
      url: '/servicios',  
      templateUrl: 'servicios.html',
      controller: 'ServiciosCtrl'
    }) 

    .state('web.ofertas', {
      url: '/ofertas',  
      templateUrl: 'ofertas.html',
      controller: 'OfertasCtrl'
    })

    .state('web.transporte', {
      url: '/transporte',  
      templateUrl: 'transporte.html',
      controller: 'TransporteCtrl'
    })

    .state('web.turismo', {
      url: '/turismo',  
      templateUrl: 'turismo.html',
      controller: 'TurismoCtrl'
    })

    .state('web.tiempo', {
      url: '/tiempo',  
      templateUrl: 'tiempo.html',
      controller: 'TiempoCtrl'
    })

    .state('web.emergencias', {
      url: '/emergencias',  
      templateUrl: 'emergencias.html',
      controller: 'EmergenciasCtrl'
    })

    .state('web.entradas', {
      url: '/entradas',  
      templateUrl: 'entradas.html',
      controller: 'EntradasCtrl'
    })  

    .state('pause', {
      url: '/screensaver',  
      templateUrl: 'screensaver.html',
      controller: 'ScreensaverCtrl'
    }) 

    $urlRouterProvider.otherwise('/screensaver');
});
