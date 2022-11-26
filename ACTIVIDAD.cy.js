describe('saucedemo home', () => {
  it('Usuario incorrecto', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.viewport('macbook-15')
    cy.get('[data-test="username"]').should ('be.visible').type("Maria12")
    cy.get('[data-test="password"]').should ('be.visible').type ("1234")
    cy.wait(2000)
    cy.get('[data-test="login-button"]').click ()
    cy.wait(2000)
    cy.get('[data-test="error"]').should('have.text','Epic sadface: Username and password do not match any user in this service')
    cy.wait(2000)
  })
 
  it('Usuario Correcto', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.viewport('macbook-15')
    cy.get('[data-test="username"]').should ('be.visible').type("standard_user")
    cy.wait(1000)
    cy.get('[data-test="password"]').should ('be.visible').type ("secret_sauce")
    cy.wait(2000)
    cy.get('[data-test="login-button"]').click ()
    cy.wait(2000)
    cy.get(':nth-child(2) > :nth-child(1) > #inventory_container')


    
  })
 
  it('Compra', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.viewport('macbook-15')
    cy.get('[data-test="username"]').should ('be.visible').type("standard_user")
    cy.wait(1000)
    cy.get('[data-test="password"]').should ('be.visible').type ("secret_sauce")
    cy.wait(1000)
    cy.get('[data-test="login-button"]').click ()
    cy.wait(1000)
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.wait(1000)
    cy.get('.shopping_cart_link').click()
    cy.wait(1000)
    cy.get('[data-test="checkout"]').click ()
    cy.get('[data-test="firstName"]').type ("mp")
    cy.wait(1000)
    cy.get('[data-test="lastName"]').type ("niño")
    cy.get('[data-test="postalCode"]').type ("5484")
    cy.wait(1000)
    cy.get('[data-test="continue"]').click ()
    
    cy.wait(1000)
    cy.get('[data-test="finish"]').click ()
    cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER')
    
})
 })