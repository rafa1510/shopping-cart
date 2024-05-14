import { render, screen } from '@testing-library/react'

import App from '../src/components/App'

describe('App', () => {
  it('App renders default headline', () => {
    render(<App />)

    expect(screen.getByRole('heading').textContent).toMatch('Template repo!')
  })
})
