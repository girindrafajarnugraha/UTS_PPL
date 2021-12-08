context('Checkout', () => {
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
    it('checkout scenario with sorting', () => {
        cy.get('[data-test=product_sort_container]').select('za')
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('Aula')
        cy.get('#last-name').type('Faridah')
        cy.get('#postal-code').type('645615')
        cy.get('#continue').click()
        cy.get('#finish').click()
        cy.get('#checkout_complete_container').should('be.visible')
    })
    it('checkout scenario without first name', () => {
        cy.get('[data-test=product_sort_container]').select('za')
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.get('#last-name').type('Faridah')
        cy.get('#postal-code').type('645615')
        cy.get('#continue').click()
        cy.get('.error-message-container')
        .find('[data-test=error]')
        .should(($error) => {
            expect($error).to.have.text('Error: First Name is required')
        })
    })
    it('checkout scenario without postal code', () => {
        cy.get('[data-test=product_sort_container]').select('za')
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('Aula')
        cy.get('#last-name').type('Faridah')
        cy.get('#continue').click()
        cy.get('.error-message-container')
        .find('[data-test=error]')
        .should(($error) => {
            expect($error).to.have.text('Error: Postal Code is required')
        })
    })
    it('checkout scenario without postal code', () => {
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('Aula')
        cy.get('#last-name').type('Faridah')
        cy.get('#postal-code').type('645615')
        cy.get('#continue').click()
        cy.get('#finish').click()
        cy.get('#checkout_complete_container').should('be.visible')
    })
    it('checkout more than one product scenario ', () => {
        cy.get('#add-to-cart-sauce-labs-onesie').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('.shopping_cart_link').click()
        cy.get('#checkout').click()
        cy.get('#first-name').type('Aula')
        cy.get('#last-name').type('Faridah')
        cy.get('#postal-code').type('645615')
        cy.get('#continue').click()
        cy.get('#finish').click()
        cy.get('#checkout_complete_container').should('be.visible')
    })
})