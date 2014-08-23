(function(){

  var invoiceService = function($http){
    this.findCustomerInvoices = function(customerId){
      return $http.get('/r/invoice/' + customerId);
    };

    this.findAllInvoices = function(){
      return $http.get('/r/sales');
    };
  };

  invoiceService.$inject = ['$http'];
  angular.module('InvoiceApp').service('invoiceService', invoiceService);
} ());
