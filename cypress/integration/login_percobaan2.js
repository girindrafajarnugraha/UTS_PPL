context('Cypress Demo-login', () => {
    it('login scenario',() =>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.error-message-container')
        .find('[data-test=error]')
        .should(($error) => {
            expect($error).to.have.text('Epic sadface: Sorry, this user has been locked out.')
        })
    })
})