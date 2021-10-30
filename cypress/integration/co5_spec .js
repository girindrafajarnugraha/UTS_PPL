context('Checkout', () => {
    it('checkout more than one product scenario ', () => {
        cy.visit('https://www.saucedemo.com')
        cy.get('#user-name').type('standard_user')
        cy.get('#password').type('secret_sauce')
        cy.get('#login-button').click()
        cy.get('#add-to-cart-sauce-labs-onesie').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('Aula')
        cy.get('#last-name').type('Faridah')
        cy.get('#postal-code').type('645615')
        cy.get('#continue').click()
        cy.get('#finish').click()
    })
    //hasil sukses
})