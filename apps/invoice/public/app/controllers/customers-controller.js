
(function() {
  var customerController = function($scope, $log, customerService, appSettings){

    $scope.sortBy = 'name'; // default sort
    $scope.reverse = false;
    $scope.appSettings = appSettings;
    
    customerService.getCustomers()
      .success(function(customers){
        $scope.customers = customers;
      })
      .error(function(data, status, headers, config){
        $log.log(data);
      });

    $scope.gridCustomerColumns = [
      {field:'id', displayName:'Customer Id'}, 
      {field:'name', displayName:'Customer Name'}, 
      {field:'city', displayName:'City of Residence'}, 
      {field:'invoice_total', displayName:'Total Purchase', cellFilter:'currency' }, 
      {field:'joined', displayName:'Member Since', cellFilter:'date'}];
    $scope.gridCustomers = {
      data: 'customers',
      columnDefs: 'gridCustomerColumns'
    };

    $scope.doSort = function(property){
      $scope.sortBy = property;
      $scope.reverse = !$scope.reverse;
    };

    $scope.deleteCustomer = function(customerId){
      customerService.deleteCustomer(customerId);
    };
  };

  customerController.$inject = ['$scope', '$log', 'customerService', 'appSettings']; // dealing with minification of parameters.
  angular.module('InvoiceApp').controller('customerController', customerController);

}());
