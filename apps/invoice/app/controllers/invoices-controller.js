(function(){

  var InvoiceController = function($scope, $routeParams){
    var customerId = $routeParams.customerId;
   
    $scope.customer_invoices = [
      {id:1, name:'John Smith',city:'Vancouver',invoice_total:'10.8547',joined:'2014-07-01', invoices:[{id:1, invoice_date:'2014-07-02'}, {id:2, invoice_date:'2014-07-09'}]},
      {id:2, name:'Susan Yeo',city:'Surrey',invoice_total:'57.4781',joined:'2013-12-11', invoices:[{id:2, invoice_date:'2014-07-02'}, {id:3, invoice_date:'2014-07-09'}]},
      {id:3, name:'Kimberly Jacobson',city:'Vancouver',invoice_total:'47.5478',joined:'2014-02-05', invoices:[{id:4, invoice_date:'2014-07-02'}, {id:5, invoice_date:'2014-07-09'}]},
      {id:4, name:'Michael Smith',city:'Burnaby',invoice_total:'26.8795',joined:'2014-01-05', invoices:[{id:6, invoice_date:'2014-07-02'}, {id:7, invoice_date:'2014-07-09'}]},
      {id:5, name:'Ted Lawrance',city:'Surrey',invoice_total:'15.7895',joined:'201-06-02', invoices:[{id:8, invoice_date:'2014-07-02'}, {id:9, invoice_date:'2014-07-09'}]},
      {id:6, name:'Janet Lowe',city:'Burnaby',invoice_total:'148.2569',joined:'2013-09-12', invoices:[{id:10, invoice_date:'2014-07-02'}, {id:11, invoice_date:'2014-07-09'}]},
      {id:7, name:'Barb Simpson',city:'Burnaby',invoice_total:'15.78965',joined:'2013-08-21', invoices:[{id:12, invoice_date:'2014-07-02'}, {id:13, invoice_date:'2014-07-09'}]},
      {id:8, name:'Hans Macdonald',city:'Richmond',invoice_total:'254.89647',joined:'2014-02-06', invoices:[{id:14, invoice_date:'2014-07-02'}, {id:15, invoice_date:'2014-07-09'}]},
      {id:9, name:'Bowe Steele',city:'Surrey',invoice_total:'22.6598',joined:'2014-07-12', invoices:[{id:16, invoice_date:'2014-07-02'}, {id:17, invoice_date:'2014-07-09'}]},
      {id:10, name:'May Hawnes',city:'Vancouver',invoice_total:'58.699',joined:'2013-09-15', invoices:[{id:18, invoice_date:'2014-07-02'}, {id:19, invoice_date:'2014-07-09'}]},
      {id:11, name:'Faye Michaels',city:'Vancouver',invoice_total:'243.9874',joined:'2014-05-06', invoices:[{id:20, invoice_date:'2014-07-02'}, {id:21, invoice_date:'2014-07-09'}]},
      {id:12, name:'Lauren Hans',city:'Vancouver',invoice_total:'48.2654',joined:'2014-05-06', invoices:[{id:22, invoice_date:'2014-07-02'}, {id:23, invoice_date:'2014-07-09'}]}
    ];

    findCustomerInvoices();
    function findCustomerInvoices(){
      for(index in $scope.customer_invoices) {
        console.log(customerId);
        if($scope.customer_invoices[index].id == customerId) {
          $scope.invoices = $scope.customer_invoices[index].invoices;
          break;
        }
      }
    }
 

  };
  
  InvoiceController.$inject = ['$scope', '$routeParams'];
  angular.module('InvoiceApp').controller('InvoiceController', InvoiceController);  
  
}());
