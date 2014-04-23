// public/core.js
var scotchSpot = angular.module('scotchSpot', []);

function mainController($scope, $http) {
	$scope.formData = {};

	// when landing on the page, get all Spot and show them
	$http.get('/api/spots')
		.success(function(data) {
			$scope.spots = data;
			console.log(data);
		})
		.error(function(data) {
			console.log('Error: ' + data);
		});

	// when submitting the add form, send the text to the node API
	$scope.updateCarNum = function() {
		$http.post('/api/spots', $scope.formData)
			.success(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.spots = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};

	// delete a spot after checking it
	$scope.deleteSpot = function(id) {
		$http.delete('/api/spots/' + id)
			.success(function(data) {
				$scope.spots = data;
				console.log(data);
			})
			.error(function(data) {
				console.log('Error: ' + data);
			});
	};
}
