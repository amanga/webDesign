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
	})
	//route for the contact page.
	.when('/contact/:id',{
		templateUrl : 'pages/contact.html?id=:id'
		,controller : 'contactController'
	})
	//route for the assessment page.
	.when('/assessments',{
		templateUrl : 'pages/assessments.html'
		,controller : 'assessmentController'
	});

});


atcgtekApp.service("sharedAsmService", function(){
	var currentAsmID = null;
	return{
		getCurrentAsmID: function(){
			return currentAsmID;
		},
		setCurrentAsmID: function(value){
			currentAsmID = value;
		}
	}
});