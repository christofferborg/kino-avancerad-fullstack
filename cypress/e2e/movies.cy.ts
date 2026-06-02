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
   cy.get('[data-cy="movie-img"]').each(($img) => {
   expect(($img[0] as HTMLImageElement).naturalWidth).to.be.greaterThan(0)
})
  })

    it('shows static UI elements', () => {
      cy.get('button').should('contain', 'Senaste filmerna')
      cy.get('button').should('contain', 'Barnbio')
      cy.get('button').should('contain', 'Klassiker')

      cy.get('select').should('contain', 'Välj dag')
      cy.get('select').should('contain', 'Välj tid')
      
      cy.get('input[type="search"], input[type="text"]')
      .should('have.attr', 'placeholder', 'Sök efter filmer, genrer...')
      
      cy.contains('Visa mer filmer').should('exist')
      
    })
    
  })

})