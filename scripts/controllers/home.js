angular.module('picApp').controller('ScreensaverCtrl', function ($scope, $state){
  $scope.slides = 
  [
    {
      image: 'img/gratis.png',
      title: 'HOY GRATIS',
      text: 'METworking bilbao, generacion de contactos de MET community, a las 16:00 en la Universidad de Deusto'
    },
    {
      image: 'img/news-2.jpg',
      text: 'La previsión da un giro y confirma ahora buen tiempo hasta el sábado'
    }
  ];

  $scope.exit = function(){
    $state.go('web.home');
  }

});

angular.module('picApp').controller('HomeCtrl', function ($scope, $state){

});