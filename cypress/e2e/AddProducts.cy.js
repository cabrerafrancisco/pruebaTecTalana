
describe('Add Items from Each Category to Cart', () => {

  const categories = [
    { name: 'Phones', item: 'Samsung galaxy s6' },
    { name: 'Laptops', item: 'Sony vaio i5' },
    { name: 'Monitors', item: 'ASUS Full HD' }
  ];

  beforeEach(() => {
    cy.visit('https://www.demoblaze.com/index.html');
  });

    it(`should add a three item to the cart`, () => {
      categories.forEach((category) => {
        cy.contains(category.name).click();
        cy.contains(category.item).click();
        cy.get('#tbodyid').should('be.visible')
        cy.get('.btn-success').contains('Add to cart').click();
        cy.get('#nava').click();
      });
      cy.contains('Cart').click();
      cy.get('#tbodyid').should('be.visible')
      categories.forEach((category) => {
        cy.contains(category.item).should('be.visible');
      });
    });

});