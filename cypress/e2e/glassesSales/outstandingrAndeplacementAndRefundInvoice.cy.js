/// <reference types="Cypress" />
import loginPage  from "../../pages/glassesShop/users/loginPage"
import outstandingInvoicePage  from "../../pages/glassesShop/sales/outstandingInvoicePage"


describe('Check all sales departments', ()=>{
    beforeEach(()=>{
      
     

     cy.fixture('glassesShop/sales/invoice.json').as('testdata');
     

     

     Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })
})
     
       
    

 
it('We check to show a pending invoice',() =>{

    cy.get('@testdata').then((testdata) =>{
      const  login =new loginPage();
      const outstandingInvoice =new outstandingInvoicePage();
    

  
      login.load();
      login.emailInput(testdata.eamil);
      login.passwordIbput(testdata.password);
      login.submitButton();
      outstandingInvoice.IgnoreTheCashier();
      outstandingInvoice.clickTomenua();
      outstandingInvoice.ClickOnPendingBill();
      outstandingInvoice.ClickViewOutstandingInvoice();
      


    
     
       
      
        
      
      
     

       
});
    
     
    


  

        
       
          

         



        
        
         
        
  })

  it(' check to Update a pending invoice',() =>{

    cy.get('@testdata').then((testdata) =>{
      const  login =new loginPage();
      const outstandingInvoice =new outstandingInvoicePage();
    

  
      login.load();
      login.emailInput(testdata.eamil);
      login.passwordIbput(testdata.password);
      login.submitButton();
      outstandingInvoice.IgnoreTheCashier();
      outstandingInvoice.clickTomenua();
      outstandingInvoice.ClickOnPendingBill();
      outstandingInvoice.ClickUpdateOutstandingInvoice();
      outstandingInvoice.ClickButtonUodate();
      


    
     
       
      
        
      
      
     

       
});
    
     
    


  

        
       
          

         



        
        
         
        
  })

  it(' check to Change method payment a pending invoice',() =>{

    cy.get('@testdata').then((testdata) =>{
      const  login =new loginPage();
      const outstandingInvoice =new outstandingInvoicePage();
    

  
      login.load();
      login.emailInput(testdata.eamil);
      login.passwordIbput(testdata.password);
      login.submitButton();
      outstandingInvoice.IgnoreTheCashier();
      outstandingInvoice.clickTomenua();
      outstandingInvoice.ClickOnPendingBill();
      outstandingInvoice.ClickIconChangMethodOfPayment(testdata.cashPay,testdata.stcPay);
      
      


    
     
       
      
        
      
      
     

       
});
    
     
    


  

        
       
          

         



        
        
         
        
  })



  it(' check to Invoice status change a pending invoice',() =>{

    cy.get('@testdata').then((testdata) =>{
      const  login =new loginPage();
      const outstandingInvoice =new outstandingInvoicePage();
    

  
      login.load();
      login.emailInput(testdata.eamil);
      login.passwordIbput(testdata.password);
      login.submitButton();
      outstandingInvoice.IgnoreTheCashier();
      outstandingInvoice.clickTomenua();
      outstandingInvoice.ClickOnPendingBill();
      outstandingInvoice.ClickInvoiceStatusChange();
      
      


    
     
       
      
        
      
      
     

       
});
    
     
    


  

        
       
          

         



        
        
         
        
  })


  it(' check Invoice replacement ',() =>{

    cy.get('@testdata').then((testdata) =>{
      const  login =new loginPage();
      const outstandingInvoice =new outstandingInvoicePage();
    

  
      login.load();
      login.emailInput(testdata.eamil);
      login.passwordIbput(testdata.password);
      login.submitButton();
      outstandingInvoice.IgnoreTheCashier();
      outstandingInvoice.clickTomenua();
      outstandingInvoice.ClickButtonReplacementInvoice();
    
      


    
     
       
      
        
      
      
     

       
});
    
     
    


  

        
       
          

         



        
        
         
        
  })


  it('Check your return invoice ',() =>{

    cy.get('@testdata').then((testdata) =>{
      const  login =new loginPage();
      const outstandingInvoice =new outstandingInvoicePage();
    

  
      login.load();
      login.emailInput(testdata.eamil);
      login.passwordIbput(testdata.password);
      login.submitButton();
      outstandingInvoice.IgnoreTheCashier();
      outstandingInvoice.clickTomenua();
      outstandingInvoice.ClickButtonReturnInvoice(testdata.phonenumber);
     
      


    
     
       
      
        
      
      
     

       
});
    
     
    


  

        
       
          

         



        
        
         
        
  })


  it('Check Register an invoice with a specific date ',() =>{

    cy.get('@testdata').then((testdata) =>{
      const  login =new loginPage();
      const outstandingInvoice =new outstandingInvoicePage();
    

  
      login.load();
      login.emailInput(testdata.eamil);
      login.passwordIbput(testdata.password);
      login.submitButton();
      outstandingInvoice.IgnoreTheCashier();
      outstandingInvoice.clickTomenua();
      outstandingInvoice.ClickButtonRegisterInvoiceWithSpecificDate(testdata.phonenumber,testdata.data,testdata.Barcode);
     
      


    
     
       
      
        
      
      
     

       
});
    
     
    


  

        
       
          

         



        
        
         
        
  })
  


 

  })