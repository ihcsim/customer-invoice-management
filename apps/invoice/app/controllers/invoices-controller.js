(function(){

  var invoiceController = function($scope, $routeParams, invoiceService){
    var customerId = $routeParams.customerId;

    findCustomerInvoices();
    function findCustomerInvoices(){
      $scope.invoices = invoiceService.findCustomerInvoices(customerId);
    }
  };
  
  invoiceController.$inject = ['$scope', '$routeParams', 'invoiceService'];
  angular.module('InvoiceApp').controller('invoiceController', invoiceController);  
  
}());
