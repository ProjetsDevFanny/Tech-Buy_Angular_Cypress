describe('contact page', () => {
  it('it navigate to the contact page', () => {
    cy.visit('http://localhost:4200/#/contact')
    cy.get('#name').type('name')
    cy.get('#email').type('test@test.fr')
    cy.get('#message').type('Bonjour, votre site est génial !')
    cy.contains('Envoyer').click()
    cy.get('.success').should('be.visible').should('contain', 'Message envoyé avec succès.')
  })
})