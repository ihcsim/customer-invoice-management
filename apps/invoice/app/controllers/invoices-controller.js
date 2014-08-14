(function(){

  var invoiceController = function($scope, $routeParams, invoiceService){
    var customerId = $routeParams.customerId;

    invoiceService.findCustomerInvoices(customerId)
      .success(function(invoices){
        $scope.invoices = invoices;
      })
      .error(function(data, status, headers, config){
        console.log(data);
      });
  };
  
  invoiceController.$inject = ['$scope', '$routeParams', 'invoiceService'];
  angular.module('InvoiceApp').controller('invoiceController', invoiceController);  
  
}());
