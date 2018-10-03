import breweryDataStore from './data_stores/brewery.js';
import breweryListComponent from './components/brewery-list.js';

var angular = require('angular');
var app = angular.module('breweryListApp', []);

app.run(breweryDataStore);
app.component('breweryList', breweryListComponent);