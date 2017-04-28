// resource-controller.js

atcgtekApp.controller('resourcesController', function($scope) {
	// create a message to display in our view
	$scope.message = 'List of Resources!. This is just a demo.';
	
	
	
});


atcgtekApp.controller('assessmentController', function($scope,$http,$location,sharedAsmService) {
	// create a message to display in our view
	$scope.message = 'List of Online Tests!.';
	var url="./asm/scripts/loadAsm.php?id=all";
	
	$http.get(url).success(function(response){
		var asmVal = angular.fromJson(response);
		$scope.asms = getAssessmentDetails(asmVal);
		//getAssessmentDetails(asmVal);
		console.log(getAssessmentDetails(asmVal));
	});
	// $scope.assessment = 
	
	$scope.loadAssessment = function(asmID){
		sharedAsmService.setCurrentAsmID(asmID);
		$location.path("/contact/"+asmID);
	}
});



