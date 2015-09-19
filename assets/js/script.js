var myApp = angular.module('myApp',['ngRoute', 'smoothScroll']);

// configure the routes
myApp.config(function($routeProvider){
	$routeProvider
	//route for the home page
	.when("/home", {
		templateUrl: "assets/pages/introduction.html"
	})
	//route to the story page
	.when("/main", {
		templateUrl: "assets/pages/main.html"
	}).otherwise({
		redirectTo: "/home"
	});
});
