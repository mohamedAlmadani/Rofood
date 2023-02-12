



import loginPage  from "../../pages/glassesShop/users/loginPage"
import newInvoicePage  from "../../pages/glassesShop/sales/newInvoicePage"
import InventoryPage from "../../pages/glassesShop/sales/InventoryPage"
import { faker } from '@faker-js/faker';



describe('Check all Inventory departments', ()=>{
    beforeEach(()=>{
      
      //  cy.visit('/');

     cy.fixture('glassesShop/inventory/Inventory.json').as('testdata');

     

     Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })
})
     
       
    

    it('check if the stock is added',() =>{

      cy.get('@testdata').then((testdata) =>{
        const  login =new loginPage();
        const newinvoice =new newInvoicePage();
        const Inventory =new InventoryPage();

    
        login.load();
        login.emailInput(testdata.eamil);
        login.passwordIbput(testdata.password);
        login.submitButton();
      
       
          newinvoice.IgnoreTheCashier();
          
          Inventory.clickTomenua();
          Inventory.ChooseTheInventoryDepartment();
          Inventory.BarcodeInput(faker.datatype.number());
          Inventory.namStockProducerArabicInput(testdata.namStockProducerArabic);
          Inventory. namStockProducerEnglishInput(testdata.namStockProducerEnglish);
          Inventory.quantityInput(testdata.quantity);
          Inventory.CostPriceInput(testdata.CostPrice);
          Inventory.sellingpriceInput(testdata.sellingprice);
          Inventory.ClickButtonAddproductinventory();

          
          
          
        
          
        
        
       

         
  });
      
       
      
  

    

          
         

            

           



          
          
           
          
    })



    
    it('check Product edit and delete',() =>{

      cy.get('@testdata').then((testdata) =>{
        const  login =new loginPage();
        const newinvoice =new newInvoicePage();
        const Inventory =new InventoryPage();

    
        login.load();
        login.emailInput(testdata.eamil);
        login.passwordIbput(testdata.password);
        login.submitButton();
      
       
          newinvoice.IgnoreTheCashier();
          
          Inventory.clickTomenua();
          Inventory.ChooseShowProductDepartment();
          Inventory.editProduct(testdata.editnamStockProducerArabic,testdata.editCostPrice);
          Inventory.DeleteProduct();

        

          
          
          
        
          
        
        
       

         
  });
      
       
      
  

    

          
         

            

           



          
          
           
          
    })

    it('check if Jarad is added',() =>{

      cy.get('@testdata').then((testdata) =>{
        const  login =new loginPage();
        const newinvoice =new newInvoicePage();
        const Inventory =new InventoryPage();

    
        login.load();
        login.emailInput(testdata.eamil);
        login.passwordIbput(testdata.password);
        login.submitButton();
      
       
          newinvoice.IgnoreTheCashier();
          
          Inventory.clickTomenua();
          Inventory.addJarad(testdata.BarcodeJarad);
          
         
          
          
          
        
          
        
        
       

         
  });
      
       
      
  

    

          
         

            

           



          
          
           
          
    })
    it('Check the Jarad show',() =>{

      cy.get('@testdata').then((testdata) =>{
        const  login =new loginPage();
        const newinvoice =new newInvoicePage();
        const Inventory =new InventoryPage();

    
        login.load();
        login.emailInput(testdata.eamil);
        login.passwordIbput(testdata.password);
        login.submitButton();
      
       
          newinvoice.IgnoreTheCashier();
          
          Inventory.clickTomenua();
          Inventory.showJarad();
          
         
          
          
          
        
          
        
        
       

         
  });
      
       
      
  

    

          
         

            

           



          
          
           
          
    })

    it('Check the Jarad status change',() =>{

      cy.get('@testdata').then((testdata) =>{
        const  login =new loginPage();
        const newinvoice =new newInvoicePage();
        const Inventory =new InventoryPage();

    
        login.load();
        login.emailInput(testdata.eamil);
        login.passwordIbput(testdata.password);
        login.submitButton();
      
       
          newinvoice.IgnoreTheCashier();
          
          Inventory.clickTomenua();
          Inventory.statuschangeJarad();

          
         
          
          
          
        
          
        
        
       

         
  });
      
       
      
  

    

          
         

            

           



          
          
           
          
    })

    it('Check the Jarad  delete',() =>{

      cy.get('@testdata').then((testdata) =>{
        const  login =new loginPage();
        const newinvoice =new newInvoicePage();
        const Inventory =new InventoryPage();

    
        login.load();
        login.emailInput(testdata.eamil);
        login.passwordIbput(testdata.password);
        login.submitButton();
      
       
          newinvoice.IgnoreTheCashier();
          
          Inventory.clickTomenua();
          Inventory.deleteJarad();

          
         
          
          
          
        
          
        
        
       

         
  });
      
       
      
  

    

          
         

            

           



          
          
           
          
    })

   

    


  })