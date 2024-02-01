import { screen, render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  test('should render the heading', () => {
    const { container } = render(<Main />)

    expect(screen.getByRole('heading', { name: /react/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  test('should render the colors correctly', () => {
    const { container } = render(<Main />)

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
