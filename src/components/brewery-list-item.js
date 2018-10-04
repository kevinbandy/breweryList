export default {
	templateUrl: './brewery-list-item.html',
	bindings: {
		id: '<',
		name: '<',
		type: '<',
		locale: '<?',
		webLink: '<'
	},
	controller: ['$scope', function breweryListItemController($scope) {
		const ctrl = this;

		ctrl.locale = $scope.state + ', some state';
	}]
};