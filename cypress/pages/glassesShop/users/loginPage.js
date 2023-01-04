

class loginPage{

    ///Elrmrny

     emailInput(ema){

    
    cy.get('#email').type(ema)

    return this
    }

     passwordIbput (pass){
        
         cy.get('#password').type(pass)

         return this
    }

     submitButton(){
         cy.get('[type="submit"]').click({force: true}); 
    }

    /// methods

    load(){
        cy.visit("/");
        return this;
    }
}

   

export default loginPage;