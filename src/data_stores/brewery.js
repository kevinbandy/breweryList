import { BREWERY_LIST, BREWERY_LISTED } from './../brewery.enum.js';

export default [
	'$rootScope',
	'$http',
	function breweryDataStore($rootScope, $http) {

		$rootScope.$on(BREWERY_LIST, function getBreweryList(_, query) {

			let searchTerm = query || '';
			const baseUrl = 'https://api.openbrewerydb.org/'
			let queryUrl = baseUrl + 'breweries';

			if (searchTerm.length) {
				queryUrl += '/search?query=' + searchTerm;
			}

			$http({
				method: 'GET',
				url: queryUrl
			}).then(function success(response) {
				$rootScope.$broadcast(BREWERY_LISTED, response.data);
			});
			
		});
	}
];