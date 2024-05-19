describe('Checkout and verify card', () => {

  const { name, country, city, card, month, year } = require('../../../fixtures/data');

  it('Complete checkout process and verify correct card number', () => {
    cy.visit('/');
    cy.contains('Samsung galaxy s6').click();
    cy.get('.btn-success').contains('Add to cart').click();
    cy.contains('Cart').click();
    cy.get('#tbodyid').should('be.visible')
    cy.get('.btn-success').contains('Place Order').click();
    cy.get('#name').type(name);
    cy.get('#country').type(country);
    cy.get('#city').type(city);
    cy.get('#card').type(card);
    cy.get('#month').type(month);
    cy.get('#year').type(year);
    cy.get('button[onclick="purchaseOrder()"]').click();
    cy.get('.sweet-alert').should('be.visible');
    cy.get('.lead').should('contain', card);
  });

 });

