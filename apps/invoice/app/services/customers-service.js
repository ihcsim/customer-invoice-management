(function(){
  
  var customerService = function() {
    var customers = [];
    this.getCustomers = function(){
      return customers;   
    };
  };

  angular.module('InvoiceApp').service('customerService', customerService);
}());
