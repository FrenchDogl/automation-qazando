//lista está marcada como abrir site, avulsos, login e erros

import { faker } from "@faker-js/faker"

//abrir site
export function acessarLogin() {
    cy.visit('/login')
}
//
//avulsos
export function preencherEmail(email) {
    cy.get('#user').type(email)
}

export function preencherSenha(password) {
    cy.get('#password').type(password)
}
//
//login
export function clicarLogin(email) {
    cy.get('#btnLogin').click()
    cy.get('.swal2-popup')
        .should('contain', 'Login realizado')
        .should('contain', `Olá, ${email}`)
}
//
//erros
export function emailInválido() {
    cy.get('#btnLogin').click()
    cy.get('.invalid_input')
        .should('contain', 'E-mail inválido.')
}

export function senhaInvalida(password) {
    password = faker.internet.password({ length: 5 })
    cy.get('#password').type(password)
    cy.get('#btnLogin').click()
    cy.get('.invalid_input')
        .should('contain', 'Senha inválida.')
}