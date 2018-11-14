(function(){


  'use strict';

  angular.module('data')
  .component('categories', {

    templateUrl:'src/displaycategories-template.html',
    bindings:{
      items:'<'
    }
  })
})();
