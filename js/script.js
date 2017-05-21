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
	})//route for the resources page.
	.when('/blogs',{
		templateUrl : 'pages/blogs.html'
		,controller : 'blogsController'
	})
	//route for the contact page.
	.when('/contact',{
		templateUrl : 'pages/contact.html'
		,controller : 'contactController'
	})
	//route for the assessment page.
	.when('/assessments',{
		templateUrl : 'pages/listassessments.html'
		,controller : 'assessmentsController'
	})
	//route for the contact page.
	.when('/assessment/:id',{
		templateUrl : 'pages/assessment.html?id=:id'
		,controller : 'assessmentController'
	})
	//assessment landing page.
	.when('/finalasm/:correctans/:numqs/:passingPer/:id',{
		templateUrl : 'pages/finalasm.html?id=:id&ca=:correctans&nqs=:numqs&passingPer=:passingPer'
		,controller : 'assessmentLandingController'
	});

});


atcgtekApp.service("sharedAsmService", function(){
	//var currentAsmID = null;
	var pageTitle = "ATCG Technologies";
	return{
		// getCurrentAsmID: function(){
			// return currentAsmID;
		// },
		// setCurrentAsmID: function(value){
			// currentAsmID = value;
		// },
		getPageTitle : function(){
			return pageTitle;
		},
		setPageTitle : function(val){
			pageTitle = val;
		}
	};
});