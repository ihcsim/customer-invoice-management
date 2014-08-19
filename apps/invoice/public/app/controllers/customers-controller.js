
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
