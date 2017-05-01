// resource-controller.js

atcgtekApp.controller('resourcesController', function($scope) {
	// create a message to display in our view
	$scope.message = 'List of Resources!. This is just a demo.';
	
});

atcgtekApp.controller('assessmentLandingController', function($scope,$http,$location,$routeParams) {
	var scoredPer = ($routeParams.correctans/$routeParams.numqs)*100;
	if(scoredPer >= $routeParams.passingPer){
		$scope.message = "Successfully finished the test with "+scoredPer+"%, you have "+$routeParams.correctans+" correct out of "+$routeParams.numqs +" questions.";
	}else{
		$scope.message = " You haven't scored enought to complete this test, please try again.";
	}
	
	var url="./asm/scripts/loadAsm.php?id="+$routeParams.id+"&single=1";
	$http.get(url).success(function(response){
		var asmVal = angular.fromJson(response);
		$scope.asm = getAssessmentDetails(asmVal)[0];
		debugMssg($scope.asm);
	});
});

atcgtekApp.controller('assessmentsController', function($scope,$http,$location) {
	// create a message to display in our view
	$scope.message = 'List of Online Tests!.';
	var url="./asm/scripts/loadAsm.php?id=all";
	
	$http.get(url).success(function(response){
		var asmVal = angular.fromJson(response);
		$scope.asms = getAssessmentDetails(asmVal);
	});
	
	$scope.loadAssessment = function(asmID){
		$location.path("/assessment/"+asmID);
	}
});





