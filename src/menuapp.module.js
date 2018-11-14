(function(){


'use strict';

angular.module('MenuApp', ['ui.router','data']);


angular.module('MenuApp').
config(RoutesConfig);


RoutesConfig.$inject=['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider){


  $urlRouterProvider.otherwise('/home');

  //set up ui states


  $stateProvider
  .state('home', {


    url:'/home',
    templateUrl:'src/home-template.html'

  })
  .state('categories',{

    url:'/categories',
    templateUrl:'src/categories-template.html',
    controller:'MainCategoriesController as categoryController',
    resolve:{
      myData:['MenuDataService',function(MenuDataService){
        return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('items',{

    url:'/items/{shortName}',
    templateUrl:'src/items-template.html',
    controller:'MainItemController as itemController',
    resolve:{
      myData:['MenuDataService','$stateParams', function(MenuDataService,$stateParams){
        return MenuDataService.getItemsForCategory($stateParams.shortName);
      }]
    }
  })



};




})();
