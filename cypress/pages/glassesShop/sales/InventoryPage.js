class InventoryPage{

    clickTomenua(){

        cy.get('.menu > :nth-child(4) > a').click({force: true});

    }

    ChooseTheInventoryDepartment(){
        cy.get(':nth-child(1) > a > .box').click();
    }

    BarcodeInput(BaCode){

        cy.get('#bar0').type(BaCode,{force: true});
        }


        namStockProducerArabicInput(nameProdArab){
            cy.get('[id="ar0"]').type(nameProdArab,{force: true});

        }

        namStockProducerEnglishInput(nameProdEng){
            cy.get('[id="en0"]').type(nameProdEng,{force: true});

        }
        quantityInput(quan){
            cy.get('[id="quantity0"]').clear().type(quan,{force: true});
        }

        CostPriceInput(cosPric){
            cy.get('[id="cost_price0"]').type(cosPric,{force: true});
        }

        sellingpriceInput(sellPric){
            cy.get('[id="price0"]').type(sellPric,{force: true});

        }
       ClickButtonAddproductinventory(){
        cy.get('[class="btn btn-primary"]').click({force: true,multiple: true});
      //  cy.get('.alert').should('contain','بنجاح');
       }


       ChooseShowProductDepartment(){
        cy.get(':nth-child(3) > a > .box').click( {force: true} );
    }
    editProduct(editnaproar,editcostpri){
        cy.get('[class="btn btn-info editItem"]').eq(0).click( {force: true} );
        cy.get('[id="ar0"]').clear().type(editnaproar,{force: true});
        cy.get('[name="cost_price"]').clear().type(editcostpri,{force: true});
        cy.get('[class="btn btn-success"]').click({force: true});
        cy.get('.alert').should('contain','بنجاح');

        

        
    }
    DeleteProduct(){
        cy.get('[id="modaltrigger"]').eq(0).click( {force: true} );
        cy.get('[type="submit"]').eq(0).click({force: true});
        //cy.get('.alert').should('contain','حذف');
    }

    addJarad(barcod){
        cy.get(':nth-child(5) > a > .box').click({force: true , multiple:true});
        cy.get('[id="bar0"]').type(barcod);
        cy.get('[id="submit"]').click({force:true});
        cy.get('[id="delete1"]').click({force:true});
      cy.get('[type="submit"]').click({force:true});
     // cy.get('[class="alert alert-success alert-block"]').should('be.visible');
     // cy.get('[class="alert alert-success alert-block"]').should('contain','الحفظ')


    }

    showJarad(){
        cy.get(':nth-child(6) > a > .box').click({force: true , multiple:true});
        cy.get('[class="material-icons eye"]').eq(0).click({force: true,multiple:true});
        cy.get('[class="card-title"]').should('contain','الجرد');
        

    }

    statuschangeJarad(){
        cy.get(':nth-child(6) > a > .box').click({force: true , multiple:true});
        cy.get('[class="btn btn-primary"]').eq(0).click({force: true});
        cy.get('[class="btn btn-primary"]').click({force: true, multiple:true});
        cy.reload();
        cy.get('[class=" btn-block btn btn-primary"]').should('contain','معتمد');



    }

    deleteJarad(){
        cy.get(':nth-child(6) > a > .box').click({force: true , multiple:true});
        cy.get('[class="material-icons delete"]').eq(0).click({force:true});
    }
  




    

        



}

export default InventoryPage;