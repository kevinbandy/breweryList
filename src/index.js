import cleanUrlFilter from './filters/clean-url.js';
import breweryDataStore from './data_stores/brewery.js';
import breweryListComponent from './components/brewery-list.js';
import breweryListItemComponent from './components/brewery-list-item.js';
import searchInputComponent from './components/search-input.js';

require('./main.less');

let angular = require('angular');
let app = angular.module('breweryListApp', []);

app.run(breweryDataStore);
app.filter('cleanUrl', cleanUrlFilter);
app.component('breweryList', breweryListComponent);
app.component('breweryListItem', breweryListItemComponent);
app.component('searchInput', searchInputComponent);