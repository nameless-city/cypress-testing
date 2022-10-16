/// <reference types="cypress"/>

it('google search', () => {
    cy.clearCookies()
    cy.visit('https://google.com')

    cy.get('#L2AGLb > .QS5gu').click()
    cy.get('.gLFyf').type('omelian levkovych{Enter}')
    // cy.get('.FPdoLc > center > .gNO89b').click()
})