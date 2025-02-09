const { onPossiblyUnhandledRejection } = require("bluebird")
import "cypress-real-events/support";

describe('Git Practice', () => 
  it('passes', () => {
    cy.visit('https://www.google.com')
    cy.get('#APjFqb').type('Mateen Iqbal{Enter}')
    cy.wait(5000)
    cy.contains('Images').click()  
  })

)