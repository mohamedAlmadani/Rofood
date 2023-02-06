import loginPage  from "../../pages/glassesShop/users/loginPage"
import PurchasesPage  from "../../pages/glassesShop/sales/PurchasesPage"





describe('Check all purchases departments', ()=>{
    beforeEach(()=>{
      
      //  cy.visit('/');

     cy.fixture('glassesShop/purchases/purchases.json').as('testdata');

     

     Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })
})
     
       
    

    it('Check the add Resource ',() =>{

      cy.get('@testdata').then((testdata) =>{
        const  login =new loginPage();
      
        const purchases =new PurchasesPage();

    
        login.load();
        login.emailInput(testdata.eamil);
        login.passwordIbput(testdata.password);
        login.submitButton();
       purchases.IgnoreTheCashier();
      // purchases.clickTomenua();
       purchases.ChoosePurchasingDepartment();
       purchases.addResource(testdata.resourcename,testdata.resourceaddress,testdata.resourcephone,testdata.resourcetaxnumber);
        

          
          
          
        
          
        
        
       

         
  });
      
       
      
  

    

          
         

            

           



          
          
           
          
    })


 
/*
    it('Check the Create purchase invoice ',() =>{

        cy.get('@testdata').then((testdata) =>{
          const  login =new loginPage();
        
          const purchases =new PurchasesPage();
  
      
          login.load();
          login.emailInput(testdata.eamil);
          login.passwordIbput(testdata.password);
          login.submitButton();
         purchases.IgnoreTheCashier();
        // purchases.clickTomenua();
         purchases.ChoosePurchasingDepartment();
         purchases.Createpurchaseinvoice(testdata.resourceinvoicenumber,testdata.Barcode);
  
            
            
            
          
            
          
          
         
  
           
    });
        
         
        
    
  
      
  
            
           
  
              
  
             
  
  
  
            
            
             
            
      })
      */
/*
      it('Check the purchase invoice payment',() =>{

        cy.get('@testdata').then((testdata) =>{
          const  login =new loginPage();
        
          const purchases =new PurchasesPage();
  
      
          login.load();
          login.emailInput(testdata.eamil);
          login.passwordIbput(testdata.password);
          login.submitButton();
         purchases.IgnoreTheCashier();
        // purchases.clickTomenua();
         purchases.ChoosePurchasingDepartment();
         purchases.purchaseinvoicepayment();
  
            
            
            
          
            
          
          
         
  
           
    });
  
             
            
      })

      */
/*
      it('Check the add purchase product',() =>{

        cy.get('@testdata').then((testdata) =>{
          const  login =new loginPage();
        
          const purchases =new PurchasesPage();
  
      
          login.load();
          login.emailInput(testdata.eamil);
          login.passwordIbput(testdata.password);
          login.submitButton();
         purchases.IgnoreTheCashier();
       //  purchases.clickTomenua();
         purchases.ChoosePurchasingDepartment();
         purchases.addpurchaseproduct(testdata.Barcode,testdata.nameproductar,testdata.nameproducten,testdata.priceunit)
  
            
            
            
          
            
          
          
         
  
           
    });
        

             
            
      })
*/
    

/*
      it('Check the Create purchase invoice  data ',() =>{

      cy.get('@testdata').then((testdata) =>{
          const  login =new loginPage();
        
          const purchases =new PurchasesPage();
  
      
          login.load();
          login.emailInput(testdata.eamil);
          login.passwordIbput(testdata.password);
          login.submitButton();
         purchases.IgnoreTheCashier();
        // purchases.clickTomenua();
         purchases.ChoosePurchasingDepartment();
         purchases.Createpurchaseinvoicedata(testdata.data,testdata.resourceinvoicenumber,testdata.Barcode);
  
            
            
            
          
            
          
          
         
  
           
    });
    
        
         
        
    
  
      
  
            
           
  
              
  
             
  
  
  
            
            
             
            
      })


      */


  })