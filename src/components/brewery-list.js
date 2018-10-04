import { BREWERY_LIST, BREWERY_LISTED } from './../brewery.enum.js';

export default {
	templateUrl: './brewery-list.html',
	controller: ['$scope', '$rootScope', function breweryListController($scope, $rootScope) {

		let _breweries = [];

		this.getBreweries = getBreweries;

		$rootScope.$on(BREWERY_LISTED, function processBreweryList(_, breweries) {
			setBreweries(breweries);
		});

		$rootScope.$broadcast(BREWERY_LIST);

		function setBreweries(breweries) {
			_breweries = breweries;
		}

		function getBreweries() {
			return _breweries;
		}
	}]
}