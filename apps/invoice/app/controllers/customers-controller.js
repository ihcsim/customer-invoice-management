
(function() {
  var CustomerController = function($scope, CustomerFactory){

    $scope.sortBy = 'name'; // default sort
    $scope.reverse = false;

    $scope.customers = CustomerFactory.getCustomers();

    $scope.doSort = function(property){
      $scope.sortBy = property;
      $scope.reverse = !$scope.reverse;
    };
  };

  CustomerController.$inject = ['$scope', 'CustomerFactory']; // dealing with minification of parameters.
  angular.module('InvoiceApp').controller('CustomerController', CustomerController);

}());
