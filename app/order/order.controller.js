angular.module('app')
.controller('orderController', orderController)

function orderController(orders, $firebaseObject, FirebaseUrl){
    var orderCtrl = this;  
    var getRef = function(id){
        return new Firebase(FirebaseUrl + 'orders/' + id);
    }
    
    orderCtrl.orders = orders;
    
	orderCtrl.createOrder = function(order){
        if(!orderCtrl.table){ return }
		orderCtrl.orders.$add({
            name: order.name,
            table: orderCtrl.table,
            timestamp: Firebase.ServerValue.TIMESTAMP
        })
	};
    
    orderCtrl.doneOrder = function(order){
        order.done = true;
        getRef(order.$id).update({
            done: Firebase.ServerValue.TIMESTAMP
        });
    }
    
    orderCtrl.deleteOrder = function(order){
        getRef(order.$id).remove();
    }
    
    orderCtrl.menu = {
        "drinks":[
            {"name" : "Cola", "price" : 2.5},
            {"name" : "Beer", "price" : 3.5},
            {"name" : "Water", "price" : 1}
        ],
        "foods":[
            {"name" : "Pizza", "price" : 7.5},
            {"name" : "Steak", "price" : 10},
            {"name" : "Pasta", "price" : 6.5},
            {"name" : "Fries", "price" : 2}
        ]    
    }
    
};