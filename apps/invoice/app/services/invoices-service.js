(function(){

  var invoiceService = function($http){
    this.findCustomerInvoices = function(customerId){
      return $http.get('/r/invoice/' + customerId);
    };
  };

  invoiceService.$inject = ['$http'];
  angular.module('InvoiceApp').service('invoiceService', invoiceService);
} ());
