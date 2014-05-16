angular.module('picApp').controller('MapaCtrl', function ($scope){
	var train = L.AwesomeMarkers.icon({
    icon: 'flag',
    markerColor: 'orange'
  });
  var commerce = L.AwesomeMarkers.icon({
    icon: 'shopping-cart',
    markerColor: 'green'
  })
  var bus = L.AwesomeMarkers.icon({
    icon: 'flag-o',
    prefix: 'fa',
    markerColor: 'purple'
  });
  var bar = L.AwesomeMarkers.icon({
    icon: 'coffee',
    prefix: 'fa',
    markerColor: 'red'
  });
  var bath = L.AwesomeMarkers.icon({
  	icon: "HHEH",
    markerColor: 'blue'
  })



	var map = L.map('map').setView([43.2702,-2.94543], 16);
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	map.locate({setView: true});
	map.on('click', function(e){
		console.log(e.latlng);
	})

	$scope.layers = [L.layerGroup(), L.layerGroup(), L.layerGroup(), L.layerGroup(), L.layerGroup(), L.layerGroup(), L.layerGroup(), L.layerGroup()];

	$scope.toogle = function(i){
		if(map.hasLayer($scope.layers[i])) map.removeLayer($scope.layers[i]);
		else $scope.layers[i].addTo(map);
		
		$scope.elements[i].active = !$scope.elements[i].active;
	}

	L.marker([43.2719169902842, -2.948675751686096], {icon: train}).addTo($scope.layers[6]);

	L.marker([43.27114362111663, -2.946481704711914], {icon: commerce}).addTo($scope.layers[1]);
	L.marker([43.2711865863282, -2.9486167430877686], {icon: commerce}).addTo($scope.layers[1]);
	L.marker([43.26995230089797, -2.9506927728652954], {icon: commerce}).addTo($scope.layers[1]);

	L.marker([43.27112799739582, -2.941111922264099], {icon: bus}).addTo($scope.layers[5]);
	L.marker([43.27172169596734, -2.94507086277008], {icon: bus}).addTo($scope.layers[5]);
	L.marker([43.27198729608486, -2.945172786712646], {icon: bus}).addTo($scope.layers[5]);
	L.marker([43.27194433143856, -2.950167059898376], {icon: bus}).addTo($scope.layers[5]);
	L.marker([43.27215524850213, -2.9505854845046997], {icon: bus}).addTo($scope.layers[5]);

	L.marker([43.269960112909764, -2.9468518495559692], {icon: bar}).addTo($scope.layers[4]);
	L.marker([43.27003042097096, -2.9446417093276978], {icon: bar}).addTo($scope.layers[4]);
	L.marker([43.26865939912823, -2.9462456703186035], {icon: bar}).addTo($scope.layers[4]);
	L.marker([43.271549836450106, -2.949432134628296], {icon: bar}).addTo($scope.layers[4]);

	L.marker([43.268178948269274, -2.9473185539245605], {icon: bath}).addTo($scope.layers[2]);

	$scope.elements = [	{ name: "Farmacias" },
						{ name: "Comercios" },
						{ name: "Aseos" },
					  { name: "Museos" },
						{ name: "Bares" },
						{ name: "Paradas de bus" },
						{ name: "Estaciones de metro" },
						{ name: "Otros PIC" }
					  ];
});