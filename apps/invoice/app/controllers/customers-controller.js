
(function() {
  var CustomerController = function($scope, CustomerService){

    $scope.sortBy = 'name'; // default sort
    $scope.reverse = false;

    $scope.customers = CustomerService.getCustomers();

    $scope.doSort = function(property){
      $scope.sortBy = property;
      $scope.reverse = !$scope.reverse;
    };
  };

  CustomerController.$inject = ['$scope', 'CustomerService']; // dealing with minification of parameters.
  angular.module('InvoiceApp').controller('CustomerController', CustomerController);

}());
