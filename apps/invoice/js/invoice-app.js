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
}());
