(function(){

  var InvoiceController = function($scope, $routeParams, InvoiceFactory){
    var customerId = $routeParams.customerId;

    findCustomerInvoices();
    function findCustomerInvoices(){
      $scope.invoices = InvoiceFactory.findCustomerInvoices(customerId);
    }
  };
  
  InvoiceController.$inject = ['$scope', '$routeParams', 'InvoiceFactory'];
  angular.module('InvoiceApp').controller('InvoiceController', InvoiceController);  
  
}());
