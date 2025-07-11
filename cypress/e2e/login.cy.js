/// <reference types = 'cypress' />

const { faker } = require("@faker-js/faker")
const loginPage = require("../support/pages/loginPage")

let name, email, password

beforeEach(() => {
    loginPage.acessarLogin()
    name = faker.person.fullName()
    email = faker.internet.email()
    password = faker.internet.password({ length: 6 })
})

describe('Teste de Login', () => {
    it('Login com Sucesso', () => {
        loginPage.preencherEmail(email)
        loginPage.preencherSenha(password)
        cy.get('#materialUnchecked').check()
        loginPage.clicarLogin(email)
    })
    it('Login com Email incorreto', () => {
        loginPage.preencherEmail(name)
        loginPage.preencherSenha(password)
        cy.get('#materialUnchecked').check()
        loginPage.emailInválido(email)
    })
    it('Login sem Email', () => {
        loginPage.preencherSenha(password)
        cy.get('#materialUnchecked').check()
        loginPage.emailInválido(email)
    })
    it('Login com Senha incorreta', () => {
        password = faker.internet.password({ length: 2 })

        loginPage.preencherEmail(email)
        loginPage.preencherSenha(password)
        cy.get('#materialUnchecked').check()
        loginPage.senhaInvalida(email)
    })
    it('Login sem Senha', () => {
        loginPage.preencherEmail(email)
        cy.get('#materialUnchecked').check()
        loginPage.senhaInvalida(email)
    })
})
