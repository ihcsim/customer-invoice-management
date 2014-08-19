(function(){
  
  var customerService = function($http) {
    this.getCustomers = function(){
      return $http.get('/r/customers');
    };

    this.deleteCustomer = function(customerId){
      return $http.delete('/r/customers/' + customerId);
    };
  };

  customerService.$inject = ['$http'];
  angular.module('InvoiceApp').service('customerService', customerService);
}());
