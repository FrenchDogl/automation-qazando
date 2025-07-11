/// <reference types = "cypress" />

const cadastroPage = require('../support/pages/cadastroPage')
const { faker } = require("@faker-js/faker")

let name, email, password

beforeEach(() => {
    cy.visit('/register')
    name = faker.person.fullName()
    email = faker.internet.email()
    password = faker.internet.password({ length: 6 })

})

describe('Cadastro de Clientes', () => {
    it('Cadastro com Sucesso', () => {
        cadastroPage.nomeCompleto(name)
        cadastroPage.informarEmail(email)
        cadastroPage.informarSenha(password)
        cadastroPage.clicarRegistrar()
        cadastroPage.registroRealizado(name)
    })
    it('Cadastro sem Nome', () => {
        cadastroPage.informarEmail(email)
        cadastroPage.informarSenha(password)
        cadastroPage.clicarRegistrar()
        cadastroPage.erroNome()
    })
    it('Cadastro sem Email', () => {
        cadastroPage.nomeCompleto(name)
        cadastroPage.informarSenha(password)
        cadastroPage.clicarRegistrar()
    })
    it('Cadastro com Email inválido', () => {
        email = faker.person.fullName()

        cadastroPage.nomeCompleto(name)
        cadastroPage.informarSenha(password)
        cadastroPage.clicarRegistrar()
        cadastroPage.erroEmail()
    })
    it('Cadastro sem Senha', () => {
        cadastroPage.nomeCompleto(name)
        cadastroPage.informarEmail(email)
        cadastroPage.clicarRegistrar()
        cadastroPage.erroSenha()
    })
    it('Cadastro com Senha Inválida', () => {
        password = faker.internet.password({length: 5})

        cadastroPage.nomeCompleto(name)
        cadastroPage.informarEmail(email)
        cadastroPage.informarSenha(password)
        cadastroPage.clicarRegistrar()
        cadastroPage.erroSenha()
    })
})