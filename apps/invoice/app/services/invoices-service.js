(function(){

  var invoiceService = function(){
    
    var customers_invoices = [];
    this.findCustomerInvoices = function(customerId){
      for(var index in customers_invoices)
        if(customers_invoices[index].id == parseInt(customerId))
          return customers_invoices[index].invoices;
      return {};
    };

  };

  angular.module('InvoiceApp').service('invoiceService', invoiceService);
} ());
