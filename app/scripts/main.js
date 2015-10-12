var App = angular.module('ABCBankApp', ['ngRoute']);

App.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/home', {
		templateUrl: 'views/home.html'
	}).when('/main/' , {
		templateUrl: 'views/main.html'
	}).otherwise({redirectTo: '/home'})
}]);

App.run(['$location', function($location){
  $location.path('#/home');
}])