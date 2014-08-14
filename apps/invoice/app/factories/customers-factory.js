(function(){
  
  var customerFactory = function() {
    
    var customers = [];
    var factory = {};
    factory.getCustomers = function(){
      return customers;   
    };
    
    return factory;    
  };

  angular.module('InvoiceApp').factory('customerFactory', customerFactory);
}());
