(function(){

  var invoiceFactory = function(){
    
    var customers_invoices = [];
    var factory = {};
    factory.findCustomerInvoices = function(customerId){
      for(var index in customers_invoices)
        if(customers_invoices[index].id == parseInt(customerId))
          return customers_invoices[index].invoices;
      return {};
    };

    return factory;
  };

  angular.module('InvoiceApp').factory('invoiceFactory', invoiceFactory);
} ());
