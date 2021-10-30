context('Cypress Sort', () => {
    it('Login Skenario', () => {
        cy.visit('https://www.saucedemo.com') // mengunjungi website
        cy.get('#user-name').type('standard_user') // cari input username kemudian otomatis isi dengan username
        cy.get('#password').type('secret_sauce') // cari input password kemudian otomatis isi dengan password
        cy.get('#login-button').click() // klik login
    })
    it('Sort', ()=>{
        // test case add to cart
        cy.get('[data-test=product_sort_container]').select('za') // klik sort
    })
})