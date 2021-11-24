describe('Cypress Demo-login', () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it('login scenario 1',() =>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.inventory_list').should('be.visible')
    })
    it('login scenario 2',() =>{
        cy.get('#user-name').type('locked_out_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.error-message-container')
        .find('[data-test=error]')
        .should(($error) => {
            expect($error).to.have.text('Epic sadface: Sorry, this user has been locked out.')
        })
    })
    it('login scenario 3',() =>{
        cy.get('#user-name').type('user')
        cy.get('#password').type('sauce')
        cy.get('#login-button').click()
        cy.get('.error-message-container')
        .find('[data-test=error]')
        .should(($error) => {
            expect($error).to.have.text('Epic sadface: Username and password do not match any user in this service')
        })
    })
    it('login scenario 4',() =>{
        cy.get('#user-name').type('user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('.error-message-container')
        .find('[data-test=error]')
        .should(($error) => {
            expect($error).to.have.text('Epic sadface: Username and password do not match any user in this service')
        })
    })
    it('login scenario 5',() =>{
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret')
        cy.get('#login-button').click()
        cy.get('.error-message-container')
        .find('[data-test=error]')
        .should(($error) => {
            expect($error).to.have.text('Epic sadface: Username and password do not match any user in this service')
        })
    })
})