context('Cypress Demo-login', () => {
    it('login scenario',() =>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.error-message-container')
        .find('[data-test=error]')
        .should(($error) => {
            expect($error).to.have.text('Epic sadface: Username and password do not match any user in this service')
        })
    })
})