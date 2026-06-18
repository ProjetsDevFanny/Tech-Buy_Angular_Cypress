describe('contact page', () => {
  it('it navigate to the contact page', () => {
    cy.visit('http://localhost:4200/#/contact')
    cy.get('[data-cy="name"]').type('name')
    cy.get('[data-cy="email"]').type('test@test.fr')
    cy.get('[data-cy="message"]').type('Bonjour, votre site est génial !')
    cy.get('[data-cy="sendButton"]').click()
    cy.get('[data-cy="successMessage"]').should('be.visible').should('contain', 'Message envoyé avec succès.')
  })
})