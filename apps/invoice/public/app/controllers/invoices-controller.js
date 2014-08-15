(function(){

  var invoiceController = function($scope, $routeParams, $log, invoiceService){
    var customerId = $routeParams.customerId;

    invoiceService.findCustomerInvoices(customerId)
      .success(function(invoices){
        $scope.invoices = invoices;
      })
      .error(function(data, status, headers, config){
        $log.log(data);
      });
  };
  
  invoiceController.$inject = ['$scope', '$routeParams', '$log', 'invoiceService'];
  angular.module('InvoiceApp').controller('invoiceController', invoiceController);  
  
}());
