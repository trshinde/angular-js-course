(function () {
'use strict';

angular.module('ListApp', [])
.controller('BuyController', BuyController )
.controller('BoughtController', BoughtController )
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);



BuyController.$inject = ["ShoppingListCheckOffService"];
function BuyController(ShoppingListCheckOffService){
    var buy = this;
    buy.items = ShoppingListCheckOffService.getShoppingList();

    buy.bought= function(itemIndex){
      ShoppingListCheckOffService.boughtItem(itemIndex);
    }

    buy.length = function(){
      var temp = buy.items;
      return temp.length;
    }

}

BoughtController.$inject = ["ShoppingListCheckOffService"];
function BoughtController(ShoppingListCheckOffService){
    var bought = this;
    bought.items = ShoppingListCheckOffService.getBoughtItems();

    bought.buy = function(itemIndex){
      ShoppingListCheckOffService.buyItem(itemIndex);
    }

    bought.length = function(){
      var temp = bought.items;
      return temp.length;
    }

}

function ShoppingListCheckOffService(){
  var service = this;
  var shoppingList = [
    {name: "cookies",quantity: 10},
    {name: "chips",quantity: 20},
    {name: "soft-drinks",quantity: 5},
    {name: "cakes",quantity: 2},
    {name: "water-bottle",quantity: 15}
  ];

  var broughtItems = [];

  service.getShoppingList = function(){
    return shoppingList;
  }

  service.getBoughtItems = function(){
    return broughtItems;
  }

  service.boughtItem = function(itemIndex){
    broughtItems.push( shoppingList[itemIndex] ); // add element to bought
    shoppingList.splice(itemIndex,1); // remove from buy
  }

  service.buyItem = function(index){
    shoppingList.push(broughtItems[index] ); // add element to buy
    broughtItems.splice(index,1); // remove from bought
  }


}




})();
