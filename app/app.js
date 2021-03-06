angular.module('app', ['firebase', 'ui.router'])
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

	$stateProvider
	.state('waiter', {
		url: '/',
		templateUrl: 'order/waiter.html',
		controller: 'orderController as waiter',
        resolve: {
          orders: function (Orders) {
            return Orders.$loaded();
          }
        }
	})
	.state('kitchen', {
		url: '/kitchen',
		templateUrl: 'order/kitchen.html',
		controller: 'orderController as kitchen',
        resolve: {
          orders: function (Orders) {
            return Orders.$loaded();
          }
        }
	})
    
	$urlRouterProvider.otherwise('/');

})
.constant('FirebaseUrl', 'https://waiterkitchen.firebaseio.com/');