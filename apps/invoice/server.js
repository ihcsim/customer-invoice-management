var express = require('express'),
    app = express();

app.use(express.static(__dirname, '/public'));  

app.get('/r/invoice/:id',function(req, res){
  var customerId = parseInt(req.params.id);
  var data = {};

  for(var index in customers_invoices)
    if(customers_invoices[index].id == customerId) {
      data = customers_invoices[index].invoices;
      break;
    }
  res.json(data);
});

app.get('/r/invoices/', function(req, res){
  res.json(customers_invoices);
});

app.get('/r/customers', function(req, res){
  res.json(customers);
});

app.delete('/r/customers/:id', function(req, res){
  var customerDeleted = false;
  var customerId = parseInt(req.params.id);
  for(var index in customers)
    if(customers[index].id == customerId){
      console.log('Deleting customer ' + customers[index].name);
      customers.splice(index, 1);
      customerDeleted = true;
      break;
    }
  res.json(customerDeleted);
});

app.listen(8080);
console.log('Express listening on port 8080...');

var customers = [
  {id:1, name:'John Smith',city:'Vancouver',invoice_total:'10.8547',joined:'2014-07-01'},
  {id:2, name:'Susan Yeo',city:'Surrey',invoice_total:'57.4781',joined:'2013-12-11'},
  {id:3, name:'Kimberly Jacobson',city:'Vancouver',invoice_total:'47.5478',joined:'2014-02-05'},
  {id:4, name:'Michael Smith',city:'Burnaby',invoice_total:'26.8795',joined:'2014-01-05'},
  {id:5, name:'Ted Lawrance',city:'Surrey',invoice_total:'15.7895',joined:'201-06-02'},
  {id:6, name:'Janet Lowe',city:'Burnaby',invoice_total:'148.2569',joined:'2013-09-12'},
  {id:7, name:'Barb Simpson',city:'Burnaby',invoice_total:'15.78965',joined:'2013-08-21'},
  {id:8, name:'Hans Macdonald',city:'Richmond',invoice_total:'254.89647',joined:'2014-02-06'},
  {id:9, name:'Bowe Steele',city:'Surrey',invoice_total:'22.6598',joined:'2014-07-12'},
  {id:10, name:'May Hawnes',city:'Vancouver',invoice_total:'58.699',joined:'2013-09-15'},
  {id:11, name:'Faye Michaels',city:'Vancouver',invoice_total:'243.9874',joined:'2014-05-06'},
  {id:12, name:'Lauren Hans',city:'Vancouver',invoice_total:'48.2654',joined:'2014-05-06'}
];

var customers_invoices = [
  {id:1, name:'John Smith',city:'Vancouver',invoice_total:'10.8547',joined:'2014-07-01', invoices:[{id:1, invoice_date:'2014-07-02', total:'5.80'}, {id:2, invoice_date:'2014-07-09', total:'5.80'}]},
  {id:2, name:'Susan Yeo',city:'Surrey',invoice_total:'57.4781',joined:'2013-12-11', invoices:[{id:2, invoice_date:'2014-07-02', total:'25.80'}, {id:3, invoice_date:'2014-07-09', total:'32.00'}]},
  {id:3, name:'Kimberly Jacobson',city:'Vancouver',invoice_total:'47.5478',joined:'2014-02-05', invoices:[{id:4, invoice_date:'2014-07-02', total:'20.00'}, {id:5, invoice_date:'2014-07-09', total:'27.00'}]},
  {id:4, name:'Michael Smith',city:'Burnaby',invoice_total:'26.8795',joined:'2014-01-05', invoices:[{id:6, invoice_date:'2014-07-02', total:'26.00'}, {id:7, invoice_date:'2014-07-09', total:'0.87'}]},
  {id:5, name:'Ted Lawrance',city:'Surrey',invoice_total:'15.7895',joined:'201-06-02', invoices:[{id:8, invoice_date:'2014-07-02', total:'5.78'}, {id:9, invoice_date:'2014-07-09', total:'10.00'}]},
  {id:6, name:'Janet Lowe',city:'Burnaby',invoice_total:'148.2569',joined:'2013-09-12', invoices:[{id:10, invoice_date:'2014-07-02', total:'100.00'}, {id:11, invoice_date:'2014-07-09', total:'48.25'}]},
  {id:7, name:'Barb Simpson',city:'Burnaby',invoice_total:'15.78965',joined:'2013-08-21', invoices:[{id:12, invoice_date:'2014-07-02', total:'7.50'}, {id:13, invoice_date:'2014-07-09', total:'9.00'}]},
  {id:8, name:'Hans Macdonald',city:'Richmond',invoice_total:'254.89647',joined:'2014-02-06', invoices:[{id:14, invoice_date:'2014-07-02', total:'54.80'}, {id:15, invoice_date:'2014-07-09', total:'200.00'}]},
  {id:9, name:'Bowe Steele',city:'Surrey',invoice_total:'22.6598',joined:'2014-07-12', invoices:[{id:16, invoice_date:'2014-07-02', total:'11.80'}, {id:17, invoice_date:'2014-07-09', total:'11.65'}]},
  {id:10, name:'May Hawnes',city:'Vancouver',invoice_total:'58.699',joined:'2013-09-15', invoices:[{id:18, invoice_date:'2014-07-02', total:'8.00'}, {id:19, invoice_date:'2014-07-09', total:'50.69'}]},
  {id:11, name:'Faye Michaels',city:'Vancouver',invoice_total:'243.9874',joined:'2014-05-06', invoices:[{id:20, invoice_date:'2014-07-02', total:'180.98'}, {id:21, invoice_date:'2014-07-09', total:'60.00'}]},
  {id:12, name:'Lauren Hans',city:'Vancouver',invoice_total:'48.2654',joined:'2014-05-06', invoices:[{id:22, invoice_date:'2014-07-02', total:'6.80'}, {id:23, invoice_date:'2014-07-09', total:'42.00'}]}
];

