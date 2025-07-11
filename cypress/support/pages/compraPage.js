export function acessarChekout() {
    cy.visit('/checkout-one')
}

export function preencherNome(fName, lName) {
    cy.get('#fname').type(fName)
    cy.get('#lname').type(lName)
}

export function preencherEmpresa(company) {
    cy.get('#cname').type(company)
}

export function preencherEmail(email) {
    cy.get('#email').type(email)
}

export function preencherEndereço(zip, address) {
    cy.get('#country').select(1)
    cy.get('#city').select(1)
    cy.get('#zip').type(zip)
    cy.get('#faddress').type(address)
}

export function finalizarCompra() {
    cy.get('.checkout-area-bg > .theme-btn-one').click()
    cy.get('#javascript').click()
    cy.get(':nth-child(2) > :nth-child(2) > .theme-btn-one').click()
    cy.get('.col-lg-7').should('contain', 'Order success!')
}