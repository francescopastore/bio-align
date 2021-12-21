import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import AppTableNumber from './AppTableNumber'

const fakeCell = {
  value: 1,
  top: true,
  left: false,
  diag: true,
}

it('renders correctly', () => {
  const tree = renderer
    .create(<AppTableNumber cell={fakeCell}></AppTableNumber>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('should render the letter given', () => {
  render(<AppTableNumber cell={fakeCell}></AppTableNumber>)

  const div = screen.getByText(fakeCell.value)
  expect(div).toHaveTextContent(fakeCell.value)
})
