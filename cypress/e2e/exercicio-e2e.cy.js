/// <reference types="cypress" />
import FaturamentoPage from "../support/page-objects/faturamento.page";
const dadosFaturamento = require('../fixtures/faturamento.json')

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
    /*  Como cliente 
        Quero acessar a Loja EBAC 
        Para fazer um pedido de 4 produtos 
        Fazendo a escolha dos produtos
        Adicionando ao carrinho
        Preenchendo todas opções no checkout
        E validando minha compra ao final */

    before(() => {
        cy.visit('produtos')
    });


    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer um pedido na loja Ebac Shop de ponta a ponta', () => {

        cy.addProdutos('Erikssen CoolTech™ Fitness Tank', 'L', 'Red', 5)
        cy.get('.woocommerce-message').should('contain', '5 × “Erikssen CoolTech™ Fitness Tank” foram adicionados no seu carrinho.')

        cy.addProdutos('Frankie Sweatshirt', 'L', 'White', 3)
        cy.get('.woocommerce-message').contains('3 × “Frankie Sweatshirt” foram adicionados no seu carrinho.')

        cy.addProdutos('Gobi HeatTec® Tee', 'L', 'Black', '8')
        cy.get('.woocommerce-message').contains('8 × “Gobi HeatTec® Tee” foram adicionados no seu carrinho.')

        cy.addProdutos('Hawkeye Yoga Short', '36', 'Black', 10)
        cy.get('.woocommerce-message').contains('10 × “Hawkeye Yoga Short” foram adicionados no seu carrinho.')

        cy.get('.woocommerce-message > .button').click()

        cy.get('.checkout-button').click()

        FaturamentoPage.editarEnderecoFaturamento(
            dadosFaturamento[1].nome,
            dadosFaturamento[1].sobrenome,
            dadosFaturamento[1].empresa,
            dadosFaturamento[1].pais,
            dadosFaturamento[1].endereco,
            dadosFaturamento[1].complemento,
            dadosFaturamento[1].cidade,
            dadosFaturamento[1].estado,
            dadosFaturamento[1].cep,
            dadosFaturamento[1].telefone,
            dadosFaturamento[1].email,
            dadosFaturamento[1].observacao
        )

        cy.get('#place_order').click()

        cy.get('.woocommerce-notice').contains('Obrigado. Seu pedido foi recebido.')
    });

})
