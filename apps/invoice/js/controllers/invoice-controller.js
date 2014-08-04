
var InvoiceController = function($scope){

  $scope.sortBy = 'name'; // default sort
  $scope.reverse = false;

  $scope.customers = [
    {name:'John Smith',city:'Vancouver',invoice_total:'10.8547',joined:'2014-07-01'}, 
    {name:'Susan Yeo',city:'Surrey',invoice_total:'57.4781',joined:'2013-12-11'}, 
    {name:'Kimberly Jacobson',city:'Vancouver',invoice_total:'47.5478',joined:'2014-02-05'}, 
    {name:'Michael Smith',city:'Burnaby',invoice_total:'26.8795',joined:'2014-01-05'}, 
    {name:'Ted Lawrance',city:'Surrey',invoice_total:'15.7895',joined:'201-06-02'}, 
    {name:'Janet Lowe',city:'Burnaby',invoice_total:'148.2569',joined:'2013-09-12'}, 
    {name:'Barb Simpson',city:'Burnaby',invoice_total:'15.78965',joined:'2013-08-21'}, 
    {name:'Hans Macdonald',city:'Richmond',invoice_total:'254.89647',joined:'2014-02-06'}, 
    {name:'Bowe Steele',city:'Surrey',invoice_total:'22.6598',joined:'2014-07-12'}, 
    {name:'May Hawnes',city:'Vancouver',invoice_total:'58.699',joined:'2013-09-15'}, 
    {name:'Faye Michaels',city:'Vancouver',invoice_total:'243.9874',joined:'2014-05-06'}, 
    {name:'Lauren Hans',city:'Vancouver',invoice_total:'48.2654',joined:'2014-05-06'}];

  $scope.doSort = function(property){
    $scope.sortBy = property;
    $scope.reverse = !$scope.reverse;
  };
};
