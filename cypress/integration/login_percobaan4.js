context('Cypress Demo-login', () => {
    it('login scenario',() =>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })
})