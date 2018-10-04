import { BREWERY_LIST, BREWERY_LISTED } from './../brewery.enum.js';

export default {
	templateUrl: './brewery-list.html',
	controller: ['$scope', '$rootScope', function breweryListController($scope, $rootScope) {
		// enter controller code here
		var myVar = 'bar';
		this.myVar = function () {
			return myVar;
		};

		$rootScope.$on(BREWERY_LISTED, function processBreweryList(_, breweries) {
			console.log(breweries)
			updateMyVar(breweries.length + ' total breweries');
		});

		$rootScope.$broadcast(BREWERY_LIST);

		function updateMyVar(newVal) {
			myVar = newVal;
		}
	}]
}