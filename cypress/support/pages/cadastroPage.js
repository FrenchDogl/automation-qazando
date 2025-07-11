export function nomeCompleto(name) {
    cy.get('#user').type(name)
}

export function informarEmail(email) {
    cy.get('#email').type(email)
}

export function informarSenha(password) {
    cy.get('#password').type(password)
}

export function clicarRegistrar() {
    cy.get('#btnRegister').click()
}

export function registroRealizado(name) {
    cy.get('.swal2-popup')
        .should('contain', 'Cadastro realizado!')
        .should('contain', `Bem-vindo ${name}`)
}

export function erroNome() {
    cy.get('#errorMessageFirstName')
        .should('contain', 'O campo nome deve ser prenchido')
}

export function erroEmail() {
    cy.get('#errorMessageFirstName')
        .should('contain', 'O campo e-mail deve ser prenchido corretamente')
}

export function erroSenha() {
    cy.get('#errorMessageFirstName')
        .should('contain', 'O campo senha deve ter pelo menos 6 dígitos')
}