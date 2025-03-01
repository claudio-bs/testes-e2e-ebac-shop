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

        cy.addProdutos('Sinbad Fitness Tank', 'L', 'Blue', 2)
        cy.get('.woocommerce-message').should('contain', '2 × “Sinbad Fitness Tank” foram adicionados no seu carrinho.')

        cy.addProdutos('Sol Active Short', '36', 'Green', 3)
        cy.get('.woocommerce-message').contains('3 × “Sol Active Short” foram adicionados no seu carrinho.')

        cy.addProdutos('Sparta Gym Tank', 'L', 'Green', 1)
        cy.get('.woocommerce-message').contains('“Sparta Gym Tank” foi adicionado no seu carrinho.')

        cy.addProdutos('Strike Endurance Tee', 'L', 'Black', 3)
        cy.get('.woocommerce-message').contains('3 × “Strike Endurance Tee” foram adicionados no seu carrinho.')

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

        cy.get('.woocommerce-order > :nth-child(3)').contains('Pagar em dinheiro na entrega.')
    });

})
