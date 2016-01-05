angular.module('app')
.controller('waiterController', waiterController)

function waiterController(orders){
    var waiterCtrl = this;
    
    waiterCtrl.message = 'Waiter interface';
    waiterCtrl.order = orders;
    
	waiterCtrl.createOrder = function(order){
        if(!waiterCtrl.table){ return }
		waiterCtrl.order.$add({
            name: order.name,
            table: waiterCtrl.table,
            timestamp: Firebase.ServerValue.TIMESTAMP
        })
	};
    
    waiterCtrl.menu = {
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