describe('contact page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/#/contact')
  })

  it('it navigate to the contact page', () => {
    cy.getBySel("name").type('name')
    cy.getBySel("email").type('test@test.fr')
    cy.getBySel("message").type('Bonjour, votre site est génial !')
    cy.getBySel("sendButton").click()
    cy.getBySel("successMessage").should('be.visible').should('contain', 'Message envoyé avec succès.')
  })

  it('it did not contain XSS vulnerability', () => {
    cy.getBySel("name").type('name')
    cy.getBySel("email").type('test@test.fr')
    cy.getBySel("message").type('<script>alert("XSS");</script>')
    cy.getBySel("sendButton").click()
    cy.getBySel("successMessage").should('be.visible').should('contain', 'Message envoyé avec succès.')
    cy.on('window:alert', () => {
      throw new Error('Une fenêtre d\'alerte s\'est affichée !');
    });
  })

  it('does not send the form if fields are empty', () => {
    cy.getBySel("sendButton").click()

    cy.getBySel("name").should('be.visible').should('have.class', 'ng-invalid')
    cy.getBySel("email").should('have.class', 'ng-invalid')
    cy.getBySel("message").should('have.class', 'ng-invalid')
    
    cy.getBySel("successMessage").should('not.exist')
  })
})