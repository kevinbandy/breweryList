export default [
	'$rootScope',
	function breweryDataStore($rootScope) {
		var BREWERY_LIST = 'brewery-list';
		var BREWERY_LISTED = 'brewery-listed';

		$rootScope.$on(BREWERY_LIST, function getBreweryList() {
			var breweries = [{foo: 'bar'}, {foo: 'baz'}];
			$rootScope.$broadcast(BREWERY_LISTED, breweries);
		});
	}
];