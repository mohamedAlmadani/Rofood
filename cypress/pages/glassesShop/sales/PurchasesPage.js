class PurchasesPage{

    clickTomenua(){

        cy.get('.menu > :nth-child(4) > a').click({force: true});

    }

    IgnoreTheCashier(){
        cy.get('.btn-danger').click({force: true,multiple: true});
    }
    ChoosePurchasingDepartment(){
        cy.get('.menu > :nth-child(5) > a').click({force: true});
    }
  
    addResource(nameres,addressres,phoneres,taxnumres){
        cy.get(':nth-child(6) > a > .box').click({force: true});
        cy.get('[name="name"]').type(nameres);
        cy.get('[name="address"]').type(addressres);
        cy.get('[name="phone"]').type(phoneres);
        cy.get('[name="account_num"]').type(taxnumres);
        cy.get('[type="submit"]').click({force:true});
        cy.get('.alert').should('contain','نجاح');
        
    }

    Createpurchaseinvoice(numinvres,barcod){
        cy.get(':nth-child(1) > a > .box').click({force: true});
        cy.get('[name="supplier_id"]').select('703');
        cy.get('[name="supplier_invoice_num"]').type(numinvres);
        cy.get('[id="bar0"]').type(barcod);
        cy.get('[id="submit"]').click({force: true});
        cy.get('[ class="btn btn-primary"]').click({force: true,multiple: true});


    }

    purchaseinvoicepayment(){
        cy.get(':nth-child(2) > a > .box').click({force: true});
        cy.get('[class="material-icons"]').eq(0).click({force: true});
        cy.get('[class="btn btn-primary"]').click({force: true,multiple: true});
        cy.get('[class="material-icons"]').click({force: true,multiple: true});
        cy.get('[name="action"]').click({force: true,multiple: true});

    }
    addpurchaseproduct(barcod,namear,nameen,priceunit){
cy.get(':nth-child(3) > a > .box').click({force: true});
cy.get('[id="autofocus"]').type(barcod);
cy.get('[id="ar0"]').type(namear);
cy.get('[name="details[]"]').first().type(namear);
cy.get('[id="price0"]').clear().type(priceunit);
cy.get('[id="stored0"]').click({force:true});
cy.get('[class="btn btn-primary"]').click({force:true});
//cy.get('.alert').should('contain','نجاح');





    }

  


    Createpurchaseinvoicedata(data,numinvres,barcod){
        cy.get('form > .box').click({force: true});
        cy.get('[name="date"]').type(data);
        cy.get('[name="supplier_id"]').select('703');
        cy.get('[name="supplier_invoice_num"]').type(numinvres);
        cy.get('[id="bar0"]').type(barcod);
        cy.get('[id="submit"]').click({force: true});
        cy.get('.modal-footer > .btn-primary').click({force: true,multiple: true});
       // cy.get('.alert').should('contain','نجاح');




    }




}
export default PurchasesPage;