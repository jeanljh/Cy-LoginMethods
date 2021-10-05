/// <reference types="cypress" />
import data from '../fixtures/testdata.json'

describe('Methods to Login', () => {
    // The cy.session() caches and restores cookies, localStorage and sessionStorage after a successful login. 
    // First login creates the session and subsequent calls will restore the session from cache.
    it('Test login via cache session', () => {
        cy.login(data.email, data.pwd, data.user)
        cy.visit('/')
    })

    // Login via cy.request() by calling the login API
    it('Test login via API', () => {
        cy.request({
            method: 'post',
            url: 'https://api.bookdoc.com/api/users/login',
            qs: {
                email: data.email,
                password: data.pwd
            },
            failOnStatusCode: false
        })
        .its('status').should('eq', 200)
    })
})