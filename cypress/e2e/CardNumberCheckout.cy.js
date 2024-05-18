
describe('Checkout and verify card', () => {

    const userDetails = {
        name: 'Francisco Cabrera',
        country: 'Argentina',
        city: 'Tucuman',
        card: '121237812345678',
        month: 'July',
        year: '2024'
      };

    it('complete checkout process and verify correct card number', () => {
      cy.visit('https://www.demoblaze.com/index.html');
      cy.contains('Samsung galaxy s6').click();
      cy.get('.btn-success').contains('Add to cart').click();
      cy.contains('Cart').click();
      cy.get('#tbodyid').should('be.visible')
      cy.get('.btn-success').contains('Place Order').click();
      cy.get('#name').type(userDetails.name);
      cy.get('#country').type(userDetails.country);
      cy.get('#city').type(userDetails.city);
      cy.get('#card').type(userDetails.card);
      cy.get('#month').type(userDetails.month);
      cy.get('#year').type(userDetails.year);
      cy.get('button[onclick="purchaseOrder()"]').click();
      cy.get('.sweet-alert').should('be.visible');
      cy.get('.lead').should('contain', userDetails.card);
    });
  });

