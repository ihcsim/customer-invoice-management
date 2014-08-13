(function(){

  var InvoiceController = function($scope, $routeParams, InvoiceService){
    var customerId = $routeParams.customerId;

    findCustomerInvoices();
    function findCustomerInvoices(){
      $scope.invoices = InvoiceService.findCustomerInvoices(customerId);
    }
  };
  
  InvoiceController.$inject = ['$scope', '$routeParams', 'InvoiceService'];
  angular.module('InvoiceApp').controller('InvoiceController', InvoiceController);  
  
}());
