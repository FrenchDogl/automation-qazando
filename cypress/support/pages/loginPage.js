export function acessarLogin() {
    cy.visit('/login')
}

export function preencherEmail(email) {
    cy.get('#user').type(email)
}

export function preencherSenha(password) {
    cy.get('#password').type(password)
}

export function clicarLogin(email) {
    cy.get('#btnLogin').click()
    cy.get('.swal2-popup')
        .should('contain', 'Login realizado')
        .should('contain', `Olá, ${email}`)
}

export function emailInválido() {
    cy.get('#btnLogin').click()
    cy.get('.invalid_input')
        .should('contain', 'E-mail inválido.')
}

export function senhaInvalida() {
    cy.get('#btnLogin').click()
    cy.get('.invalid_input')
        .should('contain', 'Senha inválida.')
}