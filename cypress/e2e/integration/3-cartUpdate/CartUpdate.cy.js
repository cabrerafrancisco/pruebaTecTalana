describe('Cart Update', () => {
    
  it('Should update the cart correctly when items are added and removed', () => {
    cy.visit('/');
    cy.contains('Samsung galaxy s6').click();
    cy.get('.btn-success').contains('Add to cart').click();
    cy.get('#nava').click();
    cy.get('#tbodyid').should('be.visible')
    cy.contains('Nokia lumia 1520').click();
    cy.get('.btn-success').contains('Add to cart').click();
    cy.contains('Cart').click();
    cy.contains('Delete').click();
    cy.get('.success > :nth-child(2)').should('contain', 'Nokia lumia 1520');
  });

});