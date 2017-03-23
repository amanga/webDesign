// script.js

// create the module and name it scotchApp
var atcgtekApp = angular.module('atcgtekApp', ['ngRoute']);


atcgtekApp.config(function($routeProvider){
	//route for the home page.
	$routeProvider.when('/', {
		templateUrl : 'pages/home.html'
		,controller : 'mainController'
	})
	//route for the about page.
	.when('/about',{
		templateUrl : 'pages/about.html'
		,controller : 'aboutController'
	})
	//route for the resources page.
	.when('/resources',{
		templateUrl : 'pages/resources.html'
		,controller : 'resourcesController'
	})
	//route for the contact page.
	.when('/contact',{
		templateUrl : 'pages/contact.html'
		,controller : 'contactController'
	});
});


// create the controller and inject Angular's $scope
atcgtekApp.controller('mainController', function($scope) {

	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});

atcgtekApp.controller('aboutController', function($scope) {

	// create a message to display in our view
	$scope.message = 'Look! Iam an about page.';
});


atcgtekApp.controller('resourcesController', function($scope) {

	// create a message to display in our view
	$scope.message = 'List of Resources!. This is just a demo.';
});

atcgtekApp.controller('contactController', function($scope) {

	// create a message to display in our view
	$scope.message = 'Contact us! Jack. This is just a demo.';
});