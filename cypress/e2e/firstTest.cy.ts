describe('template spec', () => {
  it('Does Page title is and first product id available', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-testid="title"]').should("have.text","Choose Your Life Style");
    cy.get('[data-testid="productid"]').should('have.css','background-color').and('match',/255, 255, 255/);
    cy.get('[data-testid="productid"]').first('1');
  })
  it('Is input product match with search resuls',()=>{
    cy.visit('http://localhost:3000')
    const productName = 'Foldsack';
    cy.typeWithDelay('[data-testid="seachInputCtrl"]', productName, 2);
    cy.get('[data-testid="productName"]').contains(productName);
  })
  it('Is pagintation working as per click page',()=>{
    cy.visit('http://localhost:3000')
    const testid="pageNumber2";
    cy.get(`[data-testid=${testid}]`).click();
    cy.get(`[data-testid=${testid}]`).should('have.css', 'background-color')
    .and('eq', 'rgb(76, 175, 80)');
  });
})