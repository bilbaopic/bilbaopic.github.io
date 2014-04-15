angular.module('picApp').controller('MapaCtrl', function ($scope){
	var map = L.map('map').setView([43.27132,-2.93843], 18);
	L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    	attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
	}).addTo(map);
	map.locate({setView: true});

	$scope.elements = [	{ name: "Farmacias" },
						{ name: "Comercios" },
						{ name: "Aseos" },
					  	{ name: "Museos" },
						{ name: "Bares" },
						{ name: "Paradas de bus" },
						{ name: "Estaciones de metro" },
						{ name: "Otros PIC" }
					  ];
	$scope.toogle = function(item){
		item.active = !item.active;
	};

});