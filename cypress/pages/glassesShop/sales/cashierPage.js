class cashierPage{

 

    IgnoreTheCashier(){
        cy.get('.btn-danger').click({force: true,multiple: true});
    }
    ChoosePurchasingDepartment(){
        cy.get('.menu > :nth-child(6) > a').click({force: true});
    }

    Addmoneytothefund(amountval){
        cy.get('#modalicon206').click({force:true});
        cy.get('[placeholder="قيمة المبلغ"]').type(amountval);
        cy.get('[class="btn btn-primary"]').click({force:true,multiple: true});
        cy.get('.alert').should('contain','نجاح');



    }
    Withdrawmoneyfromthefund(Withdrawamou){
        cy.get('#modalicon1206').click({force:true});
        cy.get('#exampleModal206 > .modal-dialog > form > .modal-content > .modal-body > .form-control').clear().type(Withdrawamou,{force: true});
        cy.get('[class="btn btn-primary"]').click({force:true,multiple: true});
        //cy.get('.alert').should('contain','سحب');

 
    }


  
}
export default  cashierPage;