

describe('variables d\'environnement', () => {
    it('Test variable d\'environnement', () => {
      cy.log(`Test Environment URL : ${Cypress.env('testEnvURL')}`);

      cy.visit(Cypress.env('testEnvURL'));
    cy.get('h1').should('be.visible').and('contain', 'Kitchen Sink');
  });
});