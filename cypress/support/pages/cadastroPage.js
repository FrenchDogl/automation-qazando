import { faker } from "@faker-js/faker"

//lista está marcada como abrir site, acerto completo, avulsos, erros e verificação

//abrir site
export function abrirCadastro() {
    cy.visit('/register')
}
//
//acerto completo
export function realizarCadastroCompleto(name, email, password) {
    cy.get('#user').type(name)
    cy.get('#email').type(email)
    cy.get('#password').type(password)
    cy.get('#btnRegister').click()
}
export function cadastrar() {
    cy.get('#btnRegister').click()
}
//
//avulsos
export function informarNome(name) {
    cy.get('#user').type(name)
}
export function informarEmail(email) {
    cy.get('#email').type(email)
}
export function informarSenha(password) {
    cy.get('#password').type(password)
}
//
// Erros
export function erroNome() {
    cy.get('#user').type(' ')
}
export function erroEmail(email) {
    email = faker.person.firstName(email)
    cy.get('#email').type(email)
}
export function erroSenha(password) {
    password = faker.internet.password({length: 5})
    cy.get('#password').type(password)
}
// Verificação
///sucesso
export function verificarSucessoCadastro(name) {
    cy.get('.swal2-popup')
        .should('contain', 'Cadastro realizado!')
    cy.get('.swal2-popup')
        .should('contain', 'Bem-vindo ' + name)
}
///
///falhas
export function verificarNomeIncorreto () {
    cy.get('#errorMessageFirstName')
        .should('contain','O campo nome deve ser prenchido')
}
export function verificarEmailIncorreto () {
    cy.get('#errorMessageFirstName')
        .should('contain','O campo e-mail deve ser prenchido corretamente')
}
export function verificarSenhaIncorreta () {
    cy.get('#errorMessageFirstName')
        .should('contain','O campo senha deve ter pelo menos 6 dígitos')
}