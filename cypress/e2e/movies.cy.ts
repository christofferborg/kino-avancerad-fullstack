describe('Movies page', () => {

  it('navigates to movies page with navigation bar, from home', () => {
    cy.visit('/')
    cy.get('[data-cy="movies-link"]').click()
    cy.location('pathname').should('eq', '/movies')
  })

  describe('on the movies page', () => {
    beforeEach(() => {
      cy.visit('/movies')
    })

    it('shows initial 10 movies on load', () => {
      cy.get('[data-cy="movie-img"]').should('have.length', 10)
    })

    it('shows static UI elements', () => {
      cy.get('button').should('contain', 'Senaste filmerna')
      cy.contains('Visa mer filmer').should('exist')
    })
  })

})