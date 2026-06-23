describe('contact page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/#/contact')
  })

  it('it navigate to the contact page', () => {
    cy.get('[data-cy="name"]').type('name')
    cy.get('[data-cy="email"]').type('test@test.fr')
    cy.get('[data-cy="message"]').type('Bonjour, votre site est génial !')
    cy.get('[data-cy="sendButton"]').click()
    cy.get('[data-cy="successMessage"]').should('be.visible').should('contain', 'Message envoyé avec succès.')
  })

  it('it did not contain XSS vulnerability', () => {
    cy.get('[data-cy="name"]').type('name')
    cy.get('[data-cy="email"]').type('test@test.fr')
    cy.get('[data-cy="message"]').type('<script>alert("XSS");</script>')
    cy.get('[data-cy="sendButton"]').click()
    cy.get('[data-cy="successMessage"]').should('be.visible').should('contain', 'Message envoyé avec succès.')
    cy.on('window:alert', () => {
      throw new Error('Une fenêtre d\'alerte s\'est affichée !');
    });
  })

  it('does not send the form if fields are empty', () => {
    cy.get('[data-cy="sendButton"]').click()

    cy.get('[data-cy="name"]').should('be.visible').should('have.class', 'ng-invalid')
    cy.get('[data-cy="email"]').should('have.class', 'ng-invalid')
    cy.get('[data-cy="message"]').should('have.class', 'ng-invalid')
    
    cy.get('[data-cy="successMessage"]').should('not.exist')
  })
})