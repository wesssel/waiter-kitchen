angular.module('app')
.controller('kitchenController', kitchenController)

function kitchenController(orders){
    var kitchenCtrl = this;
    
    kitchenCtrl.message = 'Kitchen interface'
    kitchenCtrl.orders = orders;
    
};