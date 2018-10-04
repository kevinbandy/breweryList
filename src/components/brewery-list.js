import { BREWERY_LIST, BREWERY_LISTED } from './../brewery.enum.js';

export default {
	templateUrl: './brewery-list.html',
	controller: ['$scope', '$rootScope', function breweryListController($scope, $rootScope) {
		let ctrl = this;

		ctrl.breweries = [];
		ctrl.searchEvent = BREWERY_LIST;

		$rootScope.$on(BREWERY_LISTED, function processBreweryList(_, breweries) {
			ctrl.breweries = breweries;
		});

		$scope.$emit(BREWERY_LIST);
	}]
}