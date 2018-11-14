(function(){


angular.module('MenuApp')
.controller('MainCategoriesController',MainCategoriesController);


MainCategoriesController.$inject=['myData'];
function MainCategoriesController(myData){

  var categoryController = this;

  categoryController.items=myData.data;

  // categoryController.$onInit=function(){
  //   MenuDataService.getAllCategories().
  //   then(function(result){
  //     categoryController.items=result.data;
  //   });
  // };



}




})();
