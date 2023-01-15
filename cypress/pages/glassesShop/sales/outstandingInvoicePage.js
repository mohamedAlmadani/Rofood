class outstandingInvoicePage{

  

    IgnoreTheCashier(){
        cy.get('.btn-danger').click({force: true,multiple: true});
    }
    

    clickTomenua(){

        cy.get('.menu > :nth-child(2) > a').click({force: true});

    }

    ClickOnPendingBill(){
        cy.get(':nth-child(2) > a > .box').click(); 

    }

    ClickViewOutstandingInvoice(){
      cy.get('[title="عرض"]').click({multiple: true ,force :true});
      cy.get('.card-header > :nth-child(2)').should('contain','تفاصيل');
       
    }

    ClickUpdateOutstandingInvoice(){
        cy.get('[title="استكمال"]').click({multiple: true ,force :true});
         
      }

      ClickButtonUodate(){
        cy.get('[id="submitbtn"]').click({force :true});
        //cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-header').should('contain',"تمت عملية البيع");

      }

      ClickIconChangMethodOfPayment(cashpay,stcpa){
        cy.get('[title="تغير طريقة الدفع"]').eq(0).click({multiple: true ,force :true});
        cy.get('[name="paymentVal[820]"]').clear().type(cashpay);
        cy.get('[name="paymentVal[822]"]').clear().type(stcpa);
        cy.get('.btn').click();
       cy.get('.card-header').should('contain',"تعديل قيم");




      }

      ClickInvoiceStatusChange(){
        cy.get('[title="تغير الحالة"]').click({multiple: true ,force :true});
        cy.get('[class="btn btn-primary changestatuspend"]').click({multiple: true ,force :true});


      }

      ClickButtonReplacementInvoice(){
      cy.get(':nth-child(3) > a > .box').click({force :true});
      cy.get('[class="btn btn-info"]').click({multiple: true,force :true});
      cy.get('[id="submit"]').eq(0).click({multiple: true});
      cy.get('#exampleModalLabel').should('contain',"تمت عملية البيع");
      cy.get('.btn-danger').click({multiple: true,force :true});





      }

      ClickButtonReturnInvoice(phonenum){
        cy.get('#modaltrigger > .box').click({force :true});
        cy.get('[name="search"]').type(phonenum);
        cy.get('[class="btn btn-primary"]').click({force :true,multiple: true});
        
        cy.get('[class="btn btn-danger"]').click({multiple: true,force :true});
        cy.get('[class="btn btn-primary"]').click({force:true,multiple: true});
        //cy.get('#modaltrigger > .box').should('contain',"استرجاع");



      }

      ClickButtonRegisterInvoiceWithSpecificDate(pho,data,BaCode){
        cy.get('form > .box').click({force :true,multiple: true });
        cy.get('[name="phone"]').type(pho,{force: true});
        cy.get('#sumbbtn').click({force: true});
        cy.get('[name="date"]').type(data);
        cy.get('#bar0').type(BaCode,{force: true});
        cy.get('[id="submit"]').click({force :true,multiple: true });
        cy.get('#exampleModalLabel').should('contain',"تمت عملية البيع");
        cy.get('.btn-danger').click({force :true,multiple: true });

      







      }



    



}

export default outstandingInvoicePage ;