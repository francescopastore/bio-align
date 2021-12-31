import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import CellNumber from './CellNumber'

const fakeCell = {
  value: 1,
  top: true,
  left: false,
  diag: true,
}

it('renders correctly', () => {
  const tree = renderer
    .create(<CellNumber cell={fakeCell}></CellNumber>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('should render the letter given', () => {
  render(<CellNumber cell={fakeCell}></CellNumber>)

  const div = screen.getByText(fakeCell.value)
  expect(div).toHaveTextContent(fakeCell.value)
})
