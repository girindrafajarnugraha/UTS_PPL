context('Checkout', () => {
    it('checkout scenario without first name', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('[data-test=product_sort_container]').select('za')
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.get('#last-name').type('Faridah')
        cy.get('#postal-code').type('645615')
        cy.get('#continue').click()
    })
    //hasil eror, first name harus diisi
})