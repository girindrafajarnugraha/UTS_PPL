describe('Cypress Add to chart', () => {
    beforeEach(()=>{
        cy.fixture("userstandard").then((userstandard) => {
            const user = userstandard.username;
            const pass = userstandard.password;
            cy.visit('/') // mengunjungi website
            cy.get('#user-name').type(user) // cari input username kemudian otomatis isi dengan username
            cy.get('#password').type(pass) // cari input password kemudian otomatis isi dengan password
            cy.get('#login-button').click() // klik login
        });
    })

    it('Add remove item Sauce Labs Bolt T-Shirt to cart', () => {
        // test case add to cart
        cy.get('#item_1_title_link > .inventory_item_name').click()
        // cy.login_standard()
        // cy.get('#item_4_title_link > .inventory_item_name').click()
        cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click() // klik add to cart
        cy.get('[data-test=remove-sauce-labs-bolt-t-shirt]').click() // klik remove
        cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').should('be.visible')
    })

    it('Add remove item Sauce Labs Backpack to cart', () => {
        // test case add to cart
        cy.get('#item_4_title_link > .inventory_item_name').click()
        // cy.login_standard()
        // cy.get('#item_4_title_link > .inventory_item_name').click()
        cy.get('[data-test=add-to-cart-sauce-labs-backpack]').click() // klik add to cart
        cy.get('[data-test=remove-sauce-labs-backpack]').should('be.visible')
    })
})