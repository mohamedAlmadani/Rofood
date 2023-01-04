


import loginPage  from "../../pages/glassesShop/users/loginPage"
import newInvoicePage  from "../../pages/glassesShop/sales/newInvoicePage"
import outstandingInvoicePage  from "../../pages/glassesShop/sales/outstandingInvoicePage"




describe('Check all sales departments', ()=>{
    beforeEach(()=>{
      
      //  cy.visit('/');

     cy.fixture('glassesShop/sales/invoice.json').as('testdata');

     

     Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })
})
     
       
    

    it('Check for a new invoice',() =>{

      cy.get('@testdata').then((testdata) =>{
        const  login =new loginPage();
        const newinvoice =new newInvoicePage();

    
        login.load();
        login.emailInput(testdata.eamil);
        login.passwordIbput(testdata.password);
        login.submitButton();
      
       
          newinvoice.IgnoreTheCashier();
          
          newinvoice.clickTomenua();
          newinvoice.ChooseTheSalesDepartment();
          newinvoice.phoneInput(testdata.phonenumber);
          
         
          newinvoice.MobileSearch();
        //  newinvoice.addrecipe();
          newinvoice.BarcodeInput(testdata.Barcode);
          newinvoice.PriceInput(testdata.price);
          newinvoice.ClickConfirmAndCreateInvoice();
          newinvoice.ConfirmationSaleShowMessage();
          newinvoice.ConfirmationSale();
        
          
        
        
       

         
  });
      
       
      
  

    

          
         

            

           



          
          
           
          
    })

    


  })