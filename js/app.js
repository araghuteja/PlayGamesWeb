var app = angular.module('PolyGamesApp', [ 'ngRoute' ]);

app.config([ '$routeProvider', function($routeProvider) {
	$routeProvider.when("/home", {
		templateUrl : "partials/home.html",
		controller : "HomeController"
	}).when("/about", {
		templateUrl : "partials/about.html",
		controller : "AboutController"
	}).when("/contact", {
		templateUrl : "partials/contact.html",
		controller : "ContactController"
	}).otherwise({
		redirectTo : "/home",
	})

} ]);

var URI = getURI();

/*state('user',{
	    url: '/user',
	    templateUrl: 'partials/home.html',
	    controller: 'HomeController',
	    // here is new marker
	    redirectTo: 'user.plan'
	}).
	
	
	app.run(['$rootScope', '$state', function($rootScope, $state) {

    $rootScope.$on('$stateChangeStart', function(evt, to, params) {
      if (to.redirectTo) {
        evt.preventDefault();
        $state.go(to.redirectTo, params)
      }
    });
}]);*/