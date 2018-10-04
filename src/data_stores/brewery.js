import { BREWERY_LIST, BREWERY_LISTED } from './../brewery.enum.js';

export default [
	'$rootScope',
	'$http',
	function breweryDataStore($rootScope, $http) {

		$rootScope.$on(BREWERY_LIST, function getBreweryList() {

			var searchTerm = 'dog';

			$http({
				method: 'GET',
				url: 'https://api.openbrewerydb.org/breweries/search?query=' + searchTerm
			}).then(function success(response) {
				$rootScope.$broadcast(BREWERY_LISTED, response.data);
			});
			
		});
	}
];