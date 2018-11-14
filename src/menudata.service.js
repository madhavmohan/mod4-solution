(function(){



angular.module('data')
.service('MenuDataService',MenuDataService );

MenuDataService.$inject=['$http'];
function MenuDataService($http){


var menuservice=this;






menuservice.getAllCategories=function(){


  var response= $http({

    method:"GET",
    url:('https://davids-restaurant.herokuapp.com/categories.json')
  });

  return response;




};


menuservice.getItemsForCategory=function(categoryShortName){


  var response= $http({

    method:"GET",
    url:('https://davids-restaurant.herokuapp.com/menu_items.json'),
    params:{
      category:categoryShortName
    }

  });

  return response;




};



}


})();
