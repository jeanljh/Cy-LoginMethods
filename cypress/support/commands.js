// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (email, pwd, user) => {
    cy.session([email,pwd], () => {
        cy.visit('/search-book')
        cy.get('.desktop-v .login-btn').click()
        cy.get('#email-input').type(email)
        cy.get('#password-input').type(pwd)
        cy.contains('.login-form button', 'Sign In').click()
        cy.get('.dropdown-toggle.btn').invoke('text').should('eq', user)
    })
})