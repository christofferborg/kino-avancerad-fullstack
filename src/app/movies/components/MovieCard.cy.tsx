import React from 'react'
import MovieCard from './MovieCard'

describe('<MovieCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<MovieCard />)
  })
})