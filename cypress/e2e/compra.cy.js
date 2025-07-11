/// <reference types = "cypress" />

const compraPage = require('../support/pages/compraPage')
const { faker } = require("@faker-js/faker")

const fName = faker.person.firstName()
const lName = faker.person.lastName()
const company = faker.company.name()
const email = faker.internet.email()
const zip = faker.location.zipCode()
const address = faker.location.streetAddress()
const text = faker.phone.number()

describe ('Cadastro para compra', () => {
    it('Chekout', () => {
        compraPage.acessarChekout()
        compraPage.preencherNome(fName,lName)
        compraPage.preencherEmpresa(company)
        compraPage.preencherEmail(email)        
        compraPage.preencherEndereço(zip,address)
        cy.get('#messages').type(text)
        cy.get('#materialUnchecked').check()
        compraPage.finalizarCompra()
    })
})
