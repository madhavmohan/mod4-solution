(function(){


angular.module('MenuApp')
.controller('MainItemController',MainItemController);


MainItemController.$inject=['myData'];
function MainItemController(myData){

  var itemController = this;

  itemController.items=myData.data.menu_items;

  // categoryController.$onInit=function(){
  //   MenuDataService.getAllCategories().
  //   then(function(result){
  //     categoryController.items=result.data;
  //   });
  // };



}




})();
