import { screen, render } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  test('should render the heading', () => {
    const { container } = render(<Main />)

    expect(screen.getByRole('heading', { name: /react/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})