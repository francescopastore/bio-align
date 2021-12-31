import React from 'react'
import { render, screen } from '@testing-library/react'
import renderer from 'react-test-renderer'

import CellLetter from './CellLetter'

const fakeLetter = 'A'

it('renders correctly', () => {
  const tree = renderer
    .create(<CellLetter letter={fakeLetter}></CellLetter>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})

it('should render the letter given', () => {
  render(<CellLetter letter={fakeLetter}></CellLetter>)

  const div = screen.getByText(fakeLetter)
  expect(div).toHaveTextContent(fakeLetter)
})
