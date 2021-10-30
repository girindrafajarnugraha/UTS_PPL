context('Cypress Demo-login', () => {
    it('login scenario',() =>{
        cy.visit('https://www.saucedemo.com/')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
    })
    it('Sort', ()=>{
        cy.get('[data-test=product_sort_container]').select('za') // klik sort
    })
})