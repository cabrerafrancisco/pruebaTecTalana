describe('Product Categories', () => {
    beforeEach(() => {
      cy.visit('https://www.demoblaze.com/index.html');
    })
  it('should display different product categories', () => {
    const categories = ['Phones', 'Laptops', 'Monitors'];
    categories.forEach((category) => {
      cy.contains(category).should('be.visible');
    });
  });

  it('check cell phone products', () => {
    cy.get('.list-group-item').first().click();
    cy.get('#tbodyid').should('be.visible');
    cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').should('have.text', 'Nexus 6');
  });
  it('check laptop products', () => {
    cy.contains('#itemc','Laptops').click()
    cy.get('#tbodyid').should('be.visible')
    cy.get(':nth-child(6) > .card > .card-block > .card-title > .hrefch').should('have.text', 'MacBook Pro')
  });
  it('check monitor products', () => {
    cy.get('.list-group-item').last().click();
    cy.get('#tbodyid').should('be.visible')
    cy.get(':nth-child(2) > .card > .card-block > .card-title > .hrefch').should('have.text', 'ASUS Full HD')
  });
  
})