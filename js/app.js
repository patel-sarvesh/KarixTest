var portal = angular.module('portal', ['ngRoute', 'toastr', 'ngMessages'])

.config(["$routeProvider", "$locationProvider", function($routeProvider, $locationProvider) {
	
	$locationProvider.html5Mode(true);

	$routeProvider
    .when("/sign-up", {
        templateUrl : "./view/signUp.html",
        controller: 'signUpCtrl'
    })

    .otherwise({ redirectTo: '/sign-up' });
    
}])
