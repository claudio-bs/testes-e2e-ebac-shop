/// <reference types="cypress" />

describe('Funcionalidade Página de produtos', () => {
    
    beforeEach(() => {
        cy.visit('produtos')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve escolher 4 produtos da lista', () => {
        cy.get('[class="product-block grid"]')
            //.first()
            //.last()
            .eq(4)
            //.contains()
            .click()
    });

    it.only('Deve adicionar 4 produtos ao carrinho', () => {
        cy.get('[class="product-block grid"]')
        .eq(0)
        .click()
        cy.get('.button-variable-item-L').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text')
        .clear()
        .type(2)
        cy.get('.single_add_to_cart_button').click()
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 4)
    })

    it('Deve fazer checkout preenchendo todas as opções', () => {
        
    });

    it('Deve validar a compra no fim do processo', () => {
        
    });
});

