(function(){
  var app = angular.module('InvoiceApp',['ngRoute']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/',{
          controller: 'InvoiceController',
          templateUrl: 'js/views/invoice.html'
        })
       .when('/customer/:customerId',{
          controller: 'CustomerController',
          templateUrl: 'js/views/customer.html'
        })
      .otherwise({redirectTo: '/'});
  });

  app.filter('customCustomerFilter', function(){
    return function(objects, criteria){
      var filterResult = new Array();
      if(!criteria)
        return objects;

      for(index in objects)
        if(objects[index].name.indexOf(criteria) != -1 || objects[index].city.indexOf(criteria) != -1)
          filterResult.push(objects[index]);
      return filterResult;  
    }    
  });
}());
