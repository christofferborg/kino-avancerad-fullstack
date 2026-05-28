//kolla att det går att navigera till movies sidan 
// och statsikt innehåll finns

describe('Movies page', () => {

  it('Navigate to movies page', () => {

    cy.visit('http://localhost:3000')

    cy.get('[data-cy="movies-link"]').click()

    cy.location('pathname').should('eq', '/movies')

    cy.get('button').should('contain', 'Senaste filmerna')

  })

})