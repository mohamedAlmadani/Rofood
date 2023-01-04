class newInvoicePage {


    get IgnoreTheCashierInput() {
        return cy.get('.btn-danger');
     }

    IgnoreTheCashier(){
        cy.get('.btn-danger').click({force: true,multiple: true});
    }
    

    clickTomenua(){

        cy.get('.menu > :nth-child(2) > a').click({force: true});

    }

    ChooseTheSalesDepartment(){
        cy.get(':nth-child(1) > a > .box').click();
    }



phoneInput(pho){
    cy.get('[name="phone"]').type(pho,{force: true});
    return  this
}

MobileSearch(){
     cy.get('#sumbbtn').click({force: true});

}

PriceInput(pric){
    cy.get('[id="price0"]').type(pric,{force:true});
   


}

BarcodeInput(BaCode){

cy.get('#bar0').type(BaCode,{force: true}).trigger('keydown', {
    key: 'Enter',
  });;

cy.get('[id="d0"]').should('be.visible').click({force:true});


}

ClickConfirmAndCreateInvoice(){

    cy.get('[id="submit"]').click({multiple: true});
}
ConfirmationSaleShowMessage(){
    cy.get('[id="exampleModalLabel"]').should('contain',"تمت عملية البيع بنجاح");

}
ConfirmationSale(){
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn').click({force:true});

}




}
export default newInvoicePage ;