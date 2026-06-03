import MoviesGrid from './MoviesGrid'
import { Movie } from '@/types/movie'

const generateMovies = (count: number): Movie[] =>
  Array.from({ length: count }, (_, i) => ({
    id: `tt${String(i).padStart(7, '0')}`,
    title: `Movie ${i + 1}`,
    img: `/img/movie${i + 1}.png`,
    genre: 'Drama',
    plot: 'A test plot',
    rating: '7.5',
  }))

describe('<MoviesGrid />', () => {
  it('renders only 10 movies initially', () => {
    cy.mount(<MoviesGrid initialMovies={generateMovies(25)} />)
    cy.get('[data-cy="movie-img"]').should('have.length', 10)
  })

  it('loads 10 more movies when button is clicked', () => {
    cy.mount(<MoviesGrid initialMovies={generateMovies(25)} />)
    cy.contains('Visa mer filmer').click()
    cy.get('[data-cy="movie-img"]').should('have.length', 20)
  })

it('does not show the button when movies are fewer than 10', () => {
  cy.mount(<MoviesGrid initialMovies={generateMovies(5)} />)
  cy.get('[data-cy="movie-img"]').should('have.length', 5)
  cy.contains('Visa mer filmer').should('not.exist')
})

it('loads the remaining movies when fewer than 10 are left', () => {
  cy.mount(<MoviesGrid initialMovies={generateMovies(11)} />)
  cy.contains('Visa mer filmer').click()
  cy.get('[data-cy="movie-img"]').should('have.length', 11)
  cy.contains('Visa mer filmer').should('not.exist')
})
})