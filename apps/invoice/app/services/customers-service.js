(function(){
  
  var customerService = function($http) {
    this.getCustomers = function(){
      return $http.get('/r/customers');
    };
  };

  customerService.$inject = ['$http'];
  angular.module('InvoiceApp').service('customerService', customerService);
}());
