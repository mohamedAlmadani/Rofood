import loginPage  from "../../pages/glassesShop/users/loginPage"
import cashierPage  from "../../pages/glassesShop/sales/cashierPage"






describe('Check all cashier departments', ()=>{
    beforeEach(()=>{
      
      //  cy.visit('/');

     cy.fixture('glassesShop/purchases/purchases.json').as('testdata');

     

     Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from failing the test
      return false
    })
})
     
       
    

    it('Check the add moneyto the fund ',() =>{

      cy.get('@testdata').then((testdata) =>{
        const  login =new loginPage();
      
        const cashierPag =new cashierPage();

    
        login.load();
        login.emailInput(testdata.eamil);
        login.passwordIbput(testdata.password);
        login.submitButton();
       cashierPag.IgnoreTheCashier();
        cashierPag.ChoosePurchasingDepartment();
        cashierPag.Addmoneytothefund(testdata.amountvalue);

        

          
          
          
        
          
        
        
       

         
  });
      
       
      
  

    

          
         

            

           



          
          
           
          
    })

    it('Check the Withdraw money from  the fund',() =>{

        cy.get('@testdata').then((testdata) =>{
          const  login =new loginPage();
        
          const cashierPag =new cashierPage();
  
      
          login.load();
          login.emailInput(testdata.eamil);
          login.passwordIbput(testdata.password);
          login.submitButton();
         cashierPag.IgnoreTheCashier();
          cashierPag.ChoosePurchasingDepartment();
          cashierPag.Withdrawmoneyfromthefund(testdata.Withdrawamount);
  
          
  
            
            
            
          
            
          
          
         
  
           
    });
        
         
        
    
  
      
  
            
           
  
              
  
             
  
  
  
            
            
             
            
      })
 


      


  })



 