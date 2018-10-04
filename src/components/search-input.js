export default {
	templateUrl: './search-input.html',
	bindings: {
		submitEvent: '<'
	},
	controller: ['$scope', function searchController($scope) {
		let ctrl = this;

		ctrl.onButtonClick = function onButtonClick(query) {
			$scope.$emit(ctrl.submitEvent, query);
		}
		
	}]
};