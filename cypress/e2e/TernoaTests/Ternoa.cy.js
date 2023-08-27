const { onPossiblyUnhandledRejection } = require("bluebird")
import "cypress-real-events/support";

describe('Ternoa test Suits 1', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
    cy.get('#APjFqb').type('Mateen Iqbal{Enter}')
    cy.wait(5000)
    cy.contains('Images').click()  
    
    
  })

  it('login', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('#username').type('student')
    cy.get('#password').type('Password123')
    cy.contains('Submit').click() 
    cy.get('#menu-item-43 > a').click()
    cy.get('#menu-item-19 > a').click()


  })


  it('Create NFT', () => {
    cy.visit('https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fdev-0.ternoa.network#/extrinsics')
    cy.wait (5000)
    cy.get('.sc-jJEKmz > .ui--Labelled-content > .ui > .dropdown').click()
    cy.contains('ALICE').click()
    cy.get('.small > .ui > .dropdown').click()
    cy.contains('nft').click()
    cy.get('.large > .ui > .dropdown').click()
    cy.contains('createNft(offchainData, royalty, collectionId, isSoulbound').click()
    cy.get('[data-testid="offchainData: Bytes (U8Vec)"]').type('MateenIqbal')
    cy.get('[data-testid="royalty: Permill"]').clear().type('10')
    cy.get('.ui--Param > .sc-ezredP > .ui--Labelled-content > .ui > .dropdown').click()
    cy.contains('Yes').click()
    cy.get('.fa-xmark').click()
    cy.get('.sc-gKseQn > :nth-child(2)').click()
    cy.get('.sc-gWHigU > .sc-gKseQn > .sc-iBPTik').click()
    cy.wait(10000)


    /*cy.get('span.smallHide').realHover('mouse')
    cy.get('span:contains("Transfer")').click()
    cy.get('[href="#/account"] > span').click()*/

    cy.get(':nth-child(2) > .groupHdr').realHover('mouse')
    cy.contains('Explorer').click()
    cy.get('.ui--Expander-summary').click()
    cy.get('[data-testid="nftId: u32"]').invoke('val').then((value)=> {
      cy.log(value) 
    })   
    

    
  })


  it('Check NFT Raw Data', () => {
    cy.visit('https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fdev-0.ternoa.network#/extrinsics')
    cy.wait (5000)
    cy.contains('.menuContainer li:nth-of-type(4) .smallHide', 'Developer').click()
    cy.wait (10000)

  })


  
  it.only('Shadow Dom Element', () => {
    cy.visit('https://polkadot.js.org/apps/?rpc=wss%3A%2F%2Fdev-0.ternoa.network#/extrinsics')
    cy.wait (5000)

    cy.get('div[class="groupHdr "]').realHover('mouse')
  cy.contains('Chain state').click()
  cy.get('.small > .ui > .dropdown').click()
  cy.contains('nft').click()
  })
  
  
})