
(function() {
  var customerController = function($scope, customerService, appSettings){

    $scope.sortBy = 'name'; // default sort
    $scope.reverse = false;
    $scope.appSettings = appSettings;
    $scope.customers = customerService.getCustomers();

    $scope.doSort = function(property){
      $scope.sortBy = property;
      $scope.reverse = !$scope.reverse;
    };
  };

  customerController.$inject = ['$scope', 'customerService', 'appSettings']; // dealing with minification of parameters.
  angular.module('InvoiceApp').controller('customerController', customerController);

}());
