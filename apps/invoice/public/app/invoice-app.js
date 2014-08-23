(function(){
  var app = angular.module('InvoiceApp',['ngRoute', 'ngGrid']);

  app.config(function($routeProvider){
    $routeProvider
      .when('/invoice/:customerId',{
          controller: 'invoiceController',
          templateUrl: 'app/views/invoices.html'
      })
      .when('/customers',{
         controller: 'customerController',
         templateUrl: 'app/views/customers.html'
      })
      .when('/sales',{
         controller: 'salesController',
         templateUrl: 'app/views/sales.html'
      })
      .otherwise({redirectTo: '/customers'});
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
