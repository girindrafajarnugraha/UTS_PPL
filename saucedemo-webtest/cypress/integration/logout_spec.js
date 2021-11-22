context('Cypress Logout', () => {
    it('Login Skenario', () => {
        cy.visit('https://www.saucedemo.com') // mengunjungi website
        cy.get('#user-name').type('standard_user') // cari input username kemudian otomatis isi dengan username
        cy.get('#password').type('secret_sauce') // cari input password kemudian otomatis isi dengan password
        cy.get('#login-button').click() // klik login
    })
    it('Logout skenario', ()=>{
        cy.get('#react-burger-menu-btn').click() // klik dropdown
        cy.get('#logout_sidebar_link').click() // klik logout
    })
})