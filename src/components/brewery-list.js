import { BREWERY_LIST, BREWERY_LISTED } from './../brewery.enum.js';

export default {
	templateUrl: './brewery-list.html',
	controller: ['$scope', '$rootScope', function breweryListController($scope, $rootScope) {
		let ctrl = this;

		ctrl.breweries = [];
		ctrl.searchEvent = BREWERY_LIST;
		ctrl.getLocale = getLocale;

		$rootScope.$on(BREWERY_LISTED, function processBreweryList(_, breweries) {
			ctrl.breweries = breweries;
		});

		$scope.$emit(BREWERY_LIST);

		function getLocale(city, state) {
			if (city && state) {
				return city + ', ' + state;
			} else if (city && !state) {
				return city;
			} else if (!city && state) {
				return state;
			}
		}
	}]
}