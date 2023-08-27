const { timeout } = require("async")

it('learning assertions', function (){


  cy.visit('https://example.cypress.io/')
  cy.contains('get').click()



  //Implicit Assertion 


  cy.get('#query-btn',{timeout:6000})
   .should('contain', 'Button')
   .should('have.class', 'query-btn')
   .should('be.visible')
   .should('be.enabled')

   cy.get('#query-btn').invoke('attr', 'id')
   .should('equal', 'query-btn')


   cy.get('#query-btn')
   .should('contain', 'Button')
   .and('have.class', 'query-btn')


   // Explicit Assertions
   // expect

   expect(true).to.be.true

   let name = 'Mateen'
   expect(name).to.be.equal('Mateen')


   //assert

   assert.equal(4, 4 , 'Not Equal')
   assert.strictEqual(4,4,'Not Strictly Equal')

})