angular.module('app')
.controller('kitchenController', kitchenController)

function kitchenController(orders, $firebaseObject, FirebaseUrl){
    var kitchenCtrl = this;
    
    kitchenCtrl.message = 'Kitchen interface'
    kitchenCtrl.orders = orders;
    
    kitchenCtrl.doneOrder = function(order){
        order.done = true;
        getRef(order.$id).update({ done: true});
    }
    
    kitchenCtrl.deleteOrder = function(order){
        getRef(order.$id).remove();
    }
    
    var getRef = function(id){
        return new Firebase(FirebaseUrl + 'orders/' + id);
    }
    
};
