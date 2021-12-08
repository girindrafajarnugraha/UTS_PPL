describe('Cypress Add to chart', () => {
    beforeEach(()=>{
        cy.fixture("userproblem").then((userproblem) => {
            const user = userproblem.username; // mengambil data username dan pass dari fixtures/userproblem.json
            const pass = userproblem.password;
            cy.visit('/') // mengunjungi website
            cy.get('#user-name').type(user) // cari input username kemudian otomatis isi dengan username
            cy.get('#password').type(pass) // cari input password kemudian otomatis isi dengan password
            cy.get('#login-button').click() // klik login
        });
    })

    it('Add remove item Sauce Labs Onesie to cart', () => {
        // test case add to cart
        cy.get('#item_1_title_link > .inventory_item_name').click()
        // cy.login_standard()
        // cy.get('#item_4_title_link > .inventory_item_name').click()
        cy.get('[data-test=add-to-cart-sauce-labs-onesie]').click() // klik add to cart
        cy.get('[data-test=remove-sauce-labs-onesie]').click() // klik remove
        cy.get('[data-test=remove-sauce-labs-onesie]').should('have.focus')
    })

    it('Add remove item Sauce Labs Fleece Jacket to cart', () => {
        // test case add to cart
        cy.get('#item_4_title_link > .inventory_item_name').click()
        
        //jaga-jaga kalau diminta login ulang
        // cy.login() 
        // cy.get('#item_4_title_link > .inventory_item_name').click()

        // klik add to cart
        cy.get('[data-test=add-to-cart-sauce-labs-fleece-jacket]').click()
        cy.get('[data-test=add-to-cart-sauce-labs-fleece-jacket]').should('have.focus')
    })

    it('Add remove item to cart item not found', () => {
        // test case add to cart
        cy.get('#item_5_title_link > .inventory_item_name').click()
        // cy.login_standard()
        // cy.get('#item_4_title_link > .inventory_item_name').click()
        cy.get('[data-test=add-to-cart-item-not-found]').click() // klik add to cart
        cy.get('.inventory_details_name').should(($txt) => {
            expect($txt).to.have.text('ITEM NOT FOUND')
        })
    })
})