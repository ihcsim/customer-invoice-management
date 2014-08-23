(function(){

  var salesController = function($scope,$log, invoiceService){
    invoiceService.findAllInvoices()
     .success(function(invoice_records){
       $scope.invoice_records = invoice_records;
     })
     .error(function(data, status, headers, config){
       $log.log(data);
     });
  };
  
  salesController.$inject = ['$scope', '$log', 'invoiceService'];
  angular.module('InvoiceApp').controller('salesController', salesController);
  
}());
