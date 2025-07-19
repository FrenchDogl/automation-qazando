/// <reference types = "cypress" />

const { faker } = require('@faker-js/faker')
const registerPage = require('../support/pages/cadastroPage')

let name, email, password

beforeEach(() => {
    registerPage.abrirCadastro()
    name = faker.person.fullName()
    email = faker.internet.email()
    password = faker.internet.password({ length: 6 })
})

describe('Cadastro de Clientes', () => {
    it('Cadastro com Sucesso', () => {
        registerPage.realizarCadastroCompleto(name, email, password)
        registerPage.verificarSucessoCadastro(name)
    })
    it('Cadastro Sem Nome', () => {
        registerPage.informarEmail(email)
        registerPage.informarSenha(password)
        registerPage.cadastrar()
        registerPage.verificarNomeIncorreto()
    })
    it('Cadastro Sem Email', () => {
        registerPage.informarNome(name)
        registerPage.informarSenha(password)
        registerPage.cadastrar()
        registerPage.verificarEmailIncorreto()
    })
    it('Cadastro com Email incorreto', () => {
        registerPage.informarNome(name)
        registerPage.erroEmail(email)
        registerPage.informarSenha(password)
        registerPage.cadastrar()
        registerPage.verificarEmailIncorreto()
    })
    it('Cadastro Sem Senha', () => {
        registerPage.informarNome(name)
        registerPage.informarEmail(email)
        registerPage.cadastrar()
        registerPage.verificarSenhaIncorreta()
    })
    it.only('Cadastro Com Senha Incorreta', () => {
        registerPage.informarNome(name)
        registerPage.informarEmail(email)
        registerPage.erroSenha(password)
        registerPage.cadastrar()
        registerPage.verificarSenhaIncorreta()
    })
})