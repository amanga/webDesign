// mac-controller.js

atcgtekApp.controller('titleController', function($scope, sharedAsmService) {
	// create a message to display in our view
	$scope.title = sharedAsmService.getPageTitle();
});

//Controller scirpt file for Home, About & Contact pages
// create the controller and inject Angular's $scope
atcgtekApp.controller('mainController', function($scope, sharedAsmService) {

	// create a message to display in our view
	$scope.message = 'Everyone come and see how good I look!';
	sharedAsmService.setPageTitle("Home Page");
	
	$scope.keydownEvent = function(event){
		debugMssg("sdfsdf");
		debugMssg(event.key);
	}
});

atcgtekApp.controller('aboutController', function($scope, sharedAsmService) {

	// create a message to display in our view
	$scope.message = 'Look! Iam an about page.';
	sharedAsmService.setPageTitle("About Page");
});

atcgtekApp.controller('contactController', function($scope) {

	// create a message to display in our view
	$scope.message = 'Contact us! Jack. This is just a demo.';
});

atcgtekApp.controller('blogsController', function($scope) {

	// create a message to display in our view
	$scope.message = 'Comming soon.';
});