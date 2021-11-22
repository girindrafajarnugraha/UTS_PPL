context('Cypress Add to chart', () => {
    Cypress.Commands.add('login', function (id) {
        cy.fixture("userstandard").then((userstandard) => {
            const user = userstandard.username;
            const pass = userstandard.password;
            cy.visit('https://www.saucedemo.com') // mengunjungi website
            cy.get('#user-name').type(user) // cari input username kemudian otomatis isi dengan username
            cy.get('#password').type(pass) // cari input password kemudian otomatis isi dengan password
            cy.get('#login-button').click() // klik login
        });
    })

    it('Add remove item to cart', () => {
        // test case add to cart
        cy.login()
        cy.get('#item_1_title_link > .inventory_item_name').click()
        // cy.login_standard()
        // cy.get('#item_4_title_link > .inventory_item_name').click()
        cy.get('[data-test=add-to-cart-sauce-labs-bolt-t-shirt]').click() // klik add to cart
        cy.get('[data-test=remove-sauce-labs-bolt-t-shirt]').click() // klik remove
    })

})