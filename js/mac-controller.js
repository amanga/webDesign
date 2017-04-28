// mac-controller.js

//Controller scirpt file for Home, About & Contact pages
// create the controller and inject Angular's $scope
atcgtekApp.controller('mainController', function($scope) {

	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
});

atcgtekApp.controller('aboutController', function($scope) {

	// create a message to display in our view
	$scope.message = 'Look! Iam an about page.';
});

atcgtekApp.controller('contactController', function($scope,$routeParams) {

	// create a message to display in our view
	$scope.message = 'Contact us! Jack. This is just a demo.'+$routeParams.id;
});