angular.module('app')
.factory('Orders', function($firebaseArray, FirebaseUrl){
	var ref = new Firebase(FirebaseUrl + 'orders');
	var orders = $firebaseArray(ref);
	
	return orders;
})