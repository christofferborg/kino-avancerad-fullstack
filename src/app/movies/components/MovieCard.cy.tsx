import MovieCard from './MovieCard'
import { Movie } from '@/types/movie'

const mockMovie: Movie = {
  id: '1',
  plot: 'Plotline',
  rating: '10',
  img: '/img/outside.png',
  title: 'Outside',
  genre: 'Drama',
}

describe('<MovieCard />', () => {
  beforeEach(() => {
    cy.mount(<MovieCard movie={mockMovie} />)
  })

  it('renders the movie image with correct src and alt', () => {
    cy.get('[data-cy="movie-img"]')
      .invoke('attr', 'src')
      .then((src) => {
        expect(decodeURIComponent(src!)).to.include(mockMovie.img)
      })

    cy.get('[data-cy="movie-img"]')
      .should('have.attr', 'alt', mockMovie.title)
  })

  it('renders the movie title', () => {
    cy.contains(mockMovie.title).should('be.visible')
  })

  it('renders the movie genre', () => {
    cy.contains(mockMovie.genre).should('be.visible')
  })

})
