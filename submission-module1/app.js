(function (){
'use script'

angular.module('LunchCheck',[])

.controller('LunchCheckController', LunchController);

LunchController.$inject = ['$scope'];

function LunchController($scope) {
	$scope.name = "";

$scope.doSomething = function(){
	$scope.check = $scope.name.split(",");
	if($scope.check.length <= 3)
	{
		$scope.temp = "Enjoy!";
	}
	if($scope.check.length > 3)
	{
		$scope.temp = "Too much!";
	}
	if($scope.check == "")
	{
		$scope.temp = "Please enter data first!";
	}
}
}

})();